// Auto-resolves hero images for regions bundled in src/assets/regions/{slug}.jpg.
// Falls back to the region's remote heroImageUrl when no local asset exists.
const modules = import.meta.glob("../assets/regions/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const path in modules) {
  const m = path.match(/regions\/(.+)\.jpg$/);
  if (m) map[m[1]] = modules[path];
}

export const getRegionImage = (slug: string): string | undefined => map[slug];

export const getRegionHero = (region: {
  slug: string;
  heroImageUrl: string;
}): string => map[region.slug] || region.heroImageUrl;
