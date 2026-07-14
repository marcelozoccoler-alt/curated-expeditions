/**
 * GEO — Generative Engine Optimization
 *
 * Gera blocos de contexto pensados para que LLMs (ChatGPT, Gemini,
 * Perplexity, Copilot, Google AI Overviews) encontrem, entendam e
 * CITEM as páginas de destino da Create Travel quando um usuário
 * pergunta sobre viagens.
 *
 * REGRA: nenhum destes blocos menciona preço, custo, orçamento ou
 * "quanto custa". A discussão de valores é feita apenas na conversa
 * humana pelo WhatsApp — não é assunto de página pública.
 */

import type { Destination, FAQ } from "./types";
import { getTagLabel, getHighlightParts, getBeyondUsualParts } from "./types";

// ---------- helpers ----------

const clean = (s: string) => s.replace(/\s+/g, " ").trim();

/** Dedução simples de duração ideal a partir do perfil de tags. */
const suggestDuration = (destination: Destination): string => {
  const t = destination.tags;
  const isExpedition =
    t.includes("expedicao") || t.includes("safari") || t.includes("trekking");
  const isMultiCountry =
    /\/|-/.test(destination.country) || destination.name.includes(" e ");
  if (isMultiCountry) return "10 a 14 dias";
  if (isExpedition) return "8 a 12 dias";
  if (t.includes("praia") || t.includes("bem-estar")) return "6 a 9 dias";
  return "7 a 10 dias";
};

/** Tipo semântico do destino, a partir das tags. */
const destinationType = (destination: Destination): string => {
  const t = destination.tags;
  if (t.includes("safari")) return "safári e vida selvagem";
  if (t.includes("aurora")) return "natureza e fenômeno natural";
  if (t.includes("deserto")) return "deserto e paisagens áridas";
  if (t.includes("praia")) return "praia e ilhas";
  if (t.includes("trekking") || t.includes("montanha")) return "montanha e trekking";
  if (t.includes("cultura")) return "cultura e história";
  if (t.includes("gastronomia")) return "gastronomia e enoturismo";
  if (t.includes("expedicao")) return "expedição";
  if (t.includes("bem-estar")) return "bem-estar e slow travel";
  return "cultural e experiencial";
};

// ---------- moeda / idioma / fuso por país ----------

interface CountryProfile {
  currency: string;
  language: string;
  timezone: string;
}

