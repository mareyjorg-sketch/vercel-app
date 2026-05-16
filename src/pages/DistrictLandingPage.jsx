import SiteLayout from "../components/SiteLayout.jsx";
import LeistungenSection from "../components/LeistungenSection.jsx";
import PhoneIcon from "../components/PhoneIcon.jsx";
import { PageHead } from "../components/PageHead.jsx";
import {
  CityInternalLinksSection,
  DistrictIntro,
} from "../components/city/CityPageSections.jsx";
import { buildDistrictMeta, buildDistrictSchemaGraph } from "../seo/siteSeo.js";
import { TEL, TEL_DISPLAY } from "../siteInfo.js";

/** @param {{ district: import("../data/geoLookup.js").DistrictPage }} props */
export default function DistrictLandingPage({ district }) {
  const parent = district.parentCity;
  const seo = buildDistrictMeta(district);

  return (
    <SiteLayout>
      <PageHead seo={seo} jsonLd={buildDistrictSchemaGraph(district)} />
      <section className="hero hero--stadt">
        <div className="hero-content">
          <h1>Kammerjäger {district.districtName}</h1>
          <p className="hero-lead">
            Schädlingsbekämpfung in {district.districtName} – Stadtteil von {parent.name}
          </p>
          <a href={TEL} className="btn-hero btn-hero--call btn-hero--stadt">
            Jetzt anrufen: {TEL_DISPLAY}
          </a>
        </div>
      </section>

      <DistrictIntro district={district} />
      <LeistungenSection cityName={`${district.districtName}, ${parent.name}`} sectionId="leistungen" />

      <section className="cta-banner" id="kontakt">
        <h2>Sofort Hilfe in {district.districtName}</h2>
        <p>Kammerjäger Bergmann – schnell in {district.districtName} und ganz {parent.name}.</p>
        <a href={TEL} className="phone-big">
          <PhoneIcon className="phone-big__icon" size={40} aria-hidden />
          <span className="phone-big__num">{TEL_DISPLAY}</span>
        </a>
        <a href={TEL} className="btn-cta btn-cta--call-outline">
          Jetzt anrufen: {TEL_DISPLAY}
        </a>
      </section>

      <CityInternalLinksSection />
    </SiteLayout>
  );
}
