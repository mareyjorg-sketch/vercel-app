import "./App.css";

const TEL = "tel:+491635276870";
const TEL_DISPLAY = "0163 5276870";
const EMAIL = "info@kammerjaeger-bergmann.de";

const leistungen = [
  { icon: "🐀", title: "Ratten & Mäuse", text: "Professionelle & schnelle Bekämpfung von Nagern im Haus, Keller und Außenbereich." },
  { icon: "🐜", title: "Ameisen", text: "Wirksame Bekämpfung von Ameisennestern – innen wie außen, dauerhaft und sicher." },
  { icon: "🐝", title: "Wespen", text: "Sichere Entfernung und Umsiedlung von Wespen- und Hornissennestern." },
  { icon: "🛏️", title: "Bettwanzen", text: "Sofortige, diskrete Bekämpfung von Bettwanzen – ohne tagelange Abwesenheit." },
  { icon: "🪳", title: "Kakerlaken", text: "Schaben und Kakerlaken nachhaltig bekämpfen – besonders wichtig im Lebensmittelbereich." },
  { icon: "🦡", title: "Marder", text: "Vergrämung und Sicherung gegen Marder – schützen Sie Ihr Fahrzeug und Ihr Dach." },
  { icon: "🛡️", title: "Prävention", text: "Vorbeugung und Monitoring – damit der Schädling erst gar nicht einzieht." },
  { icon: "💬", title: "Beratung", text: "Kostenlose Erstberatung – wir analysieren Ihr Problem und empfehlen die beste Lösung." },
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

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="topbar">
        <div className="inner">
          <span>
            📧 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
          <span>Mo–Fr 7–19 Uhr | Sa 8–14 Uhr | Notfalldienst 24/7</span>
        </div>
      </div>

      <header>
        <div className="header-inner">
          <div className="logo">
            <img className="logo-full" src="/assets/logo.svg" alt="Kammerjäger Bergmann – Schädlingsbekämpfung" />
          </div>

          <nav className="main-nav" aria-label="Hauptnavigation">
            <ul>
              <li>
                <a href="#leistungen">Leistungen</a>
              </li>
              <li>
                <a href="#zertifizierung">Zertifizierung</a>
              </li>
              <li>
                <a href="#ueber-uns">Über uns</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>

          <a href={TEL} className="header-cta">
            📞 <span>{TEL_DISPLAY}</span>
          </a>
        </div>
      </header>

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

      <section className="section" id="leistungen">
        <div className="section-inner">
          <div className="section-header">
            <h2>Unsere Leistungen</h2>
            <div className="underline" aria-hidden />
            <p>
              Professionelle Schädlingsbekämpfung für Privat &amp; Gewerbe – mit modernsten Mitteln und nachhaltigen Methoden.
            </p>
          </div>

          <div className="leistungen-grid">
            {leistungen.map((item) => (
              <div key={item.title} className="leistung-card">
                <span className="leistung-icon" aria-hidden>
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
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

      <footer>
        <div className="footer-inner">
          <div className="footer-col">
            <div className="footer-logo-text">
              <strong>Kammerjäger Bergmann</strong>
            </div>
            <p>Professionelle Schädlingsbekämpfung für Privathaushalte, Gewerbe, Industrie und Gastronomie im Ruhrgebiet.</p>
            <br />
            <p>Effizient, zuverlässig und kompetent.</p>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>Kammerjäger Bergmann</li>
              <li>Bottrop &amp; Umgebung</li>
              <li>&nbsp;</li>
              <li>
                <a href={TEL}>{TEL_DISPLAY}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>&nbsp;</li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Einsatzgebiet</h4>
            <ul>
              <li>
                <a href="#gebiete-heading">Bottrop</a>
              </li>
              <li>
                <a href="#gebiete-heading">Oberhausen</a>
              </li>
              <li>
                <a href="#gebiete-heading">Gelsenkirchen</a>
              </li>
              <li>
                <a href="#gebiete-heading">Essen</a>
              </li>
              <li>
                <a href="#gebiete-heading">Gladbeck</a>
              </li>
              <li>
                <a href="#gebiete-heading">Dorsten</a>
              </li>
              <li>
                <a href="#gebiete-heading">andere Gebiete auf Anfrage</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul>
              <li>
                <a href="#leistungen">Ratten &amp; Mäuse</a>
              </li>
              <li>
                <a href="#leistungen">Ameisen</a>
              </li>
              <li>
                <a href="#leistungen">Wespen</a>
              </li>
              <li>
                <a href="#leistungen">Bettwanzen</a>
              </li>
              <li>
                <a href="#leistungen">Kakerlaken</a>
              </li>
              <li>
                <a href="#leistungen">Marder</a>
              </li>
              <li>
                <a href="#leistungen">Prävention</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} Kammerjäger Bergmann &nbsp;|&nbsp; Impressum &amp; Datenschutz auf Anfrage
          </p>
        </div>
      </footer>

      <a href={TEL} className="float-phone" title="Jetzt anrufen" aria-label="Jetzt anrufen">
        📞
      </a>
    </>
  );
}
