import { useEffect, useMemo, useRef } from "react";
import { useParams, useSearchParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationCard } from "@/components/DestinationCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { destinations, getFeaturedDestinations } from "@/lib/destinations";
import { TAGS, CONTACT, Destination } from "@/lib/types";
import { getExperienciasSEO } from "@/lib/seo";
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
const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const MONTHS_PT: Record<string, number> = {
  jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6,
  jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12,
};

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

const ExperienciaTag = () => {
  const { tagId } = useParams<{ tagId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  const tag = TAGS.find((t) => t.id === tagId);

  const sort = (searchParams.get("sort") as SortKey) || "curadoria";
  const query = searchParams.get("q") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);

  const updateParams = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(patch).forEach(([k, v]) => {
      if (
        v === null ||
        v === "" ||
        (k === "sort" && v === "curadoria") ||
        (k === "page" && v === "1")
      ) {
        next.delete(k);
      } else {
        next.set(k, v);
      }
    });
    setSearchParams(next, { replace: false });
  };

  const setQuery = (q: string) => updateParams({ q, page: "1" });
  const setSort = (s: SortKey) => updateParams({ sort: s, page: "1" });

  const filtered = useMemo(() => {
    if (!tagId || !tag) return [];
    const base = destinations.filter((d) => d.tags.includes(tagId));
    if (!query) return base;
    const q = query.toLowerCase();
    return base.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q)
    );
  }, [tagId, tag, query]);

  const sorted = useMemo(() => sortDestinations(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginated = sorted.slice(start, start + PAGE_SIZE);
  const showFrom = sorted.length === 0 ? 0 : start + 1;
  const showTo = Math.min(start + PAGE_SIZE, sorted.length);

  useEffect(() => {
    if (page > totalPages) {
      const next = new URLSearchParams(searchParams);
      next.set("page", String(totalPages));
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    const next = new URLSearchParams(searchParams);
    if (p === 1) next.delete("page");
    else next.set("page", String(p));
    setSearchParams(next, { replace: false });
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  if (!tagId || !tag) return <Navigate to="/experiencias" replace />;

  const seo = getExperienciasSEO(
    { tagId, query, sort, page: currentPage },
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
      url: `${DOMAIN}/destinos/${d.slug}`,
      name: d.name,
    })),
  };

  const hasFilters = !!query || sort !== "curadoria";
  const clearFilters = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("q");
    next.delete("sort");
    next.delete("page");
    setSearchParams(next, { replace: false });
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Experiências", item: `${DOMAIN}/experiencias` },
      { "@type": "ListItem", position: 3, name: tag.label, item: `${DOMAIN}/experiencias/${tag.id}` },
    ],
  };

  const pageRange = buildPageRange(currentPage, totalPages);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noindex={seo.noindex}
        prevPath={seo.prevPath}
        nextPath={seo.nextPath}
        jsonLd={[itemListLd, breadcrumbLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="relative pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container-editorial">
          <Breadcrumbs
            items={[
              { label: "Experiências", href: "/experiencias" },
              { label: tag.label },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-4">{tag.label}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light">
              Destinos selecionados pela Create Travel para experiências de{" "}
              {tag.label.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-20 z-30 backdrop-blur-md bg-card/95">
        <div className="container-editorial py-5 space-y-4">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar nesta experiência por nome, país ou região…"
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
        </div>
      </section>

      <section ref={resultsRef} className="section-padding flex-1 scroll-mt-32">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{sorted.length}</span>{" "}
              {sorted.length === 1 ? "destino encontrado" : "destinos encontrados"}
              {sorted.length > 0 && (
                <span className="hidden sm:inline">
                  {" "}· mostrando{" "}
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
                  onClick={clearFilters}
                  className="text-sm text-gold hover:text-gold-light transition-colors font-medium whitespace-nowrap"
                >
                  Limpar
                </button>
              )}
              <Link
                to="/experiencias"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium whitespace-nowrap hidden lg:inline"
              >
                ← Todas
              </Link>
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
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
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
                            currentPage === totalPages ? "pointer-events-none opacity-50" : ""
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
                Ainda não há destinos publicados para essa experiência.
              </p>
              <p className="text-muted-foreground mb-8">
                Podemos criar um roteiro sob medida diretamente com você.
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

export default ExperienciaTag;
