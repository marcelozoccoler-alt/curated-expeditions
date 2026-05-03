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
