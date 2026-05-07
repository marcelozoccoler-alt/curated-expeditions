import { CONTINENTS, TAGS, getTagLabel } from "./types";

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

/**
 * SEO rules for /experiencias:
 *  - /experiencias (root, indexable)
 *  - /experiencias/:tagId (indexable, paginated via ?page=N)
 *  - Other variations (search, multi-tag, non-default sort) → noindex
 *    with canonical pointing to the cleanest version.
 */

export type ExperienciasSearchState = {
  tagId: string | null; // null = root index
  query: string;
  sort: string;
  page: number;
};

export const parseExperienciasParams = (
  sp: URLSearchParams,
  tagId: string | null
): ExperienciasSearchState => ({
  tagId,
  query: sp.get("q") || "",
  sort: sp.get("sort") || "curadoria",
  page: Math.max(1, parseInt(sp.get("page") || "1", 10) || 1),
});

const buildExpPath = (tagId: string | null, page = 1, extra?: { sort?: string; q?: string }) => {
  const base = tagId ? `/experiencias/${tagId}` : "/experiencias";
  const sp = new URLSearchParams();
  if (extra?.q) sp.set("q", extra.q);
  if (extra?.sort && extra.sort !== "curadoria") sp.set("sort", extra.sort);
  if (page > 1) sp.set("page", String(page));
  const q = sp.toString();
  return `${base}${q ? `?${q}` : ""}`;
};

export const getExperienciasSEO = (state: ExperienciasSearchState, totalPages: number) => {
  const { tagId, query, sort, page } = state;
  const tagLabel = tagId ? getTagLabel(tagId) : null;

  const isIndexable = sort === "curadoria" && !query;

  const canonicalPath = isIndexable
    ? buildExpPath(tagId, page)
    : buildExpPath(tagId, 1);

  let title: string;
  let description: string;

  if (!tagId) {
    title = "Experiências de viagem — Create Travel";
    description =
      "Explore experiências de viagem com curadoria Create Travel: safári, trekking, gastronomia, lua de mel, cultura e mais. Encontre destinos por tipo de experiência.";
  } else {
    title = `${tagLabel} — Experiências Create Travel`;
    description = `Destinos selecionados pela Create Travel para ${tagLabel?.toLowerCase()}. Curadoria de viagens autênticas, exclusivas e com propósito.`;
  }

  if (page > 1) title = `${title} — Página ${page}`;

  const prevPath =
    isIndexable && page > 1 ? buildExpPath(tagId, page - 1) : undefined;
  const nextPath =
    isIndexable && page < totalPages ? buildExpPath(tagId, page + 1) : undefined;

  return { title, description, canonicalPath, noindex: !isIndexable, prevPath, nextPath };
};

export const EXPERIENCIAS_TAG_IDS = TAGS.map((t) => t.id);

/**
 * SEO rules for /hospedagens:
 *  - /hospedagens (root) e ?tags=<single-tag> são indexáveis (com paginação).
 *  - Multi-tag, busca, sort não-padrão → noindex,follow com canonical limpo.
 */

export type HospedagensSearchState = {
  tags: string[];
  query: string;
  sort: string;
  page: number;
};

export const parseHospedagensParams = (sp: URLSearchParams): HospedagensSearchState => ({
  tags: (sp.get("tags") || "").split(",").map((t) => t.trim()).filter(Boolean),
  query: sp.get("q") || "",
  sort: sp.get("sort") || "curadoria",
  page: Math.max(1, parseInt(sp.get("page") || "1", 10) || 1),
});

const buildHospPath = (params: Partial<{ tags: string; q: string; sort: string; page: number }>) => {
  const sp = new URLSearchParams();
  if (params.tags) sp.set("tags", params.tags);
  if (params.q) sp.set("q", params.q);
  if (params.sort && params.sort !== "curadoria") sp.set("sort", params.sort);
  if (params.page && params.page > 1) sp.set("page", String(params.page));
  const q = sp.toString();
  return `/hospedagens${q ? `?${q}` : ""}`;
};

export const getHospedagensSEO = (state: HospedagensSearchState, totalPages: number) => {
  const { tags, query, sort, page } = state;
  const singleTag = tags.length === 1 ? tags[0] : null;
  const singleTagLabel = singleTag ? getTagLabel(singleTag) : null;

  const isIndexable = sort === "curadoria" && !query && tags.length <= 1;

  const canonicalPath = isIndexable
    ? buildHospPath({ tags: singleTag || undefined, page })
    : buildHospPath({ tags: singleTag || undefined });

  let title: string;
  let description: string;

  if (!singleTagLabel) {
    title = "Hospedagens com curadoria — Create Travel";
    description =
      "Seleção Create Travel de hospedagens autorais pelo mundo: lodges, refúgios e hotéis com luxo discreto, ética e propósito.";
  } else {
    title = `Hospedagens para ${singleTagLabel} — Create Travel`;
    description = `Hospedagens selecionadas pela Create Travel para ${singleTagLabel.toLowerCase()}: experiências autênticas, luxo discreto e curadoria.`;
  }
  if (page > 1) title = `${title} — Página ${page}`;

  const prevPath = isIndexable && page > 1 ? buildHospPath({ tags: singleTag || undefined, page: page - 1 }) : undefined;
  const nextPath = isIndexable && page < totalPages ? buildHospPath({ tags: singleTag || undefined, page: page + 1 }) : undefined;

  return { title, description, canonicalPath, noindex: !isIndexable, prevPath, nextPath };
};
