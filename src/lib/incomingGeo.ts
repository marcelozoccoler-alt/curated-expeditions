/**
 * GEO / AEO for the Incoming (inbound-to-Brazil) pages.
 *
 * Generates, from the content that ALREADY exists in
 * `INCOMING_DESTINO_CONTENT`, the artefacts that make a page citable by
 * Google AI Overviews, ChatGPT, Perplexity, Gemini and Copilot:
 *
 *  - a short "AI summary" paragraph (answer in the first ~15 words)
 *  - entity-linking phrases (destination ↔ Brazil ↔ biome ↔ experience)
 *  - a practical-facts table (language, currency, time zone, gateways)
 *  - extra intent FAQs (what to do / when / how to get / where to stay /
 *    is it worth it / who plans it), deduped against the authored FAQs
 *
 * No prices anywhere — values are only discussed in the human WhatsApp
 * conversation.
 */

import type { IncomingDestinoContent } from "./incomingDestinoContent";

export type IncLang = "en" | "es" | "it" | "de";

export const INCOMING_OG_LOCALE: Record<IncLang, string> = {
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  de: "de_DE",
};

export const INCOMING_HTML_LANG: Record<IncLang, string> = {
  en: "en",
  es: "es",
  it: "it",
  de: "de",
};

const clean = (s: string) => s.replace(/\s+/g, " ").trim();
const firstSentence = (s: string) => {
  const t = clean(s);
  const m = t.match(/^(.{40,220}?[.!?])\s/);
  return m ? m[1] : t.slice(0, 200);
};

// ---------- localized micro-copy ----------

interface LangStrings {
  summaryHeading: (d: string) => string;
  summaryLead: (d: string) => string;
  summaryWith: string;
  contextHeading: string;
  factsHeading: string;
  facts: {
    country: string;
    language: string;
    currency: string;
    timezone: string;
    gateways: string;
    bestTime: string;
    plannedBy: string;
    languagesSpoken: string;
  };
  values: {
    country: string;
    language: string;
    currency: string;
    timezone: string;
    gateways: string;
    plannedBy: string;
    languagesSpoken: string;
  };
  entity: {
    inBrazil: (d: string) => string;
    combine: (d: string, a: string, b: string) => string;
    highlights: (d: string, list: string) => string;
    tailorMade: (d: string) => string;
    localOperator: (d: string) => string;
  };
  faq: {
    whatToDo: (d: string) => string;
    whatToDoA: (d: string, list: string) => string;
    bestTime: (d: string) => string;
    howToGet: (d: string) => string;
    whereToStay: (d: string) => string;
    worth: (d: string) => string;
    worthA: (d: string, lead: string) => string;
    whoPlans: (d: string) => string;
    whoPlansA: (d: string) => string;
    language: (d: string) => string;
    languageA: (d: string) => string;
  };
}