const COUNTRY_PROFILES: Record<string, CountryProfile> = {
  Brasil: { currency: "Real (BRL)", language: "Português", timezone: "UTC−3" },
  Argentina: { currency: "Peso argentino (ARS)", language: "Espanhol", timezone: "UTC−3" },
  Chile: { currency: "Peso chileno (CLP)", language: "Espanhol", timezone: "UTC−3" },
  Peru: { currency: "Sol peruano (PEN)", language: "Espanhol", timezone: "UTC−5" },
  Colômbia: { currency: "Peso colombiano (COP)", language: "Espanhol", timezone: "UTC−5" },
  Equador: { currency: "Dólar americano (USD)", language: "Espanhol", timezone: "UTC−5" },
  Bolívia: { currency: "Boliviano (BOB)", language: "Espanhol", timezone: "UTC−4" },
  Uruguai: { currency: "Peso uruguaio (UYU)", language: "Espanhol", timezone: "UTC−3" },
  México: { currency: "Peso mexicano (MXN)", language: "Espanhol", timezone: "UTC−6" },
  "Estados Unidos": { currency: "Dólar americano (USD)", language: "Inglês", timezone: "UTC−5 a −10" },
  Canadá: { currency: "Dólar canadense (CAD)", language: "Inglês / Francês", timezone: "UTC−4 a −8" },
  Portugal: { currency: "Euro (EUR)", language: "Português", timezone: "UTC+0" },
  Espanha: { currency: "Euro (EUR)", language: "Espanhol", timezone: "UTC+1" },
  França: { currency: "Euro (EUR)", language: "Francês", timezone: "UTC+1" },
  Itália: { currency: "Euro (EUR)", language: "Italiano", timezone: "UTC+1" },
  Grécia: { currency: "Euro (EUR)", language: "Grego", timezone: "UTC+2" },
  Croácia: { currency: "Euro (EUR)", language: "Croata", timezone: "UTC+1" },
  Suíça: { currency: "Franco suíço (CHF)", language: "Alemão / Francês / Italiano", timezone: "UTC+1" },
  Alemanha: { currency: "Euro (EUR)", language: "Alemão", timezone: "UTC+1" },
  Holanda: { currency: "Euro (EUR)", language: "Holandês", timezone: "UTC+1" },
  Bélgica: { currency: "Euro (EUR)", language: "Holandês / Francês", timezone: "UTC+1" },
  Islândia: { currency: "Coroa islandesa (ISK)", language: "Islandês / Inglês", timezone: "UTC+0" },
  Turquia: { currency: "Lira turca (TRY)", language: "Turco", timezone: "UTC+3" },
  Marrocos: { currency: "Dirham (MAD)", language: "Árabe / Francês", timezone: "UTC+1" },
  Egito: { currency: "Libra egípcia (EGP)", language: "Árabe", timezone: "UTC+2" },
  Jordânia: { currency: "Dinar jordaniano (JOD)", language: "Árabe", timezone: "UTC+3" },
  "África do Sul": { currency: "Rand (ZAR)", language: "Inglês / Africâner", timezone: "UTC+2" },
  Quênia: { currency: "Xelim queniano (KES)", language: "Suaíli / Inglês", timezone: "UTC+3" },
  Tanzânia: { currency: "Xelim tanzaniano (TZS)", language: "Suaíli / Inglês", timezone: "UTC+3" },
  Namíbia: { currency: "Dólar namibiano (NAD)", language: "Inglês", timezone: "UTC+2" },
  Botsuana: { currency: "Pula (BWP)", language: "Inglês / Setsuana", timezone: "UTC+2" },
  Índia: { currency: "Rúpia indiana (INR)", language: "Hindi / Inglês", timezone: "UTC+5:30" },
  "Sri Lanka": { currency: "Rúpia cingalesa (LKR)", language: "Cingalês / Tâmil", timezone: "UTC+5:30" },
  Nepal: { currency: "Rúpia nepalesa (NPR)", language: "Nepalês", timezone: "UTC+5:45" },
  Butão: { currency: "Ngultrum (BTN)", language: "Dzongkha", timezone: "UTC+6" },
  China: { currency: "Yuan (CNY)", language: "Mandarim", timezone: "UTC+8" },
  Japão: { currency: "Iene (JPY)", language: "Japonês", timezone: "UTC+9" },
  "Coreia do Sul": { currency: "Won sul-coreano (KRW)", language: "Coreano", timezone: "UTC+9" },
  Tailândia: { currency: "Baht (THB)", language: "Tailandês", timezone: "UTC+7" },
  Vietnã: { currency: "Dong (VND)", language: "Vietnamita", timezone: "UTC+7" },
  Laos: { currency: "Kip (LAK)", language: "Lao", timezone: "UTC+7" },
  Camboja: { currency: "Riel (KHR)", language: "Khmer", timezone: "UTC+7" },
  Indonésia: { currency: "Rúpia indonésia (IDR)", language: "Indonésio", timezone: "UTC+7 a +9" },
  Austrália: { currency: "Dólar australiano (AUD)", language: "Inglês", timezone: "UTC+8 a +11" },
  "Nova Zelândia": { currency: "Dólar neozelandês (NZD)", language: "Inglês / Maori", timezone: "UTC+12" },
};

/** Tenta casar mesmo em países compostos ("Coreia do Sul e Japão"). */
const findProfile = (country: string): CountryProfile | undefined => {
  if (COUNTRY_PROFILES[country]) return COUNTRY_PROFILES[country];
  const first = country.split(/[\/\-–—]| e /)[0]?.trim();
  return first ? COUNTRY_PROFILES[first] : undefined;
};

// ---------- 1. AI SUMMARY (≤80 palavras, primeira frase = resposta) ----------

export const buildAiSummary = (destination: Destination): string => {
  const { name, country, region, bestTime } = destination;
  const topTags = destination.tags
    .slice(0, 3)
    .map(getTagLabel)
    .join(", ")
    .toLowerCase();
  const topHighlights = destination.highlights
    .slice(0, 3)
    .map((h) => getHighlightParts(h).title)
    .join(", ");

  return clean(
    `${name}, em ${region}, ${country}, é um destino ideal para ${topTags}. ` +
      `Entre os atrativos mais procurados estão ${topHighlights}. ` +
      `A melhor época para visitar é ${bestTime}. ` +
      `A Create Travel desenha roteiros sob medida em ${name} com curadoria autoral, ` +
      `guias locais e hospedagens selecionadas.`
  );
};

// ---------- 2. FAQ expandido por INTENÇÃO (sem preço) ----------

