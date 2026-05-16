import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import {
  brazilStates,
  MACROREGION_ORDER,
  getBrazilStatesByMacroregion,
} from "@/lib/brazilStates";
import { generateWhatsAppLink } from "@/lib/types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&h=1080&fit=crop";

const BrasilEstados = () => {
  const whatsappLink = generateWhatsAppLink({
    type: "Destino",
    name: "Brasil",
  });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Destinos", item: "/destinos" },
      { "@type": "ListItem", position: 3, name: "Brasil", item: "/brasil" },
    ],
  };

  return (
    <>
      <SEO
        title="Brasil por estados | Roteiros Create Travel"
        description="Descubra os destinos do Brasil organizados por estado: Amazonas, Bahia, Pernambuco, Mato Grosso e muito mais. Curadoria autoral Create Travel."
        canonicalPath="/brasil"
        ogImage={HERO_IMAGE}
        ogType="article"
        jsonLd={[breadcrumbLd]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Brasil"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="container-editorial relative pb-14 z-10">
            <Breadcrumbs items={[{ label: "Destinos", href: "/destinos" }, { label: "Brasil" }]} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-4"
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold mb-3">
                Brasil
              </span>
              <h1 className="heading-display text-primary-foreground">
                Explore o Brasil por estado
              </h1>
              <p className="text-lg text-primary-foreground/85 font-light mt-6 leading-relaxed">
                Da Amazônia ao Pampa: escolha um estado para ver os destinos selecionados pela nossa curadoria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* States grouped by macroregion */}
        <section className="py-16">
          <div className="container-editorial space-y-16">
            {MACROREGION_ORDER.map((macro) => {
              const states = getBrazilStatesByMacroregion(macro);
              if (states.length === 0) return null;
              return (
                <div key={macro}>
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">
                      Região
                    </span>
                    <h2 className="heading-section mt-2">{macro}</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {states.map((state) => (
                      <Link
                        key={state.slug}
                        to={`/brasil/${state.slug}`}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all"
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={state.heroImageUrl}
                            alt={state.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <p className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            <MapPin size={12} /> {state.uf} · {macro}
                          </p>
                          <h3 className="font-serif text-xl mt-2 group-hover:text-gold transition-colors">
                            {state.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                            {state.intro}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm text-gold mt-4">
                            {state.destinationSlugs.length}{" "}
                            {state.destinationSlugs.length === 1
                              ? "destino"
                              : "destinos"}{" "}
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-editorial text-center max-w-2xl">
            <h2 className="heading-section text-primary-foreground">
              Não sabe por onde começar?
            </h2>
            <p className="text-primary-foreground/85 mt-4 leading-relaxed">
              Conte para gente o tipo de experiência que busca — e desenhamos um roteiro à sua imagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 justify-center"
              >
                <MessageCircle size={18} />
                Criar roteiro sob medida
              </a>
              <Link
                to="/contato"
                className="border border-primary-foreground/30 text-primary-foreground rounded-md px-6 py-3 hover:bg-primary-foreground/10 transition-colors text-sm font-medium"
              >
                Enviar briefing por e-mail
              </Link>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppButton variant="float" params={{ type: "Destino", name: "Brasil" }} />
      <Footer />
    </>
  );
};

export default BrasilEstados;
