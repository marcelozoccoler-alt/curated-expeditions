import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { getRegionBySlug } from "@/lib/regions";
import { getDestinationBySlug } from "@/lib/destinations";
import { generateWhatsAppLink, CONTACT } from "@/lib/types";
import { buildPlaceKeywords, buildSpeakableSchema } from "@/lib/seoIntents";
import NotFound from "./NotFound";

const Regiao = () => {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const region = regionSlug ? getRegionBySlug(regionSlug) : undefined;

  if (!region) return <NotFound />;

  const destinations = region.destinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter(Boolean)
    .sort((a, b) => a!.name.localeCompare(b!.name, "pt-BR"));

  const whatsappLink = generateWhatsAppLink({
    type: "Destino",
    name: region.label,
  });

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: region.label,
    description: region.metaDescription,
    image: region.heroImageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: region.label, item: `/${region.slug}` },
    ],
  };

  const faqLd = region.faqs && region.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: region.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const jsonLd = [
    placeLd,
    breadcrumbLd,
    buildSpeakableSchema(`${CONTACT.domain.replace(/\/$/, "")}/${region.slug}`),
    ...(faqLd ? [faqLd] : []),
  ];

  return (
    <>
      <SEO
        title={`Pacote de viagem para ${region.label} — O que fazer, melhor época e roteiros | Create Travel`}
        description={`Pacote de viagem para ${region.label} com curadoria Create Travel: o que fazer, melhor época, onde ficar e roteiros sob medida. ${region.metaDescription}`.slice(0, 300)}
        canonicalPath={`/${region.slug}`}
        keywords={buildPlaceKeywords(region.label, undefined, [`turismo ${region.label}`, `roteiro ${region.label}`, `pacote ${region.label}`])}
        ogImage={region.heroImageUrl}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
          <img
            src={region.heroImageUrl}
            alt={region.label}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
          <div className="container-editorial relative pb-14 z-10">
            <Breadcrumbs items={[{ label: region.label }]} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-4"
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold mb-3">
                {region.kicker}
              </span>
              <h1 className="heading-display text-primary-foreground">
                {region.label}
              </h1>
              <p className="text-lg text-primary-foreground/85 font-light mt-6 leading-relaxed">
                {region.intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Long-form SEO content — only rendered when the region provides it */}
        {(region.longIntro || region.whatToDo || region.bestTime || region.howToGet || region.whereToStay) && (
          <section className="py-16 border-b border-border">
            <div className="container-editorial max-w-4xl space-y-12">
              {region.longIntro && (
                <div>
                  <h2 className="heading-section mb-4">Pacote de viagem para {region.label}</h2>
                  <p className="text-base leading-relaxed text-foreground/85">{region.longIntro}</p>
                </div>
              )}

              {region.whatToDo && region.whatToDo.length > 0 && (
                <div>
                  <h2 className="heading-section mb-6">O que fazer em {region.label}</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {region.whatToDo.map((s) => (
                      <article key={s.title} className="border border-border rounded-lg p-6 bg-card">
                        <h3 className="font-serif text-lg mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                {region.bestTime && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Melhor época para visitar {region.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{region.bestTime}</p>
                  </div>
                )}
                {region.howToGet && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Como chegar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{region.howToGet}</p>
                  </div>
                )}
                {region.whereToStay && (
                  <div>
                    <h3 className="font-serif text-lg mb-3">Onde ficar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{region.whereToStay}</p>
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
                    ? `Destinos em ${region.label}`
                    : `Conheça ${region.label}`}
                </h2>
              </div>
              <Link
                to="/destinos"
                className="text-sm font-medium text-foreground hover:text-gold transition-colors inline-flex items-center gap-1"
              >
                Ver todos os destinos <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((d) => (
                <Link
                  key={d!.id}
                  to={`/destinos/${d!.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all"
                >
                  {d!.imageOverrideUrl && (
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={d!.imageOverrideUrl}
                        alt={d!.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <MapPin size={12} /> {d!.continent} · {d!.region}
                    </p>
                    <h3 className="font-serif text-xl mt-2 group-hover:text-gold transition-colors">
                      {d!.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                      {d!.intro}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-gold mt-4">
                      Explorar <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — only rendered when region provides questions */}
        {region.faqs && region.faqs.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border">
            <div className="container-editorial max-w-3xl">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">Perguntas frequentes</span>
              <h2 className="heading-section mt-2 mb-8">Dúvidas sobre viajar para {region.label}</h2>
              <div className="space-y-6">
                {region.faqs.map((f) => (
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
              Quer um roteiro autoral em {region.label}?
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

      <WhatsAppButton variant="float" params={{ type: "Destino", name: region.label }} />
      <Footer />
    </>
  );
};

export default Regiao;
