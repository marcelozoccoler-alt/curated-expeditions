import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Compass,
  Hotel,
  Users,
  Route as RouteIcon,
  Lightbulb,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import { SUPPORTED_LANGS, toContentLang, type ContentLang } from "@/i18n/config";
import { useLang } from "@/hooks/useLang";
import { CONTACT } from "@/lib/types";
import { generateIncomingWhatsAppLink } from "@/lib/whatsappI18n";
import {
  getBrazilGuide,
  BRAZIL_GUIDE_SLUGS,
  guidePath,
  guideImage,
  guideDestinationName,
  GUIDE_UI,
} from "@/lib/brazilGuides";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const HREFLANG: Record<ContentLang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  it: "it",
  de: "de",
};

const GuiaBrasil = () => {
  const lang = useLang();
  const { lang: paramLang, slug } = useParams<{ lang?: string; slug: string }>();

  if (paramLang && !(SUPPORTED_LANGS as readonly string[]).includes(paramLang)) {
    return <Navigate to="/" replace />;
  }

  const cLang = toContentLang(lang);
  const guide = slug ? getBrazilGuide(slug, cLang) : undefined;

  if (!slug || !guide) {
    return <Navigate to={guidePath(cLang)} replace />;
  }

  const ui = GUIDE_UI[cLang];
  const canonicalPath = guidePath(cLang, slug);
  const url = `${DOMAIN}${canonicalPath}`;
  const cover = guideImage(slug);
  const destName = guideDestinationName(slug, cLang);
  const whatsappLink = generateIncomingWhatsAppLink({ lang, destination: destName });

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    datePublished: guide.publishedAt,
    inLanguage: HREFLANG[cLang],
    about: { "@type": "TouristDestination", name: destName, touristType: ui.touristType },
    author: { "@type": "Organization", name: "Create Travel" },
    publisher: { "@type": "Organization", name: "Create Travel" },
    mainEntityOfPage: url,
    keywords: guide.keywords,
    abstract: guide.aiAnswer,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Create Travel", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: ui.hubTitle, item: `${DOMAIN}${guidePath(cLang)}` },
      { "@type": "ListItem", position: 3, name: guide.h1, item: url },
    ],
  };

  const related = BRAZIL_GUIDE_SLUGS.filter((s) => s !== slug).slice(0, 6);

  return (
    <div className="min-h-screen">
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        canonicalPath={canonicalPath}
        keywords={guide.keywords}
        ogType="article"
        jsonLd={[articleLd, faqLd, breadcrumbLd]}
      />
      <Helmet>
        <html lang={HREFLANG[cLang]} />
        {(["pt", "en", "es", "it", "de"] as ContentLang[]).map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={HREFLANG[l]}
            href={`${DOMAIN}${guidePath(l, slug)}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${guidePath("en", slug)}`} />
      </Helmet>
      <Header />

      <article className="pt-32 pb-16">
        <div className="container-editorial max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Create Travel", href: cLang === "pt" ? "/" : `/${cLang}/incoming` },
              { label: ui.hubTitle, href: guidePath(cLang) },
              { label: destName },
            ]}
          />

          <p className="text-caption text-gold mt-4 mb-3">{ui.eyebrow}</p>
          <h1 className="heading-hero text-foreground mb-6">{guide.h1}</h1>

          {/* Resposta direta — bloco citável por IA */}
          <div className="ai-summary rounded-xl border-l-4 border-gold bg-secondary/40 p-5 mb-8">
            <p className="text-base text-foreground leading-relaxed">{guide.aiAnswer}</p>
          </div>

          {cover && (
            <div className="mb-10 rounded-xl overflow-hidden aspect-[16/9]">
              <img
                src={cover}
                alt={`${destName} — ${guide.h1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          <div className="mb-10">
            <ShareButtons url={url} title={guide.h1} summary={guide.metaDescription} />
          </div>

          <div className="space-y-6 mb-12">
            {guide.intro.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>

          {/* Épocas */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-3 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-gold" />
              {guide.seasons.heading}
            </h2>
            <p className="text-muted-foreground mb-6 font-light">{guide.seasons.intro}</p>
            <div className="space-y-4">
              {guide.seasons.windows.map((w) => (
                <div key={w.window} className="rounded-lg border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{w.window}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{w.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experiências */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-3 flex items-center gap-3">
              <Compass className="h-5 w-5 text-gold" />
              {guide.experiences.heading}
            </h2>
            <p className="text-muted-foreground mb-6 font-light">{guide.experiences.intro}</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {guide.experiences.items.map((it) => (
                <div key={it.title} className="rounded-lg bg-secondary/40 p-5">
                  <h3 className="font-semibold text-foreground mb-2">{it.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hospedagens */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-3 flex items-center gap-3">
              <Hotel className="h-5 w-5 text-gold" />
              {guide.stays.heading}
            </h2>
            <p className="text-muted-foreground mb-6 font-light">{guide.stays.intro}</p>
            <div className="space-y-4">
              {guide.stays.items.map((s) => (
                <div key={s.name} className="rounded-lg border border-border p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-semibold text-foreground">{s.name}</h3>
                    <span className="text-xs uppercase tracking-wider text-gold">{s.profile}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Perfis */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-6 flex items-center gap-3">
              <Users className="h-5 w-5 text-gold" />
              {guide.profiles.heading}
            </h2>
            <div className="space-y-4">
              {guide.profiles.items.map((p) => (
                <div key={p.title}>
                  <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integração de roteiros */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-3 flex items-center gap-3">
              <RouteIcon className="h-5 w-5 text-gold" />
              {guide.itinerary.heading}
            </h2>
            <p className="text-muted-foreground mb-6 font-light">{guide.itinerary.intro}</p>
            <div className="space-y-4">
              {guide.itinerary.items.map((it) => (
                <div key={it.title} className="rounded-lg bg-secondary/40 p-5">
                  <h3 className="font-semibold text-foreground mb-2">{it.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{it.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Dicas */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-gold" />
              {guide.tips.heading}
            </h2>
            <ul className="space-y-3">
              {guide.tips.items.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground font-light">
                  <span className="text-gold">—</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="heading-section text-foreground mb-6">{ui.faqHeading}</h2>
            <div className="space-y-5">
              {guide.faq.map((f) => (
                <div key={f.q} className="border-b border-border pb-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-hero text-white p-8 text-center mb-14"
          >
            <h2 className="heading-section mb-3">{guide.cta.heading}</h2>
            <p className="text-white/85 font-light mb-6 max-w-xl mx-auto">{guide.cta.subheading}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              {guide.cta.button}
            </a>
          </motion.section>

          {/* Outros guias */}
          <section>
            <h2 className="heading-section text-foreground mb-6">{ui.relatedHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((s) => (
                <Link
                  key={s}
                  to={guidePath(cLang, s)}
                  className="rounded-lg border border-border p-4 hover:border-gold transition"
                >
                  <span className="font-medium text-foreground">
                    {guideDestinationName(s, cLang)}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              to={guidePath(cLang)}
              className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {ui.backToHub}
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuiaBrasil;
