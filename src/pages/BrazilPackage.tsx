import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowDown, ArrowRight, CalendarDays, Check, Compass, MessageCircle, Plane, Globe2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PACKAGE_COPY, PACKAGE_FACTS, PACKAGE_SLUG, packagePath, packagePrice, packageJsonLd, packageWhatsApp, type PackageLang } from "@/lib/brazilPackage";
import lencois from "@/assets/destinations/brasil-lencois-maranhenses.jpg";
import pantanalPhoto from "@/assets/pantanal-jaguar-real.jpg.asset.json";
import rio from "@/assets/states/rio-de-janeiro.jpg";
import logo from "@/assets/logo.jpg";

export default function BrazilPackage() {
  const { lang, slug } = useParams();
  if (lang !== "es" && lang !== "en") return <Navigate to={packagePath("es")} replace />;
  if (slug !== PACKAGE_SLUG) return <Navigate to={`/${lang}/incoming`} replace />;
  const copy = PACKAGE_COPY[lang];
  const whatsapp = packageWhatsApp(lang);
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: copy.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const Quote = ({ label = copy.cta }: { label?: string }) => <Button asChild size="lg" variant="secondary" className="h-auto min-h-12 whitespace-normal py-3 text-center"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />{label}<ArrowRight /></a></Button>;

  return <div className="package-page bg-background text-foreground">
    <SEO title={copy.title} description={copy.description} canonicalPath={packagePath(lang)} inLanguage={lang} jsonLd={[packageJsonLd(lang), faqLd]} />
    <Helmet><html lang={lang} />{(["es", "en"] as PackageLang[]).map(l => <link key={l} rel="alternate" hrefLang={l} href={`https://createtravel.tur.br${packagePath(l)}`} />)}<link rel="alternate" hrefLang="x-default" href={`https://createtravel.tur.br${packagePath("es")}`} /></Helmet>
    <header className="bg-background border-b border-border">
      <div className="container-editorial flex min-h-20 items-center justify-between gap-4 py-3">
        <Link to={`/${lang}/incoming`} aria-label="Create Travel"><img src={logo} alt="Create Travel" className="w-28 sm:w-36 h-14 object-contain" /></Link>
        <nav aria-label="Language" className="flex items-center gap-1"><Globe2 className="mr-2 h-4 w-4 text-muted-foreground" />{(["es", "en"] as PackageLang[]).map(l => <Button key={l} asChild variant={l === lang ? "default" : "ghost"} size="sm"><Link to={packagePath(l)} lang={l} aria-current={l === lang ? "page" : undefined}>{l === "es" ? "Español" : "English"}</Link></Button>)}</nav>
      </div>
    </header>
    <main>
      <section className="package-hero relative isolate overflow-hidden flex items-end">
        <img src={lencois} alt="Lençóis Maranhenses" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="package-photo-shade absolute inset-0 -z-10" />
        <div className="container-editorial w-full py-10 md:py-14 text-primary-foreground">
          <p className="text-xs sm:text-sm mb-5">{copy.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-6xl max-w-3xl leading-[1.08] mb-5">{copy.h1}</h1>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-7">{copy.subtitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm mb-8"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{copy.dates}</span><span className="flex items-center gap-2"><Compass className="h-4 w-4" />{copy.duration}</span></div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6"><div><p className="text-sm mb-1">{copy.from}</p><p className="font-serif text-4xl">{packagePrice(lang, "EUR")} <span className="font-sans text-sm">{copy.perPerson}</span></p><p className="text-sm mt-2">≈ {packagePrice(lang, "USD")} · {copy.basis}</p></div><Quote /></div>
          <Button asChild variant="link" className="text-primary-foreground px-0 mt-6"><a href="#itinerary">{copy.viewRoute}<ArrowDown /></a></Button>
        </div>
      </section>
      <div className="border-b border-border py-6"><div className="container-editorial flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground"><span>Rio de Janeiro</span><ArrowRight className="h-4 w-4" /><span>Pantanal · Aquidauana</span><ArrowRight className="h-4 w-4" /><span>São Luís · Lençóis</span><ArrowRight className="h-4 w-4" /><span>Rio de Janeiro</span></div></div>
      <section className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-16 mb-12"><h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-lg">{copy.introTitle}</h2><div><p className="text-editorial">{copy.intro}</p><p className="text-muted-foreground mt-5 leading-relaxed">{copy.landscapes}</p></div></div>
        <div className="grid md:grid-cols-3 gap-8">{copy.scenes.map((scene, i) => <article key={scene.name}><figure className="mb-6"><img src={[pantanalPhoto.url, lencois, rio][i]} alt={i === 0 ? (lang === "es" ? "Jaguar fotografiado en el río Piquiri, Pantanal" : "Jaguar photographed by the Piquiri River, Pantanal") : scene.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />{i === 0 && <figcaption className="text-xs text-muted-foreground leading-relaxed mt-2"><a href="https://commons.wikimedia.org/wiki/File:Jaguar_(Panthera_onca_palustris)_female_Piquiri_River_2.JPG" target="_blank" rel="noopener noreferrer" className="underline">Charles J. Sharp</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a> · {lang === "es" ? "Río Piquiri, Pantanal. Foto redimensionada y encuadrada; no garantiza avistamientos en esta ruta." : "Piquiri River, Pantanal. Resized and framed photograph; sightings on this itinerary are not guaranteed."}</figcaption>}</figure><p className="text-xs text-emerald mb-3">{scene.label}</p><h3 className="font-serif text-2xl mb-3">{scene.name}</h3><p className="text-muted-foreground leading-relaxed text-sm">{scene.text}</p></article>)}</div>
      </section>
      <section className="bg-muted py-12"><div className="container-editorial grid md:grid-cols-[1fr_1.5fr] gap-6 items-start"><h2 className="font-serif text-3xl flex gap-3"><CalendarDays className="h-6 w-6 text-emerald shrink-0 mt-1" />{copy.seasonTitle}</h2><p className="text-muted-foreground leading-relaxed">{copy.seasonText}</p></div></section>
      <section id="itinerary" className="container-editorial py-16 md:py-20 scroll-mt-6"><div className="grid md:grid-cols-[1fr_1.7fr] gap-10 md:gap-20"><div><p className="text-xs text-emerald mb-3">{copy.dates}</p><h2 className="font-serif text-3xl md:text-4xl mb-5">{copy.itineraryTitle}</h2><p className="text-muted-foreground mb-6">{copy.duration}</p><Quote /></div><ol className="space-y-0">{copy.days.map((day, i) => <li key={day.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6 first:pt-0"><div className="text-emerald"><p className="font-serif text-3xl">{String(i + 1).padStart(2, "0")}</p><p className="text-xs mt-1">{String(i + 7).padStart(2, "0")}/08</p></div><div><h3 className="font-serif text-xl mb-2">{day.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{day.text}</p></div></li>)}</ol></div></section>
      <section className="bg-muted py-16"><div className="container-editorial grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-20"><div><h2 className="font-serif text-3xl mb-8">{copy.includesTitle}</h2><ul className="space-y-5">{copy.includes.map(text => <li key={text} className="flex gap-3 text-sm leading-relaxed"><Check className="h-4 w-4 text-emerald shrink-0 mt-1" /><span>{text}</span></li>)}</ul></div><div><h2 className="font-serif text-2xl mb-6">{copy.excludesTitle}</h2><ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">{copy.excludes.map(text => <li key={text} className="border-b border-border pb-4">{text}</li>)}</ul></div></div></section>
      <section className="container-editorial py-16"><h2 className="font-serif text-3xl mb-10">{copy.hotelsTitle}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{PACKAGE_FACTS.hotels.map((hotel, i) => <div key={hotel.name} className="border-t-2 border-emerald pt-5"><p className="text-xs text-muted-foreground mb-3">{hotel.location} · {hotel.nights} {copy.nights}</p><h3 className="font-serif text-xl mb-3">{hotel.name}</h3><p className="text-sm text-muted-foreground">{copy.hotelNotes[i]}</p></div>)}</div></section>
      <section className="bg-primary text-primary-foreground py-16 md:py-20"><div className="container-editorial grid md:grid-cols-2 gap-10 md:gap-20"><div><Plane className="h-7 w-7 mb-6" /><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">{copy.priceTitle}</h2><p className="text-sm leading-relaxed text-primary-foreground/90">{copy.conditions}</p></div><div><p className="text-sm mb-2">{copy.from} · {copy.perPerson}</p><p className="text-5xl font-serif mb-3">{packagePrice(lang, "EUR")}</p><p className="text-xl mb-7">≈ {packagePrice(lang, "USD")}</p><Quote /><p className="text-xs leading-relaxed mt-6 text-primary-foreground/90">{copy.exchangeNote} <a href={PACKAGE_FACTS.exchange.source} target="_blank" rel="noopener noreferrer" className="underline">Wise ↗</a></p></div></div></section>
      <section className="container-editorial max-w-4xl py-16 md:py-20"><h2 className="font-serif text-3xl md:text-4xl mb-8">{copy.faqTitle}</h2><Accordion type="single" collapsible>{copy.faq.map((f, i) => <AccordionItem key={f.q} value={String(i)}><AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section className="relative isolate py-16 md:py-20 overflow-hidden"><img src={lencois} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" loading="lazy" /><div className="package-photo-shade absolute inset-0 -z-10" /><div className="container-editorial max-w-4xl text-primary-foreground text-center"><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">{copy.finalTitle}</h2><p className="leading-relaxed max-w-xl mx-auto mb-8">{copy.finalText}</p><Quote label={copy.contact} /></div></section>
    </main>
    <footer className="container-editorial py-8 flex flex-col sm:flex-row justify-between gap-5 text-sm text-muted-foreground"><div><p className="font-serif text-xl text-primary mb-2">Create Travel</p><a href="mailto:contato@createtravel.tur.br">contato@createtravel.tur.br</a><p className="mt-1">São Paulo · Brasil</p></div><Button asChild variant="link" className="self-start"><Link to={`/${lang}/incoming`}>{copy.back}<ArrowRight /></Link></Button></footer>
  </div>;
}