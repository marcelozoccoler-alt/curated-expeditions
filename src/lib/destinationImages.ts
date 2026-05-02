// Auto-resolves images for destinations using Vite glob import.
// Files live in src/assets/destinations/{id}.jpg
const modules = import.meta.glob("../assets/destinations/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const path in modules) {
  const m = path.match(/destinations\/(.+)\.jpg$/);
  if (m) map[m[1]] = modules[path];
}

export const getDestinationImage = (id: string): string | undefined => map[id];
