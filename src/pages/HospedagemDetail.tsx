import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Star, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { StayCard } from "@/components/StayCard";
import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getStayBySlug, stays as allStays } from "@/lib/stays";
import { getStayImage } from "@/lib/stayImages";
import { getDestinationBySlug, destinations } from "@/lib/destinations";
import { getTagsByIds, getBeyondUsualParts, CONTACT } from "@/lib/types";
import { buildStayKeywords, buildSpeakableSchema } from "@/lib/seoIntents";

const HospedagemDetail = () => {
  const { slug } = useParams();
  const stay = slug ? getStayBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!stay) return <Navigate to="/hospedagens" replace />;

  const destination = destinations.find((d) => d.id === stay.destinationRef);
  // Try to also resolve by destination slug if not found by id
  const destinationBySlug = !destination && stay.destinationRef
    ? getDestinationBySlug(stay.destinationRef)
    : undefined;
  const dest = destination || destinationBySlug;

  const tags = getTagsByIds(stay.tags);
  const heroImage =
    getStayImage(stay.slug) ||
    stay.imageOverrideUrl ||
    `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=1000&fit=crop`;

  const related = allStays
    .filter((s) => s.slug !== stay.slug)
    .filter((s) =>
      dest ? s.destinationRef === stay.destinationRef : s.tags.some((t) => stay.tags.includes(t))
    )
    .slice(0, 3);

  const domain = CONTACT.domain.replace(/\/$/, "");
  const pageUrl = `${domain}/hospedagens/${stay.slug}`;
  const absoluteImage = heroImage.startsWith("http")
    ? heroImage
    : `${domain}${heroImage.startsWith("/") ? "" : "/"}${heroImage}`;
  const tagLabels = tags.map((t) => t.label);

  const seoTitle = dest
    ? `Pacote de viagem com hospedagem no ${stay.name} — ${dest.region}, ${dest.country} | Create Travel`
    : `Pacote de viagem com hospedagem no ${stay.name} — Curadoria Create Travel`;
  const whyClean = stay.whySelected.replace(/\s+/g, " ").trim();
  const seoDescription =
    `Pacote de viagem com hospedagem no ${stay.name}${dest ? `, ${dest.country}` : ""}. ${whyClean.slice(0, 110)} Roteiro Create Travel ideal para ${tagLabels.slice(0, 3).join(", ").toLowerCase()}.`.slice(0, 300);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stay.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const lodgeSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: stay.name,
    description: whyClean,
    image: absoluteImage,
    url: pageUrl,
    amenityFeature: tagLabels.map((t) => ({ "@type": "LocationFeatureSpecification", name: t })),
    address: dest?.country
      ? {
          "@type": "PostalAddress",
          addressCountry: dest.country,
          ...(dest.region ? { addressRegion: dest.region } : {}),
        }
      : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${domain}/` },
      { "@type": "ListItem", position: 2, name: "Hospedagens", item: `${domain}/hospedagens` },
      { "@type": "ListItem", position: 3, name: stay.name, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/hospedagens/${stay.slug}`}
        keywords={buildStayKeywords(stay, dest?.name, dest?.country)}
        ogImage={absoluteImage}
        ogType="article"
        jsonLd={[faqSchema, lodgeSchema, breadcrumbSchema, buildSpeakableSchema(pageUrl)]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={stay.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10 pb-16 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-white text-xs font-medium mb-5">
              <Star size={12} fill="currentColor" />
              Seleção Create Travel
            </div>
            {dest && (
              <p className="text-caption text-gold mb-3">
                {dest.continent} · {dest.region}
              </p>
            )}
            <h1 className="heading-hero mb-5">{stay.name}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/85">
              {dest && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {dest.name}, {dest.country}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {stay.bestTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-editorial">
        <Breadcrumbs
          items={[
            { label: "Hospedagens", href: "/hospedagens" },
            { label: stay.name },
          ]}
        />
      </div>

      {/* Body */}
      <section className="section-padding pt-12">
        <div className="container-editorial grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Why selected — editorial pull quote */}
            <div className="space-y-5">
              <p className="text-caption text-gold">Por que selecionamos</p>
              <blockquote className="border-l-4 border-gold pl-6 md:pl-8">
                <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground italic">
                  “{stay.whySelected}”
                </p>
              </blockquote>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Link key={t.id} to={`/hospedagens?tags=${t.id}`} className="tag">
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Beyond usual */}
            <div className="space-y-5">
              <h2 className="heading-section flex items-center gap-3">
                <Sparkles className="text-gold" size={28} />
                Além do óbvio
              </h2>
              {stay.beyondUsual.some((b) => getBeyondUsualParts(b).story) && (
                <p className="text-sm text-muted-foreground -mt-2">
                  Clique em cada item para sentir o que torna a experiência única.
                </p>
              )}
              <Accordion type="multiple" className="space-y-3">
                {stay.beyondUsual.map((b, i) => {
                  const { title, story } = getBeyondUsualParts(b);
                  if (!story) {
                    return (
                      <div
                        key={i}
                        className="p-5 md:p-6 rounded-lg border border-border bg-card shadow-sm"
                      >
                        <p className="text-foreground leading-relaxed">{title}</p>
                      </div>
                    );
                  }
                  return (
                    <AccordionItem
                      key={i}
                      value={`b-${i}`}
                      className="rounded-lg border border-border bg-card shadow-sm px-5"
                    >
                      <AccordionTrigger className="hover:no-underline py-4 text-left">
                        <span className="text-foreground font-medium pr-2">{title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pr-1 text-foreground/85 leading-relaxed text-[15px]">
                        {story}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* Best time card */}
            <div className="rounded-2xl bg-muted/60 border border-border p-6 md:p-8">
              <p className="text-caption text-gold mb-2">Melhor época</p>
              <p className="text-lg text-foreground leading-relaxed font-serif">
                {stay.bestTime}
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 p-7 rounded-2xl bg-gradient-hero text-primary-foreground shadow-lg">
              <p className="text-caption text-gold mb-3">Curadoria personalizada</p>
              <h3 className="text-2xl font-serif font-semibold mb-3 leading-tight">
                Quer se hospedar no {stay.name}?
              </h3>
              <p className="text-primary-foreground/85 mb-6 text-sm leading-relaxed">
                Cuidamos de cada detalhe — datas, conexão de voos, experiências e atenção
                ao seu ritmo de viagem.
              </p>
              <WhatsAppButton
                variant="cta"
                label="Criar roteiro sob medida"
                params={{
                  type: "Hospedagem",
                  name: stay.name,
                  tags: stay.tags,
                }}
                className="w-full"
              />
              {dest && (
                <div className="mt-6 pt-6 border-t border-primary-foreground/20 space-y-2 text-sm text-primary-foreground/80">
                  <p>
                    <strong className="text-primary-foreground">Destino:</strong>{" "}
                    <Link
                      to={`/destinos/${dest.slug}`}
                      className="underline underline-offset-2 hover:text-gold"
                    >
                      {dest.name}
                    </Link>
                  </p>
                  <p>
                    <strong className="text-primary-foreground">Região:</strong>{" "}
                    {dest.region}, {dest.country}
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-4xl">
          <FAQSection faqs={stay.faq} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-editorial">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-caption text-gold mb-3">Continue explorando</p>
                <h2 className="heading-section">
                  {dest ? `Outras hospedagens próximas` : "Hospedagens com perfil similar"}
                </h2>
              </div>
              <Link
                to="/hospedagens"
                className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light font-medium"
              >
                Ver todas <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((s, i) => (
                <StayCard key={s.slug} stay={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default HospedagemDetail;
