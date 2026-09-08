import { useCallback, useEffect, useRef, useState } from "react";
import { dividirParaNarracao, type VozNarracao } from "@/lib/viagens/narracao";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/narrar-roteiro`;
/** WAV silencioso: destrava o elemento de áudio dentro do gesto do usuário (iOS). */
const SILENCIO =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

type Status = "idle" | "loading" | "playing" | "error";

/** Cache em memória: mesmo trecho não pede o link duas vezes na mesma sessão. */
const urlsEmCache = new Map<string, string>();

const prepararSessaoIOS = () => {
  const sessao = (navigator as unknown as { audioSession?: { type: string } }).audioSession;
  if (sessao) {
    try {
      sessao.type = "playback";
    } catch {
      /* navegador não permite */
    }
  }
};

/**
 * Narração a partir de MP3 gravados uma única vez no storage:
 * o áudio é reaproveitado em todos os acessos seguintes.
 */
export const useNarracao = (voz: VozNarracao) => {
  const [status, setStatus] = useState<Status>("idle");
  const [trechoAtivo, setTrechoAtivo] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const runIdRef = useRef(0);
  const destravadoRef = useRef(false);

  const limpar = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    const el = audioRef.current;
    if (el) {
      el.onended = null;
      el.onerror = null;
      el.onpause = null;
      el.ontimeupdate = null;
      try {
        el.pause();
      } catch {
        /* ignora */
      }
    }
  }, []);

  const parar = useCallback(() => {
    runIdRef.current += 1;
    limpar();
    setStatus("idle");
    setTrechoAtivo(null);
  }, [limpar]);

  useEffect(
    () => () => {
      runIdRef.current += 1;
      limpar();
    },
    [limpar]
  );

  const narrar = useCallback(
    async (id: string, texto: string) => {
      if (trechoAtivo === id && (status === "playing" || status === "loading")) {
        parar();
        return;
      }
      runIdRef.current += 1;
      const run = runIdRef.current;
      limpar();
      setErro(null);
      setTrechoAtivo(id);
      setStatus("loading");

      // Elemento criado/destravado no próprio gesto: exigência de iOS e Android.
      prepararSessaoIOS();
      if (!audioRef.current) {
        const el = new Audio();
        el.preload = "auto";
        el.setAttribute("playsinline", "true");
        audioRef.current = el;
      }
      const audio = audioRef.current;
      if (!destravadoRef.current) {
        audio.src = SILENCIO;
        void audio.play().catch(() => {});
        destravadoRef.current = true;
      }

      const controller = new AbortController();
      abortRef.current = controller;

      const buscarUrl = async (parte: string, ignorarCache = false) => {
        if (!ignorarCache) {
          const cacheado = urlsEmCache.get(parte);
          if (cacheado) return cacheado;
        }
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: parte, voice: voz.voice }),
          signal: controller.signal,
        });
        const dados = await res.json().catch(() => ({}) as { url?: string; error?: string });
        if (!res.ok || !dados.url) {
          throw new Error(
            dados.error ||
              (res.status === 429
                ? "Muitas narrações ao mesmo tempo. Tente novamente em alguns segundos."
                : `Falha na narração (${res.status})`)
          );
        }
        urlsEmCache.set(parte, dados.url);
        return dados.url as string;
      };

      /**
       * Toca um trecho até o fim. Se o navegador pausar sozinho (aba em segundo
       * plano, celular bloqueado) tenta retomar; se travar sem avançar por 12s,
       * falha para que o chamador tente o link de novo.
       */
      const tocar = (url: string) =>
        new Promise<void>((resolve, reject) => {
          let vigia: ReturnType<typeof setTimeout>;
          let ultimoTempo = -1;
          let paradoDesde = Date.now();

          const encerrar = () => {
            clearTimeout(vigia);
            audio.onended = null;
            audio.onerror = null;
            audio.onpause = null;
            audio.ontimeupdate = null;
          };

          const vigiar = () => {
            vigia = setTimeout(() => {
              if (run !== runIdRef.current) return encerrar();
              if (audio.currentTime > ultimoTempo + 0.05) {
                ultimoTempo = audio.currentTime;
                paradoDesde = Date.now();
              } else if (audio.paused) {
                void audio.play().catch(() => {});
              }
              if (Date.now() - paradoDesde > 12000) {
                encerrar();
                reject(new Error("Áudio travou."));
                return;
              }
              vigiar();
            }, 1500);
          };

          audio.onended = () => {
            encerrar();
            resolve();
          };
          audio.onerror = () => {
            encerrar();
            reject(new Error("Não foi possível tocar o áudio."));
          };
          audio.onpause = () => {
            // Pausa que não veio de nós: retoma sozinho.
            if (run === runIdRef.current && !audio.ended && audio.currentTime > 0) {
              void audio.play().catch(() => {});
            }
          };
          audio.src = url;
          audio.playbackRate = 1;
          vigiar();
          void audio
            .play()
            .then(() => {
              if (run === runIdRef.current) setStatus("playing");
            })
            .catch((e) => {
              encerrar();
              reject(e);
            });
        });

      try {
        const partes = dividirParaNarracao(texto);
        for (let i = 0; i < partes.length; i++) {
          if (run !== runIdRef.current) return;
          let url = await buscarUrl(partes[i]);
          if (run !== runIdRef.current) return;
          // Adianta o próximo trecho enquanto este toca.
          if (partes[i + 1]) void buscarUrl(partes[i + 1]).catch(() => {});
          try {
            await tocar(url);
          } catch {
            if (run !== runIdRef.current) return;
            // Link pode ter expirado: pede outro e tenta uma vez mais.
            urlsEmCache.delete(partes[i]);
            url = await buscarUrl(partes[i], true);
            if (run !== runIdRef.current) return;
            await tocar(url);
          }
          if (run !== runIdRef.current) return;
        }
        setStatus("idle");
        setTrechoAtivo(null);
      } catch (err) {
        if (run !== runIdRef.current) return;
        if (err instanceof DOMException && err.name === "AbortError") return;
        setErro(err instanceof Error ? err.message : "Não foi possível narrar agora.");
        setStatus("error");
        setTrechoAtivo(null);
      }
    },
    [limpar, parar, status, trechoAtivo, voz]
  );

  return { narrar, parar, status, trechoAtivo, erro };
};
