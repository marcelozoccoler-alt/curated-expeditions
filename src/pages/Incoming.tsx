import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HreflangTags } from "@/components/HreflangTags";
import { SUPPORTED_LANGS, toContentLang, type ContentLang } from "@/i18n/config";
import { INCOMING_COPY } from "@/lib/incomingCopy";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import { generateIncomingWhatsAppLink } from "@/lib/whatsappI18n";
import { CONTACT } from "@/lib/types";
import { useLang } from "@/hooks/useLang";
import { BrazilBiomeMap } from "@/components/BrazilBiomeMap";
import { BRASIL_VIVO_UI } from "@/lib/brasilVivoCopy";
import { BRASIL_AVENTURA_UI } from "@/lib/brasilAventuraCopy";
import { Leaf, Mountain } from "lucide-react";
import biomesHero from "@/assets/incoming-biomes-hero.jpg";

const SITE_URL = "https://www.createtravel.tur.br";

const Incoming = () => {
  // The route is mounted at /:lang/incoming; useLang reads the prefix.
  const lang = useLang();
  const { lang: paramLang } = useParams<{ lang: string }>();

  // Defensive: if URL lang is not a foreign one, redirect.
  if (paramLang && !(SUPPORTED_LANGS as readonly string[]).includes(paramLang)) {
    return <Navigate to="/" replace />;
  }
  if (lang === "pt") {
    return <Navigate to="/" replace />;
  }

  const cLang = toContentLang(lang) as Exclude<ContentLang, "pt">;
  const copy = INCOMING_COPY[cLang];
  const whatsappLink = generateIncomingWhatsAppLink({ lang });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Create Travel",
    url: `${SITE_URL}/${lang}/incoming`,
    description: copy.meta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua José Libero, 80 - Planalto Paulista",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    telephone: CONTACT.whatsapp,
    email: CONTACT.email,
    areaServed: "Brazil",
    knowsLanguage: ["pt-BR", "en", "es", "it", "de"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{copy.meta.title}</title>
        <meta name="description" content={copy.meta.description} />
        <meta name="keywords" content={copy.meta.keywords} />
        <link rel="canonical" href={`${SITE_URL}/${lang}/incoming`} />
        <meta property="og:title" content={copy.meta.title} />
        <meta property="og:description" content={copy.meta.description} />
        <meta property="og:url" content={`${SITE_URL}/${lang}/incoming`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <HreflangTags basePath="/incoming" />

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.85) 0%, hsl(var(--primary) / 0.7) 45%, hsl(var(--primary) / 0.45) 100%), linear-gradient(to bottom, hsl(var(--primary) / 0.4) 0%, transparent 40%, hsl(var(--primary) / 0.85) 100%), url(${biomesHero})`,
          }}
        />
        <div className="container-editorial relative text-primary-foreground">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-gold mb-6"
          >
            {copy.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mb-6 text-gold"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl lg:text-3xl max-w-2xl text-gold/90 mb-10"
          >
            {copy.hero.subtitle}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>{copy.hero.cta}</span>
          </motion.a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
            {copy.intro.heading}
          </h2>
          <div className="space-y-6">
            {copy.intro.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Brazil by biomes — interactive map */}
      {copy.biomesMap && (
        <section className="py-20 lg:py-28 bg-muted/20">
          <div className="container-editorial">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
                {copy.biomesMap.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
                {copy.biomesMap.heading}
              </h2>
              <p className="text-muted-foreground text-lg">
                {copy.biomesMap.subheading}
              </p>
            </div>
            <BrazilBiomeMap lang={lang} />
          </div>
        </section>
      )}

      {/* Brasil Vivo CTA — link to translated conservation hub */}
      {(() => {
        const bv = BRASIL_VIVO_UI[cLang];
        return (
          <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
            <div className="container-editorial grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3 flex items-center gap-2">
                  <Leaf size={14} /> {bv.hero.eyebrow}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">
                  {bv.hero.title}
                </h2>
                <p className="text-primary-foreground/85 leading-relaxed">
                  {bv.hero.subtitle}
                </p>
              </div>
              <Link
                to={`/${lang}/brasil-vivo`}
                className="btn-accent inline-flex items-center gap-2 justify-self-start md:justify-self-end whitespace-nowrap"
              >
                {bv.hero.cta}
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Brasil Aventura CTA — link to translated outdoor adventure hub */}
      {(() => {
        const ba = BRASIL_AVENTURA_UI[cLang];
        return (
          <section className="py-16 lg:py-20 bg-card border-y border-border">
            <div className="container-editorial grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3 flex items-center gap-2">
                  <Mountain size={14} /> {ba.hero.eyebrow}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
                  {ba.hero.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {ba.hero.subtitle}
                </p>
              </div>
              <Link
                to={`/${lang}/brasil-aventura`}
                className="btn-accent inline-flex items-center gap-2 justify-self-start md:justify-self-end whitespace-nowrap"
              >
                {ba.hero.cta}
              </Link>
            </div>
          </section>
        );
      })()}




      {/* Destinations grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
              {copy.destinations.heading}
            </h2>
            <p className="text-muted-foreground text-lg">
              {copy.destinations.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCOMING_DESTINATIONS.map((d, i) => (
              <motion.article
                key={d.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name[cLang]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-gold uppercase tracking-wider mb-2">
                    <MapPin size={12} />
                    <span>Brasil</span>
                  </div>
                  <h3 className="font-serif text-xl mb-2 text-foreground">
                    {d.name[cLang]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.blurb[cLang]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
              {copy.process.heading}
            </h2>
            <p className="text-muted-foreground text-lg">
              {copy.process.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.process.steps.map((step) => (
              <div
                key={step.title}
                className="border-l-2 border-gold pl-6 py-2"
              >
                <h3 className="font-serif text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            {copy.trust.heading}
          </h2>
          <ul className="space-y-4">
            {copy.trust.items.map((item) => (
              <li key={item} className="flex gap-3 items-start text-lg">
                <span className="text-gold mt-1.5">✦</span>
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise — full Brazil coverage */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-editorial max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            {copy.expertise.heading}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10">
            {copy.expertise.lead}
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">
            {copy.expertise.destinationsLabel}
          </p>
          <p className="text-base leading-relaxed text-foreground/90 mb-10">
            {copy.expertise.destinations}
          </p>
          <div className="border-l-2 border-gold pl-6 py-2">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
              {copy.expertise.biomes}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — semantic SEO for AI Overviews + ChatGPT/Perplexity */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-3 text-foreground">
            {copy.faqs.heading}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {copy.faqs.subheading}
          </p>
          <div className="space-y-8">
            {copy.faqs.items.map((item) => (
              <div key={item.q} className="border-l-2 border-gold pl-6 py-1">
                <h3 className="faq-question font-serif text-xl md:text-2xl mb-3 text-foreground">
                  {item.q}
                </h3>
                <p className="faq-answer text-base md:text-lg leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-foreground">
            {copy.cta.heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {copy.cta.subheading}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            <span>{copy.cta.button}</span>
          </a>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft size={14} />
              <span>{copy.back}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Incoming;
