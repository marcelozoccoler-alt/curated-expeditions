// Auto-resolves images for destinations using Vite glob import.
// Files live in src/assets/destinations/{id}.jpg
const modules = import.meta.glob("../assets/destinations/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Normalizes keys so ids with accents (ex.: "asia-indonésia-bali") resolve
// against ASCII filenames (asia-indonesia-bali.jpg).
const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const map: Record<string, string> = {};
for (const path in modules) {
  const m = path.match(/destinations\/(.+)\.jpg$/);
  if (m) map[normalize(m[1])] = modules[path];
}

export const getDestinationImage = (id: string): string | undefined =>
  map[normalize(id)];

