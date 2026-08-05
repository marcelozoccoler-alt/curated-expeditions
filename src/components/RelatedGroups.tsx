import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { getGroupsForTerms } from "@/lib/groupsCatalog";

interface RelatedGroupsProps {
  /** Países/destinos correspondentes (ex.: ["Chile"], ["Itália", "Suíça"]). */
  terms: string[];
  /** Título da seção. */
  title?: string;
  /** Contexto textual curto exibido acima dos cards. */
  intro?: string;
  className?: string;
}

/**
 * Bloco "Grupos nesta região": mostra as saídas em grupo (guia brasileiro e
 * guia local) que passam pelos destinos informados. Usado nas páginas de
 * região, estado e destino para maximizar descoberta interna e dar contexto
 * rico para buscadores e IA.
 */
export const RelatedGroups = ({
  terms,
  title = "Grupos com saída para esta região",
  intro,
  className = "",
}: RelatedGroupsProps) => {
  const groups = getGroupsForTerms(terms);
  if (groups.length === 0) return null;

  return (
    <section className={`section-padding bg-muted ${className}`}>
      <div className="container-editorial">
        <div className="max-w-2xl mb-10">
          <div className="gold-line mb-6" />
          <h2 className="heading-section text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground font-light">
            {intro ??
              "Saídas em grupo já organizadas — com guia acompanhante do Brasil ou com guia local no destino. Hospedagem, traslados e visitas incluídas, com entrada de 25% e saldo em até 9x sem juros."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="group bg-card border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all flex flex-col"
            >
              <span
                className={`inline-flex items-center gap-1.5 self-start text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full mb-3 ${
                  g.kind === "brasileiro"
                    ? "bg-emerald/10 text-emerald"
                    : "bg-gold/10 text-gold"
                }`}
              >
                {g.kind === "brasileiro" ? (
                  <>
                    <Users size={12} /> Guia brasileiro
                  </>
                ) : (
                  <>
                    <Calendar size={12} /> Guia local
                  </>
                )}
              </span>
              <h3 className="font-serif text-xl text-foreground mb-2 leading-tight">
                {g.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-2">
                {g.subtitle}
              </p>
              <div className="mt-auto pt-3 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {g.dateLabel}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-foreground/85 line-clamp-1">
                    {g.priceLabel}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-gold flex-shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedGroups;
