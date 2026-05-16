import { cities } from "./cities.js";
import { citySlugKey, slugify, SLUG_PREFIX } from "./geoSlug.js";

/** @typedef {typeof cities[number]} CityRecord */

/**
 * @typedef {CityRecord & {
 *   slugKey: string,
 *   pageType: "city",
 *   distanceKm: string,
 *   distanceLabel: string,
 * }} CityPage
 */

/**
 * @typedef {{
 *   pageType: "district",
 *   slugKey: string,
 *   districtName: string,
 *   parentCity: CityRecord,
 *   name: string,
 *   km: number,
 *   plz: string,
 *   region: string,
 *   distanceKm: string,
 *   distanceLabel: string,
 * }} DistrictPage
 */

/** @type {Map<string, CityPage>} */
const cityBySlugKey = new Map();

/** @type {Map<string, DistrictPage>} */
const districtBySlugKey = new Map();

/** @type {Map<string, { slugKey: string, districtSlug: string, districtName: string }>} */
const districtIndexByCity = new Map();

function kmLabel(km) {
  if (km === 0) return "direkt vor Ort";
  return `${km} km`;
}

function enrichCity(city) {
  const slugKey = citySlugKey(city.slug);
  return {
    ...city,
    slugKey,
    pageType: "city",
    distanceKm: String(city.km),
    distanceLabel: kmLabel(city.km),
  };
}

function buildLookups() {
  const usedDistrictSlugs = new Set();

  for (const city of cities) {
    const cityPage = enrichCity(city);
    cityBySlugKey.set(cityPage.slugKey, cityPage);

    const districtEntries = [];

    for (const districtName of city.districts ?? []) {
      let districtSlug = slugify(districtName);
      if (usedDistrictSlugs.has(districtSlug)) {
        districtSlug = `${city.slug}-${districtSlug}`;
      }
      usedDistrictSlugs.add(districtSlug);

      const slugKey = citySlugKey(districtSlug);
      const districtPage = {
        pageType: "district",
        slugKey,
        districtName,
        districtSlug,
        parentCity: city,
        name: districtName,
        km: city.km,
        plz: city.plz,
        region: city.region,
        distanceKm: String(city.km),
        distanceLabel: kmLabel(city.km),
      };

      districtBySlugKey.set(slugKey, districtPage);
      districtEntries.push({ slugKey, districtSlug, districtName });
    }

    districtIndexByCity.set(city.slug, districtEntries);
  }
}

buildLookups();

/** @param {string} slugParam */
export function getGeoPageBySlugParam(slugParam) {
  if (!slugParam) return null;
  const normalized = slugParam.replace(/^\/|\/$/g, "");
  if (!normalized.startsWith(SLUG_PREFIX)) return null;
  return districtBySlugKey.get(normalized) ?? cityBySlugKey.get(normalized) ?? null;
}

/** @deprecated use getGeoPageBySlugParam */
export function getCityBySlugParam(slugParam) {
  const page = getGeoPageBySlugParam(slugParam);
  if (!page || page.pageType !== "city") return null;
  return page;
}

export function getAllCitySlugKeys() {
  return [...cityBySlugKey.keys()];
}

export function getAllDistrictSlugKeys() {
  return [...districtBySlugKey.keys()];
}

export function getAllGeoSlugKeys() {
  return [...getAllCitySlugKeys(), ...getAllDistrictSlugKeys()];
}

/** @param {CityRecord} city @param {number} [count=4] */
export function getNearestCities(city, count = 4) {
  return cities
    .filter((c) => c.slug !== city.slug)
    .map((c) => ({ ...c, slugKey: citySlugKey(c.slug), diff: Math.abs(c.km - city.km) }))
    .sort((a, b) => a.diff - b.diff)
    .slice(0, count);
}

/** @param {string} citySlug */
export function getDistrictsForCity(citySlug) {
  return districtIndexByCity.get(citySlug) ?? [];
}

/** Group cities by region for internal links */
export function getCitiesByRegion() {
  /** @type {Map<string, CityPage[]>} */
  const map = new Map();
  for (const city of cities) {
    const page = cityBySlugKey.get(citySlugKey(city.slug));
    if (!page) continue;
    if (!map.has(city.region)) map.set(city.region, []);
    map.get(city.region).push(page);
  }
  for (const list of map.values()) {
    list.sort((a, b) => a.km - b.km);
  }
  return map;
}

export { cities, SLUG_PREFIX, citySlugKey, slugify };
