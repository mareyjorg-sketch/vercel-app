import { seoRegions } from "./seoStadtstrukturData.js";

const SLUG_PREFIX = "schaedlingsbekaempfung-";

function parseDistance(extra) {
  if (!extra) return { km: "25", label: "25 km" };
  if (/Hauptstandort/i.test(extra)) return { km: "0", label: "direkt vor Ort" };
  const match = extra.match(/~\s*(\d+)\s*km/i);
  if (match) return { km: match[1], label: `${match[1]} km` };
  if (/Stadtteil/i.test(extra)) return { km: "15", label: "ca. 15 km" };
  return { km: "25", label: "ca. 25 km" };
}

function slugToKey(slug) {
  return slug.replace(/^\/|\/$/g, "");
}

function buildCityLookup() {
  const map = new Map();

  for (const region of seoRegions) {
    for (const city of region.cities) {
      const key = slugToKey(city.slug);
      if (!key.startsWith(SLUG_PREFIX)) continue;

      const dist = parseDistance(city.extra);
      map.set(key, {
        slugKey: key,
        name: city.name,
        distanceKm: dist.km,
        distanceLabel: dist.label,
        regionId: region.id,
      });
    }
  }

  return map;
}

const cityBySlugKey = buildCityLookup();

/** @param {string} slugParam – z. B. "schaedlingsbekaempfung-duesseldorf" */
export function getCityBySlugParam(slugParam) {
  if (!slugParam) return null;
  const normalized = slugParam.replace(/^\/|\/$/g, "");
  return cityBySlugKey.get(normalized) ?? null;
}

export function getAllCitySlugKeys() {
  return [...cityBySlugKey.keys()];
}
