import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationCard } from "@/components/DestinationCard";
import { TagFilter } from "@/components/TagFilter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { destinations, getFeaturedDestinations } from "@/lib/destinations";
import { CONTINENTS, Destination } from "@/lib/types";
import { getDestinosSEO } from "@/lib/seo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type SortKey = "curadoria" | "popularidade" | "melhor-epoca";

const PAGE_SIZE = 12;

const MONTHS_PT: Record<string, number> = {
  jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6,
  jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12,
};

// Extract months mentioned in a bestTime string (lowercased PT abbreviations).
const extractMonths = (s: string): number[] => {
  const found = new Set<number>();
  const re = /\b(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s)) !== null) {
    const n = MONTHS_PT[m[1].toLowerCase()];
    if (n) found.add(n);
  }
  return Array.from(found);
};

// Distance from current month, wrapping the calendar (0 = ideal now).
const monthDistance = (target: number, now: number): number => {
  const d = Math.abs(target - now);
  return Math.min(d, 12 - d);
};

const sortDestinations = (list: Destination[], sort: SortKey): Destination[] => {
  if (sort === "curadoria") return list;

  if (sort === "popularidade") {
    const featuredIds = new Set(getFeaturedDestinations().map((d) => d.id));
    return [...list].sort((a, b) => {
      const af = featuredIds.has(a.id) ? 0 : 1;
      const bf = featuredIds.has(b.id) ? 0 : 1;
      return af - bf;
    });
  }

  // melhor-epoca
  const now = new Date().getMonth() + 1;
  return [...list]
    .map((d, idx) => {
      const months = extractMonths(d.bestTime);
      const score = months.length
        ? Math.min(...months.map((m) => monthDistance(m, now)))
        : 99;
      return { d, idx, score };
    })
    .sort((a, b) => a.score - b.score || a.idx - b.idx)
    .map((x) => x.d);
};

// Compute compact pagination range with ellipses.
const buildPageRange = (current: number, total: number): (number | "…")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("…");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
};