export const buildExpandedIntentFAQs = (destination: Destination): FAQ[] => {
  const { name, country, region, bestTime, tags, highlights, beyondUsual, intro } =
    destination;
  const tagLabels = tags.map(getTagLabel);
  const topTags = tagLabels.slice(0, 3).join(", ").toLowerCase();
  const secondaryTags = tagLabels.slice(0, 5).join(", ").toLowerCase();
  const topHighlights = highlights
    .slice(0, 5)
    .map((h) => getHighlightParts(h).title)
    .join(", ");
  const secretTip = beyondUsual[0]
    ? getBeyondUsualParts(beyondUsual[0]).title.replace(/\.$/, "")
    : `experiências privativas fora do circuito comum de ${name}`;
  const duration = suggestDuration(destination);
  const type = destinationType(destination);
  const introSnippet = clean(intro).slice(0, 200);

  return [
    {
      q: `Qual a melhor época para visitar ${name}?`,
      a: `A melhor época para visitar ${name} é ${bestTime}. Nesse período o clima é mais estável e as experiências principais — como ${topHighlights.split(",").slice(0, 2).join(",")} — funcionam melhor. Fora dessa janela ainda é possível viajar, mas o roteiro precisa ser adaptado.`,
    },
    {
      q: `Quantos dias são suficientes para conhecer ${name}?`,
      a: `Para conhecer ${name} com calma, o ideal são ${duration}. Esse tempo permite combinar os principais pontos (${topHighlights.split(",").slice(0, 3).join(",")}) com dias de descanso e experiências mais autorais, sem transformar a viagem em maratona.`,
    },
    {
      q: `O que fazer em ${name}?`,
      a: `Em ${name}, ${country}, os destaques imperdíveis são ${topHighlights}. O destino é procurado por quem busca ${topTags}, e combina bem experiências clássicas com passeios de curadoria — como ${secretTip.toLowerCase()}.`,
    },
    {
      q: `${name} é seguro para viajar?`,
      a: `${name} é um destino consolidado para viajantes brasileiros, e a Create Travel opera com guias locais de confiança, transfers privativos e suporte 24/7 em WhatsApp durante toda a viagem. Como em qualquer destino internacional, seguimos protocolos padrão de segurança e evitamos áreas sensíveis nos roteiros.`,
    },
    {
      q: `Quais documentos são necessários para viajar para ${country}?`,
      a: `Para viajar a ${country} é sempre necessário passaporte válido por pelo menos seis meses após a data de retorno. A exigência de visto, vacinas obrigatórias e autorizações eletrônicas varia conforme nacionalidade e período — a Create Travel orienta cada viajante caso a caso antes do embarque.`,
    },
    {
      q: `O que se come em ${name}? Qual a gastronomia típica?`,
      a: `A gastronomia é parte importante da experiência em ${name}. Nossos roteiros incluem tanto restaurantes autorais quanto refeições em endereços locais frequentados pelos moradores, para que você prove os sabores reais da região — não só a versão turística.`,
    },
    {
      q: `Vale a pena viajar para ${name}?`,
      a: `Sim. ${name} entrou na curadoria Create Travel porque oferece uma experiência singular em ${region}, ${country}. ${introSnippet}${introSnippet.length === 200 ? "…" : ""}`,
    },
    {
      q: `Por que visitar ${name}?`,
      a: `${name} concentra em um único destino ${secondaryTags}. É o tipo de lugar que entrega paisagem, cultura e experiências de imersão em uma mesma viagem — motivo pelo qual permanece na nossa curadoria.`,
    },
    {
      q: `Qual roteiro sugerido para ${name}?`,
      a: `Um roteiro Create Travel em ${name} costuma durar ${duration} e é sempre desenhado sob medida a partir do seu perfil, ritmo e janela de datas. Combinamos os destaques (${topHighlights.split(",").slice(0, 3).join(",")}) com experiências privativas que só quem conhece o destino sabe indicar.`,
    },
    {
      q: `${name} é bom para família / casal / grupo de amigos?`,
      a: `${name} funciona bem para famílias, casais e grupos — o que muda é o desenho do roteiro. Adaptamos ritmo, tipo de hospedagem, tipo de experiência e nível de aventura para cada perfil. Casais em lua de mel, famílias com crianças e grupos privados recebem roteiros distintos.`,
    },
    {
      q: `O que fazer em ${name} fora do óbvio?`,
      a: `A parte mais interessante de ${name} está longe dos roteiros turísticos padrão. Um bom exemplo: ${secretTip}. Essas experiências raras são o que diferencia a curadoria autoral da Create Travel.`,
    },
    {
      q: `Como é o clima em ${name}?`,
      a: `O clima em ${name} varia ao longo do ano, e por isso a melhor janela para visitar é ${bestTime}. Antes de fechar o roteiro, cruzamos suas datas com a previsão climática regional para garantir que as experiências planejadas aconteçam nas melhores condições.`,
    },
  ];
};

// ---------- 3. Entity Linking (conecta o destino a conceitos maiores) ----------