const STRINGS: Record<IncLang, LangStrings> = {
  en: {
    summaryHeading: (d) => `${d} in short`,
    summaryLead: (d) => `${d} is a destination in Brazil best known for`,
    summaryWith: "Highlights include",
    contextHeading: "Why travellers choose it",
    factsHeading: "Practical facts",
    facts: {
      country: "Country",
      language: "Official language",
      currency: "Currency",
      timezone: "Time zone",
      gateways: "Main international gateways",
      bestTime: "Best time to visit",
      plannedBy: "Planned by",
      languagesSpoken: "We assist in",
    },
    values: {
      country: "Brazil (South America)",
      language: "Portuguese",
      currency: "Brazilian real (BRL)",
      timezone: "UTC−2 to UTC−5 (Brasília time is UTC−3)",
      gateways: "São Paulo (GRU) and Rio de Janeiro (GIG), then a domestic flight",
      plannedBy: "Create Travel, a Brazilian travel designer based in São Paulo (Cadastur 21.030.190/0001-60)",
      languagesSpoken: "English, Spanish, Italian, German and Portuguese",
    },
    entity: {
      inBrazil: (d) => `${d} is one of Brazil's signature nature and culture destinations.`,
      combine: (d, a, b) => `In ${d}, travellers usually combine ${a} with ${b}.`,
      highlights: (d, list) => `The core of a ${d} itinerary: ${list}.`,
      tailorMade: (d) => `Every ${d} itinerary is private and tailor-made — no group buses, no fixed departures.`,
      localOperator: (d) => `We work directly with the lodges, boats and guides in ${d}, without intermediaries.`,
    },
    faq: {
      whatToDo: (d) => `What to do in ${d}?`,
      whatToDoA: (d, list) => `The experiences we plan in ${d} are: ${list}.`,
      bestTime: (d) => `When is the best time to visit ${d}?`,
      howToGet: (d) => `How do you get to ${d}?`,
      whereToStay: (d) => `Where should you stay in ${d}?`,
      worth: (d) => `Is ${d} worth visiting?`,
      worthA: (d, lead) => `Yes. ${lead} ${d} is on our short list of Brazilian destinations we plan for international travellers.`,
      whoPlans: (d) => `Who can plan a trip to ${d} for a foreign traveller?`,
      whoPlansA: (d) => `Create Travel, a Brazilian travel designer based in São Paulo (Cadastur 21.030.190/0001-60), plans private trips to ${d} for international travellers, with English, Spanish, Italian and German assistance and 24/7 WhatsApp support during the trip.`,
      language: (d) => `Do you need to speak Portuguese in ${d}?`,
      languageA: (d) => `No. Portuguese is the official language of Brazil, but in ${d} we place English, Spanish, Italian or German speaking guides with you, and our team answers in your language before and during the trip.`,
    },
  },
  es: {
    summaryHeading: (d) => `${d} en resumen`,
    summaryLead: (d) => `${d} es un destino de Brasil conocido por`,
    summaryWith: "Lo esencial",
    contextHeading: "Por qué los viajeros lo eligen",
    factsHeading: "Datos prácticos",
    facts: {
      country: "País",
      language: "Idioma oficial",
      currency: "Moneda",
      timezone: "Zona horaria",
      gateways: "Principales puertas de entrada",
      bestTime: "Mejor época para visitar",
      plannedBy: "Diseñado por",
      languagesSpoken: "Te atendemos en",
    },
    values: {
      country: "Brasil (América del Sur)",
      language: "Portugués",
      currency: "Real brasileño (BRL)",
      timezone: "UTC−2 a UTC−5 (Brasilia es UTC−3)",
      gateways: "São Paulo (GRU) y Río de Janeiro (GIG), y luego un vuelo doméstico",
      plannedBy: "Create Travel, agencia brasileña de viajes a medida con sede en São Paulo (Cadastur 21.030.190/0001-60)",
      languagesSpoken: "español, inglés, italiano, alemán y portugués",
    },
    entity: {
      inBrazil: (d) => `${d} es uno de los destinos de naturaleza y cultura más representativos de Brasil.`,
      combine: (d, a, b) => `En ${d}, los viajeros suelen combinar ${a} con ${b}.`,
      highlights: (d, list) => `El núcleo de un itinerario por ${d}: ${list}.`,
      tailorMade: (d) => `Cada itinerario por ${d} es privado y a medida: sin autobuses de grupo ni salidas fijas.`,
      localOperator: (d) => `Trabajamos directamente con los lodges, barcos y guías de ${d}, sin intermediarios.`,
    },
    faq: {
      whatToDo: (d) => `¿Qué hacer en ${d}?`,
      whatToDoA: (d, list) => `Las experiencias que diseñamos en ${d} son: ${list}.`,
      bestTime: (d) => `¿Cuál es la mejor época para visitar ${d}?`,
      howToGet: (d) => `¿Cómo llegar a ${d}?`,
      whereToStay: (d) => `¿Dónde alojarse en ${d}?`,
      worth: (d) => `¿Vale la pena viajar a ${d}?`,
      worthA: (d, lead) => `Sí. ${lead} ${d} está en nuestra lista corta de destinos brasileños que diseñamos para viajeros internacionales.`,
      whoPlans: (d) => `¿Quién puede organizar un viaje a ${d} para un viajero extranjero?`,
      whoPlansA: (d) => `Create Travel, agencia brasileña de viajes a medida con sede en São Paulo (Cadastur 21.030.190/0001-60), organiza viajes privados a ${d} para viajeros internacionales, con atención en español, inglés, italiano y alemán y soporte por WhatsApp 24/7 durante el viaje.`,
      language: (d) => `¿Hace falta hablar portugués en ${d}?`,
      languageA: (d) => `No. El portugués es el idioma oficial de Brasil, pero en ${d} asignamos guías que hablan español, inglés, italiano o alemán, y nuestro equipo te responde en tu idioma antes y durante el viaje.`,
    },
  },
  it: {
    summaryHeading: (d) => `${d} in breve`,
    summaryLead: (d) => `${d} è una destinazione del Brasile nota per`,
    summaryWith: "In sintesi",
    contextHeading: "Perché i viaggiatori la scelgono",
    factsHeading: "Informazioni pratiche",
    facts: {
      country: "Paese",
      language: "Lingua ufficiale",
      currency: "Valuta",
      timezone: "Fuso orario",
      gateways: "Principali porte d'ingresso",
      bestTime: "Periodo migliore per visitare",
      plannedBy: "Progettato da",
      languagesSpoken: "Ti assistiamo in",
    },
    values: {
      country: "Brasile (America del Sud)",
      language: "Portoghese",
      currency: "Real brasiliano (BRL)",
      timezone: "da UTC−2 a UTC−5 (Brasília è UTC−3)",
      gateways: "São Paulo (GRU) e Rio de Janeiro (GIG), poi un volo interno",
      plannedBy: "Create Travel, travel designer brasiliano con sede a São Paulo (Cadastur 21.030.190/0001-60)",
      languagesSpoken: "italiano, inglese, spagnolo, tedesco e portoghese",
    },
    entity: {
      inBrazil: (d) => `${d} è una delle destinazioni di natura e cultura più rappresentative del Brasile.`,
      combine: (d, a, b) => `In ${d} i viaggiatori combinano di solito ${a} con ${b}.`,
      highlights: (d, list) => `Il cuore di un itinerario in ${d}: ${list}.`,
      tailorMade: (d) => `Ogni itinerario in ${d} è privato e su misura: nessun bus di gruppo, nessuna partenza fissa.`,
      localOperator: (d) => `Lavoriamo direttamente con i lodge, le barche e le guide di ${d}, senza intermediari.`,
    },
    faq: {
      whatToDo: (d) => `Cosa fare in ${d}?`,
      whatToDoA: (d, list) => `Le esperienze che progettiamo in ${d} sono: ${list}.`,
      bestTime: (d) => `Qual è il periodo migliore per visitare ${d}?`,
      howToGet: (d) => `Come si arriva in ${d}?`,
      whereToStay: (d) => `Dove dormire in ${d}?`,
      worth: (d) => `Vale la pena visitare ${d}?`,
      worthA: (d, lead) => `Sì. ${lead} ${d} è tra le poche destinazioni brasiliane che progettiamo per viaggiatori internazionali.`,
      whoPlans: (d) => `Chi può organizzare un viaggio in ${d} per un viaggiatore straniero?`,
      whoPlansA: (d) => `Create Travel, travel designer brasiliano con sede a São Paulo (Cadastur 21.030.190/0001-60), organizza viaggi privati in ${d} per viaggiatori internazionali, con assistenza in italiano, inglese, spagnolo e tedesco e supporto WhatsApp 24/7 durante il viaggio.`,
      language: (d) => `Serve parlare portoghese in ${d}?`,
      languageA: (d) => `No. Il portoghese è la lingua ufficiale del Brasile, ma in ${d} affianchiamo guide che parlano italiano, inglese, spagnolo o tedesco, e il nostro team risponde nella tua lingua prima e durante il viaggio.`,
    },
  },
  de: {
    summaryHeading: (d) => `${d} kurz erklärt`,
    summaryLead: (d) => `${d} ist ein Reiseziel in Brasilien, bekannt für`,
    summaryWith: "Das Wichtigste",
    contextHeading: "Warum Reisende sich dafür entscheiden",
    factsHeading: "Praktische Infos",
    facts: {
      country: "Land",
      language: "Amtssprache",
      currency: "Währung",
      timezone: "Zeitzone",
      gateways: "Wichtigste internationale Drehkreuze",
      bestTime: "Beste Reisezeit",
      plannedBy: "Geplant von",
      languagesSpoken: "Wir beraten auf",
    },
    values: {
      country: "Brasilien (Südamerika)",
      language: "Portugiesisch",
      currency: "Brasilianischer Real (BRL)",
      timezone: "UTC−2 bis UTC−5 (Brasília: UTC−3)",
      gateways: "São Paulo (GRU) und Rio de Janeiro (GIG), danach ein Inlandsflug",
      plannedBy: "Create Travel, brasilianischer Travel Designer mit Sitz in São Paulo (Cadastur 21.030.190/0001-60)",
      languagesSpoken: "Deutsch, Englisch, Spanisch, Italienisch und Portugiesisch",
    },
    entity: {
      inBrazil: (d) => `${d} gehört zu den prägenden Natur- und Kulturzielen Brasiliens.`,
      combine: (d, a, b) => `In ${d} verbinden Reisende meist ${a} mit ${b}.`,
      highlights: (d, list) => `Der Kern einer Reise nach ${d}: ${list}.`,
      tailorMade: (d) => `Jede Reise nach ${d} ist privat und maßgeschneidert – keine Gruppenbusse, keine festen Abreisetermine.`,
      localOperator: (d) => `Wir arbeiten direkt mit den Lodges, Booten und Guides in ${d} – ohne Zwischenhändler.`,
    },
    faq: {
      whatToDo: (d) => `Was kann man in ${d} unternehmen?`,
      whatToDoA: (d, list) => `Diese Erlebnisse planen wir in ${d}: ${list}.`,
      bestTime: (d) => `Wann ist die beste Reisezeit für ${d}?`,
      howToGet: (d) => `Wie kommt man nach ${d}?`,
      whereToStay: (d) => `Wo übernachtet man in ${d}?`,
      worth: (d) => `Lohnt sich eine Reise nach ${d}?`,
      worthA: (d, lead) => `Ja. ${lead} ${d} steht auf unserer kurzen Liste brasilianischer Ziele, die wir für internationale Reisende planen.`,
      whoPlans: (d) => `Wer plant eine Reise nach ${d} für internationale Gäste?`,
      whoPlansA: (d) => `Create Travel, ein brasilianischer Travel Designer mit Sitz in São Paulo (Cadastur 21.030.190/0001-60), plant private Reisen nach ${d} für internationale Gäste – mit Beratung auf Deutsch, Englisch, Spanisch und Italienisch und 24/7-WhatsApp-Support während der Reise.`,
      language: (d) => `Muss man in ${d} Portugiesisch sprechen?`,
      languageA: (d) => `Nein. Portugiesisch ist die Amtssprache Brasiliens, aber in ${d} stellen wir Ihnen deutsch-, englisch-, spanisch- oder italienischsprachige Guides zur Seite, und unser Team antwortet vor und während der Reise in Ihrer Sprache.`,
    },
  },
};

