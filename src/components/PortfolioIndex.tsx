import { Link } from "react-router-dom";
import { destinations } from "@/lib/destinations";
import {
  brazilStates,
  MACROREGION_ORDER,
  type Macroregion,
} from "@/lib/brazilStates";

/**
 * Editorial directory of the entire Create Travel portfolio.
 * Modeled after a sitemap-style index: Viagens Nacionais (by macroregion → state →
 * destinations) and Viagens Internacionais (by continent → country → destinations).
 */
export const PortfolioIndex = () => {
  // Brazilian destinations, looked up by state.destinationSlugs.
  const bySlug = new Map(destinations.map((d) => [d.slug, d]));

  // International grouping: continent → country → destinations
  const intl = destinations.filter((d) => d.continent !== "Brasil");
  const continentsOrder = [
    "América do Sul",
    "África",
    "Ásia",
    "Europa",
    "Oceania",
    "Antártida",
    "América do Norte",
  ];

  const intlByContinent = continentsOrder
    .map((continent) => {
      const list = intl.filter((d) => d.continent === continent);
      if (!list.length) return null;
      const countries = Array.from(new Set(list.map((d) => d.country))).sort(
        (a, b) => a.localeCompare(b, "pt-BR")
      );
      return {
        continent,
        countries: countries.map((country) => ({
          country,
          dests: list
            .filter((d) => d.country === country)
            .sort((a, b) => a.name.localeCompare(b.name, "pt-BR")),
        })),
      };
    })
    .filter(Boolean) as {
    continent: string;
    countries: { country: string; dests: typeof destinations }[];
  }[];

  // Brazilian grouping: macroregion → state → destinations
  const brByMacro = MACROREGION_ORDER.map((macro: Macroregion) => {
    const states = brazilStates
      .filter((s) => s.macroregion === macro)
      .map((s) => ({
        ...s,
        dests: s.destinationSlugs
          .map((sl) => bySlug.get(sl))
          .filter((x): x is NonNullable<typeof x> => !!x),
      }))
      .filter((s) => s.dests.length > 0);
    return { macro, states };
  }).filter((g) => g.states.length > 0);

  return (
    <section className="bg-card border-t border-border">
      <div className="container-editorial section-padding">
        <div className="gold-line mb-6" />
        <h2 className="heading-section mb-3">Portfólio completo</h2>
        <p className="text-muted-foreground max-w-2xl mb-12 font-light">
          Encontre rapidamente qualquer roteiro do nosso portfólio — organizado
          como um índice de navegação por região e país.
        </p>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-14">
          {/* ===== NACIONAIS ===== */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 pb-3 border-b border-border">
              Viagens Nacionais
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {brByMacro.map(({ macro, states }) => (
                <div key={macro} className="space-y-4 break-inside-avoid">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">
                    {macro}
                  </h4>
                  {states.map((s) => (
                    <div key={s.slug} className="text-sm">
                      <Link
                        to={`/brasil/${s.slug}`}
                        className="block font-medium text-foreground hover:text-gold transition-colors"
                      >
                        {s.name}
                      </Link>
                      <ul className="mt-1.5 ml-3 space-y-1 border-l border-border/70 pl-3">
                        {s.dests.map((d) => (
                          <li key={d.id}>
                            <Link
                              to={`/destinos/${d.slug}`}
                              className="text-muted-foreground hover:text-gold transition-colors"
                            >
                              <span className="text-gold/60 mr-1">•</span>
                              {d.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ===== INTERNACIONAIS ===== */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 pb-3 border-b border-border">
              Viagens Internacionais
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {intlByContinent.map(({ continent, countries }) => (
                <div key={continent} className="space-y-4 break-inside-avoid">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">
                    {continent}
                  </h4>
                  {countries.map(({ country, dests }) => (
                    <div key={country} className="text-sm">
                      <p className="font-medium text-foreground">{country}</p>
                      <ul className="mt-1.5 ml-3 space-y-1 border-l border-border/70 pl-3">
                        {dests.map((d) => (
                          <li key={d.id}>
                            <Link
                              to={`/destinos/${d.slug}`}
                              className="text-muted-foreground hover:text-gold transition-colors"
                            >
                              <span className="text-gold/60 mr-1">•</span>
                              {d.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
