import { useEffect } from "react";
import { GEO } from "../seo/siteSeo.js";
import { SITE_NAME } from "../siteInfo.js";

const MANAGED_ATTR = "data-kbg-seo";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) {
    if (value != null && value !== "") el.setAttribute(key, value);
  }
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"][${MANAGED_ATTR}]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute(MANAGED_ATTR, "true");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * @param {{
 *   title: string,
 *   description: string,
 *   canonical: string,
 *   keywords?: string,
 *   robots?: string,
 *   author?: string,
 *   og?: Record<string, string>,
 *   geo?: boolean,
 * }} seo
 */
export function PageHead({ seo, jsonLd }) {
  useEffect(() => {
    if (!seo) return undefined;

    document.title = seo.title;

    upsertMeta(`meta[name="description"][${MANAGED_ATTR}]`, { name: "description", content: seo.description });

    if (seo.keywords) {
      upsertMeta(`meta[name="keywords"][${MANAGED_ATTR}]`, { name: "keywords", content: seo.keywords });
    }

    upsertMeta(`meta[name="robots"][${MANAGED_ATTR}]`, {
      name: "robots",
      content: seo.robots ?? "index, follow, max-snippet:-1, max-image-preview:large",
    });

    upsertMeta(`meta[name="author"][${MANAGED_ATTR}]`, {
      name: "author",
      content: seo.author ?? SITE_NAME,
    });

    upsertLink("canonical", seo.canonical);

    const og = seo.og ?? {};
    const ogPairs = [
      ["og:type", og.type ?? "website"],
      ["og:title", og.title ?? seo.title],
      ["og:description", og.description ?? seo.description],
      ["og:url", og.url ?? seo.canonical],
      ["og:locale", og.locale ?? "de_DE"],
      ["og:image", og.image],
    ];
    for (const [property, content] of ogPairs) {
      if (!content) continue;
      upsertMeta(`meta[property="${property}"][${MANAGED_ATTR}]`, { property, content });
    }

    if (seo.geo !== false) {
      upsertMeta(`meta[name="geo.region"][${MANAGED_ATTR}]`, { name: "geo.region", content: GEO.region });
      upsertMeta(`meta[name="geo.placename"][${MANAGED_ATTR}]`, { name: "geo.placename", content: GEO.placename });
      upsertMeta(`meta[name="geo.position"][${MANAGED_ATTR}]`, { name: "geo.position", content: GEO.position });
      upsertMeta(`meta[name="ICBM"][${MANAGED_ATTR}]`, { name: "ICBM", content: GEO.icbm });
    }

    return undefined;
  }, [seo]);

  useEffect(() => {
    const id = "kbg-jsonld";
    let script = document.getElementById(id);

    if (!jsonLd) {
      script?.remove();
      return undefined;
    }

    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.body.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonLd);

    return () => {
      script?.remove();
    };
  }, [jsonLd]);

  return null;
}
