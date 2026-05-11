import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { getNicheBySlug, getAllNiches } from "@/lib/niches";
import { getDestinationBySlug } from "@/lib/destinations";
import { stays } from "@/lib/stays";
import { generateWhatsAppLink, buildWhatsAppMessage } from "@/lib/types";

const Guia = () => {
  const { slug } = useParams<{ slug: string }>();
  const niche = slug ? getNicheBySlug(slug) : undefined;

  if (!niche) return <Navigate to="/" replace />;

  const destinations = niche.destinationSlugs
    .map((s) => getDestinationBySlug(s))
    .filter(Boolean) as ReturnType<typeof getDestinationBySlug>[];
  const recommendedStays = stays.filter((s) => niche.staySlugs.includes(s.slug));

  const whatsappParams = {
    type: "Roteiro" as const,
    name: `Guia da ${niche.h1}`,
    period: niche.bestTime,
    duration: niche.idealDuration,
  };
  const whatsappLink = generateWhatsAppLink(whatsappParams);
  const whatsappPreview = buildWhatsAppMessage(whatsappParams);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: niche.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: niche.h1,
    description: niche.metaDescription,
    image: niche.heroImageUrl,
    author: { "@type": "Organization", name: "Create Travel" },
    publisher: { "@type": "Organization", name: "Create Travel" },
  };

  return (
    <>
      <SEO
        title={niche.title}
        description={niche.metaDescription}
        canonicalPath={`/guias/${niche.slug}`}
        ogImage={niche.heroImageUrl}
        ogType="article"
        jsonLd={[faqLd, articleLd]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
          <img
            src={niche.heroImageUrl}
            alt={niche.h1}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
          <div className="container-editorial relative pb-16 z-10">
            <Breadcrumbs
              items={[
                { label: "Guias", href: "/guias" },
                { label: niche.h1 },
              ]}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-4"
            >
              <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold mb-4">
                {niche.kicker}
              </span>
              <h1 className="heading-display text-primary-foreground">{niche.h1}</h1>
              <p className="text-lg text-primary-foreground/85 font-light mt-6 leading-relaxed">
                {niche.intro}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick facts */}
        <section className="py-10 border-b border-border bg-card">
          <div className="container-editorial grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Calendar className="text-gold flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Melhor época
                </p>
                <p className="font-serif text-base mt-1">{niche.bestTime}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="text-gold flex-shrink-0 mt-1" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Duração ideal
                </p>
                <p className="font-serif text-base mt-1">{niche.idealDuration}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial sections */}
        <section className="py-20">
          <div className="container-editorial grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {niche.sections.map((s, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <h2 className="heading-section">{s.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-lg font-light">
                    {s.body}
                  </p>
                </motion.article>
              ))}

              <blockquote className="border-l-4 border-gold pl-6 py-2 my-12">
                <p className="font-serif text-2xl italic text-foreground leading-snug">
                  “{niche.pullQuote}”
                </p>
              </blockquote>
            </div>

            {/* Sticky CTA sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-lg p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  Roteiro sob medida
                </p>
                <h3 className="font-serif text-2xl mt-3">
                  Construa o seu {niche.h1.toLowerCase()}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Cada roteiro nasce de uma conversa. Conte o período, quem viaja
                  e o que busca — desenhamos a partir daí.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full justify-center mt-6 inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Criar roteiro sob medida
                </a>
                <Link
                  to="/contato"
                  className="block text-center text-sm text-muted-foreground hover:text-gold mt-4 transition-colors"
                >
                  Ou envie um briefing →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Destinations */}
        {destinations.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="container-editorial">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">
                    Destinos relacionados
                  </span>
                  <h2 className="heading-section mt-2">Onde isso acontece</h2>
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
                    className="group bg-card border border-border rounded-lg p-6 hover:shadow-elegant transition-all"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {d!.continent} · {d!.region}
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
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stays */}
        {recommendedStays.length > 0 && (
          <section className="py-20">
            <div className="container-editorial">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">
                    Hospedagens selecionadas
                  </span>
                  <h2 className="heading-section mt-2">Onde nos hospedamos</h2>
                </div>
                <Link
                  to="/hospedagens"
                  className="text-sm font-medium text-foreground hover:text-gold transition-colors inline-flex items-center gap-1"
                >
                  Ver todas <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedStays.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/hospedagens/${s.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[3/2] overflow-hidden rounded-lg">
                      <img
                        src={s.imageOverrideUrl || ""}
                        alt={s.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-lg mt-4 group-hover:text-gold transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {s.whySelected}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container-editorial max-w-3xl">
            <FAQSection faqs={niche.faq} />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-editorial text-center max-w-2xl">
            <h2 className="heading-section text-primary-foreground">
              Pronto para começar?
            </h2>
            <p className="text-primary-foreground/85 mt-4 leading-relaxed">
              Conte-nos quando, com quem e o que importa. Desenhamos um roteiro
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

      <WhatsAppButton variant="float" params={{ type: "Roteiro", name: `Guia da ${niche.h1}`, period: niche.bestTime, duration: niche.idealDuration }} />
      <Footer />
    </>
  );
};

export const GuiasIndex = () => {
  const all = getAllNiches();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: all.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: n.h1,
      url: `/guias/${n.slug}`,
    })),
  };

  return (
    <>
      <SEO
        title="Guias autorais de viagem por nicho | Create Travel"
        description="Guias editoriais por nicho — safári, lua de mel, Patagônia, Amazônia — com curadoria, melhores épocas e roteiros sob medida."
        canonicalPath="/guias"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Guias" }]} />
          <h1 className="heading-display mt-6">Guias autorais</h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Guias editoriais por nicho de viagem — escritos pela equipe da
            Create Travel para quem quer profundidade antes de planejar.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            {all.map((n) => (
              <Link
                key={n.slug}
                to={`/guias/${n.slug}`}
                className="group block"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={n.heroImageUrl}
                    alt={n.h1}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-gold mt-5 block">
                  {n.kicker}
                </span>
                <h2 className="font-serif text-2xl mt-2 group-hover:text-gold transition-colors">
                  {n.h1}
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                  {n.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <WhatsAppButton variant="float" />
      <Footer />
    </>
  );
};

export default Guia;