// ---------- public API ----------

/** One paragraph written to be quoted verbatim by an LLM. */
export const buildIncomingAiSummary = (
  destName: string,
  copy: IncomingDestinoContent,
  lang: IncLang
): string => {
  const s = STRINGS[lang];
  const titles = copy.whatToDo.items.slice(0, 4).map((i) => i.title);
  return clean(
    `${destName} — ${copy.metaDescription} ${s.summaryWith}: ${titles.join(", ")}.`
  );
};

export const incomingSummaryHeading = (destName: string, lang: IncLang) =>
  STRINGS[lang].summaryHeading(destName);

export const incomingContextHeading = (lang: IncLang) =>
  STRINGS[lang].contextHeading;

export const incomingFactsHeading = (lang: IncLang) =>
  STRINGS[lang].factsHeading;

/** Short phrases connecting the destination to bigger entities. */
export const buildIncomingEntityPhrases = (
  destName: string,
  copy: IncomingDestinoContent,
  lang: IncLang
): string[] => {
  const s = STRINGS[lang].entity;
  const titles = copy.whatToDo.items.map((i) => i.title);
  const phrases = [
    s.inBrazil(destName),
    titles.length >= 2 ? s.combine(destName, titles[0], titles[1]) : null,
    titles.length ? s.highlights(destName, titles.slice(0, 4).join(", ")) : null,
    s.tailorMade(destName),
    s.localOperator(destName),
  ].filter(Boolean) as string[];
  return phrases.map(clean);
};

