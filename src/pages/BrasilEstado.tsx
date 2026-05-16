import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { getBrazilStateBySlug } from "@/lib/brazilStates";
import { getDestinationBySlug } from "@/lib/destinations";
import { getDestinationImage } from "@/lib/destinationImages";
import { generateWhatsAppLink } from "@/lib/types";
import NotFound from "./NotFound";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop";

const BrasilEstado = () => {
  const { estadoSlug } = useParams<{ estadoSlug: string }>();
  const state = estadoSlug ? getBrazilStateBySlug(estadoSlug) : undefined;

  if (!state) return <NotFound />;

  const destinations = state.destinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter(Boolean);

  const whatsappLink = generateWhatsAppLink({
    type: "Destino",
    name: state.name,
  });

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${state.name}, Brasil`,
    description: state.metaDescription,
    image: state.heroImageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Destinos", item: "/destinos" },
      { "@type": "ListItem", position: 3, name: "Brasil", item: "/brasil" },
      {
        "@type": "ListItem",
        position: 4,
        name: state.name,
        item: `/brasil/${state.slug}`,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${state.name} | Destinos e roteiros Create Travel`}
        description={state.metaDescription}
        canonicalPath={`/brasil/${state.slug}`}
        ogImage={state.heroImageUrl}
        ogType="article"
        jsonLd={[placeLd, breadcrumbLd]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
          <img
            src={state.heroImageUrl}
            alt={state.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="container-editorial relative pb-14 z-10">
            <Breadcrumbs
              items={[
                { label: "Destinos", href: "/destinos" },
                { label: "Brasil", href: "/brasil" },
                { label: state.name },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-4"
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold mb-3">
                {state.kicker}
              </span>
              <h1 className="heading-display text-primary-foreground">
                {state.name}
              </h1>
              <p className="text-lg text-primary-foreground/85 font-light mt-6 leading-relaxed">
                {state.intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-16">
          <div className="container-editorial">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  Onde podemos ir
                </span>
                <h2 className="heading-section mt-2">
                  {destinations.length > 1
                    ? `Destinos em ${state.name}`
                    : `Conheça ${state.name}`}
                </h2>
              </div>
              <Link
                to="/brasil"
                className="text-sm font-medium text-foreground hover:text-gold transition-colors inline-flex items-center gap-1"
              >
                Ver outros estados <ArrowRight size={16} />
              </Link>
            </div>

            {destinations.length === 0 ? (
              <p className="text-muted-foreground">
                Em breve adicionaremos destinos para {state.name}.
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((d) => {
                  const img =
                    d!.imageOverrideUrl ||
                    getDestinationImage(d!.id) ||
                    FALLBACK_IMG;
                  return (
                    <Link
                      key={d!.id}
                      to={`/destinos/${d!.slug}`}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={img}
                          alt={d!.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <p className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          <MapPin size={12} /> {state.name} · {d!.region}
                        </p>
                        <h3 className="font-serif text-xl mt-2 group-hover:text-gold transition-colors">
                          {d!.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                          {d!.intro}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm text-gold mt-4">
                          Ver roteiro <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-editorial text-center max-w-2xl">
            <h2 className="heading-section text-primary-foreground">
              Quer um roteiro autoral em {state.name}?
            </h2>
            <p className="text-primary-foreground/85 mt-4 leading-relaxed">
              Conte o período, quem viaja e o que busca. Desenhamos um roteiro
              à sua imagem — sem pacotes prontos.
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

      <WhatsAppButton variant="float" params={{ type: "Destino", name: state.name }} />
      <Footer />
    </>
  );
};

export default BrasilEstado;
