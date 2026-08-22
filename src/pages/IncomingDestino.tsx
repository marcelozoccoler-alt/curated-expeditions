import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircle, ArrowLeft, MapPin, Calendar, Plane, Hotel } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HreflangTags } from "@/components/HreflangTags";
import { SUPPORTED_LANGS, toContentLang, type ContentLang } from "@/i18n/config";
import { INCOMING_DESTINO_CONTENT } from "@/lib/incomingDestinoContent";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import {
  INCOMING_OG_LOCALE,
  INCOMING_HTML_LANG,
  buildIncomingAiSummary,
  buildIncomingEntityPhrases,
  buildIncomingFacts,
  buildIncomingIntentFAQs,
  mergeIncomingFAQs,
  incomingSummaryHeading,
  incomingContextHeading,
  incomingFactsHeading,
  incomingRelatedHeading,
  type IncLang,
} from "@/lib/incomingGeo";
import { generateIncomingWhatsAppLink } from "@/lib/whatsappI18n";
import { useLang } from "@/hooks/useLang";
import {
  EXTRA_HTML_LANG,
  EXTRA_OG_LOCALE,
  extraDestText,
  isExtraLang,
} from "@/lib/incomingExtra";


const SITE_URL = "https://www.createtravel.tur.br";

const IncomingDestino = () => {
  const lang = useLang();
  const { lang: paramLang, slug } = useParams<{ lang: string; slug: string }>();

  if (paramLang && !(SUPPORTED_LANGS as readonly string[]).includes(paramLang)) {
    return <Navigate to="/" replace />;
  }
  if (lang === "pt") {
    // No PT version — send back to Portuguese homepage.
    return <Navigate to="/" replace />;
  }

  const cLang = toContentLang(lang) as Exclude<ContentLang, "pt">;
  const destino = INCOMING_DESTINATIONS.find((d) => d.slug === slug);
  const langMap = slug ? INCOMING_DESTINO_CONTENT[slug] : undefined;

  if (!destino || !langMap) {
    return <Navigate to={`/${lang}/incoming`} replace />;
  }

  const copy = langMap[cLang];
  const whatsappLink = generateIncomingWhatsAppLink({
    lang,
    destination: destino.name[cLang],
  });

  const canonicalPath = `/${lang}/incoming/${slug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const iLang = cLang as IncLang;
  const destName = extraDestText(lang, destino.slug, {
    name: destino.name[cLang],
    blurb: destino.blurb[cLang],
  }).name;
  const htmlLang = isExtraLang(lang)
    ? EXTRA_HTML_LANG[lang]
    : INCOMING_HTML_LANG[iLang];
  const ogLocale = isExtraLang(lang)
    ? EXTRA_OG_LOCALE[lang]
    : INCOMING_OG_LOCALE[iLang];

  // GEO / AEO blocks (no prices — values are discussed on WhatsApp only)
  const aiSummary = buildIncomingAiSummary(destName, copy, iLang);
  const entityPhrases = buildIncomingEntityPhrases(destName, copy, iLang);
  const facts = buildIncomingFacts(copy, iLang);
  const allFaqs = mergeIncomingFAQs(
    copy.faqs.items,
    buildIncomingIntentFAQs(destName, copy, iLang)
  );

  const related = INCOMING_DESTINATIONS.filter(
    (d) => d.slug !== slug && INCOMING_DESTINO_CONTENT[d.slug]
  ).slice(0, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: destName,
      description: copy.metaDescription,
      url: canonical,
      image: `${SITE_URL}${destino.image}`,
      inLanguage: htmlLang,
      touristType: "leisure travellers, families, couples, photographers",
      containedInPlace: {
        "@type": "Country",
        name: "Brazil",
      },
      abstract: aiSummary,
      includesAttraction: copy.whatToDo.items.map((item) => ({
        "@type": "TouristAttraction",
        name: item.title,
        description: item.text,
      })),
      additionalProperty: facts.map((f) => ({
        "@type": "PropertyValue",
        name: f.label,
        value: f.value,
      })),
      subjectOf: entityPhrases.map((text) => ({
        "@type": "CreativeWork",
        abstract: text,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      inLanguage: htmlLang,
      mainEntity: allFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Brazil",
          item: `${SITE_URL}/${lang}/incoming`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: destName,
          item: canonical,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: canonical,
      inLanguage: htmlLang,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".ai-summary", ".faq-question", ".faq-answer"],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={htmlLang} />
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
        <meta name="keywords" content={copy.keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={copy.metaTitle} />
        <meta property="og:description" content={copy.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:site_name" content="Create Travel" />
        <meta property="og:image" content={`${SITE_URL}${destino.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={copy.metaTitle} />
        <meta name="twitter:description" content={copy.metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}${destino.image}`} />
        {jsonLd.map((ld, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(ld)}
          </script>
        ))}
      </Helmet>

      <HreflangTags basePath={`/incoming/${slug}`} />

      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.85) 0%, hsl(var(--primary) / 0.65) 50%, hsl(var(--primary) / 0.4) 100%), linear-gradient(to bottom, hsl(var(--primary) / 0.4) 0%, transparent 40%, hsl(var(--primary) / 0.85) 100%), url(${destino.image})`,
          }}
        />
        <div className="container-editorial relative text-primary-foreground">
          <Link
            to={`/${lang}/incoming`}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>{copy.back}</span>
          </Link>
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
            className="font-serif italic text-xl md:text-2xl max-w-2xl text-gold/90 mb-10"
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

      {/* AI / answer-engine summary — quotable in the first sentence */}
      <section className="ai-summary py-16 lg:py-20">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl mb-5 text-foreground">
            {incomingSummaryHeading(destName, iLang)}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            {aiSummary}
          </p>
          <h3 className="mt-10 mb-4 text-xs uppercase tracking-[0.25em] text-gold">
            {incomingContextHeading(iLang)}
          </h3>
          <ul className="space-y-3">
            {entityPhrases.map((phrase) => (
              <li
                key={phrase}
                className="border-l-2 border-gold/60 pl-4 text-base leading-relaxed text-muted-foreground"
              >
                {phrase}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Long intro */}
      <section className="pb-20 lg:pb-28">
        <div className="container-editorial max-w-3xl">
          <div className="space-y-6">
            {copy.longIntro.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>


      {/* What to do */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-editorial">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground max-w-3xl">
            {copy.whatToDo.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.whatToDo.items.map((item) => (
              <article
                key={item.title}
                className="border-l-2 border-gold pl-6 py-2"
              >
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground flex items-start gap-2">
                  <MapPin size={18} className="text-gold mt-1 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics: best time + how to get + where to stay */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <Calendar size={18} />
              <p className="text-xs uppercase tracking-[0.25em]">
                {copy.bestTime.heading}
              </p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {copy.bestTime.text}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <Plane size={18} />
              <p className="text-xs uppercase tracking-[0.25em]">
                {copy.howToGet.heading}
              </p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {copy.howToGet.text}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <Hotel size={18} />
              <p className="text-xs uppercase tracking-[0.25em]">
                {copy.whereToStay.heading}
              </p>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              {copy.whereToStay.text}
            </p>
          </div>
        </div>
      </section>

      {/* Practical facts — structured data LLMs can extract */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
            {incomingFactsHeading(iLang)}
          </h2>
          <dl className="divide-y divide-border">
            {facts.map((f) => (
              <div
                key={f.label}
                className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4"
              >
                <dt className="text-xs uppercase tracking-[0.2em] text-gold sm:pt-1">
                  {f.label}
                </dt>
                <dd className="sm:col-span-2 text-base leading-relaxed text-muted-foreground">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container-editorial max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground">
            {copy.faqs.heading}
          </h2>
          <div className="space-y-8">
            {allFaqs.map((item) => (
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

      {/* Related incoming destinations — internal linking for crawlers */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container-editorial max-w-5xl">
            <h2 className="font-serif text-2xl md:text-3xl mb-8 text-foreground">
              {incomingRelatedHeading(iLang)}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((d) => (
                <li key={d.slug}>
                  <Link
                    to={`/${lang}/incoming/${d.slug}`}
                    className="block border-l-2 border-gold/60 pl-4 py-2 hover:border-gold transition-colors"
                  >
                    <span className="block font-serif text-lg text-foreground">
                      {extraDestText(lang, d.slug, { name: d.name[cLang], blurb: d.blurb[cLang] }).name}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-1">
                      {extraDestText(lang, d.slug, { name: d.name[cLang], blurb: d.blurb[cLang] }).blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}



      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-editorial max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-foreground">
            {copy.finalCta.heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {copy.finalCta.subheading}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            <span>{copy.finalCta.button}</span>
          </a>
          <div className="mt-10">
            <Link
              to={`/${lang}/incoming`}
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

export default IncomingDestino;
