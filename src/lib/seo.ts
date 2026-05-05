import { CONTINENTS, TAGS, getTagLabel } from "./types";
import { destinations } from "./destinations";

/**
 * SEO rules for /destinos:
 *  - Indexable canonicals: /destinos, /destinos?c=<continent>, /destinos?tags=<single-tag>
 *    plus their paginated series (?page=2, ?page=3...) using self-canonical + rel=prev/next.
 *  - Noindex (canonical → cleanest version): combinations of continent + tags,
 *    multi-tag, search queries, non-default sort.
 */

export type DestinosSearchState = {
  continent: string; // "todos" or continent id
  tags: string[];
  query: string;
  sort: string; // "curadoria" | "popularidade" | "melhor-epoca"
  page: number;
};

export const parseDestinosParams = (sp: URLSearchParams): DestinosSearchState => ({
  continent: sp.get("c") || "todos",
  tags: (sp.get("tags") || "").split(",").map((t) => t.trim()).filter(Boolean),
  query: sp.get("q") || "",
  sort: sp.get("sort") || "curadoria",
  page: Math.max(1, parseInt(sp.get("page") || "1", 10) || 1),
});

const buildPath = (params: Partial<{ c: string; tags: string; sort: string; page: number; q: string }>) => {
  const sp = new URLSearchParams();
  if (params.c && params.c !== "todos") sp.set("c", params.c);
  if (params.tags) sp.set("tags", params.tags);
  if (params.q) sp.set("q", params.q);
  if (params.sort && params.sort !== "curadoria") sp.set("sort", params.sort);
  if (params.page && params.page > 1) sp.set("page", String(params.page));
  const q = sp.toString();
  return `/destinos${q ? `?${q}` : ""}`;
};

export const getDestinosSEO = (state: DestinosSearchState, totalPages: number) => {
  const { continent, tags, query, sort, page } = state;

  const continentName = CONTINENTS.find((c) => c.id === continent)?.name;
  const singleTag = tags.length === 1 ? tags[0] : null;
  const singleTagLabel = singleTag ? getTagLabel(singleTag) : null;

  // Indexable iff: default sort, no search, and at most ONE filter dimension active
  // (continent OR a single tag OR neither). Pagination is allowed.
  const dimensions =
    (continent !== "todos" ? 1 : 0) + (tags.length > 0 ? 1 : 0) + (query ? 1 : 0);
  const isIndexable =
    sort === "curadoria" && !query && dimensions <= 1 && tags.length <= 1;

  // Canonical: for indexable URLs, point to self (with page); for noindex,
  // point to the cleanest version (drop search/extra tags/sort).
  const canonicalPath = isIndexable
    ? buildPath({
        c: continent,
        tags: singleTag || undefined,
        page,
      })
    : buildPath({
        c: continent !== "todos" ? continent : undefined,
        tags: singleTag || undefined,
      });

  // Title + description by context
  let title: string;
  let description: string;

  if (continent === "todos" && tags.length === 0) {
    title = "Destinos com curadoria — Create Travel";
    description =
      "Biblioteca de destinos selecionados pela Create Travel. Brasil, América do Sul, África, Europa e mais — viagens autênticas e com propósito.";
  } else if (continentName && tags.length === 0) {
    title = `Destinos em ${continentName} — Create Travel`;
    description = `Curadoria de destinos em ${continentName}: roteiros autênticos, exclusivos e com propósito. Inspire-se e crie sua próxima viagem com a Create Travel.`;
  } else if (singleTagLabel && continent === "todos") {
    title = `${singleTagLabel} — Destinos selecionados — Create Travel`;
    description = `Destinos ideais para ${singleTagLabel.toLowerCase()}, com curadoria Create Travel. Viagens com profundidade, ética e luxo discreto.`;
  } else if (continentName && singleTagLabel) {
    title = `${singleTagLabel} em ${continentName} — Create Travel`;
    description = `Destinos em ${continentName} com foco em ${singleTagLabel.toLowerCase()}. Curadoria Create Travel para viagens com propósito.`;
  } else {
    title = "Destinos — Create Travel";
    description =
      "Resultados filtrados na biblioteca de destinos Create Travel. Curadoria de viagens autênticas e exclusivas.";
  }

  if (page > 1) {
    title = `${title} — Página ${page}`;
  }

  // rel=prev/next for paginated indexable series
  const prevPath =
    isIndexable && page > 1
      ? buildPath({ c: continent, tags: singleTag || undefined, page: page - 1 })
      : undefined;
  const nextPath =
    isIndexable && page < totalPages
      ? buildPath({ c: continent, tags: singleTag || undefined, page: page + 1 })
      : undefined;

  return {
    title,
    description,
    canonicalPath,
    noindex: !isIndexable,
    prevPath,
    nextPath,
  };
};

/**
 * Returns the full list of indexable URL paths for /destinos.
 * Used by the prerender script and sitemap generation.
 */
export const getDestinosIndexablePaths = (perFilterPages: (key: string) => number): string[] => {
  const paths: string[] = [];

  // Root + its pagination
  const rootPages = perFilterPages("root");
  paths.push("/destinos");
  for (let p = 2; p <= rootPages; p++) paths.push(`/destinos?page=${p}`);

  // Per continent
  for (const c of CONTINENTS) {
    const pages = perFilterPages(`c:${c.id}`);
    if (pages === 0) continue;
    paths.push(`/destinos?c=${c.id}`);
    for (let p = 2; p <= pages; p++) paths.push(`/destinos?c=${c.id}&page=${p}`);
  }

  // Per single tag
  for (const t of TAGS) {
    const pages = perFilterPages(`tag:${t.id}`);
    if (pages === 0) continue;
    paths.push(`/destinos?tags=${t.id}`);
    for (let p = 2; p <= pages; p++) paths.push(`/destinos?tags=${t.id}&page=${p}`);
  }

  return paths;
};
