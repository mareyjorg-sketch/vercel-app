import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getAllCitySlugKeys,
  getAllDistrictSlugKeys,
} from "../src/data/cityLookup.js";

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
const districtSlugs = getAllDistrictSlugKeys();

const staticEntries = staticPages.map((p) =>
  urlEntry(`${ORIGIN}${p.path}`, { priority: p.priority, changefreq: p.changefreq }),
);

const cityEntries = citySlugs.map((slug) =>
  urlEntry(`${ORIGIN}/${slug}/`, { priority: "0.8", changefreq: "monthly" }),
);

const districtEntries = districtSlugs.map((slug) =>
  urlEntry(`${ORIGIN}/${slug}/`, { priority: "0.6", changefreq: "monthly" }),
);

const mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries.join("\n")}
</urlset>
`;

const citiesSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...cityEntries, ...districtEntries].join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${ORIGIN}/sitemap.xml
Sitemap: ${ORIGIN}/sitemap-cities.xml
`;

writeFileSync(path.join(publicDir, "sitemap.xml"), mainSitemap, "utf8");
writeFileSync(path.join(publicDir, "sitemap-cities.xml"), citiesSitemap, "utf8");
writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

const totalGeo = citySlugs.length + districtSlugs.length;
console.log(
  `Wrote sitemap.xml (${staticPages.length} URLs), sitemap-cities.xml (${totalGeo} geo URLs), robots.txt`,
);
