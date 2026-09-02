import { useCallback, useEffect, useRef, useState } from "react";
import { dividirParaNarracao, type VozNarracao } from "@/lib/viagens/narracao";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/narrar-roteiro`;
const SAMPLE_RATE = 24000;

type Status = "idle" | "loading" | "playing" | "error";

/**
 * Narração em streaming: busca o áudio PCM por SSE e agenda cada
 * pedaço no AudioContext, para a leitura começar quase instantaneamente.
 */
export const useNarracao = (voz: VozNarracao) => {
  const [status, setStatus] = useState<Status>("idle");
  const [trechoAtivo, setTrechoAtivo] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const ctxRef = useRef<AudioContext | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const sourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const playheadRef = useRef(0);
  const pendingRef = useRef<Uint8Array>(new Uint8Array(0));
  const runIdRef = useRef(0);

  const limpar = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    sourcesRef.current.forEach((s) => {
      try {
        s.onended = null;
        s.stop();
      } catch {
        /* já encerrado */
      }
    });
    sourcesRef.current = [];
    playheadRef.current = 0;
    pendingRef.current = new Uint8Array(0);
  }, []);

  const parar = useCallback(() => {
    runIdRef.current += 1;
    limpar();
    setStatus("idle");
    setTrechoAtivo(null);
  }, [limpar]);

  useEffect(() => () => {
    runIdRef.current += 1;
    limpar();
    ctxRef.current?.close().catch(() => {});
  }, [limpar]);

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

      if (!ctxRef.current || ctxRef.current.state === "closed") {
        ctxRef.current = new AudioContext({ sampleRate: SAMPLE_RATE });
      }
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") await ctx.resume().catch(() => {});

      const agendar = (incoming: Uint8Array) => {
        const bytes = new Uint8Array(pendingRef.current.length + incoming.length);
        bytes.set(pendingRef.current);
        bytes.set(incoming, pendingRef.current.length);
        const usable = bytes.length - (bytes.length % 2);
        pendingRef.current = bytes.slice(usable);
        if (usable === 0) return;
        const samples = new Int16Array(bytes.buffer, 0, usable / 2);
        const floats = Float32Array.from(samples, (s) => s / 32768);
        const buffer = ctx.createBuffer(1, floats.length, SAMPLE_RATE);
        buffer.copyToChannel(floats, 0);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        if (playheadRef.current === 0) playheadRef.current = ctx.currentTime + 0.08;
        else playheadRef.current = Math.max(playheadRef.current, ctx.currentTime);
        source.start(playheadRef.current);
        playheadRef.current += buffer.duration;
        sourcesRef.current.push(source);
      };

      try {
        const partes = dividirParaNarracao(texto);
        const controller = new AbortController();
        abortRef.current = controller;

        for (const parte of partes) {
          if (run !== runIdRef.current) return;
          const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              text: parte,
              voice: voz.voice,
              instructions: voz.instructions,
            }),
            signal: controller.signal,
          });
          if (!res.ok || !res.body) {
            const detalhe = await res.text().catch(() => "");
            throw new Error(
              res.status === 429
                ? "Muitas narrações ao mesmo tempo. Tente novamente em alguns segundos."
                : res.status === 402
                  ? "Os créditos de narração acabaram. Avise a Create Travel."
                  : detalhe || `Falha na narração (${res.status})`
            );
          }

          const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
          let buf = "";
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (run !== runIdRef.current) {
              reader.cancel().catch(() => {});
              return;
            }
            buf += value;
            const eventos = buf.split("\n\n");
            buf = eventos.pop() ?? "";
            for (const bloco of eventos) {
              for (const linha of bloco.split("\n")) {
                if (!linha.startsWith("data:")) continue;
                const dado = linha.slice(5).trim();
                if (!dado || dado === "[DONE]") continue;
                let payload: { type?: string; audio?: string };
                try {
                  payload = JSON.parse(dado);
                } catch {
                  continue;
                }
                if (payload.type !== "speech.audio.delta" || !payload.audio) continue;
                const bin = atob(payload.audio);
                const bytes = new Uint8Array(bin.length);
                for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
                agendar(bytes);
                if (run === runIdRef.current) setStatus("playing");
              }
            }
          }
        }

        if (run !== runIdRef.current) return;
        const fim = Math.max(0, playheadRef.current - ctx.currentTime) * 1000 + 150;
        window.setTimeout(() => {
          if (run !== runIdRef.current) return;
          setStatus("idle");
          setTrechoAtivo(null);
        }, fim);
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
