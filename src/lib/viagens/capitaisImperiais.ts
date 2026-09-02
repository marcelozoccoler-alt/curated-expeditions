import budapesteMd from "@/content/viagem/capitais-imperiais-2026/budapeste.md?raw";
import vienaMd from "@/content/viagem/capitais-imperiais-2026/viena.md?raw";
import heroTrip from "@/assets/viagem/capitais-imperiais-hero.jpg";
import heroBudapeste from "@/assets/viagem/capitais-imperiais-budapeste.jpg";
import heroViena from "@/assets/viagem/capitais-imperiais-viena.jpg";

/** Um item dentro de um bloco: normalmente um horário do dia. */
export interface RoteiroItem {
  id: string;
  heading: string;
  time?: string;
  body: string;
}

/** Um capítulo (história, lendas, hotel…) ou um dia do roteiro. */
export interface RoteiroBlock {
  id: string;
  kind: "chapter" | "day";
  title: string;
  subtitle?: string;
  intro: string;
  items: RoteiroItem[];
}

export interface CidadeRoteiro {
  slug: string;
  nome: string;
  title: string;
  subtitle: string;
  dates: string;
  hero: string;
  blocks: RoteiroBlock[];
  chapters: RoteiroBlock[];
  days: RoteiroBlock[];
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);

const cleanRule = (text: string) =>
  text
    .split("\n")
    .filter((l) => l.trim() !== "---")
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const parseCity = (raw: string, slug: string, nome: string, hero: string): CidadeRoteiro => {
  const lines = raw.split("\n");
  const title = (lines.find((l) => l.startsWith("# ")) || `# ${nome}`).replace(/^#\s*/, "").trim();
  const subtitle = (lines.find((l) => l.startsWith("## ")) || "").replace(/^##\s*/, "").trim();
  const dates = (lines.find((l) => l.startsWith("### ")) || "").replace(/^###\s*/, "").trim();

  // corpo a partir da primeira "## " que não seja o subtítulo
  const startIdx = lines.findIndex((l, i) => l.startsWith("## ") && i > lines.indexOf(`## ${subtitle}`));
  const body = lines.slice(startIdx < 0 ? 3 : startIdx);

  const blocks: RoteiroBlock[] = [];
  let current: { title: string; lines: string[] } | null = null;

  const flush = () => {
    if (!current) return;
    const isDay = /^DIA\s+\d/i.test(current.title);
    const contentLines = [...current.lines];
    let subtitleLine: string | undefined;
    // subtítulo do dia: primeiro "### " sem horário logo no começo
    const firstMeaningful = contentLines.findIndex((l) => l.trim() !== "" && l.trim() !== "---");
    if (
      firstMeaningful >= 0 &&
      contentLines[firstMeaningful].startsWith("### ") &&
      !/^###\s*\d{1,2}:\d{2}/.test(contentLines[firstMeaningful])
    ) {
      subtitleLine = contentLines[firstMeaningful].replace(/^###\s*/, "").trim();
      contentLines.splice(firstMeaningful, 1);
    }

    const items: RoteiroItem[] = [];
    const introLines: string[] = [];
    let item: { heading: string; lines: string[] } | null = null;
    const flushItem = () => {
      if (!item) return;
      const m = item.heading.match(/^(\d{1,2}:\d{2})\s*[—–-]\s*(.*)$/);
      items.push({
        id: slugify(item.heading),
        heading: m ? m[2] : item.heading,
        time: m ? m[1] : undefined,
        body: cleanRule(item.lines.join("\n")),
      });
      item = null;
    };
    for (const line of contentLines) {
      if (line.startsWith("### ")) {
        flushItem();
        item = { heading: line.replace(/^###\s*/, "").trim(), lines: [] };
      } else if (item) {
        item.lines.push(line);
      } else {
        introLines.push(line);
      }
    }
    flushItem();

    blocks.push({
      id: slugify(current.title),
      kind: isDay ? "day" : "chapter",
      title: current.title,
      subtitle: subtitleLine,
      intro: cleanRule(introLines.join("\n")),
      items,
    });
    current = null;
  };

  for (const line of body) {
    if (line.startsWith("## ")) {
      flush();
      current = { title: line.replace(/^##\s*/, "").trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  flush();

  // descarta divisórias vazias como "ROTEIRO DIA A DIA — X"
  const useful = blocks.filter((b) => b.intro || b.items.length > 0);

  return {
    slug,
    nome,
    title,
    subtitle,
    dates,
    hero,
    blocks: useful,
    chapters: useful.filter((b) => b.kind === "chapter"),
    days: useful.filter((b) => b.kind === "day"),
  };
};

export const VIAGEM_SLUG = "capitais-imperiais-2026";
export const VIAGEM_PATH = `/viagem/${VIAGEM_SLUG}`;

export const VIAGEM = {
  slug: VIAGEM_SLUG,
  path: VIAGEM_PATH,
  nome: "Capitais Imperiais",
  subtitulo: "Budapeste · Viena · Praga · Istambul",
  periodo: "2 a 16 de outubro de 2026",
  chamada:
    "Um grupo exclusivo e autoral atravessando o coração da Europa Central: quatro capitais, quatro rios, uma história escrita a quatro mãos — e registrada dia a dia para virar livro.",
  hero: heroTrip,
};

export const CIDADES: CidadeRoteiro[] = [
  parseCity(budapesteMd, "budapeste", "Budapeste", heroBudapeste),
  parseCity(vienaMd, "viena", "Viena", heroViena),
];

/** Cidades ainda por publicar — mantêm a narrativa completa da viagem. */
export const CIDADES_EM_BREVE = [
  { slug: "praga", nome: "Praga", periodo: "9 a 12 de outubro de 2026" },
  { slug: "istambul", nome: "Istambul", periodo: "12 a 16 de outubro de 2026" },
];

export const getCidade = (slug?: string) => CIDADES.find((c) => c.slug === slug);

/**
 * Fotos e vídeos da viagem, por cidade e por dia.
 * Chave: `${cidadeSlug}/${blocoId}` — ex.: "budapeste/dia-1-sexta-feira-3-de-outubro-de-2026".
 * Ao receber as imagens, basta adicionar aqui: elas aparecem no site e no livro.
 */
export interface ViagemFoto {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export const FOTOS: Record<string, ViagemFoto[]> = {};

export const fotosDoBloco = (cidadeSlug: string, blocoId: string): ViagemFoto[] =>
  FOTOS[`${cidadeSlug}/${blocoId}`] || [];
