/**
 * Generates public/sitemap.xml from the destination library and SEO rules.
 * Run via:  bun run scripts/generate-sitemap.ts
 *
 * Lists all indexable canonical URLs:
 *  - / (home)
 *  - /destinos (+ pagination)
 *  - /destinos?c=<continent> (+ pagination)
 *  - /destinos?tags=<single-tag> (+ pagination)
 *  - /destinos/<slug> for every destination
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { destinations } from "../src/lib/destinations";
import { CONTINENTS, TAGS, CONTACT } from "../src/lib/types";
import { regions } from "../src/lib/regions";
import { stays } from "../src/lib/stays";
import { niches } from "../src/lib/niches";
import { brazilStates } from "../src/lib/brazilStates";
import { diaryPosts } from "../src/lib/diaryPosts";
import { pacotes } from "../src/lib/comercialPacotes";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAGE_SIZE = 12;
const DOMAIN = CONTACT.domain.replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

type Url = { loc: string; priority: number; changefreq: string };

const urls: Url[] = [];

const push = (path: string, priority = 0.5, changefreq = "weekly") => {
  // XML-escape & for query strings
  const loc = `${DOMAIN}${path}`.replace(/&/g, "&amp;");
  urls.push({ loc, priority, changefreq });
};

// Home
push("/", 1.0, "weekly");

// Destinos root + pagination
const total = destinations.length;
const rootPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
push("/destinos", 0.9, "weekly");
for (let p = 2; p <= rootPages; p++) push(`/destinos?page=${p}`, 0.6);

// Per continent
for (const c of CONTINENTS) {
  const count = destinations.filter(
    (d) => d.continent.toLowerCase() === c.name.toLowerCase()
  ).length;
  if (count === 0) continue;
  const pages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  push(`/destinos?c=${c.id}`, 0.8);
  for (let p = 2; p <= pages; p++) push(`/destinos?c=${c.id}&page=${p}`, 0.5);
}

// Per single tag
for (const t of TAGS) {
  const count = destinations.filter((d) => d.tags.includes(t.id)).length;
  if (count === 0) continue;
  const pages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  push(`/destinos?tags=${t.id}`, 0.7);
  for (let p = 2; p <= pages; p++) push(`/destinos?tags=${t.id}&page=${p}`, 0.4);
}

// Individual destinations
for (const d of destinations) {
  push(`/destinos/${d.slug}`, 0.8, "monthly");
}

// Experiências index + per tag (with pagination)
push("/experiencias", 0.8, "weekly");
for (const t of TAGS) {
  const count = destinations.filter((d) => d.tags.includes(t.id)).length;
  if (count === 0) continue;
  const pages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  push(`/experiencias/${t.id}`, 0.7);
  for (let p = 2; p <= pages; p++) push(`/experiencias/${t.id}?page=${p}`, 0.4);
}

// Hospedagens
push("/hospedagens", 0.8, "weekly");
for (const s of stays) push(`/hospedagens/${s.slug}`, 0.7, "monthly");

// Guias autorais
push("/guias", 0.8, "weekly");
for (const n of niches) push(`/guias/${n.slug}`, 0.8, "monthly");

// Short SEO regional landings (/:regionSlug)
for (const r of regions) push(`/${r.slug}`, 0.9, "weekly");

// Static pages
push("/sobre", 0.5, "monthly");
push("/contato", 0.5, "monthly");

// Brasil — landings temáticas + estados
push("/brasil-aventura", 0.85, "weekly");
push("/brasil-vivo", 0.85, "weekly");
push("/crie-seu-grupo", 0.85, "weekly");
push("/brasil", 0.85, "weekly");
for (const s of brazilStates) push(`/brasil/${s.slug}`, 0.7, "monthly");

// Grupos específicos
push("/grupos/marrocos-2026", 0.8, "monthly");

// Diário editorial
push("/diario", 0.9, "weekly");
for (const p of diaryPosts) push(`/diario/${p.slug}`, 0.8, "monthly");

// Pacotes comerciais (alta intenção)
for (const p of pacotes) push(`/pacote/${p.slug}`, 0.9, "monthly");



// Multilingual incoming landing pages (target foreigners searching Brazil)
const INCOMING_LANGS = ["en", "es", "it", "de"] as const;
for (const lang of INCOMING_LANGS) {
  push(`/${lang}/incoming`, 0.9, "weekly");
  push(`/${lang}`, 0.85, "weekly");
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, "utf8");

console.log(`✅ sitemap.xml: ${urls.length} URLs → ${outPath}`);