const Destinos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  const continent = searchParams.get("c") || "todos";
  const tags = (searchParams.get("tags") || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const query = searchParams.get("q") || "";
  const sort = (searchParams.get("sort") as SortKey) || "curadoria";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);

  const updateParams = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(patch).forEach(([k, v]) => {
      if (v === null || v === "" || v === "todos" || (k === "sort" && v === "curadoria") || (k === "page" && v === "1")) {
        next.delete(k);
      } else {
        next.set(k, v);
      }
    });
    setSearchParams(next, { replace: false });
  };

  const setContinent = (c: string) => updateParams({ c, page: "1" });
  const setTags = (t: string[]) =>
    updateParams({ tags: t.join(","), page: "1" });
  const setSort = (s: SortKey) => updateParams({ sort: s, page: "1" });
  const setPage = (p: number) => updateParams({ page: String(p) });

  // Debounced search input: local state mirrors URL, syncs after pause.
  const [queryInput, setQueryInput] = useState(query);
  useEffect(() => {
    setQueryInput(query);
  }, [query]);
  useEffect(() => {
    if (queryInput === query) return;
    const t = setTimeout(() => {
      updateParams({ q: queryInput, page: "1" });
    }, 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryInput]);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      if (continent !== "todos") {
        const cName = CONTINENTS.find((c) => c.id === continent)?.name;
        if (cName && d.continent.toLowerCase() !== cName.toLowerCase()) return false;
      }
      if (tags.length && !tags.every((t) => d.tags.includes(t))) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !d.name.toLowerCase().includes(q) &&
          !d.country.toLowerCase().includes(q) &&
          !d.region.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [continent, tags, query]);

  const sorted = useMemo(() => sortDestinations(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginated = sorted.slice(start, start + PAGE_SIZE);
  const showFrom = sorted.length === 0 ? 0 : start + 1;
  const showTo = Math.min(start + PAGE_SIZE, sorted.length);

  // If filters shrink results so current page is out of range, snap back.
  useEffect(() => {
    if (page > totalPages) {
      updateParams({ page: String(totalPages) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    setPage(p);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasFilters =
    continent !== "todos" || tags.length > 0 || !!query || sort !== "curadoria";

  const pageRange = buildPageRange(currentPage, totalPages);

  const seo = getDestinosSEO(
    { continent, tags, query, sort, page: currentPage },
    totalPages
  );

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: seo.title,
    numberOfItems: sorted.length,
    itemListElement: paginated.map((d, i) => ({
      "@type": "ListItem",
      position: start + i + 1,
      url: `${window.location.origin}/destinos/${d.slug}`,
      name: d.name,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noindex={seo.noindex}
        prevPath={seo.prevPath}
        nextPath={seo.nextPath}
        jsonLd={itemListLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Destinos" }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-4">Destinos com curadoria</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light">
              Uma biblioteca viva de lugares escolhidos por profundidade, autenticidade e propósito.
              Filtre por continente, experiência ou busque um destino específico.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-20 z-30 backdrop-blur-md bg-card/95">
        <div className="container-editorial py-5 space-y-4">
          {/* Search */}
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome, país ou região…"
              className="w-full pl-11 pr-10 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Limpar busca"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Continents */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setContinent("todos")}
              className={`tag ${continent === "todos" ? "tag-active" : ""}`}
            >
              Todos
            </button>
            {CONTINENTS.map((c) => (
              <button
                key={c.id}
                onClick={() => setContinent(c.id)}
                className={`tag ${continent === c.id ? "tag-active" : ""}`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Tags */}
          <TagFilter selectedTags={tags} onTagsChange={setTags} />
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="section-padding flex-1 scroll-mt-32">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{sorted.length}</span>{" "}
              {sorted.length === 1 ? "destino encontrado" : "destinos encontrados"}
              {sorted.length > 0 && (
                <span className="hidden sm:inline">
                  {" "}
                  · mostrando{" "}
                  <span className="text-foreground font-medium">
                    {showFrom}–{showTo}
                  </span>
                </span>
              )}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted-foreground hidden md:inline">
                  Ordenar por
                </label>
                <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curadoria">Curadoria Create Travel</SelectItem>
                    <SelectItem value="popularidade">Popularidade</SelectItem>
                    <SelectItem value="melhor-epoca">Melhor época para ir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="text-sm text-gold hover:text-gold-light transition-colors font-medium whitespace-nowrap"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {paginated.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((d, i) => (
                  <DestinationCard key={d.id} destination={d} index={i % 6} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Mostrando{" "}
                    <span className="text-foreground font-medium">
                      {showFrom}–{showTo}
                    </span>{" "}
                    de{" "}
                    <span className="text-foreground font-medium">{sorted.length}</span>
                  </p>

                  <Pagination className="mx-0 w-auto justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            goToPage(currentPage - 1);
                          }}
                          aria-disabled={currentPage === 1}
                          className={
                            currentPage === 1 ? "pointer-events-none opacity-50" : ""
                          }
                        />
                      </PaginationItem>

                      {pageRange.map((p, idx) =>
                        p === "…" ? (
                          <PaginationItem key={`e-${idx}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        ) : (
                          <PaginationItem key={p}>
                            <PaginationLink
                              href="#"
                              isActive={p === currentPage}
                              onClick={(e) => {
                                e.preventDefault();
                                goToPage(p);
                              }}
                            >
                              {p}
                            </PaginationLink>
                          </PaginationItem>
                        )
                      )}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            goToPage(currentPage + 1);
                          }}
                          aria-disabled={currentPage === totalPages}
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl font-serif mb-4">
                Nenhum destino corresponde a esses filtros.
              </p>
              <p className="text-muted-foreground mb-8">
                Que tal pedir uma curadoria sob medida diretamente com a Create Travel?
              </p>
              <WhatsAppButton variant="cta" label="Falar com consultor" />
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinos;
