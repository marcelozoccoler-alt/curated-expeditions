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
import { buildPlaceKeywords, buildSpeakableSchema } from "@/lib/seoIntents";
import { CONTACT } from "@/lib/types";
import NotFound from "./NotFound";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop";

const BrasilEstado = () => {
  const { estadoSlug } = useParams<{ estadoSlug: string }>();
  const state = estadoSlug ? getBrazilStateBySlug(estadoSlug) : undefined;

  if (!state) return <NotFound />;

  const destinations = state.destinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter(Boolean)
    .sort((a, b) => a!.name.localeCompare(b!.name, "pt-BR"));

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

  const faqLd = state.faqs && state.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: state.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const jsonLd = [
    placeLd,
    breadcrumbLd,
    buildSpeakableSchema(`${CONTACT.domain.replace(/\/$/, "")}/brasil/${state.slug}`),
    ...(faqLd ? [faqLd] : []),
  ];

  return (
    <>
      <SEO
        title={`Pacote de viagem para ${state.name} — O que fazer, melhor época e roteiros | Create Travel`}
        description={`Pacote de viagem para ${state.name}, Brasil com curadoria Create Travel. O que fazer, melhor época, onde ficar e roteiros sob medida. ${state.metaDescription}`.slice(0, 300)}
        canonicalPath={`/brasil/${state.slug}`}
        keywords={buildPlaceKeywords(state.name, "Brasil", [`turismo ${state.name}`, `viagem ${state.name} Brasil`])}
        ogImage={state.heroImageUrl}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
          <img
            src={state.heroImageUrl}
            alt={`Paisagens de ${state.name}, Brasil`}
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

        {/* Long-form SEO content — only rendered when the state provides it */}
        {(state.longIntro || state.whatToDo || state.bestTime || state.howToGet || state.whereToStay) && (
          <section className="py-16 border-b border-border">
            <div className="container-editorial max-w-4xl space-y-12">
              {state.longIntro && (
                <div>
                  <h2 className="heading-section mb-4">Pacote de viagem para {state.name}</h2>
                  <p className="text-base leading-relaxed text-foreground/85">{state.longIntro}</p>
                </div>
              )}

              {state.whatToDo && state.whatToDo.length > 0 && (
                <div>
                  <h2 className="heading-section mb-6">O que fazer em {state.name}</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {state.whatToDo.map((s) => (
                      <article key={s.title} className="border border-border rounded-lg p-6 bg-card">
                        <h3 className="font-serif text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                {state.bestTime && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Melhor época para visitar {state.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{state.bestTime}</p>
                  </div>
                )}
                {state.howToGet && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Como chegar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{state.howToGet}</p>
                  </div>
                )}
                {state.whereToStay && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Onde ficar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{state.whereToStay}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

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
                          alt={`Destino ${d!.name} — ${state.name}, Brasil`}
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

        {/* FAQ — only rendered when state provides questions */}
        {state.faqs && state.faqs.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="container-editorial max-w-3xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">Perguntas frequentes</span>
              <h2 className="heading-section mt-2 mb-8">Dúvidas sobre viajar para {state.name}</h2>
              <div className="space-y-6">
                {state.faqs.map((f) => (
                  <details key={f.q} className="group border-b border-border pb-4">
                    <summary className="faq-question cursor-pointer font-serif text-lg text-foreground list-none flex justify-between items-start gap-4">
                      <span>{f.q}</span>
                      <span className="text-gold text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="faq-answer text-sm text-muted-foreground leading-relaxed mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

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
