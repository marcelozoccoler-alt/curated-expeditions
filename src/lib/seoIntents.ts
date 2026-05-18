/**
 * SEO semântico para Google + Google AI Overviews + ChatGPT/Perplexity/Gemini.
 *
 * Gera dinamicamente, a partir dos dados que já existem em cada destino/
 * hospedagem/estado/região:
 *
 *  - lista de keywords (`<meta name="keywords">`) cobrindo nome, cidade,
 *    região, país, tags e variações reais de busca ("o que fazer em X",
 *    "melhor época para visitar X", "roteiro X dias em X", "pacote de
 *    viagem para X", etc.).
 *  - FAQ semântico extra (perguntas + respostas) que pode ser anexado ao
 *    FAQ JSON-LD existente E renderizado como bloco visível na página —
 *    capturando intents conversacionais típicos de buscadores e IAs.
 *  - JSON-LD `SpeakableSpecification` para Google Assistant / leitura
 *    por voz e LLMs.
 *
 * Toda copy é genérica o suficiente para se aplicar a qualquer destino,
 * mas usa nome/região/país reais para virar conteúdo único por página.
 */

import type { Destination, Stay, FAQ } from "./types";
import { getTagLabel } from "./types";

// ---------- keywords ----------

const TRAVEL_TERMS = [
  "pacote de viagem",
  "roteiro de viagem",
  "viagem",
  "turismo",
  "o que fazer",
  "melhor época para visitar",
  "como chegar",
  "onde ficar",
  "atrações turísticas",
  "pontos turísticos",
  "guia de viagem",
  "viagem sob medida",
  "viagem com curadoria",
];

const dedupe = (arr: string[]) =>
  Array.from(new Set(arr.map((s) => s.trim()).filter(Boolean)));

/**
 * Constrói lista de keywords para uma página de destino.
 * Cobre nome + região + país + tags + variações de intent reais.
 */
export const buildDestinationKeywords = (destination: Destination): string => {
  const { name, region, country, tags } = destination;
  const tagLabels = tags.map(getTagLabel);

  const intents = TRAVEL_TERMS.flatMap((term) => {
    if (
      term === "o que fazer" ||
      term === "melhor época para visitar" ||
      term === "como chegar" ||
      term === "onde ficar"
    ) {
      return [`${term} em ${name}`];
    }
    if (term === "pacote de viagem" || term === "roteiro de viagem") {
      return [`${term} para ${name}`, `${term} ${name}`];
    }
    return [`${term} em ${name}`];
  });

  const tagIntents = tagLabels.flatMap((t) => [
    `${t} em ${name}`,
    `${t} ${country}`,
  ]);

  return dedupe([
    name,
    `${name}, ${country}`,
    `${name} ${country}`,
    region,
    `${region}, ${country}`,
    country,
    ...intents,
    ...tagLabels,
    ...tagIntents,
    "Create Travel",
    `agência de viagens ${country}`,
    `roteiro personalizado ${name}`,
  ]).join(", ");
};

export const buildStayKeywords = (
  stay: Stay,
  destinationName?: string,
  country?: string
): string => {
  const tagLabels = stay.tags.map(getTagLabel);
  const ctx = destinationName ? ` em ${destinationName}` : "";
  return dedupe([
    stay.name,
    `${stay.name}${ctx}`,
    `hospedagem ${stay.name}`,
    `hotel ${stay.name}`,
    `onde ficar${ctx}`,
    `melhores hospedagens${ctx}`,
    `pacote de viagem ${stay.name}`,
    ...(destinationName ? [destinationName, `o que fazer em ${destinationName}`] : []),
    ...(country ? [country, `turismo ${country}`] : []),
    ...tagLabels,
    ...tagLabels.map((t) => `${t}${ctx}`),
    "hospedagem com curadoria",
    "hotel boutique",
    "viagem sob medida",
    "Create Travel",
  ]).join(", ");
};

