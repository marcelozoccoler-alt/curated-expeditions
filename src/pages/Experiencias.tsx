import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { TAGS, CONTACT } from "@/lib/types";
import { destinations } from "@/lib/destinations";
import { getExperienciasSEO } from "@/lib/seo";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const Experiencias = () => {
  const counts = TAGS.map((t) => ({
    tag: t,
    count: destinations.filter((d) => d.tags.includes(t.id)).length,
  }));

  const seo = getExperienciasSEO({ tagId: null, query: "", sort: "curadoria", page: 1 }, 1);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Experiências de viagem Create Travel",
    numberOfItems: counts.length,
    itemListElement: counts.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${DOMAIN}/experiencias/${c.tag.id}`,
      name: c.tag.label,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Experiências", item: `${DOMAIN}/experiencias` },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noindex={seo.noindex}
        jsonLd={[itemListLd, breadcrumbLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="relative pt-32 pb-12 bg-gradient-hero text-primary-foreground">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Experiências" }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-4">Experiências de viagem</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light">
              Explore destinos por tipo de experiência: do safári à lua de mel, do trekking
              à gastronomia. Cada categoria reúne lugares com curadoria Create Travel.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding flex-1">
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {counts.map(({ tag, count }, i) => (
              <motion.div
                key={tag.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 9) * 0.04 }}
              >
                <Link
                  to={`/experiencias/${tag.id}`}
                  className="group block p-6 rounded-lg border border-border bg-card hover:border-gold transition-colors h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-serif text-foreground mb-1 group-hover:text-gold transition-colors">
                        {tag.label}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {count} {count === 1 ? "destino" : "destinos"} com curadoria
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiencias;
