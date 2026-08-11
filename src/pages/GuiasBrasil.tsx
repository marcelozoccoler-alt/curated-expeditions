import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SUPPORTED_LANGS, toContentLang, type ContentLang } from "@/i18n/config";
import { useLang } from "@/hooks/useLang";
import { CONTACT } from "@/lib/types";
import {
  BRAZIL_GUIDE_SLUGS,
  BRAZIL_GUIDES,
  GUIDE_UI,
  guideBlurb,
  guideDestinationName,
  guideImage,
  guidePath,
} from "@/lib/brazilGuides";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const HREFLANG: Record<ContentLang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  it: "it",
  de: "de",
};

const GuiasBrasil = () => {
  const lang = useLang();
  const { lang: paramLang } = useParams<{ lang?: string }>();

  if (paramLang && !(SUPPORTED_LANGS as readonly string[]).includes(paramLang)) {
    return <Navigate to="/" replace />;
  }

  const cLang = toContentLang(lang);
  const ui = GUIDE_UI[cLang];
  const canonicalPath = guidePath(cLang);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: ui.hubH1,
    inLanguage: HREFLANG[cLang],
    itemListElement: BRAZIL_GUIDE_SLUGS.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: BRAZIL_GUIDES[slug][cLang].h1,
      url: `${DOMAIN}${guidePath(cLang, slug)}`,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={ui.hubMetaTitle}
        description={ui.hubMetaDescription}
        canonicalPath={canonicalPath}
        keywords={ui.hubKeywords}
        jsonLd={itemListLd}
      />
      <Helmet>
        <html lang={HREFLANG[cLang]} />
        {(["pt", "en", "es", "it", "de"] as ContentLang[]).map((l) => (
          <link key={l} rel="alternate" hrefLang={HREFLANG[l]} href={`${DOMAIN}${guidePath(l)}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${guidePath("en")}`} />
      </Helmet>
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-caption text-gold mb-3">{ui.hubTitle}</p>
          <h1 className="heading-hero mb-5">{ui.hubH1}</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto font-light">{ui.hubIntro}</p>
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs
          items={[
            { label: "Create Travel", href: cLang === "pt" ? "/" : `/${cLang}/incoming` },
            { label: ui.hubTitle },
          ]}
        />
      </div>

      <section className="py-12">
        <div className="container-editorial grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAZIL_GUIDE_SLUGS.map((slug, i) => {
            const guide = BRAZIL_GUIDES[slug][cLang];
            const cover = guideImage(slug);
            return (
              <motion.article
                key={slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                className="group"
              >
                <Link to={guidePath(cLang, slug)} className="block">
                  {cover && (
                    <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4">
                      <img
                        src={cover}
                        alt={guideDestinationName(slug, cLang)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className="text-xs tracking-wider text-gold mb-2">
                    {guideDestinationName(slug, cLang).toUpperCase()}
                  </p>
                  <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {guide.h1}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {guideBlurb(slug, cLang)}
                  </p>
                  <span className="text-sm text-gold">
                    {ui.readGuide} · {guide.readingMinutes} min
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuiasBrasil;
