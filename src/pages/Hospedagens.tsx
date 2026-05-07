import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StayCard } from "@/components/StayCard";
import { TagFilter } from "@/components/TagFilter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { stays } from "@/lib/stays";
import { destinations } from "@/lib/destinations";
import { Stay } from "@/lib/types";
import { getHospedagensSEO } from "@/lib/seo";
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

type SortKey = "curadoria" | "alfabetica" | "destino";

const PAGE_SIZE = 9;

const sortStays = (list: Stay[], sort: SortKey): Stay[] => {
  if (sort === "curadoria") return list;
  if (sort === "alfabetica") return [...list].sort((a, b) => a.name.localeCompare(b.name, "pt"));
  // destino
  const destMap = new Map(destinations.map((d) => [d.id, d.continent]));
  return [...list].sort((a, b) => {
    const ca = destMap.get(a.destinationRef) || "zz";
    const cb = destMap.get(b.destinationRef) || "zz";
    return ca.localeCompare(cb, "pt") || a.name.localeCompare(b.name, "pt");
  });
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

const Hospedagens = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

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
      if (v === null || v === "" || (k === "sort" && v === "curadoria") || (k === "page" && v === "1")) {
        next.delete(k);
      } else {
        next.set(k, v);
      }
    });
    setSearchParams(next, { replace: false });
  };

  const setTags = (t: string[]) => updateParams({ tags: t.join(","), page: "1" });
  const setSort = (s: SortKey) => updateParams({ sort: s, page: "1" });
  const setPage = (p: number) => updateParams({ page: String(p) });

  const [queryInput, setQueryInput] = useState(query);
  useEffect(() => {
    setQueryInput(query);
  }, [query]);
  useEffect(() => {
    if (queryInput === query) return;
    const t = setTimeout(() => updateParams({ q: queryInput, page: "1" }), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryInput]);

  const filtered = useMemo(() => {
    return stays.filter((s) => {
      if (tags.length && !tags.every((t) => s.tags.includes(t))) return false;
      if (query) {
        const q = query.toLowerCase();
        const dest = destinations.find((d) => d.id === s.destinationRef);
        if (
          !s.name.toLowerCase().includes(q) &&
          !(dest?.name.toLowerCase().includes(q)) &&
          !(dest?.country.toLowerCase().includes(q))
        )
          return false;
      }
      return true;
    });
  }, [tags, query]);

  const sorted = useMemo(() => sortStays(filtered, sort), [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const paginated = sorted.slice(start, start + PAGE_SIZE);
  const showFrom = sorted.length === 0 ? 0 : start + 1;
  const showTo = Math.min(start + PAGE_SIZE, sorted.length);

  useEffect(() => {
    if (page > totalPages) updateParams({ page: String(totalPages) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    setPage(p);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const clearAll = () => setSearchParams(new URLSearchParams());
  const hasFilters = tags.length > 0 || !!query || sort !== "curadoria";
  const pageRange = buildPageRange(currentPage, totalPages);

  const seo = getHospedagensSEO({ tags, query, sort, page: currentPage }, totalPages);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: seo.title,
    numberOfItems: sorted.length,
    itemListElement: paginated.map((s, i) => ({
      "@type": "ListItem",
      position: start + i + 1,
      url: `${window.location.origin}/hospedagens/${s.slug}`,
      name: s.name,
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

      {/* Hero editorial */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-editorial relative">
          <Breadcrumbs items={[{ label: "Hospedagens" }]} />
          <div className="max-w-3xl mt-6">
            <p className="text-caption text-gold mb-4">Seleção Create Travel</p>
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-5">
              Hospedagens que <em className="italic font-normal">contam</em> o lugar
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed">
              Lodges, refúgios e hotéis escolhidos por arquitetura, serviço e relação real
              com o território. Luxo discreto, sem pressa, com propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-20 z-30 backdrop-blur-md bg-card/95">
        <div className="container-editorial py-5 space-y-4">
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder="Buscar por hospedagem, destino ou país…"
              className="w-full pl-11 pr-10 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {queryInput && (
              <button
                onClick={() => setQueryInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Limpar busca"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <TagFilter selectedTags={tags} onTagsChange={setTags} />
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="section-padding flex-1 scroll-mt-32">
        <div className="container-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{sorted.length}</span>{" "}
              {sorted.length === 1 ? "hospedagem encontrada" : "hospedagens encontradas"}
              {sorted.length > 0 && (
                <span className="hidden sm:inline">
                  {" "}· mostrando{" "}
                  <span className="text-foreground font-medium">{showFrom}–{showTo}</span>
                </span>
              )}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted-foreground hidden md:inline">Ordenar por</label>
                <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curadoria">Curadoria Create Travel</SelectItem>
                    <SelectItem value="alfabetica">Nome (A–Z)</SelectItem>
                    <SelectItem value="destino">Destino / continente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="text-sm text-gold hover:text-gold-light font-medium whitespace-nowrap"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {paginated.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((s, i) => (
                  <StayCard key={s.slug} stay={s} index={i % 6} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Mostrando <span className="text-foreground font-medium">{showFrom}–{showTo}</span> de{" "}
                    <span className="text-foreground font-medium">{sorted.length}</span>
                  </p>
                  <Pagination className="mx-0 w-auto justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => { e.preventDefault(); goToPage(currentPage - 1); }}
                          aria-disabled={currentPage === 1}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      {pageRange.map((p, idx) =>
                        p === "…" ? (
                          <PaginationItem key={`e-${idx}`}><PaginationEllipsis /></PaginationItem>
                        ) : (
                          <PaginationItem key={p}>
                            <PaginationLink
                              href="#"
                              isActive={p === currentPage}
                              onClick={(e) => { e.preventDefault(); goToPage(p); }}
                            >{p}</PaginationLink>
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => { e.preventDefault(); goToPage(currentPage + 1); }}
                          aria-disabled={currentPage === totalPages}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-xl font-serif mb-4">Nenhuma hospedagem corresponde a esses filtros.</p>
              <p className="text-muted-foreground mb-8">
                Posso indicar opções sob medida para o seu perfil.
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

export default Hospedagens;
