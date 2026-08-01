// Auto-resolves diary cover images bundled in src/assets/diary/*.jpg
const modules = import.meta.glob("../assets/diary/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const map: Record<string, string> = {};
for (const path in modules) {
  const m = path.match(/diary\/(.+\.jpg)$/);
  if (m) map[m[1]] = modules[path];
}

// Accepts "/src/assets/diary/foo.jpg", "src/assets/diary/foo.jpg" or "foo.jpg"
export const resolveDiaryAsset = (ref?: string): string | undefined => {
  if (!ref) return undefined;
  const file = ref.split("/").pop();
  return file ? map[file] : undefined;
};