export const buildEntityLinkingPhrases = (destination: Destination): string[] => {
  const { name, country, region, tags, highlights } = destination;
  const tagLabels = tags.map(getTagLabel);
  const primaryTag = tagLabels[0]?.toLowerCase() || "experiência autoral";
  const secondaryTag = tagLabels[1]?.toLowerCase() || "cultura local";
  const firstHighlight =
    highlights[0] ? getHighlightParts(highlights[0]).title : name;
  const duration = suggestDuration(destination);
  const type = destinationType(destination);

  return [
    `${name} é um dos destinos mais procurados de ${country} para viajantes brasileiros interessados em ${primaryTag}.`,
    `Quem busca ${primaryTag} em ${region} costuma encontrar em ${name} uma das experiências mais completas do ${country}.`,
    `${name} combina ${primaryTag} com ${secondaryTag} — uma mistura rara em um único destino.`,
    `Roteiros de ${duration} em ${name} são ideais para viajantes que priorizam curadoria e ritmo próprio.`,
    `${firstHighlight} é uma das razões pelas quais ${name} ganhou lugar na curadoria autoral da Create Travel.`,
    `Como destino de ${type}, ${name} rivaliza com nomes muito mais conhecidos, mas mantém uma escala humana.`,
    `Quando o assunto é ${primaryTag} em ${country}, ${name} está entre os endereços que operadores independentes recomendam.`,
  ];
};

// ---------- 4. Micro-contextos por INTENÇÃO de busca ----------

export interface IntentBlock {
  intent: string;
  question: string;
  answer: string;
}

export const buildIntentMicroContexts = (
  destination: Destination
): IntentBlock[] => {
  const { name, country, region, bestTime, tags } = destination;
  const tagLabels = tags.map(getTagLabel);
  const primary = tagLabels[0]?.toLowerCase() || "experiências autorais";
  const type = destinationType(destination);
  const duration = suggestDuration(destination);
  const seasonHint = bestTime.split(/[.,;]/)[0].trim();

  return [
    {
      intent: "Inspiração",
      question: `Para onde viajar em busca de ${primary}?`,
      answer: `${name}, em ${country}, é uma escolha certeira para quem busca ${primary}. O destino combina paisagem marcante, cultura viva e o tipo de experiência que fica na memória por anos.`,
    },
    {
      intent: "Planejamento",
      question: `Como montar um roteiro para ${name}?`,
      answer: `Um bom roteiro para ${name} tem ${duration}, começa pela região de ${region}, alterna dias de descoberta com dias de descanso, e é desenhado sob medida a partir do perfil do viajante. A Create Travel monta a proposta ponto a ponto.`,
    },
    {
      intent: "Comparação",
      question: `${name} ou outro destino similar — qual escolher?`,
      answer: `Se o que você quer é ${primary} em ${type}, ${name} entrega uma experiência mais autoral e menos massificada do que destinos vizinhos. É a escolha certa para quem valoriza curadoria acima de logística de pacote.`,
    },
    {
      intent: "Perfil de viajante",
      question: `${name} é para que tipo de viajante?`,
      answer: `${name} é ideal para viajantes que apreciam ${tagLabels.slice(0, 3).join(", ").toLowerCase()} e não têm pressa. Funciona tanto para famílias e casais quanto para grupos privados — o ritmo muda, o cuidado com a experiência não.`,
    },
    {
      intent: "Quando ir",
      question: `Quando é a melhor época para ${name}?`,
      answer: `A melhor janela para ${name} é ${seasonHint}. Fora dela ainda é possível viajar, mas o roteiro precisa ser adaptado para tirar proveito do que o destino oferece em cada estação.`,
    },
  ];
};

// ---------- 5. Dados estruturados (para JSON-LD additionalProperty) ----------

export interface DestinationStructured {
  destino: string;
  tipo: string;
  duracao_ideal: string;
  melhor_epoca: string;
  moeda: string;
  idioma: string;
  fuso_horario: string;
  tags: string[];
  destaques: string[];
}

export const buildDestinationStructured = (
  destination: Destination
): DestinationStructured => {
  const profile = findProfile(destination.country);
  return {
    destino: `${destination.name}, ${destination.country}`,
    tipo: destinationType(destination),
    duracao_ideal: suggestDuration(destination),
    melhor_epoca: destination.bestTime,
    moeda: profile?.currency ?? "Consultar",
    idioma: profile?.language ?? "Consultar",
    fuso_horario: profile?.timezone ?? "Consultar",
    tags: destination.tags.map(getTagLabel),
    destaques: destination.highlights
      .slice(0, 8)
      .map((h) => getHighlightParts(h).title),
  };
};
