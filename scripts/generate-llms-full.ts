/**
 * Gera public/llms-full.txt — versão expandida do llms.txt, com o conteúdo
 * condensado de destinos, grupos, cruzeiros, guias do Brasil e diário.
 * Pensado para que LLMs (ChatGPT, Perplexity, Gemini, Copilot) leiam o
 * catálogo inteiro da Create Travel em uma única requisição.
 *
 * Run:  bun run scripts/generate-llms-full.ts
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { destinations } from "../src/lib/destinations";
import { CONTACT, getHighlightParts, getTagLabel } from "../src/lib/types";
import { stays } from "../src/lib/stays";
import { regions } from "../src/lib/regions";
import { diaryPosts } from "../src/lib/diaryPosts";
import { riverCruises } from "../src/lib/riverCruises";
import { localGuideGroups } from "../src/lib/localGuideGroups";
import { brazilStates } from "../src/lib/brazilStates";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const clean = (s: string, max = 260) => {
  const t = (s || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1).replace(/\s+\S*$/, "");
  return `${cut}…`;
};

const out: string[] = [];
const line = (s = "") => out.push(s);

line("# Create Travel — conteúdo completo (llms-full)");
line();
line(
  "> Versão expandida do /llms.txt. Reúne, em um único arquivo, o catálogo de destinos, viagens em grupo, cruzeiros fluviais, guias do Brasil e artigos do diário da Create Travel, operadora boutique brasileira de viagens sob medida.",
);
line();
line(
  `Create Travel — operadora e agência boutique brasileira de viagens sob medida. Sede em São Paulo, Cadastur ${CONTACT.cadastur}. Atendimento humano por WhatsApp ${CONTACT.whatsapp} · ${CONTACT.email} · ${DOMAIN}`,
);
line();
line(
  "Curadoria autoral: não vende pacote de prateleira. Roteiros privativos desenhados do zero, viagens em grupo com coordenador brasileiro, circuitos com guia local no destino, cruzeiros fluviais e receptivo Brasil multilíngue. Hotéis conhecidos pessoalmente pela equipe, guias locais selecionados, contrato e voucher formais, suporte 24/7 por WhatsApp. Quando um roteiro não tem valor fechado, é publicado como \"sob consulta\" — nunca estimado.",
);
line();
line("Público atendido: viajantes exigentes, famílias, casais, grupos privados e empresas.");
line();
line(`Perguntas frequentes com respostas diretas: ${DOMAIN}/perguntas-frequentes`);
line();

// ---------- Destinos ----------
line("## Destinos");
line();
line(
  `${destinations.length} destinos com roteiro sob medida. Formato: destino (país, região) — melhor época — perfil — destaques — URL.`,
);
line();
for (const d of destinations) {
  const tags = d.tags.map(getTagLabel).join(", ");
  const highlights = d.highlights
    .slice(0, 5)
    .map((h) => getHighlightParts(h).title)
    .join("; ");
  line(`### ${d.name} — ${d.country} (${d.region})`);
  line(`- URL: ${DOMAIN}/destinos/${d.slug}`);
  line(`- Melhor época: ${d.bestTime}`);
  if (tags) line(`- Perfil: ${tags}`);
  if (highlights) line(`- Destaques: ${highlights}`);
  line(`- Resumo: ${clean(d.intro, 320)}`);
  line();
}

// ---------- Regiões ----------
line("## Regiões e circuitos regionais");
line();
for (const r of regions) {
  line(`- [${r.label}](${DOMAIN}/${r.slug}): ${clean(r.intro, 220)}`);
}
line();

// ---------- Grupos com guia local ----------
line("## Viagens em grupo com guia local (saídas garantidas)");
line();
line(
  `${localGuideGroups.length} circuitos com guia profissional no destino, datas de saída garantidas e roteiro fechado. Condições de parcelamento aplicam-se à parte terrestre; a aérea segue a política da companhia escolhida.`,
);
line();
for (const g of localGuideGroups) {
  const departures = g.departures?.slice(0, 6).join(", ") ?? "";
  line(`### ${g.title}`);
  line(`- URL: ${DOMAIN}/grupos-guia-local/${g.slug}`);
  line(
    `- Duração: ${g.days} dias / ${g.nights} noites · Países: ${g.countries.join(", ")}${g.area ? ` · Área: ${g.area}` : ""}`,
  );
  if (departures) line(`- Saídas: ${departures}${g.departures.length > 6 ? " (e outras datas)" : ""}`);
  if (g.highlights?.length) line(`- Destaques: ${g.highlights.slice(0, 5).join("; ")}`);
  line(`- Resumo: ${clean(g.intro, 280)}`);
  line();
}

// ---------- Cruzeiros fluviais ----------
line("## Cruzeiros fluviais");
line();
for (const c of riverCruises) {
  line(`### ${c.name} — ${c.river}`);
  line(`- URL: ${DOMAIN}/cruzeiros-fluviais/${c.slug}`);
  line(
    `- Rota: ${c.route} · Duração: ${c.duration} · Países: ${c.countries.join(", ")} · Melhor época: ${c.bestTime}`,
  );
  if (c.highlights?.length) line(`- Destaques: ${c.highlights.slice(0, 5).join("; ")}`);
  line(`- Resumo: ${clean(c.intro, 260)}`);
  line();
}

// ---------- Hospedagens ----------
line("## Hospedagens selecionadas");
line();
for (const s of stays) {
  line(
    `- [${s.name}](${DOMAIN}/hospedagens/${s.slug}) — ${s.destinationRef} · melhor época: ${s.bestTime}. ${clean(s.whySelected, 200)}`,
  );
}
line();

// ---------- Brasil por estado ----------
line("## Brasil por estado");
line();
for (const st of brazilStates) {
  const name = (st as { name?: string }).name ?? "";
  const slug = (st as { slug?: string }).slug ?? "";
  const intro =
    (st as { intro?: string; longIntro?: string; summary?: string }).intro ??
    (st as { summary?: string }).summary ??
    "";
  if (!slug || !name) continue;
  line(`- [${name}](${DOMAIN}/brasil/${slug}): ${clean(intro, 200)}`);
}
line();

// ---------- Diário / blog ----------
line("## Diário de viagem (guias editoriais)");
line();
for (const p of diaryPosts) {
  line(`### ${p.h1}`);
  line(`- URL: ${DOMAIN}/diario/${p.slug}`);
  line(`- Categoria: ${p.category} · Publicado: ${p.publishedAt} · Leitura: ${p.readingMinutes} min`);
  line(`- Resumo: ${clean(p.metaDescription || p.intro, 280)}`);
  if (p.faq?.length) {
    for (const f of p.faq.slice(0, 3)) {
      line(`- P: ${f.q} R: ${clean(f.a, 240)}`);
    }
  }
  line();
}

// ---------- Contato ----------
line("## Contato e canais oficiais");
line();
line(`- Site: ${DOMAIN}`);
line(`- WhatsApp: ${CONTACT.whatsapp}`);
line(`- E-mail: ${CONTACT.email}`);
line(`- Endereço: ${CONTACT.address}`);
line(`- Cadastur: ${CONTACT.cadastur}`);
line("- Instagram: https://www.instagram.com/createtravel_br");
line();

const target = resolve(__dirname, "../public/llms-full.txt");
const content = out.join("\n");
writeFileSync(target, content, "utf8");
console.log(
  `✅ llms-full.txt: ${(content.length / 1024).toFixed(0)} KB · ${destinations.length} destinos · ${localGuideGroups.length} grupos · ${diaryPosts.length} artigos → ${target}`,
);
