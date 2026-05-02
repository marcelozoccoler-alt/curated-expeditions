import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationCard } from "@/components/DestinationCard";
import { TagFilter } from "@/components/TagFilter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { destinations } from "@/lib/destinations";
import { CONTINENTS } from "@/lib/types";

const Destinos = () => {
  const [continent, setContinent] = useState<string>("todos");
  const [tags, setTags] = useState<string[]>([]);
  const [query, setQuery] = useState("");

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

  const clearAll = () => {
    setContinent("todos");
    setTags([]);
    setQuery("");
  };

  const hasFilters = continent !== "todos" || tags.length > 0 || query;

  return (
    <div className="min-h-screen flex flex-col">
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
      <section className="section-padding flex-1">
        <div className="container-editorial">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "destino encontrado" : "destinos encontrados"}
            </p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-sm text-gold hover:text-gold-light transition-colors font-medium"
              >
                Limpar todos os filtros
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((d, i) => (
                <DestinationCard key={d.id} destination={d} index={i % 6} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl font-serif mb-4">Nenhum destino corresponde a esses filtros.</p>
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
