/**
 * Vite build plugin: writes static HTML for the foreign-visitor pages
 * (/{en,es,it,de}/incoming/:slug and /{lang}/brazil-guides/:slug) so crawlers
 * that do not run JavaScript (GPTBot, PerplexityBot, ClaudeBot, social
 * previews) read the real title, description and text. React replaces the
 * #root content on load, so visitors see the normal app.
 */
import type { Plugin, ResolvedConfig } from "vite";
import { createServer } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

const SITE = "https://createtravel.tur.br";
const LANGS = ["en", "es", "it", "de"] as const;
const HTML_LANG: Record<string, string> = { en: "en", es: "es", it: "it", de: "de" };
const WA = "5511963693159";

const esc = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const p = (t: string) => `<p>${esc(t)}</p>`;
const sec = (h: string, body: string) => (h || body ? `<section><h2>${esc(h)}</h2>${body}</section>` : "");
const items = (arr: { title: string; text: string }[] = []) =>
  arr.map((i) => `<h3>${esc(i.title)}</h3>${p(i.text)}`).join("");

const QUOTE_MSG: Record<string, (d: string) => string> = {
  en: (d) => `Hello Create Travel! I'm interested in a private trip to ${d}. Could you send me a custom quote?`,
  es: (d) => `¡Hola Create Travel! Me interesa un viaje privado a ${d}. ¿Podrían enviarme un presupuesto personalizado?`,
  it: (d) => `Ciao Create Travel! Sono interessato a un viaggio privato a ${d}. Potete inviarmi un preventivo su misura?`,
  de: (d) => `Hallo Create Travel! Ich interessiere mich für eine private Reise nach ${d}. Können Sie mir ein individuelles Angebot senden?`,
};

interface Page {
  path: string;
  lang: string;
  title: string;
  description: string;
  alternates: Record<string, string>;
  body: string;
  jsonLd: object[];
  /** When set, the page is a legacy URL: canonical points to the target
   *  and a meta-refresh redirects visitors without JS. */
  redirectTo?: string;
}

export function renderHtml(template: string, pg: Page): string {
  const url = SITE + pg.path;
  const canonicalUrl = pg.redirectTo ? SITE + pg.redirectTo : url;
  const alt = Object.entries(pg.alternates)
    .map(([l, path]) => `<link rel="alternate" hreflang="${l}" href="${SITE}${path}" />`)
    .join("\n    ");
  const refresh = pg.redirectTo
    ? `<meta http-equiv="refresh" content="0; url=${canonicalUrl}">\n    `
    : "";
  const head = `<title>${esc(pg.title)}</title>
    <meta name="description" content="${esc(pg.description)}">
    ${refresh}<link rel="canonical" href="${canonicalUrl}" />
    ${alt}
    <link rel="alternate" hreflang="x-default" href="${SITE}${pg.alternates.en ?? pg.path}" />
    <script type="application/ld+json">${JSON.stringify(pg.jsonLd).replace(/</g, "\\u003c")}</script>`;
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${HTML_LANG[pg.lang]}">`)
    .replace(/<title>[\s\S]*?<\/title>\s*<meta name="description"[^>]*>/, head)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(pg.title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(pg.description)}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(pg.title)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${esc(pg.description)}">`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, "")
    .replace("</head>", `<meta property="og:url" content="${canonicalUrl}" /></head>`)
    .replace('<div id="root"></div>', `<div id="root"><main>${pg.body}</main></div>`);
}

function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

const agencyLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Create Travel",
  url: SITE,
  telephone: "+55 11 96369-3159",
  email: "contato@createtravel.tur.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Paulista, 1765, 7º andar, Conj. 72 - Bela Vista",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01311-930",
    addressCountry: "BR",
  },
  foundingDate: "2014-09-12",
  areaServed: "Brazil",
  knowsLanguage: ["en", "es", "pt", "it", "de"],
};

