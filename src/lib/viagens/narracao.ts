/**
 * Narração do roteiro em voz humana (text-to-speech).
 * As cidades alternam entre voz masculina e feminina.
 */
export interface VozNarracao {
  id: string;
  voice: string;
  genero: "masculina" | "feminina";
  nome: string;
  descricao: string;
  instructions: string;
}

const BASE =
  "Leia em português do Brasil como quem conta uma história de dormir para alguém muito querido: ritmo natural e fluido, um pouco mais rápido que uma leitura formal, nunca arrastado. Tom de conversa, animado e afetuoso, com pequenas variações de entonação e curiosidade genuína — como um pai lendo um livro de histórias à noite. Sorria na voz, respire nas vírgulas sem alongar demais e pronuncie nomes estrangeiros com naturalidade.";

export const VOZ_MASCULINA: VozNarracao = {
  id: "masculina",
  voice: "onyx",
  genero: "masculina",
  nome: "Voz masculina",
  descricao: "Grave e aveludada — como quem lê uma história de dormir sentado ao seu lado.",
  instructions: `${BASE} Voz masculina grave e aveludada, calorosa e animada, em tom de conversa próxima.`,
};

export const VOZ_FEMININA: VozNarracao = {
  id: "feminina",
  voice: "shimmer",
  genero: "feminina",
  nome: "Voz feminina",
  descricao: "Clara e envolvente — conduz o olhar de rua em rua como numa história.",
  instructions: `${BASE} Voz feminina clara e envolvente, elegante, leve e animada.`,
};

/** Ordem das cidades define a alternância: ímpar masculina, par feminina. */
const ORDEM = ["budapeste", "viena", "praga", "istambul"];

export const vozDaCidade = (slug: string): VozNarracao => {
  const i = ORDEM.indexOf(slug);
  const idx = i < 0 ? 0 : i;
  return idx % 2 === 0 ? VOZ_MASCULINA : VOZ_FEMININA;
};

export const VOZES = [VOZ_MASCULINA, VOZ_FEMININA];

/** Converte markdown do roteiro em texto limpo para leitura. */
export const textoParaNarracao = (...partes: (string | undefined)[]): string =>
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
    .trim();

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
