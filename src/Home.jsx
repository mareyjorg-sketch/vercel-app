import { Link } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import "./App.css";
import { TEL, TEL_DISPLAY } from "./siteInfo.js";

/** `bento: "hero"` = große Kachel · optional `gradient` nur wenn kein `image` (Platzhalter) */
const leistungen = [
  {
    title: "Ratten & Mäuse",
    text: "Professionelle & schnelle Bekämpfung von Nagern im Haus, Keller und Außenbereich.",
    image: "/assets/leistung-ratten-maeuse.png",
    imageAlt: "Ratten- und Mäusebekämpfung mit Köderstation – Kammerjäger Bergmann",
    bento: "hero",
  },
  {
    title: "Ameisen",
    text: "Wirksame Bekämpfung von Ameisennestern – innen wie außen, dauerhaft und sicher.",
    image: "/assets/leistung-ameisen.png",
    imageAlt: "Ameisenbekämpfung mit Ködergel und Kammerjäger Bergmann",
  },
  {
    title: "Wespen",
    text: "Sichere Entfernung und Umsiedlung von Wespen- und Hornissennestern.",
    image: "/assets/leistung-wespen.png",
    imageAlt: "Wespennest-Entfernung durch geschützten Kammerjäger – Kammerjäger Bergmann",
  },
  {
    title: "Bettwanzen",
    text: "Sofortige, diskrete Bekämpfung von Bettwanzen – ohne tagelange Abwesenheit.",
    image: "/assets/leistung-bettwanzen.png",
    imageAlt: "Bettwanzenbekämpfung mit Sprühgerät im Schlafzimmer – Kammerjäger Bergmann",
  },
  {
    title: "Kakerlaken",
    text: "Schaben und Kakerlaken nachhaltig bekämpfen – besonders wichtig im Lebensmittelbereich.",
    image: "/assets/leistung-kakerlaken.png",
    imageAlt: "Kakerlakenbekämpfung in gewerblicher Küche – Kammerjäger Bergmann",
  },
  {
    title: "Marder",
    text: "Vergrämung und Sicherung gegen Marder – schützen Sie Ihr Fahrzeug und Ihr Dach.",
    image: "/assets/leistung-marder.png",
    imageAlt: "Mardervergrämung am Fahrzeug mit Schutzkleidung – Kammerjäger Bergmann",
  },
  {
    title: "Prävention",
    text: "Vorbeugung und Monitoring – damit der Schädling erst gar nicht einzieht.",
    image: "/assets/leistung-praevention.png",
    imageAlt: "Monitoring-Station an der Gebäudeaußenseite – Kammerjäger Bergmann",
  },
  {
    title: "Beratung",
    text: "Kostenlose Erstberatung – wir analysieren Ihr Problem und empfehlen die beste Lösung.",
    image: "/assets/leistung-beratung.png",
    imageAlt: "Persönliche Beratung bei Kundin an der Haustür – Kammerjäger Bergmann",
  },
];

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
          <a href={TEL} className="btn-hero">
            📞 Jetzt anrufen
          </a>
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

          <div className="leistungen-bento" role="list">
            {leistungen.map((item) => (
              <article key={item.title} className={`leistung-card ${item.bento === "hero" ? "leistung-card--hero" : ""}`} role="listitem">
                <div className="leistung-card__visual">
                  {item.image ? (
                    <img className="leistung-card__img" src={item.image} alt={item.imageAlt ?? ""} width={1024} height={682} loading="lazy" />
                  ) : (
                    <div className={`leistung-card__gradient leistung-card__gradient--${item.gradient}`} aria-hidden />
                  )}
                </div>
                <div className="leistung-card__panel">
                  <span className="leistung-card__badge" aria-hidden>
                    ✓
                  </span>
                  <h3 className="leistung-card__title">{item.title}</h3>
                  <p className="leistung-card__text">{item.text}</p>
                  <Link to="/#kontakt" className="leistung-card__cta">
                    Mehr erfahren →
                  </Link>
                </div>
              </article>
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
            <img src="/assets/team.jpg" alt="Team Kammerjäger Bergmann" />
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
        <br />
        <a href={TEL} className="btn-white">
          Jetzt anrufen
        </a>
      </section>
    </SiteLayout>
  );
}