export const buildPlaceKeywords = (
  placeName: string,
  parentName?: string,
  extraTerms: string[] = []
): string => {
  const ctx = parentName ? `, ${parentName}` : "";
  return dedupe([
    placeName,
    `${placeName}${ctx}`,
    `pacote de viagem ${placeName}`,
    `pacote de viagem para ${placeName}`,
    `roteiro de viagem ${placeName}`,
    `o que fazer em ${placeName}`,
    `o que fazer em ${placeName}${ctx}`,
    `melhor época para visitar ${placeName}`,
    `como chegar em ${placeName}`,
    `onde ficar em ${placeName}`,
    `turismo ${placeName}`,
    `pontos turísticos ${placeName}`,
    `atrações em ${placeName}`,
    `viagem ${placeName}`,
    `viagem sob medida ${placeName}`,
    ...extraTerms,
    "Create Travel",
  ]).join(", ");
};

// ---------- FAQ semântico ----------

/**
 * Gera FAQs sintéticas baseadas em intents universais de viajante.
 * Reaproveita os campos do destino (intro, bestTime, tags) para que cada
 * resposta seja específica, mesmo sem texto autoral por destino.
 */
export const buildDestinationIntentFAQs = (
  destination: Destination
): FAQ[] => {
  const { name, country, region, bestTime, intro, tags, highlights } = destination;
  const tagLabels = tags.map(getTagLabel);
  const topTags = tagLabels.slice(0, 3).join(", ").toLowerCase();
  const topHighlights = highlights
    .slice(0, 4)
    .map((h) => (typeof h === "string" ? h : h.title))
    .join(", ");
  const shortIntro = intro.replace(/\s+/g, " ").trim();

  return [
    {
      q: `O que fazer em ${name}?`,
      a: `Em ${name}, ${country}, os principais atrativos selecionados pela Create Travel incluem ${topHighlights}. O destino é ideal para quem busca ${topTags}. Cada roteiro é desenhado sob medida, com curadoria de experiências, hospedagens e logística.`,
    },
    {
      q: `Qual a melhor época para visitar ${name}?`,
      a: `A melhor época para visitar ${name} é ${bestTime}. Recomendamos planejar a viagem com antecedência para garantir as melhores hospedagens e experiências exclusivas na temporada ideal.`,
    },
    {
      q: `Vale a pena viajar para ${name}?`,
      a: `Sim — ${name} entrou na curadoria Create Travel porque oferece uma experiência singular em ${region}, ${country}. ${shortIntro.slice(0, 220)}`,
    },
    {
      q: `Como funciona o pacote de viagem para ${name} da Create Travel?`,
      a: `Não trabalhamos com pacotes prontos. Para ${name} criamos um roteiro sob medida a partir de uma conversa: período, perfil dos viajantes, ritmo, hospedagens e experiências. Fale com nosso time pelo WhatsApp e receba uma proposta personalizada.`,
    },
    {
      q: `Onde ficar em ${name}?`,
      a: `Selecionamos hospedagens autorais em ${name} — lodges, pousadas-boutique e hotéis com luxo discreto, sempre alinhados ao ritmo do destino e ao perfil do viajante. A Create Travel sugere as melhores opções dentro do seu briefing.`,
    },
  ];
};

/**
 * Mescla FAQs existentes do destino com as sintéticas, evitando duplicar
 * perguntas que já tenham sido escritas manualmente.
 */
export const mergeFAQs = (existing: FAQ[], synthetic: FAQ[]): FAQ[] => {
  const norm = (s: string) =>
    s.toLowerCase().replace(/[?!.,;:]/g, "").replace(/\s+/g, " ").trim();
  const existingKeys = new Set(existing.map((f) => norm(f.q)));
  const extras = synthetic.filter((f) => !existingKeys.has(norm(f.q)));
  return [...existing, ...extras];
};

// ---------- Speakable JSON-LD ----------

/**
 * Marca trechos da página como "speakable" para assistentes de voz e
 * facilitar extração por LLMs. Usa seletores CSS estáveis presentes em
 * todas as páginas de detalhe.
 */
export const buildSpeakableSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  url,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".ai-summary", ".faq-question", ".faq-answer"],
  },
});
