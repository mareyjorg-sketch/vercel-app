import { useEffect } from "react";
import Home from "../Home.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { HOME_SEO, SECTION_SEO, buildHomeSchemaGraph } from "../seo/siteSeo.js";

const SECTION_HASH = {
  leistungen: "leistungen",
  "ueber-uns": "ueber-uns",
  zertifizierung: "zertifizierung",
  kontakt: "kontakt",
};

/** @param {{ section: keyof typeof SECTION_SEO }} props */
export default function HomeSectionPage({ section }) {
  const hash = SECTION_HASH[section];
  const sectionSeo = SECTION_SEO[section];

  useEffect(() => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  const seo = {
    ...HOME_SEO,
    title: sectionSeo.title,
    description: sectionSeo.description,
    canonical: sectionSeo.canonical,
    og: {
      ...HOME_SEO.og,
      title: sectionSeo.title,
      description: sectionSeo.description,
      url: sectionSeo.canonical,
    },
  };

  return (
    <>
      <PageHead seo={seo} jsonLd={buildHomeSchemaGraph()} />
      <Home />
    </>
  );
}