export async function buildPages(load: (id: string) => Promise<any>): Promise<Page[]> {
  const { INCOMING_DESTINO_CONTENT } = await load("/src/lib/incomingDestinoContent.ts");
  const { INCOMING_DESTINATIONS } = await load("/src/lib/incomingDestinations.ts");
  const { BRAZIL_GUIDES, guidePath } = await load("/src/lib/brazilGuides/index.ts");
  const { BRAZIL_PACKAGES, pkgPath, pkgPrice, pkgJsonLd, pkgWhatsApp, guidePackages } = await load("/src/lib/brazilPackage.ts");
  const { INCOMING_COPY } = await load("/src/lib/incomingCopy.ts");
  const { incomingPackageOffers } = await load("/src/lib/incomingPackages.ts");
  const { generateIncomingWhatsAppLink } = await load("/src/lib/whatsappI18n.ts");
  const pages: Page[] = [];
  // The landing pages are actual entry points, not just the detail routes.
  for (const lang of LANGS) {
    const c = INCOMING_COPY[lang];
    const offers = lang === "es" || lang === "en" ? incomingPackageOffers(lang) : [];
    const destinations = INCOMING_DESTINATIONS.map((d: any) => ({
      name: d.name[lang], description: d.blurb[lang], path: guidePath(lang, d.slug),
    }));
    pages.push({
      path: `/${lang}/incoming`, lang, title: c.meta.title, description: c.meta.description,
      alternates: Object.fromEntries(LANGS.map(l => [l, `/${l}/incoming`])),
      body: `<h1>${esc(c.hero.title)}</h1>` + p(c.hero.subtitle)
        + `<p><a href="${esc(generateIncomingWhatsAppLink({ lang }))}">${esc(c.hero.cta)}</a></p>`
        + offers.map((o: any) => sec(o.title, p(`${o.dates} · ${o.duration}`) + p(o.price) + p(o.basis)
          + `<ul>${o.inclusions.map((t: string) => `<li>${esc(t)}</li>`).join("")}</ul>` + p(o.exclusion)
          + `<p><a href="${esc(o.path)}">${esc(o.button)}</a></p><p><a href="${esc(o.whatsapp)}">${esc(o.quote)}</a></p>`)).join("")
        + sec(c.intro.heading, c.intro.paragraphs.map(p).join(""))
        + sec(c.destinations.heading, p(c.destinations.subheading) + destinations.map((d: any) =>
          `<h3><a href="${esc(d.path)}">${esc(d.name)}</a></h3>${p(d.description)}`).join(""))
        + sec(c.process.heading, p(c.process.subheading) + items(c.process.steps))
        + sec(c.trust.heading, `<ul>${c.trust.items.map((t: string) => `<li>${esc(t)}</li>`).join("")}</ul>`)
        + sec(c.expertise.heading, p(c.expertise.lead) + p(c.expertise.destinations) + p(c.expertise.biomes))
        + sec(c.faqs.heading, c.faqs.items.map((f: any) => `<h3>${esc(f.q)}</h3>${p(f.a)}`).join(""))
        + sec(c.cta.heading, p(c.cta.subheading) + `<a href="${esc(generateIncomingWhatsAppLink({ lang }))}">${esc(c.cta.button)}</a>`),
      jsonLd: [agencyLd, {
        "@context": "https://schema.org", "@type": "CollectionPage", url: `${SITE}/${lang}/incoming`,
        name: c.meta.title, description: c.meta.description, inLanguage: lang,
        mainEntity: { "@type": "ItemList", itemListElement: [
          ...destinations.map((d: any) => ({ name: d.name, url: SITE + d.path })),
          ...offers.map((o: any) => ({ name: o.title, url: SITE + o.path })),
        ].map((item, i) => ({ "@type": "ListItem", position: i + 1, ...item })) },
      }],
    });
  }
  for (const pk of BRAZIL_PACKAGES) for (const lang of ["es", "en"]) {
    const c = pk.copy[lang];
    const ext = pk.facts.extension && c.extension
      ? sec(c.extension.title, p(c.extension.text) + p(`${c.from} ${pkgPrice(pk, lang, "EUR", pk.facts.extension.priceEUR)} ${c.perPerson} · ≈ ${pkgPrice(pk, lang, "USD", pk.facts.extension.priceEUR)}`) + c.extension.days.map((d: any) => `<h3>${esc(d.title)}</h3>${p(d.text)}`).join(""))
      : "";
    const others = BRAZIL_PACKAGES.filter((o: any) => o.slug !== pk.slug);
    pages.push({
      path: pkgPath(pk, lang), lang, title: c.title, description: c.description,
      alternates: { es: pkgPath(pk, "es"), en: pkgPath(pk, "en") },
      body: `<h1>${esc(c.h1)}</h1>` + p(c.subtitle) + p(c.dates + " · " + c.duration)
        + p(`${c.from} ${pkgPrice(pk, lang, "EUR")} ${c.perPerson} · ≈ ${pkgPrice(pk, lang, "USD")} · ${c.basis}`)
        + p(pk.facts.route.join(" → "))
        + sec(c.introTitle, p(c.intro) + p(c.landscapes) + p(c.wildlifeNote))
        + c.scenes.map((s: any) => sec(s.name, p(s.label) + p(s.text))).join("")
        + sec(c.seasonTitle, p(c.seasonText))
        + sec(c.itineraryTitle, c.days.map((d: any, i: number) => `<h3>${i + 1} · ${esc(d.title)}</h3>${p(d.text)}`).join(""))
        + ext
        + sec(c.includesTitle, `<ul>${c.includes.map((t: string) => `<li>${esc(t)}</li>`).join("")}</ul>`)
        + sec(c.excludesTitle, c.excludes.map(p).join(""))
        + sec(c.hotelsTitle, pk.facts.hotels.map((h: any, i: number) => p(`${h.name} · ${h.location} · ${h.nights} ${c.nights} · ${c.hotelNotes[i]}`)).join(""))
        + p(c.conditions) + p(c.exchangeNote)
        + sec(c.faqTitle, c.faq.map((f: any) => `<h3>${esc(f.q)}</h3>${p(f.a)}`).join(""))
        + sec(c.guidesTitle, pk.guides.map((g: any) => `<p><a href="${esc(guidePath(lang, g.slug))}">${esc(c.guideLink)}: ${esc(g.name[lang])}</a></p>`).join(""))
        + others.map((o: any) => `<p><a href="${esc(pkgPath(o, lang))}">${esc(o.copy[lang].h1)} · ${esc(o.copy[lang].dates)}</a></p>`).join("")
        + sec(c.finalTitle, p(c.finalText) + `<a href="${esc(pkgWhatsApp(pk, lang))}">${esc(c.cta)}</a>`),
      jsonLd: [agencyLd, pkgJsonLd(pk, lang), faqLd(c.faq)],
    });
  }
  const nameOf = (slug: string, lang: string) =>
    INCOMING_DESTINATIONS.find((d: any) => d.slug === slug)?.name?.[lang] ?? slug;
  const cta = (lang: string, dest: string, label: string) =>
    `<p><a href="https://wa.me/${WA}?text=${encodeURIComponent(QUOTE_MSG[lang](dest))}">${esc(label)}</a></p>`;

  // Legacy /incoming/:slug detail pages now redirect to the Brazil guides
  // (preferred layout, same four languages). Emit static redirect pages so
  // already-indexed URLs keep working for crawlers and visitors without JS.
  for (const slug of Object.keys(INCOMING_DESTINO_CONTENT)) {
    for (const lang of LANGS) {
      const target = guidePath(lang, slug);
      const dest = nameOf(slug, lang);
      pages.push({
        path: `/${lang}/incoming/${slug}`,
        lang,
        title: dest,
        description: dest,
        alternates: {},
        body: `<p><a href="${SITE}${target}">${esc(dest)}</a></p>`,
        jsonLd: [],
        redirectTo: target,
      });
    }
  }

  for (const [slug, map] of Object.entries<any>(BRAZIL_GUIDES)) {
    const alternates: Record<string, string> = { "pt-BR": guidePath("pt", slug) };
    for (const l of LANGS) if (map[l]) alternates[l] = guidePath(l, slug);
    for (const lang of LANGS) {
      const g = map[lang];
      if (!g) continue;
      const dest = g.destinationName ?? nameOf(slug, lang);
      const featured = guidePackages(lang, slug);
      const body = [
        `<h1>${esc(g.h1)}</h1>`,
        p(g.aiAnswer),
        ...(g.intro ?? []).map(p),
        ...featured.map((f: any) => sec(f.title, p(f.text) + `<a href="${esc(f.path)}">${esc(f.button)}</a>`)),
        sec(g.seasons?.heading, p(g.seasons?.intro) + (g.seasons?.windows ?? []).map((w: any) => `<h3>${esc(w.window)}</h3>${p(w.text)}`).join("")),
        sec(g.experiences?.heading, p(g.experiences?.intro) + items(g.experiences?.items)),
        sec(g.profiles?.heading, items(g.profiles?.items)),
        sec(g.itinerary?.heading, p(g.itinerary?.intro) + items(g.itinerary?.items)),
        sec(g.tips?.heading, `<ul>${(g.tips?.items ?? []).map((t: string) => `<li>${esc(t)}</li>`).join("")}</ul>`),
        sec("FAQ", (g.faq ?? []).map((f: any) => `<h3>${esc(f.q)}</h3>${p(f.a)}`).join("")),
        sec(g.cta?.heading, p(g.cta?.subheading) + cta(lang, dest, g.cta?.button)),
      ].join("");
      pages.push({
        path: guidePath(lang, slug),
        lang,
        title: g.metaTitle,
        description: g.metaDescription,
        alternates,
        body,
        jsonLd: [agencyLd, faqLd(g.faq ?? [])],
      });
    }
  }
  return pages;
}

export function prerenderIncoming(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "prerender-incoming",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    async closeBundle() {
      const outDir = resolve(config.root, config.build.outDir);
      const indexPath = join(outDir, "index.html");
      if (!existsSync(indexPath)) return;
      const template = readFileSync(indexPath, "utf8");
      const server = await createServer({
        root: config.root,
        configFile: false,
        resolve: { alias: { "@": resolve(config.root, "src") } },
        server: { middlewareMode: true, hmr: false },
        appType: "custom",
        logLevel: "error",
      });
      try {
        const pages = await buildPages((id) => server.ssrLoadModule(id));
        for (const pg of pages) {
          const dir = join(outDir, pg.path);
          mkdirSync(dir, { recursive: true });
          writeFileSync(join(dir, "index.html"), renderHtml(template, pg));
        }
        console.log(`[prerender-incoming] wrote ${pages.length} static pages`);
      } catch (e) {
        throw new Error(`[prerender-incoming] failed: ${(e as Error).message}`);
      } finally {
        await server.close();
      }
    },
  };
}
