// Tags taxonomy
export interface Tag {
  id: string;
  label: string;
  /** Chamada arrebatadora — desperta o desejo de viver a experiência. */
  pitch?: string;
}

export const TAGS: Tag[] = [
  { id: "safari", label: "Safári & vida selvagem", pitch: "O rugido distante ao amanhecer, a poeira dourada subindo atrás de uma manada — o safári é a viagem que devolve ao ser humano o sentido de pertencimento ao planeta vivo." },
  { id: "trekking", label: "Trekking & trilhas", pitch: "Cada passo conquistado em altitude muda o que você acredita ser capaz. A montanha não devolve o mesmo viajante que a procurou." },
  { id: "lua-de-mel", label: "Lua de mel", pitch: "O primeiro capítulo a dois merece um cenário à altura: silêncio, luxo discreto e memórias que vocês recontarão pelo resto da vida." },
  { id: "cavalgadas", label: "Cavalgadas", pitch: "Sentir o galope sob o corpo e a planície abrindo-se no horizonte é redescobrir uma forma ancestral de liberdade." },
  { id: "mergulho", label: "Mergulho & snorkel", pitch: "Abaixo da linha d'água existe um planeta paralelo: corais que respiram cor, cardumes em coreografia e a quietude que só o oceano sabe oferecer." },
  { id: "navegacao", label: "Navegação, rios & lagos", pitch: "Deixar-se levar pela correnteza é uma forma de meditação. Cada curva do rio é um capítulo novo do mesmo livro." },
  { id: "roadtrip", label: "Roadtrip cênica", pitch: "A estrada certa não é destino — é convite. Janela aberta, paisagem se reescrevendo a cada quilômetro e a sensação rara de ter o tempo nas mãos." },
  { id: "gastronomia", label: "Gastronomia & vinhos", pitch: "Comer é a forma mais íntima de conhecer um lugar. Cada garfada conta a geografia, a história e o afeto de quem te recebe." },
  { id: "cultura", label: "Cultura & história", pitch: "Caminhar onde séculos foram escritos é deixar-se atravessar pelas vidas que vieram antes — e voltar para casa um pouco mais inteiro." },
  { id: "bem-estar", label: "Bem-estar & slow travel", pitch: "Existe um luxo maior do que tempo lento, silêncio verdadeiro e o direito de não ter pressa? É disso que se trata." },
  { id: "fotografia", label: "Fotografia", pitch: "A luz certa só acontece uma vez. Viajar para fotografar é treinar o olhar para enxergar a beleza que escapa a todos os outros." },
  { id: "familia", label: "Viagem em família", pitch: "As lembranças que seus filhos vão guardar para a vida toda não nascem em casa — nascem nas viagens em que vocês foram, juntos, descobrir o mundo." },
  { id: "remoto", label: "Remoto & raro", pitch: "Há lugares onde menos de mil pessoas pisam por ano. Estar entre elas é a forma mais pura de privilégio que uma viagem pode oferecer." },
  { id: "conservacao", label: "Conservação & propósito", pitch: "Viajar com propósito é deixar o lugar melhor do que você encontrou — e voltar para casa com a certeza de que sua presença importou." },
  { id: "deserto", label: "Deserto", pitch: "O deserto não tem nada para te dar, exceto silêncio absoluto, estrelas que não cabem no céu e a versão mais essencial de si mesmo." },
  { id: "montanha", label: "Montanhas", pitch: "No alto, o ar é mais raro, o pensamento mais limpo e a perspectiva muda para sempre. Subir é a forma mais antiga de oração." },
  { id: "praia", label: "Praias & ilhas", pitch: "Areia clara, água que parece inventada, o tempo medido apenas pela maré. A ilha certa é o reset que o ano inteiro estava pedindo." },
  { id: "aurora", label: "Aurora boreal", pitch: "Ver o céu dançar em verde e violeta sobre a neve é uma daquelas experiências que dividem a vida em antes e depois." },
  { id: "expedicao", label: "Expedições", pitch: "Não é viagem — é travessia. Cada dia traz desafio, recompensa e a história que você vai contar pelo resto da vida." },
  { id: "birdwatching", label: "Birdwatching", pitch: "Há mais de mil espécies esperando paciência e bons olhos. Quem aprende a observar aves nunca mais olha o mundo do mesmo jeito." },
  { id: "festivais-folcloricos", label: "Festivais folclóricos", pitch: "Cor, tambor, dança e fé num único pulsar coletivo: presenciar um festival é entrar dentro da alma de um povo." },
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

// Highlight rico: pode ser apenas string (compat) ou {title, story}
export interface HighlightDetail {
  title: string;
  /** Texto sensorial e arrebatador que desperta o desejo de vivenciar o destaque. */
  story: string;
}

export type Highlight = string | HighlightDetail;

export const getHighlightParts = (h: Highlight): { title: string; story?: string } => {
  if (typeof h === "string") return { title: h };
  return { title: h.title, story: h.story };
};

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
  highlights: Highlight[];
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
  cadastur: "21.030.190/0001-60",
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

export const buildWhatsAppMessage = (params: WhatsAppParams): string => {
  const { type, name = "", tags = [], period = "", duration = "", budget = "" } = params;

  let message = `Olá, Create Travel! Quero criar um roteiro sob medida.`;

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

  return message.trim();
};

export const generateWhatsAppLink = (params: WhatsAppParams): string => {
  const encodedMessage = encodeURIComponent(buildWhatsAppMessage(params));
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
