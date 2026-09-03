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

  const limpar = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    const el = audioRef.current;
    if (el) {
      el.onended = null;
      el.onerror = null;
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
      audio.src = SILENCIO;
      void audio.play().catch(() => {});

      const controller = new AbortController();
      abortRef.current = controller;

      const buscarUrl = async (parte: string) => {
        const cacheado = urlsEmCache.get(parte);
        if (cacheado) return cacheado;
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

      const tocar = (url: string) =>
        new Promise<void>((resolve, reject) => {
          audio.onended = () => resolve();
          audio.onerror = () => reject(new Error("Não foi possível tocar o áudio."));
          audio.src = url;
          audio.playbackRate = 1;
          void audio
            .play()
            .then(() => {
              if (run === runIdRef.current) setStatus("playing");
            })
            .catch((e) => reject(e));
        });

      try {
        const partes = dividirParaNarracao(texto);
        for (let i = 0; i < partes.length; i++) {
          if (run !== runIdRef.current) return;
          const url = await buscarUrl(partes[i]);
          if (run !== runIdRef.current) return;
          // Adianta o próximo trecho enquanto este toca.
          if (partes[i + 1]) void buscarUrl(partes[i + 1]).catch(() => {});
          await tocar(url);
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
