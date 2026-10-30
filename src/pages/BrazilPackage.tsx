import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowDown, ArrowRight, CalendarDays, Check, Compass, MessageCircle, Plane, Globe2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BRAZIL_PACKAGES, findPackage, pkgPath, pkgPrice, pkgJsonLd, pkgWhatsApp, pkgDayLabel, type PackageLang } from "@/lib/brazilPackage";
import lencois from "@/assets/destinations/brasil-lencois-maranhenses.jpg";
import pantanalPhoto from "@/assets/pantanal-jaguar-real.jpg.asset.json";
import rio from "@/assets/states/rio-de-janeiro.jpg";
import amazon from "@/assets/destinations/brasil-amazonia-anavilhanas.jpg";
import salvador from "@/assets/destinations/brasil-salvador.jpg";
import iguazu from "@/assets/destinations/brasil-cataratas-iguacu.jpg";
import paratyPhoto from "@/assets/paraty-santa-rita-real.jpg.asset.json";
import logo from "@/assets/logo.jpg";
import RouteMap from "@/components/RouteMap";

type Credit = { author: string; href: string; note: Record<PackageLang, string>; alt: Record<PackageLang, string> };
const JAGUAR_CREDIT: Credit = {
  author: "Charles J. Sharp", href: "https://commons.wikimedia.org/wiki/File:Jaguar_(Panthera_onca_palustris)_female_Piquiri_River_2.JPG",
  note: { es: "Río Piquiri, Pantanal. Foto redimensionada y encuadrada; no garantiza avistamientos en esta ruta.", en: "Piquiri River, Pantanal. Resized and framed photograph; sightings on this itinerary are not guaranteed." },
  alt: { es: "Jaguar fotografiado en el río Piquiri, Pantanal", en: "Jaguar photographed by the Piquiri River, Pantanal" },
};
const PARATY_CREDIT: Credit = {
  author: "Rejane Sarmento", href: "https://commons.wikimedia.org/wiki/File:Igreja_de_Santa_Rita,_no_centro_hist%C3%B3rico_de_Paraty.jpg",
  note: { es: "Iglesia de Santa Rita, centro histórico de Paraty. Foto redimensionada.", en: "Santa Rita Church, Paraty historic centre. Resized photograph." },
  alt: { es: "Iglesia de Santa Rita en el centro histórico de Paraty, con montañas de la Mata Atlántica", en: "Santa Rita Church in Paraty's historic centre, with Atlantic Forest mountains behind" },
};

const VISUALS: Record<string, { hero: string; final: string; scenes: string[]; credits?: (Credit | undefined)[]; extension?: string }> = {
  "rio-pantanal-lencois-august-2027": { hero: lencois, final: lencois, scenes: [pantanalPhoto.url, lencois, rio], credits: [JAGUAR_CREDIT] },
  "amazon-lencois-salvador-iguazu-rio-2027": { hero: iguazu, final: lencois, scenes: [amazon, lencois, salvador, iguazu, rio], extension: pantanalPhoto.url },
  "amazon-lencois-salvador-iguazu-pantanal-rio-2027": { hero: iguazu, final: lencois, scenes: [amazon, lencois, salvador, iguazu, pantanalPhoto.url, rio], credits: [undefined, undefined, undefined, undefined, JAGUAR_CREDIT] },
  "paraty-iguazu-pantanal-rio-april-2027": { hero: iguazu, final: rio, scenes: [paratyPhoto.url, iguazu, pantanalPhoto.url, rio], credits: [PARATY_CREDIT, undefined, JAGUAR_CREDIT] },
};

