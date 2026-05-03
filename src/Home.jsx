import SiteLayout from "./components/SiteLayout.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import "./App.css";
/* Sicherstellen, dass Karten-Styles geladen sind (auch wenn die Komponente ausgelagert wird) */
import "./components/ServiceCard.css";
import { TEL, TEL_DISPLAY, WHATSAPP_URL } from "./siteInfo.js";
import { leistungen } from "./data/leistungenData.js";
import WhatsAppIcon from "./components/WhatsAppIcon.jsx";

const gebiete = [
  "Bottrop",
  "Oberhausen",
  "Gelsenkirchen",
  "Essen",
  "Gladbeck",
  "Dorsten",
  "Recklinghausen",
  "Marl",
  "Herne",
  "Bochum",
  "andere Gebiete auf Anfrage",
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Schädlingsbekämpfung
            <br />
            in Bottrop
          </h1>
          <p>Schnell vor Ort – diskret &amp; zuverlässig</p>
          <div className="hero-badges">
            <span className="hero-badge">✓ TÜV-zertifiziert</span>
            <span className="hero-badge">✓ IHK-geprüft § 18 IfSG</span>
            <span className="hero-badge">✓ Familienbetrieb</span>
            <span className="hero-badge">✓ 24/7 Notdienst</span>
          </div>
          <div className="hero-actions">
            <a href={TEL} className="btn-hero btn-hero--primary">
              📞 Jetzt anrufen
            </a>
            <a href={WHATSAPP_URL} className="btn-hero btn-hero--secondary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section--leistungen" id="leistungen">
        <div className="section-inner">
          <div className="section-header section-header--leistungen">
            <h2>Unsere Leistungen</h2>
            <div className="underline" aria-hidden />
            <p>
              Professionelle Schädlingsbekämpfung für Privat &amp; Gewerbe – mit modernsten Mitteln und nachhaltigen Methoden.
            </p>
          </div>

          <div className="leistungen-bento" role="list" data-leistungen-layout="overlay-v2">
            {leistungen.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                summary={item.summary}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cert-section" id="zertifizierung">
        <div className="section-inner">
          <div className="section-header">
            <h2>Qualifikation &amp; Zertifizierung</h2>
            <div className="underline" aria-hidden />
            <p>Extern geprüfte Qualität – für Ihr Vertrauen und nachvollziehbare Standards bei Gewerbe &amp; Versicherung.</p>
          </div>

          <div className="cert-cards">
            <div className="cert-card">
              <img
                className="cert-logo-img"
                src="/assets/tuev-badge.png"
                alt="TÜV Rheinland – Zertifizierung"
                width={200}
                height={120}
                loading="lazy"
              />
              <div className="cert-text">
                <strong>TÜV Rheinland – Zertifizierung</strong>
                <span>Zertifizierter Fachbetrieb</span>
                <span>Regelmäßige Überwachung und Prüfung unserer Arbeits- und Qualitätsstandards.</span>
                <span className="cert-check">✔ Nachgewiesen</span>
              </div>
            </div>

            <div className="cert-card">
              <img
                className="cert-logo-img"
                src="/assets/ihk-badge.png"
                alt="IHK – Sachkunde § 18 IfSG"
                width={200}
                height={120}
                loading="lazy"
              />
              <div className="cert-text">
                <strong>Industrie- und Handelskammer</strong>
                <span>Sachkunde § 18 IfSG</span>
                <span>IHK-geprüfte Qualifikation für die professionelle Schädlingsbekämpfung.</span>
                <span className="cert-check">✔ Nachgewiesen</span>
              </div>
            </div>
          </div>

          <p className="cert-disclaimer">
            TÜV Rheinland und IHK sind eingetragene Marken. Die Darstellung erfolgt im Rahmen der jeweiligen Markenrichtlinien; verbindlich sind Ihre Zertifizierungsnachweise.
          </p>
        </div>
      </section>

      <section className="about-section" id="ueber-uns">
        <div className="about-inner">
          <div className="about-img">
            <img src="/assets/team.jpg" alt="Team Kammerjäger Bergmann" width={960} height={640} loading="lazy" decoding="async" />
          </div>
          <div className="about-text">
            <h2>Familienbetrieb aus Bottrop</h2>
            <p>
              Kammerjäger Bergmann ist ein familiengeführter Betrieb mit Fokus auf schnelle Hilfe, diskrete Einsätze und langfristige Lösungen.
            </p>
            <p>
              Wir kennen die Region und sind schnell bei Ihnen – ob privat oder gewerblich. Unser Ziel ist nicht nur die kurzfristige Bekämpfung, sondern nachhaltige Prävention und zufriedene Kunden.
            </p>
            <ul className="about-points">
              <li>Persönlicher Ansprechpartner vor Ort</li>
              <li>Schnelle Terminvergabe, oft am gleichen Tag</li>
              <li>Diskret und ohne Aufsehen</li>
              <li>Langjährige Erfahrung im Ruhrgebiet</li>
              <li>Geprüfte, zugelassene Bekämpfungsmittel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gebiete-section" aria-labelledby="gebiete-heading">
        <h2 id="gebiete-heading">Einsatzgebiet</h2>
        <div className="underline" aria-hidden />
        <div className="gebiete-pills">
          {gebiete.map((g) => (
            <span key={g} className="pill">
              {g}
            </span>
          ))}
        </div>
      </section>

      <section className="cta-banner" id="kontakt">
        <h2>Jetzt anrufen und beraten lassen</h2>
        <p>Schnelle Hilfe bei Schädlingsbefall – diskret, professionell, zuverlässig.</p>
        <a href={TEL} className="phone-big">
          📞 {TEL_DISPLAY}
        </a>
        <div className="cta-actions">
          <a href={TEL} className="btn-cta btn-cta--primary">
            Jetzt anrufen
          </a>
          <a href={WHATSAPP_URL} className="btn-cta btn-cta--secondary" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={22} />
            WhatsApp
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
