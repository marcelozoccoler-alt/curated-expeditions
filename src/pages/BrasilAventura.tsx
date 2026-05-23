import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Mountain,
  Users,
  MapPin,
  CalendarDays,
  Gauge,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CONTACT } from "@/lib/types";
import {
  BRASIL_AVENTURA_UI,
  ADVENTURE_ACTIVITIES,
  type AdventureIntensity,
} from "@/lib/brasilAventuraCopy";
import { useLang, useLocalizedPath } from "@/hooks/useLang";
import { toContentLang } from "@/i18n/config";

import heroImg from "@/assets/destinations/brasil-brotas-aventura.jpg";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const PHILOSOPHY_ICONS = [Sparkles, ShieldCheck, Mountain, Users];

const INTENSITY_COLOR: Record<AdventureIntensity, string> = {
  leve: "hsl(150 60% 38%)",
  moderada: "hsl(35 85% 45%)",
  intensa: "hsl(0 70% 45%)",
};

const BrasilAventura = () => {
  const lang = useLang();
  const cLang = toContentLang(lang);
  const localize = useLocalizedPath();
  const ui = BRASIL_AVENTURA_UI[cLang];

  const waLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    ui.whatsappMessage
  )}`;

  const canonicalPath =
    lang === "pt" ? "/brasil-aventura" : `/${lang}/brasil-aventura`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ui.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: ui.meta.title,
    url: `${DOMAIN}${canonicalPath}`,
    description: ui.meta.description,
    isPartOf: { "@type": "WebSite", name: "Create Travel", url: `${DOMAIN}/` },
    inLanguage: lang,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={ui.meta.title}
        description={ui.meta.description}
        canonicalPath={canonicalPath}
        keywords={ui.meta.keywords}
        jsonLd={[pageLd, faqLd]}
        ogImage={heroImg}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt={ui.hero.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/85" />
        </div>
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: ui.breadcrumb }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <p className="text-sm tracking-[0.25em] uppercase text-gold mb-4">
              {ui.hero.eyebrow}
            </p>
            <h1 className="heading-hero mb-6">{ui.hero.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light leading-relaxed mb-8">
              {ui.hero.subtitle}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {ui.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.philosophy.eyebrow}
            </p>
            <h2 className="heading-section mb-6 whitespace-pre-line">
              {ui.philosophy.title}
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              {ui.philosophy.lead}
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {ui.philosophy.items.map((p, i) => {
              const Icon = PHILOSOPHY_ICONS[i] ?? Sparkles;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {p.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.activities.eyebrow}
            </p>
            <h2 className="heading-section mb-4">{ui.activities.title}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {ui.activities.lead}
            </p>
          </div>

          <div className="space-y-12">
            {ADVENTURE_ACTIVITIES.map((a, idx) => {
              const t = a.i18n[cLang];
              const color = INTENSITY_COLOR[a.intensity];
              return (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={a.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs uppercase tracking-wider text-white flex items-center gap-1.5"
                      style={{ backgroundColor: color }}
                    >
                      <Gauge size={12} />
                      {ui.activities.intensity[a.intensity]}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                      {t.name}
                    </h3>
                    <p className="text-gold italic mb-4">{t.tagline}</p>
                    <p className="text-foreground/85 leading-relaxed mb-5">
                      {t.description}
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-2">
                        <CalendarDays
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        <div>
                          <span
                            className="block text-[10px] uppercase tracking-[0.2em] mb-0.5"
                            style={{ color }}
                          >
                            {ui.activities.seasonLabel}
                          </span>
                          <p className="text-foreground/80 leading-relaxed">
                            {t.season}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 border-l-2 pl-3" style={{ borderColor: color }}>
                        <MapPin
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color }}
                        />
                        <div>
                          <span
                            className="block text-[10px] uppercase tracking-[0.2em] mb-0.5"
                            style={{ color }}
                          >
                            {ui.activities.whereLabel}
                          </span>
                          <p className="text-foreground leading-relaxed">
                            {t.where}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey / CTA */}
      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.journey.eyebrow}
            </p>
            <h2 className="heading-section mb-6">{ui.journey.title}</h2>
            <ol className="space-y-5">
              {ui.journey.steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-serif text-2xl text-gold w-10 shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {s.t}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gradient-hero text-primary-foreground p-10 rounded-lg">
            <h3 className="font-serif text-2xl mb-4">{ui.journey.ctaTitle}</h3>
            <p className="text-primary-foreground/85 mb-6 leading-relaxed">
              {ui.journey.ctaText}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {ui.journey.ctaButton}
            </a>
            <p className="text-xs text-primary-foreground/60 mt-4">
              {ui.journey.ctaNote}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial max-w-3xl">
          <div className="mb-10">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.faq.eyebrow}
            </p>
            <h2 className="heading-section">{ui.faq.title}</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {ui.faq.items.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <Link
              to={lang === "pt" ? "/destinos/brasil" : localize("/incoming")}
              className="text-sm text-gold hover:text-gold/80 underline underline-offset-4"
            >
              {ui.links.destinos}
            </Link>
            <Link
              to={lang === "pt" ? "/brasil-vivo" : `/${lang}/brasil-vivo`}
              className="text-sm text-gold hover:text-gold/80 underline underline-offset-4"
            >
              {ui.links.vivo}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrasilAventura;