export default function BrazilPackage() {
  const { lang, slug } = useParams();
  const pkg = findPackage(slug);
  if (lang !== "es" && lang !== "en") return <Navigate to={pkgPath(pkg ?? BRAZIL_PACKAGES[0], "es")} replace />;
  if (!pkg) return <Navigate to={`/${lang}/incoming`} replace />;
  const copy = pkg.copy[lang];
  const v = VISUALS[pkg.slug];
  const whatsapp = pkgWhatsApp(pkg, lang);
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: copy.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const Quote = ({ label = copy.cta }: { label?: string }) => <Button asChild size="lg" variant="secondary" className="h-auto min-h-12 whitespace-normal py-3 text-center"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />{label}<ArrowRight /></a></Button>;
  const others = BRAZIL_PACKAGES.filter(p => p.slug !== pkg.slug);
  const ext = pkg.facts.extension && copy.extension ? { facts: pkg.facts.extension, copy: copy.extension } : undefined;

  return <div className="package-page bg-background text-foreground">
    <SEO title={copy.title} description={copy.description} canonicalPath={pkgPath(pkg, lang)} inLanguage={lang} jsonLd={[pkgJsonLd(pkg, lang), faqLd]} />
    <Helmet><html lang={lang} />{(["es", "en"] as PackageLang[]).map(l => <link key={l} rel="alternate" hrefLang={l} href={`https://createtravel.tur.br${pkgPath(pkg, l)}`} />)}<link rel="alternate" hrefLang="x-default" href={`https://createtravel.tur.br${pkgPath(pkg, "es")}`} /></Helmet>
    <header className="bg-background border-b border-border">
      <div className="container-editorial flex min-h-20 items-center justify-between gap-4 py-3">
        <Link to={`/${lang}/incoming`} aria-label="Create Travel"><img src={logo} alt="Create Travel" className="w-28 sm:w-36 h-14 object-contain" /></Link>
        <nav aria-label="Language" className="flex items-center gap-1"><Globe2 className="mr-2 h-4 w-4 text-muted-foreground" />{(["es", "en"] as PackageLang[]).map(l => <Button key={l} asChild variant={l === lang ? "default" : "ghost"} size="sm"><Link to={pkgPath(pkg, l)} lang={l} aria-current={l === lang ? "page" : undefined}>{l === "es" ? "Español" : "English"}</Link></Button>)}</nav>
      </div>
    </header>
    <main>
      <section className="package-hero relative isolate overflow-hidden flex items-end">
        <img src={v.hero} alt={copy.h1} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="package-photo-shade absolute inset-0 -z-10" />
        <div className="container-editorial w-full py-10 md:py-14 text-primary-foreground">
          <p className="text-xs sm:text-sm mb-5">{copy.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-6xl max-w-3xl leading-[1.08] mb-5">{copy.h1}</h1>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed mb-7">{copy.subtitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm mb-8"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{copy.dates}</span><span className="flex items-center gap-2"><Compass className="h-4 w-4" />{copy.duration}</span></div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6"><div><p className="text-sm mb-1">{copy.from}</p><p className="font-serif text-4xl">{pkgPrice(pkg, lang, "EUR")} <span className="font-sans text-sm">{copy.perPerson}</span></p><p className="text-sm mt-2">≈ {pkgPrice(pkg, lang, "USD")} · {copy.basis}</p></div><Quote /></div>
          <Button asChild variant="link" className="text-primary-foreground px-0 mt-6"><a href="#itinerary">{copy.viewRoute}<ArrowDown /></a></Button>
        </div>
      </section>
      <div className="border-b border-border py-6"><div className="container-editorial flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">{pkg.facts.route.map((stop, i) => <span key={stop + i} className="flex items-center gap-5">{i > 0 && <ArrowRight className="h-4 w-4" />}{stop}</span>)}</div></div>
      <section className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-8 md:gap-16 mb-12"><h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-lg">{copy.introTitle}</h2><div><p className="text-editorial">{copy.intro}</p><p className="text-muted-foreground mt-5 leading-relaxed">{copy.landscapes}</p></div></div>
        <p className="border-l-2 border-emerald pl-5 mb-10 text-muted-foreground leading-relaxed">{copy.wildlifeNote}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{copy.scenes.map((scene, i) => { const credit = v.credits?.[i]; return <article key={scene.name}><figure className="mb-6"><img src={v.scenes[i]} alt={credit ? credit.alt[lang] : scene.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />{credit && <figcaption className="text-xs text-muted-foreground leading-relaxed mt-2"><a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline">{credit.author}</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">CC BY-SA 4.0</a> · {credit.note[lang]}</figcaption>}</figure><p className="text-xs text-emerald mb-3">{scene.label}</p><h3 className="font-serif text-2xl mb-3">{scene.name}</h3><p className="text-muted-foreground leading-relaxed text-sm">{scene.text}</p></article>; })}</div>
      </section>
      <section className="bg-muted py-12"><div className="container-editorial grid md:grid-cols-[1fr_1.5fr] gap-6 items-start"><h2 className="font-serif text-3xl flex gap-3"><CalendarDays className="h-6 w-6 text-emerald shrink-0 mt-1" />{copy.seasonTitle}</h2><p className="text-muted-foreground leading-relaxed">{copy.seasonText}</p></div></section>
      <section id="itinerary" className="container-editorial py-16 md:py-20 scroll-mt-6"><div className="grid md:grid-cols-[1fr_1.7fr] gap-10 md:gap-20"><div className="md:sticky md:top-6 self-start"><p className="text-xs text-emerald mb-3">{copy.dates}</p><h2 className="font-serif text-3xl md:text-4xl mb-5">{copy.itineraryTitle}</h2><p className="text-muted-foreground mb-6">{copy.duration}</p><RouteMap route={pkg.facts.route} title={lang === "es" ? `Mapa del itinerario: ${pkg.facts.route.join(" → ")}` : `Route map: ${pkg.facts.route.join(" → ")}`} /><div className="mt-6"><Quote /></div></div><ol className="space-y-0">{copy.days.map((day, i) => <li key={day.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6 first:pt-0"><div className="text-emerald"><p className="font-serif text-3xl">{String(i + 1).padStart(2, "0")}</p><p className="text-xs mt-1">{pkgDayLabel(pkg, i)}</p></div><div><h3 className="font-serif text-xl mb-2">{day.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{day.text}</p></div></li>)}</ol></div></section>
      {ext && <section className="relative isolate overflow-hidden py-16 md:py-20"><img src={v.extension ?? v.final} alt={JAGUAR_CREDIT.alt[lang]} className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="package-photo-shade absolute inset-0 -z-10" /><div className="container-editorial grid md:grid-cols-[1.2fr_1fr] gap-10 text-primary-foreground"><div><p className="text-xs mb-4">{ext.copy.label}</p><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">{ext.copy.title}</h2><p className="leading-relaxed mb-6">{ext.copy.text}</p><p className="text-sm mb-1">{copy.from} · {copy.perPerson}</p><p className="font-serif text-4xl mb-1">{pkgPrice(pkg, lang, "EUR", ext.facts.priceEUR)}</p><p className="text-sm mb-6">≈ {pkgPrice(pkg, lang, "USD", ext.facts.priceEUR)} · {ext.facts.days} {lang === "es" ? "días" : "days"} · {ext.facts.nights} {copy.nights}</p><div className="flex flex-wrap gap-3"><Quote />{ext.facts.slug && <Button asChild size="lg" variant="outline" className="h-auto min-h-12 whitespace-normal py-3 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to={`/${lang}/brazil-packages/${ext.facts.slug}`}>{lang === "es" ? "Ver el itinerario completo de 20 días" : "See the full 20-day itinerary"}<ArrowRight /></Link></Button>}</div></div><ol className="space-y-4 self-end">{ext.copy.days.map((d, i) => <li key={d.title} className="border-t border-primary-foreground/40 pt-3"><p className="text-xs mb-1">{lang === "es" ? "Día" : "Day"} {14 + i}</p><h3 className="font-serif text-lg">{d.title}</h3><p className="text-sm leading-relaxed">{d.text}</p></li>)}</ol></div><p className="container-editorial text-xs text-primary-foreground/80 mt-8"><a href={JAGUAR_CREDIT.href} target="_blank" rel="noopener noreferrer" className="underline">{JAGUAR_CREDIT.author}</a> · CC BY-SA 4.0 · {JAGUAR_CREDIT.note[lang]}</p></section>}
      <section className="bg-muted py-16"><div className="container-editorial grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-20"><div><h2 className="font-serif text-3xl mb-8">{copy.includesTitle}</h2><ul className="space-y-5">{copy.includes.map(text => <li key={text} className="flex gap-3 text-sm leading-relaxed"><Check className="h-4 w-4 text-emerald shrink-0 mt-1" /><span>{text}</span></li>)}</ul></div><div><h2 className="font-serif text-2xl mb-6">{copy.excludesTitle}</h2><ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">{copy.excludes.map(text => <li key={text} className="border-b border-border pb-4">{text}</li>)}</ul></div></div></section>
      <section className="container-editorial py-16"><h2 className="font-serif text-3xl mb-10">{copy.hotelsTitle}</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{pkg.facts.hotels.map((hotel, i) => <div key={hotel.name} className="border-t-2 border-emerald pt-5"><p className="text-xs text-muted-foreground mb-3">{hotel.location} · {hotel.nights} {copy.nights}</p><h3 className="font-serif text-xl mb-3">{hotel.name}</h3><p className="text-sm text-muted-foreground">{copy.hotelNotes[i]}</p></div>)}</div></section>
      <section className="bg-primary text-primary-foreground py-16 md:py-20"><div className="container-editorial grid md:grid-cols-2 gap-10 md:gap-20"><div><Plane className="h-7 w-7 mb-6" /><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">{copy.priceTitle}</h2><p className="text-sm leading-relaxed text-primary-foreground/90">{copy.conditions}</p></div><div><p className="text-sm mb-2">{copy.from} · {copy.perPerson}</p><p className="text-5xl font-serif mb-3">{pkgPrice(pkg, lang, "EUR")}</p><p className="text-xl mb-7">≈ {pkgPrice(pkg, lang, "USD")}</p><Quote /><p className="text-xs leading-relaxed mt-6 text-primary-foreground/90">{copy.exchangeNote} <a href={pkg.facts.exchange.source} target="_blank" rel="noopener noreferrer" className="underline">Wise ↗</a></p></div></div></section>
      <section className="container-editorial max-w-4xl py-16 md:py-20"><h2 className="font-serif text-3xl md:text-4xl mb-8">{copy.faqTitle}</h2><Accordion type="single" collapsible>{copy.faq.map((f, i) => <AccordionItem key={f.q} value={String(i)}><AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section className="relative isolate py-16 md:py-20 overflow-hidden"><img src={v.final} alt="" className="absolute inset-0 -z-20 w-full h-full object-cover" loading="lazy" /><div className="package-photo-shade absolute inset-0 -z-10" /><div className="container-editorial max-w-4xl text-primary-foreground text-center"><h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">{copy.finalTitle}</h2><p className="leading-relaxed max-w-xl mx-auto mb-8">{copy.finalText}</p><Quote label={copy.contact} /></div></section>
      <section className="container-editorial py-12"><h2 className="font-serif text-3xl mb-6">{copy.guidesTitle}</h2><nav className="flex flex-wrap gap-4" aria-label={copy.guidesTitle}>{pkg.guides.map(g => <Button asChild variant="outline" key={g.slug} className="h-auto whitespace-normal py-3"><Link to={`/${lang}/brazil-guides/${g.slug}`}>{copy.guideLink}: {g.name[lang]}<ArrowRight className="shrink-0" /></Link></Button>)}</nav></section>
      {others.length > 0 && <section className="border-t border-border"><div className="container-editorial py-12"><h2 className="font-serif text-3xl mb-6">{lang === "es" ? "Otros viajes por Brasil" : "More Brazil journeys"}</h2><div className="grid md:grid-cols-2 gap-6">{others.map(o => <Link key={o.slug} to={pkgPath(o, lang)} className="block border border-border p-6 hover:border-emerald transition-colors"><p className="text-xs text-emerald mb-2">{o.copy[lang].dates} · {o.copy[lang].duration}</p><h3 className="font-serif text-2xl mb-2">{o.copy[lang].h1}</h3><p className="text-sm text-muted-foreground">{o.copy[lang].from} {pkgPrice(o, lang, "EUR")} {o.copy[lang].perPerson}</p></Link>)}</div></div></section>}
    </main>
    <footer className="container-editorial py-8 flex flex-col sm:flex-row justify-between gap-5 text-sm text-muted-foreground"><div><p className="font-serif text-xl text-primary mb-2">Create Travel</p><a href="mailto:contato@createtravel.tur.br">contato@createtravel.tur.br</a><p className="mt-1">São Paulo · Brasil</p></div><Button asChild variant="link" className="self-start"><Link to={`/${lang}/incoming`}>{copy.back}<ArrowRight /></Link></Button></footer>
  </div>;
}
