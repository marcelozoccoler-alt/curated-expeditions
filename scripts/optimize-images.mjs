// One-off image optimizer. Recompresses JPGs in place: max 1920px wide, quality 80, mozjpeg.
// Keeps .jpg extension so existing Vite glob imports keep working.
import sharp from "sharp";
import { readdirSync, statSync, renameSync, unlinkSync } from "fs";
import { join } from "path";

const DIRS = [
  "src/assets",
  "src/assets/destinations",
  "src/assets/states",
  "src/assets/stays",
];

const MAX_WIDTH = 1920;
const QUALITY = 78;

async function processFile(filePath) {
  const before = statSync(filePath).size;
  const tmp = filePath + ".tmp";
  const meta = await sharp(filePath).metadata();
  let pipeline = sharp(filePath).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }
  await pipeline.jpeg({ quality: QUALITY, mozjpeg: true, progressive: true }).toFile(tmp);
  const after = statSync(tmp).size;
  if (after < before) {
    renameSync(tmp, filePath);
    return { changed: true, before, after };
  } else {
    unlinkSync(tmp);
    return { changed: false, before, after };
  }
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for (const dir of DIRS) {
  let files;
  try {
    files = readdirSync(dir);
  } catch {
    continue;
  }
  for (const f of files) {
    if (!/\.jpe?g$/i.test(f)) continue;
    const p = join(dir, f);
    if (!statSync(p).isFile()) continue;
    try {
      const r = await processFile(p);
      totalBefore += r.before;
      totalAfter += r.changed ? r.after : r.before;
      count++;
      const kb = (n) => (n / 1024).toFixed(0) + "KB";
      console.log(
        `${r.changed ? "✓" : "·"} ${p}  ${kb(r.before)} → ${kb(r.changed ? r.after : r.before)}`
      );
    } catch (e) {
      console.error(`✗ ${p}`, e.message);
    }
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(2) + "MB";
console.log(`\n${count} files. Total: ${mb(totalBefore)} → ${mb(totalAfter)} (saved ${mb(totalBefore - totalAfter)})`);
