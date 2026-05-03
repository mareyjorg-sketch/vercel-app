import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const src = path.join(
  "C:",
  "Users",
  "jorge",
  ".cursor",
  "projects",
  "c-Users-jorge-cursor",
  "assets",
  "c__Users_jorge_AppData_Roaming_Cursor_User_workspaceStorage_0280b741bb958eaba2e6d27f80b63dcc_images_logo_neu_-42684b4f-76f3-48ed-a635-1151f322c8a7.png",
);
const outDir = path.join(root, "public", "assets");
const dst = path.join(outDir, "logo.png");

if (!fs.existsSync(src)) {
  console.error("Source logo not found:", src);
  process.exit(1);
}

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
if (channels !== 4) {
  console.error("Expected RGBA");
  process.exit(1);
}

const px = new Uint8ClampedArray(data);

/** Nur „Papier“-Pixel: hell + wenig Sättigung (schützt Grün/Schwarz im Logo) */
function isPaperBackground(r, g, b) {
  const lum = (r + g + b) / 3;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;
  if (lum < 210) return false;
  if (sat > 52) return false;
  if (r > 246 && g > 246 && b > 246) return true;
  return lum > 228 && sat < 42;
}

const visited = new Uint8Array(width * height);
const queue = [];

function seed(x, y) {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const idx = y * width + x;
  if (visited[idx]) return;
  const i = idx * 4;
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  if (!isPaperBackground(r, g, b)) return;
  visited[idx] = 1;
  queue.push(idx);
}

for (let x = 0; x < width; x++) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y++) {
  seed(0, y);
  seed(width - 1, y);
}

for (let qi = 0; qi < queue.length; qi++) {
  const idx = queue[qi];
  const x = idx % width;
  const y = (idx / width) | 0;
  const i = idx * 4;
  px[i + 3] = 0;

  const neighbors = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
    const nidx = ny * width + nx;
    if (visited[nidx]) continue;
    const j = nidx * 4;
    const r = px[j];
    const g = px[j + 1];
    const b = px[j + 2];
    if (!isPaperBackground(r, g, b)) continue;
    visited[nidx] = 1;
    queue.push(nidx);
  }
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

await sharp(Buffer.from(px), { raw: { width, height, channels: 4 } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .trim({ threshold: 12 })
  .toFile(dst);

const meta = await sharp(dst).metadata();
console.log("Wrote", dst, `${meta.width}x${meta.height}`);
