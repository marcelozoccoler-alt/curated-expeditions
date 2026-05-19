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
import { TAGS } from "@/lib/types";

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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const q = norm(query.trim());
  const hasFilter = q.length > 0 || selectedTags.length > 0;

  const toggleTag = (id: string) =>
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

  // Destination passes the tag filter when it has ALL selected tags.
  const passesTags = (tags: string[]) =>
    selectedTags.length === 0 || selectedTags.every((t) => tags.includes(t));

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

  // Filter helpers — search + tags. Branches auto-open when there's any filter.
  const matches = (s: string) => !q || norm(s).includes(q);

  const filteredBr = brTree
    .map(({ macro, states }) => ({
      macro,
      states: states
        .map((s) => {
          // First narrow by selected tags (always applied).
          const tagPool = s.dests.filter((d) => passesTags(d.tags));
          if (!tagPool.length) return null;

          if (!q) {
            return { ...s, _dests: tagPool, _open: hasFilter };
          }
          const stateMatches = matches(s.name) || matches(s.macroregion);
          if (stateMatches) return { ...s, _dests: tagPool, _open: true };
          const nameMatches = tagPool.filter((d) => matches(d.name));
          if (nameMatches.length)
            return { ...s, _dests: nameMatches, _open: true };
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
    .filter((g) => g.states.length > 0);

  const filteredIntl = intlTree
    .map(({ continent, countries }) => ({
      continent,
      countries: countries
        .map((c) => {
          const tagPool = c.dests.filter((d) => passesTags(d.tags));
          if (!tagPool.length) return null;

          if (!q) return { ...c, _dests: tagPool, _open: hasFilter };
          const countryMatches = matches(c.country) || matches(continent);
          if (countryMatches) return { ...c, _dests: tagPool, _open: true };
          const nameMatches = tagPool.filter((d) => matches(d.name));
          if (nameMatches.length)
            return { ...c, _dests: nameMatches, _open: true };
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
  const filterSig = `${q}|${selectedTags.join(",")}`;

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

          {/* Tag filter — filtrar por experiência */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-muted-foreground">
                Filtrar por experiência
              </span>
              {selectedTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="text-xs text-gold hover:text-gold-light"
                >
                  Limpar
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(showAllTags ? TAGS : TAGS.slice(0, 6)).map((tag) => {
                const active = selectedTags.includes(tag.id);
                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      active
                        ? "bg-gold text-primary-foreground border-gold"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                    }`}
                  >
                    {tag.label}
                  </button>
                );
              })}
              {TAGS.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllTags((v) => !v)}
                  className="text-xs px-2.5 py-1 rounded-full border border-gold/30 text-gold hover:bg-gold/10"
                >
                  {showAllTags ? "Ver menos" : `+${TAGS.length - 6}`}
                </button>
              )}
            </div>
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
                    key={`${macro}-${filterSig}`}
                    label={macro}
                    count={states.reduce((n, s) => n + s._dests.length, 0)}
                    defaultOpen={hasFilter}
                  >
                    {states.map((s) => (
                      <TreeBranch
                        key={`${s.slug}-${filterSig}`}
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
                    key={`${continent}-${filterSig}`}
                    label={continent}
                    count={countries.reduce(
                      (n, c) => n + c._dests.length,
                      0
                    )}
                    defaultOpen={hasFilter}
                  >
                    {countries.map((c) => (
                      <TreeBranch
                        key={`${c.country}-${filterSig}`}
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
