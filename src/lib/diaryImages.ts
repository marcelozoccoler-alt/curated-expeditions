// Resolves cover image for a diary post.
// Strategy:
//   1. explicit post.imageOverrideUrl
//   2. image of the first related destination (via keyword match)
//   3. undefined → caller shows a graceful fallback
import type { DiaryPost } from "./diaryPosts";
import { getRelatedDestinationsForPost } from "./relatedDiary";
import { getDestinationImage } from "./destinationImages";

export const getDiaryCover = (post: DiaryPost): string | undefined => {
  if (post.imageOverrideUrl) return post.imageOverrideUrl;
  const related = getRelatedDestinationsForPost(post, 1);
  if (related[0]) {
    const img = getDestinationImage(related[0].id) || related[0].imageOverrideUrl;
    if (img) return img;
  }
  return undefined;
};

// Categories used by /diario/categoria/:slug
export const DIARY_CATEGORIES = [
  { slug: "cultura", label: "Cultura", value: "Cultura" },
  { slug: "destino", label: "Destino", value: "Destino" },
  { slug: "natureza", label: "Natureza", value: "Natureza" },
  { slug: "roteiro", label: "Roteiro", value: "Roteiro" },
  { slug: "curiosidades", label: "Curiosidades", value: "Curiosidades" },
] as const;

export type DiaryCategorySlug = (typeof DIARY_CATEGORIES)[number]["slug"];

export const getCategoryBySlug = (slug: string) =>
  DIARY_CATEGORIES.find((c) => c.slug === slug);

export const getCategorySlug = (value: string): string =>
  DIARY_CATEGORIES.find((c) => c.value === value)?.slug ?? value.toLowerCase();
