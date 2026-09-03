/**
 * Narração do roteiro em voz humana (text-to-speech).
 * Uma única voz conduz toda a viagem — os áudios são gerados uma vez
 * e reaproveitados do storage (sem custo de IA a cada play).
 */
export interface VozNarracao {
  id: string;
  voice: string;
  genero: "masculina" | "feminina";
  nome: string;
  descricao: string;
  instructions: string;
}

export const VOZ_NARRADOR: VozNarracao = {
  id: "narrador",
  voice: "onyx",
  genero: "masculina",
  nome: "Voz do narrador",
  descricao: "Grave e calorosa, animada — como quem lê uma história de dormir sentado ao seu lado.",
  instructions:
    "Leia em português do Brasil como quem conta uma história de dormir: ritmo ágil e fluido, tom de conversa, animado e afetuoso.",
};

/** Mantido por compatibilidade: a viagem inteira usa a mesma voz. */
export const vozDaCidade = (_slug?: string): VozNarracao => VOZ_NARRADOR;

export const VOZES = [VOZ_NARRADOR];

/** Códigos IATA mais usados nos roteiros — lidos pelo nome, não letra por letra. */
const IATA: Record<string, string> = {
  GRU: "Guarulhos, em São Paulo",
  CGH: "Congonhas, em São Paulo",
  VCP: "Viracopos, em Campinas",
  GIG: "Galeão, no Rio de Janeiro",
  SDU: "Santos Dumont, no Rio de Janeiro",
  CNF: "Confins, em Belo Horizonte",
  BSB: "Brasília",
  SSA: "Salvador",
  REC: "Recife",
  FOR: "Fortaleza",
  MAO: "Manaus",
  CWB: "Curitiba",
  POA: "Porto Alegre",
  IGU: "Foz do Iguaçu",
  BPS: "Porto Seguro",
  PLU: "Pampulha",
  LIS: "Lisboa",
  OPO: "Porto",
  MAD: "Madri",
  BCN: "Barcelona",
  CDG: "Charles de Gaulle, em Paris",
  ORY: "Orly, em Paris",
  FCO: "Fiumicino, em Roma",
  MXP: "Malpensa, em Milão",
  VCE: "Veneza",
  ZRH: "Zurique",
  FRA: "Frankfurt",
  MUC: "Munique",
  AMS: "Amsterdã",
  LHR: "Heathrow, em Londres",
  BUD: "Budapeste",
  VIE: "Viena",
  PRG: "Praga",
  IST: "Istambul",
  CAI: "Cairo",
  DXB: "Dubai",
  DOH: "Doha",
  JNB: "Joanesburgo",
  CPT: "Cidade do Cabo",
  SCL: "Santiago",
  EZE: "Buenos Aires",
  MEX: "Cidade do México",
  JFK: "Nova York",
  MIA: "Miami",
  LAX: "Los Angeles",
  NRT: "Tóquio",
  HND: "Haneda, em Tóquio",
};

/**
 * Deixa o texto pronto para o ouvido: moedas, códigos IATA, abreviações
 * e horários são escritos como se fossem falados.
 */
export const decodificarParaAudio = (texto: string): string =>
  texto
    // Moedas
    .replace(/R\$\s?([\d.,]+)/g, "$1 reais")
    .replace(/US\$\s?([\d.,]+)/g, "$1 dólares")
    .replace(/€\s?([\d.,]+)/g, "$1 euros")
    .replace(/([\d.,]+)\s?€/g, "$1 euros")
    .replace(/R\$/g, "reais")
    .replace(/US\$/g, "dólares")
    .replace(/€/g, "euros")
    // Estrelas de hotel
    .replace(/(\d)\s*[★⭐]/g, "$1 estrelas")
    // Códigos internos de roteiro (FA-JAL-06) — não devem ser lidos
    .replace(/\b[A-Z]{2,3}-[A-Z]{2,4}-[A-Z0-9]{2,4}\b/g, " ")
    // Códigos IATA conhecidos: lidos pelo nome do aeroporto
    .replace(/\(([A-Z]{3})\)/g, (m, cod: string) => (IATA[cod] ? ` ${IATA[cod]}` : m))
    .replace(/\b([A-Z]{3})\b/g, (m, cod: string) => IATA[cod] ?? m)
    // Horários
    .replace(/\b(\d{1,2})h(\d{2})\b/g, "$1 horas e $2")
    .replace(/\b(\d{1,2})h\b/g, "$1 horas")
    // Abreviações e símbolos
    .replace(/\bn[ºo°]\s?(\d)/gi, "número $1")
    .replace(/(\d)\s?km\b/g, "$1 quilômetros")
    .replace(/(\d)\s?°C\b/g, "$1 graus")
    .replace(/(\d)\s?m²/g, "$1 metros quadrados")
    .replace(/\bapto\.?\b/gi, "apartamento")
    .replace(/\bAv\.\s?/g, "Avenida ")
    .replace(/\bDr\.\s?/g, "Doutor ")
    .replace(/\bSra\.\s?/g, "Senhora ")
    .replace(/\bSr\.\s?/g, "Senhor ")
    .replace(/\betc\.\b/gi, "etcétera")
    .replace(/\bp\.?\s?ex\.\b/gi, "por exemplo")
    .replace(/\s*&\s*/g, " e ")
    .replace(/\s*\/\s*/g, ", ")
    .replace(/\s*[–—]\s*/g, ", ")
    .replace(/\.{3,}/g, ".")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ ,/g, ",")
    .trim();

/** Converte markdown do roteiro em texto limpo para leitura. */
export const textoParaNarracao = (...partes: (string | undefined)[]): string =>
  decodificarParaAudio(
    partes
      .filter(Boolean)
      .join("\n\n")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/^\s*\|.*\|\s*$/gm, " ")
      .replace(/^\s{0,3}#{1,6}\s*/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/[*_`~]+/g, "")
      .replace(/[ \t]+/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );

/** Divide o texto em blocos seguros para o limite do modelo. */
export const dividirParaNarracao = (texto: string, maxPalavras = 260): string[] => {
  const contar = (s: string) => (s.match(/\S+/g) ?? []).length;
  const frases = texto.match(/[^.!?]+[.!?]*\s*/g) ?? [texto];
  const blocos: string[] = [];
  let atual = "";
  const fechar = () => {
    if (atual.trim()) blocos.push(atual.trim());
    atual = "";
  };
  for (const frase of frases) {
    if (contar(frase) > maxPalavras) {
      fechar();
      const palavras = frase.match(/\S+/g) ?? [];
      for (let i = 0; i < palavras.length; i += maxPalavras) {
        blocos.push(palavras.slice(i, i + maxPalavras).join(" "));
      }
      continue;
    }
    if (atual && contar(atual) + contar(frase) > maxPalavras) fechar();
    atual += frase;
  }
  fechar();
  return blocos;
};
