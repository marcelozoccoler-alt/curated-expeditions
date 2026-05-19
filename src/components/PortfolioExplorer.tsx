import { useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Compass, Search, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { destinations } from "@/lib/destinations";
import {
  brazilStates,
  MACROREGION_ORDER,
  type Macroregion,
} from "@/lib/brazilStates";

interface PortfolioExplorerProps {
  trigger: ReactNode;
}

// Normalize string for accent-insensitive search
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const CONTINENT_ORDER = [
  "América do Sul",
  "África",
  "Ásia",
  "Europa",
  "Oceania",
  "Antártida",
  "América do Norte",
];

/**
 * Slide-out explorer that lets users drill into the entire portfolio:
 *   Brasil  → Macrorregião → Estado → Destino
 *   Mundo   → Continente   → País   → Destino
 * Includes an accent-insensitive search that auto-expands matching branches.
 */
export const PortfolioExplorer = ({ trigger }: PortfolioExplorerProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const q = norm(query.trim());

  // Build Brazil tree
  const bySlug = useMemo(
    () => new Map(destinations.map((d) => [d.slug, d])),
    []
  );

  const brTree = useMemo(() => {
    return MACROREGION_ORDER.map((macro: Macroregion) => {
      const states = brazilStates
        .filter((s) => s.macroregion === macro)
        .map((s) => {
          const dests = s.destinationSlugs
            .map((sl) => bySlug.get(sl))
            .filter((d): d is NonNullable<typeof d> => !!d);
          return { ...s, dests };
        })
        .filter((s) => s.dests.length > 0);
      return { macro, states };
    }).filter((g) => g.states.length > 0);
  }, [bySlug]);

  // International tree
  const intlTree = useMemo(() => {
    const intl = destinations.filter((d) => d.continent !== "Brasil");
    return CONTINENT_ORDER.map((continent) => {
      const list = intl.filter((d) => d.continent === continent);
      if (!list.length) return null;
      const countries = Array.from(new Set(list.map((d) => d.country)))
        .sort((a, b) => a.localeCompare(b, "pt-BR"))
        .map((country) => ({
          country,
          dests: list
            .filter((d) => d.country === country)
            .sort((a, b) => a.name.localeCompare(b.name, "pt-BR")),
        }));
      return { continent, countries };
    }).filter(Boolean) as {
      continent: string;
      countries: { country: string; dests: typeof destinations }[];
    }[];
  }, []);

  // Filter helpers — when searching, hide non-matching nodes and auto-open.
  const matches = (s: string) => !q || norm(s).includes(q);

  const filteredBr = brTree
    .map(({ macro, states }) => ({
      macro,
      macroOpen: matches(macro),
      states: states
        .map((s) => {
          const dests = s.dests.filter((d) => matches(d.name));
          const stateMatches = matches(s.name) || matches(s.macroregion);
          if (!q) return { ...s, _dests: s.dests, _open: false };
          if (stateMatches) return { ...s, _dests: s.dests, _open: true };
          if (dests.length) return { ...s, _dests: dests, _open: true };
          return null;
        })
        .filter(Boolean) as Array<
        (typeof brazilStates)[number] & {
          dests: typeof destinations;
          _dests: typeof destinations;
          _open: boolean;
        }
      >,
    }))
    .filter((g) => g.states.length > 0 || (q && matches(g.macro)));

  const filteredIntl = intlTree
    .map(({ continent, countries }) => ({
      continent,
      countries: countries
        .map((c) => {
          const dests = c.dests.filter((d) => matches(d.name));
          const countryMatches = matches(c.country) || matches(continent);
          if (!q) return { ...c, _dests: c.dests, _open: false };
          if (countryMatches) return { ...c, _dests: c.dests, _open: true };
          if (dests.length) return { ...c, _dests: dests, _open: true };
          return null;
        })
        .filter(Boolean) as Array<{
        country: string;
        dests: typeof destinations;
        _dests: typeof destinations;
        _open: boolean;
      }>,
    }))
    .filter((g) => g.countries.length > 0);

  const totalCount = useMemo(() => destinations.length, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md md:max-w-lg p-0 flex flex-col bg-background"
      >
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle className="font-serif text-2xl flex items-center gap-2">
            <Compass size={20} className="text-gold" />
            Explorar portfólio
          </SheetTitle>
          <SheetDescription className="text-sm">
            {totalCount} destinos com curadoria — busque ou navegue pela árvore.
          </SheetDescription>

          <div className="relative mt-3">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar destino, estado ou país…"
              className="w-full pl-9 pr-9 py-2.5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Limpar busca"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-8">
          {/* ===== BRASIL ===== */}
          {filteredBr.length > 0 && (
            <section>
              <h3 className="font-serif text-lg mb-3 pb-2 border-b border-border">
                Brasil
              </h3>
              <div className="space-y-1">
                {filteredBr.map(({ macro, states }) => (
                  <TreeGroup
                    key={macro}
                    label={macro}
                    count={states.reduce((n, s) => n + s._dests.length, 0)}
                    defaultOpen={!!q}
                  >
                    {states.map((s) => (
                      <TreeBranch
                        key={s.slug}
                        label={s.name}
                        href={`/brasil/${s.slug}`}
                        count={s._dests.length}
                        defaultOpen={s._open}
                        onNavigate={() => setOpen(false)}
                      >
                        {s._dests.map((d) => (
                          <TreeLeaf
                            key={d.id}
                            label={d.name}
                            href={`/destinos/${d.slug}`}
                            onNavigate={() => setOpen(false)}
                          />
                        ))}
                      </TreeBranch>
                    ))}
                  </TreeGroup>
                ))}
              </div>
            </section>
          )}

          {/* ===== MUNDO ===== */}
          {filteredIntl.length > 0 && (
            <section>
              <h3 className="font-serif text-lg mb-3 pb-2 border-b border-border">
                Mundo
              </h3>
              <div className="space-y-1">
                {filteredIntl.map(({ continent, countries }) => (
                  <TreeGroup
                    key={continent}
                    label={continent}
                    count={countries.reduce(
                      (n, c) => n + c._dests.length,
                      0
                    )}
                    defaultOpen={!!q}
                  >
                    {countries.map((c) => (
                      <TreeBranch
                        key={c.country}
                        label={c.country}
                        count={c._dests.length}
                        defaultOpen={c._open}
                      >
                        {c._dests.map((d) => (
                          <TreeLeaf
                            key={d.id}
                            label={d.name}
                            href={`/destinos/${d.slug}`}
                            onNavigate={() => setOpen(false)}
                          />
                        ))}
                      </TreeBranch>
                    ))}
                  </TreeGroup>
                ))}
              </div>
            </section>
          )}

          {filteredBr.length === 0 && filteredIntl.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-12">
              Nenhum destino encontrado para “{query}”.
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

/* ---------- Tree primitives ---------- */

interface NodeProps {
  label: string;
  count?: number;
  defaultOpen?: boolean;
  children: ReactNode;
}

const TreeGroup = ({ label, count, defaultOpen, children }: NodeProps) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 py-2.5 text-left group"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold">
          {label}
          {typeof count === "number" && (
            <span className="ml-2 tracking-normal normal-case text-muted-foreground/70 font-normal">
              ({count})
            </span>
          )}
        </span>
        <ChevronRight
          size={14}
          className={`text-muted-foreground transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && <div className="pb-2 pl-1 space-y-0.5">{children}</div>}
    </div>
  );
};

interface BranchProps extends NodeProps {
  href?: string;
  onNavigate?: () => void;
}

const TreeBranch = ({
  label,
  href,
  count,
  defaultOpen,
  onNavigate,
  children,
}: BranchProps) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="p-1 text-muted-foreground hover:text-foreground"
          aria-label={open ? "Recolher" : "Expandir"}
        >
          <ChevronRight
            size={12}
            className={`transition-transform ${open ? "rotate-90" : ""}`}
          />
        </button>
        {href ? (
          <Link
            to={href}
            onClick={onNavigate}
            className="flex-1 text-sm font-medium text-foreground hover:text-gold py-1.5"
          >
            {label}
            {typeof count === "number" && (
              <span className="ml-1.5 text-xs text-muted-foreground/70 font-normal">
                ({count})
              </span>
            )}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex-1 text-left text-sm font-medium text-foreground hover:text-gold py-1.5"
          >
            {label}
            {typeof count === "number" && (
              <span className="ml-1.5 text-xs text-muted-foreground/70 font-normal">
                ({count})
              </span>
            )}
          </button>
        )}
      </div>
      {open && (
        <ul className="ml-5 mb-1 border-l border-border/60 pl-3 space-y-0.5">
          {children}
        </ul>
      )}
    </div>
  );
};

interface LeafProps {
  label: string;
  href: string;
  onNavigate?: () => void;
}

const TreeLeaf = ({ label, href, onNavigate }: LeafProps) => (
  <li>
    <Link
      to={href}
      onClick={onNavigate}
      className="block text-sm text-muted-foreground hover:text-gold transition-colors py-1"
    >
      <span className="text-gold/60 mr-1.5">•</span>
      {label}
    </Link>
  </li>
);
