import SiteLayout from "../components/SiteLayout.jsx";
import LeistungenSection from "../components/LeistungenSection.jsx";
import PhoneIcon from "../components/PhoneIcon.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { buildCityMeta, buildCitySchemaGraph } from "../seo/siteSeo.js";
import { TEL, TEL_DISPLAY } from "../siteInfo.js";

export default function StadtLandingPage({ city }) {
  const { name, distanceLabel } = city;
  const seo = buildCityMeta(city);

  return (
    <SiteLayout>
      <PageHead seo={seo} jsonLd={buildCitySchemaGraph(city)} />
      <section className="hero hero--stadt">
        <div className="hero-content">
          <h1>Schädlingsbekämpfung in {name}</h1>
          <p className="hero-lead">Kammerjäger Bergmann – schnell vor Ort in {name}</p>
          <a href={TEL} className="btn-hero btn-hero--call btn-hero--stadt">
            Jetzt anrufen: {TEL_DISPLAY}
          </a>
        </div>
      </section>

      <section className="section section--stadt-intro">
        <div className="section-inner">
          <p className="stadt-intro">
            Sie suchen einen Kammerjäger in <strong>{name}</strong>? Wir sind TÜV-zertifiziert, IHK-geprüft und{" "}
            {distanceLabel === "direkt vor Ort" ? (
              <>
                <strong>direkt vor Ort</strong> in Bottrop.
              </>
            ) : (
              <>
                in ca. <strong>{distanceLabel}</strong> von Bottrop bei Ihnen.
              </>
            )}
          </p>
        </div>
      </section>

      <LeistungenSection cityName={name} sectionId="leistungen" />

      <section className="cta-banner" id="kontakt">
        <h2>Sofort Hilfe in {name}</h2>
        <p>Jetzt anrufen – wir koordinieren den schnellsten Weg zu Ihnen.</p>
        <a href={TEL} className="phone-big">
          <PhoneIcon className="phone-big__icon" size={40} aria-hidden />
          <span className="phone-big__num">{TEL_DISPLAY}</span>
        </a>
        <a href={TEL} className="btn-cta btn-cta--call-outline">
          Jetzt anrufen: {TEL_DISPLAY}
        </a>
      </section>
    </SiteLayout>
  );
}
