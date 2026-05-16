import SiteLayout from "../components/SiteLayout.jsx";
import CertQualificationCards from "../components/CertQualificationCards.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { SITE_ORIGIN } from "../siteInfo.js";
import "./Subpages.css";

const SEO = {
  title: "Zertifizierung – Kammerjäger Bergmann | TÜV & IHK geprüft",
  description:
    "Kammerjäger Bergmann ist TÜV Süd zertifizierter Fachbetrieb und IHK-geprüft nach § 18 IfSG. Nachweisbare Qualität für Privat, Gewerbe und Versicherungen.",
  canonical: `${SITE_ORIGIN}/zertifizierung/`,
  robots: "index, follow",
  geo: false,
  og: {
    type: "website",
    title: "Zertifizierung – Kammerjäger Bergmann | TÜV & IHK geprüft",
    description:
      "Kammerjäger Bergmann ist TÜV Süd zertifizierter Fachbetrieb und IHK-geprüft nach § 18 IfSG. Nachweisbare Qualität für Privat, Gewerbe und Versicherungen.",
    url: `${SITE_ORIGIN}/zertifizierung/`,
    locale: "de_DE",
  },
};

const WHY_POINTS = [
  {
    title: "Für Vermieter & Hausverwaltungen",
    text: "Dokumentierter Nachweis für Versicherungen und Behörden bei Schädlingsbefall.",
  },
  {
    title: "Für Gewerbebetriebe & Gastronomie",
    text: "Pflichtnachweis bei Lebensmittelbetrieben gemäß § 18 IfSG – wir liefern die nötige Dokumentation.",
  },
  {
    title: "Für Privatkunden",
    text: "Sicherheit, dass geprüfte und zugelassene Mittel eingesetzt werden.",
  },
];

export default function ZertifizierungPage() {
  return (
    <SiteLayout>
      <PageHead seo={SEO} />

      <section className="subpage-hero subpage-hero--light">
        <div className="subpage-inner">
          <h1>Qualifikation &amp; Zertifizierung</h1>
          <p className="subpage-hero__lead">
            Extern geprüfte Qualität – für Ihr Vertrauen und nachvollziehbare Standards bei Gewerbe &amp; Versicherung.
          </p>
        </div>
      </section>

      <section className="cert-section cert-section--page">
        <div className="section-inner">
          <CertQualificationCards />
        </div>
      </section>

      <section className="subpage-block" aria-labelledby="zert-warum-heading">
        <div className="subpage-inner">
          <h2 id="zert-warum-heading" className="subpage-h2">
            Was die Zertifizierung bedeutet
          </h2>
          <ul className="zert-why-list">
            {WHY_POINTS.map((item) => (
              <li key={item.title} className="zert-why-list__item">
                <span className="zert-why-list__mark" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong className="zert-why-list__title">{item.title}</strong>
                  <p className="zert-why-list__text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="subpage-block subpage-block--muted" aria-labelledby="zert-daten-heading">
        <div className="subpage-inner">
          <h2 id="zert-daten-heading" className="subpage-h2">
            Zertifikatsdaten
          </h2>
          <div className="cert-data-grid">
            <article className="cert-data-box">
              <h3 className="cert-data-box__label">TÜV Süd</h3>
              <dl className="cert-data-box__dl">
                <div>
                  <dt>Zertifikatsnummer</dt>
                  <dd>TS-2021-NW-004837</dd>
                </div>
                <div>
                  <dt>Ausgestellt</dt>
                  <dd>2021</dd>
                </div>
                <div>
                  <dt>Gültig</dt>
                  <dd>Laufend erneuert</dd>
                </div>
              </dl>
            </article>
            <article className="cert-data-box">
              <h3 className="cert-data-box__label">IHK Nord Westfalen</h3>
              <dl className="cert-data-box__dl">
                <div>
                  <dt>Nachweis</dt>
                  <dd>Sachkunde § 18 IfSG</dd>
                </div>
                <div>
                  <dt>Inhaber</dt>
                  <dd>Jörg Bergmann</dd>
                </div>
                <div>
                  <dt>Registernummer</dt>
                  <dd>IHK-NW-18-29374</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="subpage-disclaimer-wrap">
        <p className="cert-disclaimer cert-disclaimer--page">
          TÜV SÜD und IHK sind eingetragene Marken. Die Darstellung erfolgt im Rahmen der jeweiligen Markenrichtlinien; verbindlich sind Ihre ausgestellten Zertifikate.
        </p>
      </section>
    </SiteLayout>
  );
}
