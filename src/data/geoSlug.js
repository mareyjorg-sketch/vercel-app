/** @param {string} text */
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const SLUG_PREFIX = "schaedlingsbekaempfung-";

/** @param {string} slug */
export function citySlugKey(slug) {
  return `${SLUG_PREFIX}${slug}`;
}
