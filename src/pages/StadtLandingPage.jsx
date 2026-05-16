import { useEffect } from "react";
import SiteLayout from "../components/SiteLayout.jsx";
import LeistungenSection from "../components/LeistungenSection.jsx";
import PhoneIcon from "../components/PhoneIcon.jsx";
import { TEL, TEL_DISPLAY } from "../siteInfo.js";

const DEFAULT_TITLE = "Kammerjäger Bergmann | Schädlingsbekämpfung Bottrop & Umgebung";

export default function StadtLandingPage({ city }) {
  const { name, distanceLabel } = city;

  useEffect(() => {
    document.title = `Schädlingsbekämpfung ${name} | Kammerjäger Bergmann`;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [name]);

  return (
    <SiteLayout>
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
