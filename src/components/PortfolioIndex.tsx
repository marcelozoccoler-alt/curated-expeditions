import { ChevronDown } from "lucide-react";
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

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {brByMacro.map(({ macro, states }, idx) => (
                <details
                  key={macro}
                  open={idx < 2}
                  className="group break-inside-avoid border-b border-border/60 pb-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-gold font-semibold py-2">
                    <span>
                      {macro}
                      <span className="ml-2 text-muted-foreground/70 normal-case tracking-normal font-normal">
                        ({states.reduce((n, s) => n + s.dests.length, 0)})
                      </span>
                    </span>
                    <ChevronDown
                      size={14}
                      className="transition-transform group-open:rotate-180 text-muted-foreground"
                    />
                  </summary>
                  <div className="mt-3 space-y-3">
                    {states.map((s) => (
                      <details key={s.slug} className="group/state text-sm">
                        <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-foreground hover:text-gold transition-colors py-1">
                          <span>
                            {s.name}
                            <span className="ml-2 text-xs text-muted-foreground/70 font-normal">
                              ({s.dests.length})
                            </span>
                          </span>
                          <ChevronDown
                            size={12}
                            className="transition-transform group-open/state:rotate-180 text-muted-foreground"
                          />
                        </summary>
                        <ul className="mt-1.5 ml-3 space-y-1 border-l border-border/70 pl-3">
                          <li>
                            <Link
                              to={`/brasil/${s.slug}`}
                              className="text-xs uppercase tracking-wider text-gold/80 hover:text-gold"
                            >
                              Ver estado →
                            </Link>
                          </li>
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
                      </details>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* ===== INTERNACIONAIS ===== */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8 pb-3 border-b border-border">
              Viagens Internacionais
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {intlByContinent.map(({ continent, countries }, idx) => (
                <details
                  key={continent}
                  open={idx < 2}
                  className="group break-inside-avoid border-b border-border/60 pb-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-gold font-semibold py-2">
                    <span>
                      {continent}
                      <span className="ml-2 text-muted-foreground/70 normal-case tracking-normal font-normal">
                        ({countries.reduce((n, c) => n + c.dests.length, 0)})
                      </span>
                    </span>
                    <ChevronDown
                      size={14}
                      className="transition-transform group-open:rotate-180 text-muted-foreground"
                    />
                  </summary>
                  <div className="mt-3 space-y-3">
                    {countries.map(({ country, dests }) => (
                      <details key={country} className="group/country text-sm">
                        <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-foreground hover:text-gold transition-colors py-1">
                          <span>
                            {country}
                            <span className="ml-2 text-xs text-muted-foreground/70 font-normal">
                              ({dests.length})
                            </span>
                          </span>
                          <ChevronDown
                            size={12}
                            className="transition-transform group-open/country:rotate-180 text-muted-foreground"
                          />
                        </summary>
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
                      </details>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
