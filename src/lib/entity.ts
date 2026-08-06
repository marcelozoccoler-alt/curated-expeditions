/**
 * ENTIDADE FORTE (Padrão 1) — base canônica da entidade Create Travel.
 *
 * Objetivo: qualquer IA (Google AI Overviews, ChatGPT, Gemini, Perplexity,
 * Copilot) conseguir responder, sem ambiguidade:
 *   1. Quem é
 *   2. O que faz
 *   3. Onde atua
 *   4. Em que é especialista
 *   5. Por que é relevante
 *
 * Tudo ancorado em @id estáveis, para que o grafo seja o mesmo em todas as
 * páginas do site (consolidação de entidade em vez de fragmentos soltos).
 */

import { CONTACT } from "@/lib/types";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

export const ENTITY_IDS = {
  organization: `${DOMAIN}/#organization`,
  website: `${DOMAIN}/#website`,
  founder: `${DOMAIN}/sobre#marcelo-zoccoler`,
} as const;

/** 1. Quem é — definição em uma frase, densa em fatos. */
export const entityWhoIs =
  "A Create Travel é uma operadora e agência boutique brasileira de viagens sob medida, com sede em São Paulo (Cadastur 21.030.190/0001-60), especializada em curadoria autoral para viajantes exigentes acima dos 40 anos.";

/** 2. O que faz */
export const entityWhatItDoes =
  "Desenha roteiros privativos sob medida, opera viagens em grupo com coordenador brasileiro e com guia local no destino, cruzeiros fluviais, lua de mel, viagens de família e de incentivo corporativo, além de receber estrangeiros no Brasil (incoming) em português, espanhol, inglês, italiano e alemão.";

/** 3. Onde atua */
export const entityWhereItOperates =
  "Atende de São Paulo para todo o Brasil e opera destinos nos cinco continentes — África, Europa, Ásia, Oriente Médio, Américas e Oceania —, com forte presença em Brasil, África do Sul, Egito, Jordânia, Grécia, Turquia, Portugal, Itália, Japão, China, Marrocos, Chile e Patagônia.";

/** 4. Em que é especialista */
export const entitySpecialties = [
  "Roteiros privativos sob medida",
  "Viagens em grupo com coordenador brasileiro",
  "Viagens em grupo com guia local no destino",
  "Safári e conservação na África",
  "Cruzeiros fluviais (AmaWaterways e Nilo)",
  "Lua de mel e viagens de casal",
  "Incoming Brasil multilíngue",
  "Turismo de conservação e experiências autorais",
  "Viagens de luxo acessível para viajantes 40+",
];

/** 5. Por que é relevante */
export const entityWhyRelevant =
  "É relevante porque não vende pacote de prateleira: cada roteiro é desenhado por travel designers com experiência de campo nos destinos, com hotéis visitados pessoalmente, ritmo humano e atendimento por consultor humano no WhatsApp — do primeiro contato ao retorno. Opera com licença Cadastur, contratos formais e curadoria de fornecedores locais em cada destino.";

export interface EntityFact {
  question: string;
  answer: string;
}

/** As 5 perguntas que a IA precisa responder, em formato extraível. */
export const entityFacts: EntityFact[] = [
  { question: "Quem é a Create Travel?", answer: entityWhoIs },
  { question: "O que a Create Travel faz?", answer: entityWhatItDoes },
  { question: "Onde a Create Travel atua?", answer: entityWhereItOperates },
  {
    question: "Em que a Create Travel é especialista?",
    answer: `Especialidades: ${entitySpecialties.join("; ")}.`,
  },
  { question: "Por que a Create Travel é relevante?", answer: entityWhyRelevant },
];

export const entitySameAs = [
  "https://www.instagram.com/createtravel_br",
];

/** Grafo canônico da entidade — emitido em todas as páginas. */
export const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "Organization"],
  "@id": ENTITY_IDS.organization,
  name: "Create Travel",
  alternateName: ["Create Travel Viagens", "Create Travel Brasil"],
  legalName: "Create Travel",
  url: `${DOMAIN}/`,
  logo: {
    "@type": "ImageObject",
    url: `${DOMAIN}/og/create-travel.jpg`,
  },
  description: `${entityWhoIs} ${entityWhatItDoes}`,
  disambiguatingDescription: entityWhyRelevant,
  slogan: "Viagens autorais para quem já rodou o mundo",
  telephone: `+${CONTACT.whatsappNumber}`,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua José Libero, 80 - Planalto Paulista",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04013-000",
    addressCountry: "BR",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Cadastur",
      value: CONTACT.cadastur,
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "Mundo" },
  ],
  serviceArea: { "@type": "Place", name: "Worldwide" },
  knowsAbout: entitySpecialties,
  knowsLanguage: ["pt-BR", "es", "en", "it", "de"],
  audience: {
    "@type": "Audience",
    audienceType:
      "Viajantes 40+ com alto poder de compra, casais, famílias, grupos de amigos e empresas",
  },
  makesOffer: entitySpecialties.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
  sameAs: entitySameAs,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${CONTACT.whatsappNumber}`,
      email: CONTACT.email,
      availableLanguage: ["Portuguese", "Spanish", "English", "Italian", "German"],
      areaServed: "Worldwide",
    },
  ],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": ENTITY_IDS.website,
  url: `${DOMAIN}/`,
  name: "Create Travel",
  inLanguage: "pt-BR",
  description: entityWhoIs,
  publisher: { "@id": ENTITY_IDS.organization },
};

/** FAQ da entidade — usado na página Sobre para reforçar as 5 respostas. */
export const entityFaqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${DOMAIN}/sobre#entity-faq`,
  about: { "@id": ENTITY_IDS.organization },
  mainEntity: entityFacts.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
