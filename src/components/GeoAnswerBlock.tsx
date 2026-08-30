/**
 * Bloco "Em resumo" pensado para citação por LLMs (ChatGPT, Gemini, Perplexity)
 * e para featured snippets do Google. Texto factual, direto, sem adjetivos vazios.
 */
export interface GeoFact {
  label: string;
  value: string;
}

interface GeoAnswerBlockProps {
  /** Parágrafo-resposta: quem, o quê, onde, quando, por quê. */
  summary: string;
  /** Frases curtas e citáveis (entity linking). */
  bullets?: string[];
  /** Pares chave/valor para leitura por máquina. */
  facts?: GeoFact[];
  ariaLabel?: string;
  eyebrow?: string;
}

export const GeoAnswerBlock = ({
  summary,
  bullets = [],
  facts = [],
  ariaLabel = "Resumo para busca e IA",
  eyebrow = "Em resumo",
}: GeoAnswerBlockProps) => (
  <section
    className="ai-summary rounded-2xl border border-border/60 bg-muted/40 p-6 space-y-4"
    aria-label={ariaLabel}
  >
    <p className="text-caption text-gold">{eyebrow}</p>
    <p className="text-editorial text-foreground leading-relaxed">{summary}</p>

    {bullets.length > 0 && (
      <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed">
        {bullets.map((phrase, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-gold shrink-0">·</span>
            <span>{phrase}</span>
          </li>
        ))}
      </ul>
    )}

    {facts.length > 0 && (
      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-4 border-t border-border/60 text-sm">
        {facts.map((f) => (
          <div key={f.label} className="flex gap-2">
            <dt className="text-muted-foreground">{f.label}:</dt>
            <dd className="text-foreground">{f.value}</dd>
          </div>
        ))}
      </dl>
    )}
  </section>
);
