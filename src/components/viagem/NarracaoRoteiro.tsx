import { createContext, useContext, type ReactNode } from "react";
import { Headphones, Loader2, Pause, Volume2 } from "lucide-react";
import { useNarracao } from "@/hooks/useNarracao";
import type { VozNarracao } from "@/lib/viagens/narracao";

type Ctx = ReturnType<typeof useNarracao> & { voz: VozNarracao };

const NarracaoContext = createContext<Ctx | null>(null);

export const NarracaoProvider = ({
  voz,
  children,
}: {
  voz: VozNarracao;
  children: ReactNode;
}) => {
  const narracao = useNarracao(voz);
  return (
    <NarracaoContext.Provider value={{ ...narracao, voz }}>{children}</NarracaoContext.Provider>
  );
};

export const useNarracaoRoteiro = () => {
  const ctx = useContext(NarracaoContext);
  if (!ctx) throw new Error("useNarracaoRoteiro precisa estar dentro de NarracaoProvider");
  return ctx;
};

/** Botão "ouvir este trecho". */
export const BotaoOuvir = ({
  id,
  texto,
  label = "Ouvir",
}: {
  id: string;
  texto: string;
  label?: string;
}) => {
  const { narrar, status, trechoAtivo } = useNarracaoRoteiro();
  const ativo = trechoAtivo === id;
  const carregando = ativo && status === "loading";
  const tocando = ativo && status === "playing";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        narrar(id, texto);
      }}
      aria-label={tocando || carregando ? "Parar narração" : `${label} — narração em voz alta`}
      className={`print:hidden inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        ativo
          ? "border-gold bg-gold text-primary-foreground"
          : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
      }`}
    >
      {carregando ? (
        <Loader2 size={13} className="animate-spin" />
      ) : tocando ? (
        <Pause size={13} />
      ) : (
        <Headphones size={13} />
      )}
      {carregando ? "Preparando" : tocando ? "Pausar" : label}
    </button>
  );
};

/** Envolve o texto: um clique na leitura inicia (ou para) a narração daquele trecho. */
export const TextoNarravel = ({
  id,
  texto,
  children,
  className = "",
}: {
  id: string;
  texto: string;
  children: ReactNode;
  className?: string;
}) => {
  const { narrar, status, trechoAtivo } = useNarracaoRoteiro();
  const ativo = trechoAtivo === id && (status === "playing" || status === "loading");

  return (
    <div
      role="button"
      tabIndex={0}
      title="Clique no texto para ouvir a narração"
      onClick={(e) => {
        const alvo = e.target as HTMLElement;
        if (alvo.closest("a,button")) return;
        if (window.getSelection()?.toString()) return;
        narrar(id, texto);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          narrar(id, texto);
        }
      }}
      className={`group cursor-pointer rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
        ativo ? "bg-gold/[0.07] ring-1 ring-gold/30 px-4 py-3 -mx-4" : "hover:bg-gold/[0.04] px-4 py-3 -mx-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/** Aviso no topo da página explicando a narração e qual voz conduz a cidade. */
export const NarracaoAviso = ({
  cidade,
  textoCompleto,
}: {
  cidade: string;
  textoCompleto?: string;
}) => {
  const { voz, status, parar, erro } = useNarracaoRoteiro();
  const tocando = status === "playing" || status === "loading";

  return (
    <div className="print:hidden mt-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <Volume2 size={18} className="text-gold shrink-0" />
        <p className="text-sm text-foreground/85 flex-1 min-w-[240px]">
          <strong className="font-medium">Clique em qualquer trecho do roteiro</strong> e uma{" "}
          {voz.nome.toLowerCase()} lê a viagem para você — {voz.descricao.toLowerCase()} Cada cidade
          alterna a voz: {cidade} é narrada por ela.
        </p>
        {textoCompleto && (
          <BotaoOuvir id="cidade-completa" texto={textoCompleto} label="Ouvir tudo, sem parar" />
        )}
        {tocando && (
          <button
            type="button"
            onClick={parar}
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-primary-foreground"
          >
            <Pause size={13} /> Parar narração
          </button>
        )}
      </div>
      {erro && <p className="mt-2 text-xs text-destructive">{erro}</p>}
    </div>
  );
};

