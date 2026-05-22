import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Footprints,
  HandHeart,
  Microscope,
  ExternalLink,
  MapPin,
  ShieldCheck,
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
import { BIOMES } from "@/lib/biomes";
import {
  ENDANGERED_SPECIES,
  CONSERVATION_PROJECTS,
  STATUS_COLOR,
} from "@/lib/conservation";
import {
  BRASIL_VIVO_UI,
  SPECIES_I18N,
  PROJECTS_I18N,
} from "@/lib/brasilVivoCopy";
import { useLang, useLocalizedPath } from "@/hooks/useLang";
import { toContentLang } from "@/i18n/config";

import heroImg from "@/assets/incoming-biomes-hero.jpg";
import amazoniaImg from "@/assets/destinations/brasil-amazonia-anavilhanas.jpg";
import cerradoImg from "@/assets/destinations/brasil-chapada-dos-veadeiros.jpg";
import mataAtlanticaImg from "@/assets/destinations/brasil-rio-de-janeiro.jpg";
import caatingaImg from "@/assets/destinations/brasil-chapada-diamantina.jpg";
import pantanalImg from "@/assets/destinations/brasil-pantanal-norte.jpg";
import pampaImg from "@/assets/states/rio-grande-do-sul.jpg";
import costaImg from "@/assets/destinations/brasil-fernando-de-noronha.jpg";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const BIOME_IMAGE = {
  amazonia: amazoniaImg,
  cerrado: cerradoImg,
  "mata-atlantica": mataAtlanticaImg,
  caatinga: caatingaImg,
  pantanal: pantanalImg,
  pampa: pampaImg,
  costa: costaImg,
} as const;

const PHILOSOPHY_ICONS = [Leaf, Footprints, HandHeart, Microscope];

const BrasilVivo = () => {
  const lang = useLang();
  const localize = useLocalizedPath();
  const ui = BRASIL_VIVO_UI[cLang];

  const conservationWhatsApp = `https://wa.me/${
    CONTACT.whatsappNumber
  }?text=${encodeURIComponent(ui.whatsappMessage)}`;

  const canonicalPath =
    lang === "pt" ? "/brasil-vivo" : `/${lang}/brasil-vivo`;

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
              href={conservationWhatsApp}
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
              const Icon = PHILOSOPHY_ICONS[i] ?? Leaf;
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

      {/* Biomes */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.biomes.eyebrow}
            </p>
            <h2 className="heading-section mb-4">{ui.biomes.title}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {ui.biomes.lead}
            </p>
          </div>

          <div className="space-y-12">
            {BIOMES.map((b, idx) => (
              <motion.article
                key={b.id}
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
                    src={BIOME_IMAGE[b.id]}
                    alt={b.name[cLang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs uppercase tracking-wider text-white"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.name[cLang]}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    {b.name[cLang]}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed mb-5">
                    {b.description[cLang]}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        {ui.biomes.faunaLabel}
                      </span>
                      <p className="text-foreground/80 leading-relaxed">
                        {b.fauna[cLang]}
                      </p>
                    </div>
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        {ui.biomes.floraLabel}
                      </span>
                      <p className="text-foreground/80 leading-relaxed">
                        {b.flora[cLang]}
                      </p>
                    </div>
                    <div className="border-l-2 pl-3" style={{ borderColor: b.color }}>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        {ui.biomes.wowLabel}
                      </span>
                      <p className="text-foreground leading-relaxed">
                        {b.wow[cLang]}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Endangered species */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.species.eyebrow}
            </p>
            <h2 className="heading-section mb-4">{ui.species.title}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {ui.species.lead}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENDANGERED_SPECIES.map((s) => {
              const tr = SPECIES_I18N[s.id]?.[cLang];
              return (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-border rounded-lg p-5 flex flex-col bg-card"
                >
                  <span
                    className="self-start text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded-sm text-white mb-3"
                    style={{ backgroundColor: STATUS_COLOR[s.status] }}
                  >
                    {ui.iucnStatusLabel[s.status]}
                  </span>
                  <h3 className="font-serif text-lg text-foreground leading-tight">
                    {tr?.commonName ?? s.commonName}
                  </h3>
                  <p className="text-xs italic text-muted-foreground mb-3">
                    {s.scientificName}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                    {tr?.whyItMatters ?? s.whyItMatters}
                  </p>
                  <div className="mt-auto pt-3 border-t border-border/60">
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-gold mb-1">
                      <MapPin size={10} />
                      {ui.species.whereLabel}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tr?.whereToSee ?? s.whereToSee}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conservation projects */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.projects.eyebrow}
            </p>
            <h2 className="heading-section mb-4">{ui.projects.title}</h2>
            <p className="text-foreground/80 leading-relaxed">
              {ui.projects.lead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CONSERVATION_PROJECTS.map((p) => {
              const tr = PROJECTS_I18N[p.id]?.[cLang];
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-border rounded-lg p-6 bg-background flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                        {tr?.focus ?? p.focus}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                    {tr?.description ?? p.description}
                  </p>
                  <div className="border-l-2 border-gold pl-3 mb-4">
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-gold mb-1">
                      {ui.projects.travelerLabel}
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {tr?.travelerLink ?? p.travelerLink}
                    </p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-sm text-gold hover:text-gold/80 transition-colors"
                  >
                    {ui.projects.visit}
                    <ExternalLink size={14} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How your trip preserves */}
      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              {ui.cycle.eyebrow}
            </p>
            <h2 className="heading-section mb-6">{ui.cycle.title}</h2>
            <ol className="space-y-5">
              {ui.cycle.steps.map((s) => (
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
            <h3 className="font-serif text-2xl mb-4">{ui.cycle.ctaTitle}</h3>
            <p className="text-primary-foreground/85 mb-6 leading-relaxed">
              {ui.cycle.ctaText}
            </p>
            <a
              href={conservationWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              {ui.cycle.ctaButton}
            </a>
            <p className="text-xs text-primary-foreground/60 mt-4">
              {ui.cycle.ctaNote}
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
              to={localize("/sobre")}
              className="text-sm text-gold hover:text-gold/80 underline underline-offset-4"
            >
              {ui.links.sobre}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrasilVivo;
