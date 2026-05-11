// Auto-resolves images for stays using Vite glob import.
// Files live in src/assets/stays/{slug}.jpg
const modules = import.meta.glob("../assets/stays/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const path in modules) {
  const m = path.match(/stays\/(.+)\.jpg$/);
  if (m) map[m[1]] = modules[path];
}

export const getStayImage = (slug: string): string | undefined => map[slug];
