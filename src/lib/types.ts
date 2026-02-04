// Tags taxonomy
export interface Tag {
  id: string;
  label: string;
}

export const TAGS: Tag[] = [
  { id: "safari", label: "Safári & vida selvagem" },
  { id: "trekking", label: "Trekking & trilhas" },
  { id: "lua-de-mel", label: "Lua de mel" },
  { id: "cavalgadas", label: "Cavalgadas" },
  { id: "mergulho", label: "Mergulho & snorkel" },
  { id: "navegacao", label: "Navegação, rios & lagos" },
  { id: "roadtrip", label: "Roadtrip cênica" },
  { id: "gastronomia", label: "Gastronomia & vinhos" },
  { id: "cultura", label: "Cultura & história" },
  { id: "bem-estar", label: "Bem-estar & slow travel" },
  { id: "fotografia", label: "Fotografia" },
  { id: "familia", label: "Viagem em família" },
  { id: "remoto", label: "Remoto & raro" },
  { id: "conservacao", label: "Conservação & propósito" },
  { id: "deserto", label: "Deserto" },
  { id: "montanha", label: "Montanhas" },
  { id: "praia", label: "Praias & ilhas" },
  { id: "aurora", label: "Aurora boreal" },
  { id: "expedicao", label: "Expedições" },
];

export const getTagLabel = (id: string): string => {
  const tag = TAGS.find((t) => t.id === id);
  return tag?.label || id;
};

export const getTagsByIds = (ids: string[]): Tag[] => {
  return TAGS.filter((t) => ids.includes(t.id));
};

// FAQ interface
export interface FAQ {
  q: string;
  a: string;
}

// Destination interface
export interface Destination {
  id: string;
  continent: string;
  country: string;
  region: string;
  slug: string;
  name: string;
  bestTime: string;
  tags: string[];
  imageAiPrompt: string;
  imageOverrideUrl: string;
  intro: string;
  highlights: string[];
  beyondUsual: string[];
  stays: string[];
  faq: FAQ[];
}

// Stay (Hospedagem) interface
export interface Stay {
  slug: string;
  name: string;
  destinationRef: string;
  bestTime: string;
  tags: string[];
  imageAiPrompt: string;
  imageOverrideUrl: string;
  whySelected: string;
  beyondUsual: string[];
  faq: FAQ[];
}

// Contact info
export const CONTACT = {
  whatsapp: "+55 11 96369-3159",
  whatsappNumber: "5511963693159",
  email: "contato@createtravel.tur.br",
  address: "Rua José Libero, 80 - Planalto Paulista, São Paulo - SP, Brasil",
  domain: "https://www.createtravel.tur.br",
};

// WhatsApp link generator
export interface WhatsAppParams {
  type: "Destino" | "Hospedagem" | "Geral" | "Roteiro";
  name?: string;
  tags?: string[];
  period?: string;
  duration?: string;
  budget?: string;
}

export const generateWhatsAppLink = (params: WhatsAppParams): string => {
  const { type, name = "", tags = [], period = "", duration = "", budget = "" } = params;
  
  let message = `Olá, Create Travel! Quero criar um roteiro em parceria.`;
  
  if (type !== "Geral") {
    message += ` Interesse: ${type}`;
    if (name) message += ` — ${name}`;
    message += ".";
  }
  
  if (tags.length > 0) {
    const tagLabels = tags.map(getTagLabel).join(", ");
    message += ` Tags: ${tagLabels}.`;
  }
  
  if (period) message += ` Período: ${period}.`;
  if (duration) message += ` Duração: ${duration}.`;
  if (budget) message += ` Orçamento estimado: ${budget}.`;
  
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`;
};

// Continents for navigation
export const CONTINENTS = [
  { id: "brasil", name: "Brasil" },
  { id: "america-do-sul", name: "América do Sul" },
  { id: "africa", name: "África" },
  { id: "europa", name: "Europa" },
  { id: "asia", name: "Ásia" },
  { id: "oceania", name: "Oceania" },
];
