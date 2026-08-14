/**
 * FAQ dinâmico por continente / região e por tag de experiência.
 *
 * As perguntas não são inventadas aqui: são agregadas das FAQs já escritas em
 * cada destino (src/lib/destinations.ts e destinationsExtra/*), agrupadas por
 * continente (com subgrupos por região) e por tag de experiência.
 *
 * Objetivo: páginas de resposta direta, citáveis por assistentes de IA
 * (ChatGPT, Perplexity, Gemini) e elegíveis a featured snippets, que também
 * orientam o viajante antes do primeiro contato.
 */
import { destinations } from "./destinations";
import { CONTINENTS, TAGS, FAQ, getTagLabel } from "./types";

export interface FaqEntry extends FAQ {
  /** Destino de origem da resposta. */
  sourceName: string;
  sourceSlug: string;
  region: string;
  continent: string;
}

export interface FaqSubgroup {
  /** Região (dentro de um continente) ou continente (dentro de uma tag). */
  title: string;
  items: FaqEntry[];
}

export interface FaqTopic {
  kind: "continente" | "experiencia";
  /** Slug usado na URL: /perguntas-frequentes/{kind}/{slug} */
  slug: string;
  label: string;
  /** Total de perguntas publicadas no tema. */
  count: number;
  /** Destinos relacionados (nome + slug) para links internos. */
  destinations: { name: string; slug: string }[];
  subgroups: FaqSubgroup[];
}

/** Máximo de perguntas por destino em cada tema, para evitar repetição. */
const PER_DESTINATION = 3;
/** Máximo de perguntas por página, para manter a leitura possível. */
const MAX_PER_TOPIC = 45;

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

const collect = (list: typeof destinations): { subgroups: FaqSubgroup[]; count: number; grouped: Map<string, FaqEntry[]> } => {
  const grouped = new Map<string, FaqEntry[]>();
  const seen = new Set<string>();
  let count = 0;

  for (const d of list) {
    if (count >= MAX_PER_TOPIC) break;
    const faqs = (d.faq || []).slice(0, PER_DESTINATION);
    for (const f of faqs) {
      if (count >= MAX_PER_TOPIC) break;
      const key = normalize(f.q);
      if (seen.has(key)) continue;
      seen.add(key);
      count++;
      const entry: FaqEntry = {
        q: f.q,
        a: f.a,
        sourceName: d.name,
        sourceSlug: d.slug,
        region: d.region,
        continent: d.continent,
      };
      const bucket = grouped.get(d.region) || [];
      bucket.push(entry);
      grouped.set(d.region, bucket);
    }
  }

  const subgroups: FaqSubgroup[] = [...grouped.entries()].map(([title, items]) => ({
    title,
    items,
  }));

  return { subgroups, count, grouped };
};

const buildContinentTopics = (): FaqTopic[] =>
  CONTINENTS.map((c) => {
    const list = destinations.filter(
      (d) => normalize(d.continent) === normalize(c.name),
    );
    const { subgroups, count } = collect(list);
    return {
      kind: "continente" as const,
      slug: c.id,
      label: c.name,
      count,
      destinations: list.map((d) => ({ name: d.name, slug: d.slug })),
      subgroups,
    };
  }).filter((t) => t.count >= 6);

const buildTagTopics = (): FaqTopic[] =>
  TAGS.map((t) => {
    const list = destinations.filter((d) => d.tags.includes(t.id));
    const { subgroups, count } = collect(list);
    return {
      kind: "experiencia" as const,
      slug: t.id,
      label: getTagLabel(t.id),
      count,
      destinations: list.map((d) => ({ name: d.name, slug: d.slug })),
      subgroups,
    };
  }).filter((t) => t.count >= 6);

export const faqContinentTopics: FaqTopic[] = buildContinentTopics();
export const faqTagTopics: FaqTopic[] = buildTagTopics();
export const faqTopics: FaqTopic[] = [...faqContinentTopics, ...faqTagTopics];

export const getFaqTopic = (
  kind: string | undefined,
  slug: string | undefined,
): FaqTopic | undefined =>
  faqTopics.find((t) => t.kind === kind && t.slug === slug);

/** Caminho canônico de um tema. */
export const faqTopicPath = (t: FaqTopic) =>
  `/perguntas-frequentes/${t.kind}/${t.slug}`;

/** Título e descrição otimizados por tema. */
export const faqTopicMeta = (t: FaqTopic) => {
  if (t.kind === "continente") {
    return {
      title: `Perguntas frequentes: viajar para ${t.label} — Create Travel`,
      description: `Melhor época, duração ideal, logística e o que esperar em cada região de ${t.label}. ${t.count} respostas diretas escritas pelos travel designers da Create Travel.`,
      keywords: `viagem ${t.label.toLowerCase()}, melhor época ${t.label.toLowerCase()}, quantos dias ${t.label.toLowerCase()}, roteiro sob medida ${t.label.toLowerCase()}`,
      intro: `Respostas diretas sobre viajar para ${t.label}: melhor época por região, quantos dias reservar, logística interna, nível de conforto e o que cada roteiro exige de tempo e antecedência. Tudo escrito pelos travel designers da Create Travel a partir dos destinos que a casa opera em ${t.label}.`,
    };
  }
  return {
    title: `${t.label}: perguntas frequentes de quem viaja — Create Travel`,
    description: `${t.count} respostas diretas sobre ${t.label.toLowerCase()}: melhor época, destinos indicados, preparo necessário e como encaixar a experiência num roteiro sob medida.`,
    keywords: `${t.label.toLowerCase()}, viagem ${t.label.toLowerCase()}, melhor época ${t.label.toLowerCase()}, roteiro ${t.label.toLowerCase()} sob medida`,
    intro: `Tudo o que os viajantes perguntam antes de fechar uma viagem de ${t.label.toLowerCase()}: onde a experiência acontece com mais qualidade, em que meses ela funciona melhor, que preparo exige e como combiná-la com o restante do roteiro.`,
  };
};

/** Passos que orientam o viajante antes do primeiro contato. */
export const PRE_CONTATO = [
  {
    title: "Defina a janela de datas",
    body: "Mesmo aproximada. A época determina fauna, clima, floração, preço e disponibilidade — e é a primeira variável que o travel designer usa para desenhar o roteiro.",
  },
  {
    title: "Some os dias reais de viagem",
    body: "Considere voos longos, fuso e o dia de chegada. Roteiros multi-país pedem de 10 a 14 dias; safáris e Patagônia, de 8 a 12.",
  },
  {
    title: "Diga com quem viaja",
    body: "Casal, família com crianças, grupo de amigos ou viagem solo mudam ritmo, hospedagem e nível de aventura.",
  },
  {
    title: "Escolha o formato",
    body: "Roteiro privativo sob medida, grupo com coordenador brasileiro ou circuito com guia local no destino — cada um tem uma dinâmica diferente.",
  },
];