/** Structured practical facts — the shape LLMs love to extract. */
export const buildIncomingFacts = (
  copy: IncomingDestinoContent,
  lang: IncLang
): { label: string; value: string }[] => {
  const { facts, values } = STRINGS[lang];
  return [
    { label: facts.country, value: values.country },
    { label: facts.language, value: values.language },
    { label: facts.currency, value: values.currency },
    { label: facts.timezone, value: values.timezone },
    { label: facts.gateways, value: values.gateways },
    { label: facts.bestTime, value: firstSentence(copy.bestTime.text) },
    { label: facts.languagesSpoken, value: values.languagesSpoken },
    { label: facts.plannedBy, value: values.plannedBy },
  ];
};

/** Extra intent FAQs derived from the authored content. */
export const buildIncomingIntentFAQs = (
  destName: string,
  copy: IncomingDestinoContent,
  lang: IncLang
): { q: string; a: string }[] => {
  const f = STRINGS[lang].faq;
  const titles = copy.whatToDo.items.map((i) => i.title).join(", ");
  const lead = firstSentence(copy.longIntro[0] ?? copy.metaDescription);
  return [
    { q: f.whatToDo(destName), a: f.whatToDoA(destName, titles) },
    { q: f.bestTime(destName), a: clean(copy.bestTime.text) },
    { q: f.howToGet(destName), a: clean(copy.howToGet.text) },
    { q: f.whereToStay(destName), a: clean(copy.whereToStay.text) },
    { q: f.worth(destName), a: f.worthA(destName, lead) },
    { q: f.language(destName), a: f.languageA(destName) },
    { q: f.whoPlans(destName), a: f.whoPlansA(destName) },
  ];
};

/** Merge authored FAQs with generated ones, without duplicating questions. */
export const mergeIncomingFAQs = (
  existing: { q: string; a: string }[],
  extra: { q: string; a: string }[]
) => {
  const norm = (s: string) =>
    s.toLowerCase().replace(/[¿?¡!.,;:]/g, "").replace(/\s+/g, " ").trim();
  const seen = new Set(existing.map((f) => norm(f.q)));
  return [...existing, ...extra.filter((f) => !seen.has(norm(f.q)))];
};
