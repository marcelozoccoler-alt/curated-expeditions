import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play, SkipForward, Volume2, X } from "lucide-react";
import { CREDITO_TRILHA, type Faixa } from "@/lib/viagens/trilhas";

interface Props {
  titulo: string;
  descricao: string;
  faixas: Faixa[];
}

/**
 * Player flutuante com a trilha clássica que contextualiza a leitura do roteiro.
 * Só toca por ação explícita do leitor — nunca com autoplay.
 */
export const TrilhaSonora = ({ titulo, descricao, faixas }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [aberto, setAberto] = useState(false);
  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [volume, setVolume] = useState(0.45);

  const faixa = faixas[indice];

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume, indice]);

  const tocar = async (i = indice) => {
    if (i !== indice) setIndice(i);
    const el = audioRef.current;
    if (!el) return;
    try {
      await el.play();
      setTocando(true);
    } catch {
      setTocando(false);
    }
  };

  const alternar = () => {
    const el = audioRef.current;
    if (!el) return;
    if (tocando) {
      el.pause();
      setTocando(false);
    } else {
      void tocar();
    }
  };

  const proxima = () => {
    const prox = (indice + 1) % faixas.length;
    setIndice(prox);
    setTocando(true);
  };

  // ao trocar de faixa enquanto toca, retoma automaticamente
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.load();
    if (tocando) void el.play().catch(() => setTocando(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indice]);

  if (!faixa) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 print:hidden">
      <audio
        ref={audioRef}
        src={faixa.src}
        preload="none"
        onEnded={proxima}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
      />

      {!aberto ? (
        <button
          type="button"
          onClick={() => setAberto(true)}
          className="flex items-center gap-2 rounded-full border border-gold/40 bg-navy/95 px-4 py-2.5 text-sm text-primary-foreground shadow-lg backdrop-blur transition-colors hover:border-gold"
          aria-label="Abrir trilha sonora da viagem"
        >
          <Music size={16} className={`text-gold ${tocando ? "animate-pulse" : ""}`} />
          <span className="hidden sm:inline">{tocando ? "Tocando trilha" : "Trilha sonora"}</span>
        </button>
      ) : (
        <div className="w-[19rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card/98 p-4 shadow-xl backdrop-blur">
          <div className="mb-2 flex items-start justify-between gap-3">
            <div>
              <p className="text-caption text-gold">Trilha sonora</p>
              <h3 className="font-serif text-base font-semibold leading-tight text-foreground">
                {titulo}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setAberto(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Fechar trilha sonora"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{descricao}</p>

          <div className="rounded-xl border border-border bg-background/60 p-3">
            <p className="font-serif text-sm font-semibold text-foreground">{faixa.obra}</p>
            <p className="text-xs text-muted-foreground">
              {faixa.compositor} · {faixa.interprete}
              {faixa.ano ? ` · ${faixa.ano}` : ""}
            </p>
            <p className="mt-1.5 text-xs italic text-muted-foreground">{faixa.nota}</p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={alternar}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-primary-foreground transition-opacity hover:opacity-90"
                aria-label={tocando ? "Pausar" : "Tocar"}
              >
                {tocando ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                type="button"
                onClick={proxima}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold"
                aria-label="Próxima faixa"
              >
                <SkipForward size={16} />
              </button>
              <Volume2 size={14} className="ml-1 shrink-0 text-muted-foreground" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-1 w-full accent-gold"
                aria-label="Volume"
              />
            </div>
          </div>

          <ul className="mt-3 space-y-1">
            {faixas.map((f, i) => (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => tocar(i)}
                  className={`w-full truncate rounded-lg px-2 py-1.5 text-left text-xs transition-colors ${
                    i === indice
                      ? "bg-navy text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {f.obra} — {f.compositor}
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-[10px] leading-snug text-muted-foreground">{CREDITO_TRILHA}</p>
        </div>
      )}
    </div>
  );
};
