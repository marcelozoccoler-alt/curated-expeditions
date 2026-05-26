// Helpers to surface contextual cross-links between Destinos, Hospedagens,
// Experiências e os artigos do Diário Create Travel.
//
// O matching é simples e baseado em palavras-chave (título + keywords + slug)
// dos posts do Diário versus o nome/país/região/tags do item de origem.

import { diaryPosts, type DiaryPost } from "./diaryPosts";
import { destinations } from "./destinations";
import { stays } from "./stays";
import type { Destination, Stay } from "./types";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

const tokens = (s: string) =>
  norm(s)
    .split(/\s+/)
    .filter((t) => t.length > 3);

const postHaystack = (p: DiaryPost) =>
  norm(`${p.title} ${p.h1} ${p.keywords} ${p.slug} ${p.metaDescription}`);

const scorePost = (p: DiaryPost, needles: string[]): number => {
  const hay = postHaystack(p);
  let score = 0;
  for (const n of needles) {
    if (!n || n.length < 4) continue;
    if (hay.includes(n)) score += n.length >= 6 ? 3 : 2;
  }
  return score;
};

export const getRelatedDiaryForDestination = (
  d: Destination,
  limit = 3
): DiaryPost[] => {
  const needles = [
    ...tokens(d.name),
    ...tokens(d.country),
    ...tokens(d.region),
    ...tokens(d.continent),
    ...d.tags.map((t) => norm(t)),
  ];
  const scored = diaryPosts
    .map((p) => ({ p, s: scorePost(p, needles) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map((x) => x.p);
};

export const getRelatedDiaryForStay = (s: Stay, limit = 3): DiaryPost[] => {
  const dest = destinations.find(
    (d) => d.id === s.destinationRef || d.slug === s.destinationRef
  );
  const needles = dest
    ? [
        ...tokens(dest.name),
        ...tokens(dest.country),
        ...tokens(dest.region),
        ...tokens(dest.continent),
        ...s.tags.map((t) => norm(t)),
      ]
    : [...tokens(s.name), ...s.tags.map((t) => norm(t))];
  const scored = diaryPosts
    .map((p) => ({ p, s: scorePost(p, needles) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map((x) => x.p);
};

export const getRelatedDiaryForKeywords = (
  keywords: string[],
  limit = 3
): DiaryPost[] => {
  const needles = keywords.flatMap((k) => tokens(k));
  const scored = diaryPosts
    .map((p) => ({ p, s: scorePost(p, needles) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map((x) => x.p);
};

// Inverso: dado um post do Diário, recomenda Destinos e Hospedagens
// relacionados via keywords do post.
export const getRelatedDestinationsForPost = (
  p: DiaryPost,
  limit = 3
): Destination[] => {
  const needles = [...tokens(p.title), ...tokens(p.keywords), ...tokens(p.slug)];
  const scored = destinations
    .map((d) => {
      const hay = norm(`${d.name} ${d.country} ${d.region} ${d.continent}`);
      let s = 0;
      for (const n of needles) {
        if (n.length >= 4 && hay.includes(n)) s += n.length >= 6 ? 3 : 2;
      }
      return { d, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, limit).map((x) => x.d);
};

export const getRelatedStaysForPost = (p: DiaryPost, limit = 3): Stay[] => {
  const needles = [...tokens(p.title), ...tokens(p.keywords), ...tokens(p.slug)];
  const scored = stays
    .map((s) => {
      const dest = destinations.find(
        (d) => d.id === s.destinationRef || d.slug === s.destinationRef
      );
      const hay = norm(
        `${s.name} ${dest?.country ?? ""} ${dest?.region ?? ""} ${dest?.name ?? ""}`
      );
      let sc = 0;
      for (const n of needles) {
        if (n.length >= 4 && hay.includes(n)) sc += n.length >= 6 ? 3 : 2;
      }
      return { s, sc };
    })
    .filter((x) => x.sc > 0)
    .sort((a, b) => b.sc - a.sc);
  return scored.slice(0, limit).map((x) => x.s);
};
