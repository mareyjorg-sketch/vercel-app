import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAllCitySlugKeys } from "../src/data/cityLookup.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const ORIGIN = "https://kammerjager-bergmann.de";

function urlEntry(loc, { priority, changefreq }) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/leistungen/", priority: "0.9", changefreq: "weekly" },
  { path: "/ueber-uns/", priority: "0.8", changefreq: "monthly" },
  { path: "/zertifizierung/", priority: "0.8", changefreq: "monthly" },
  { path: "/kontakt/", priority: "0.8", changefreq: "monthly" },
  { path: "/impressum/", priority: "0.5", changefreq: "yearly" },
];

const citySlugs = getAllCitySlugKeys();
const cityEntries = citySlugs.map((slug) =>
  urlEntry(`${ORIGIN}/${slug}/`, { priority: "0.7", changefreq: "monthly" }),
);

const urls = [
  ...staticPages.map((p) => urlEntry(`${ORIGIN}${p.path}`, p)),
  ...cityEntries,
].join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;

writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Wrote sitemap.xml (${staticPages.length + citySlugs.length} URLs) and robots.txt`);
