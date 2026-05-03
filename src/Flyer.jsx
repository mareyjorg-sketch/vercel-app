import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Flyer.css";
import { TEL, TEL_DISPLAY, WHATSAPP_URL, SITE_DOMAIN, SITE_ORIGIN } from "./siteInfo.js";
import WhatsAppIcon from "./components/WhatsAppIcon.jsx";

const PAGE_TITLE = "Flyer | Kammerjäger Bergmann";
const DEFAULT_TITLE = "Kammerjäger Bergmann | Schädlingsbekämpfung Bottrop & Umgebung";

export default function Flyer() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <div className="flyer-app">
      <div className="flyer-toolbar no-print">
        <Link to="/">← Zur Website</Link>
        <button type="button" onClick={() => window.print()}>
          Drucken
        </button>
      </div>

      <article className="flyer-page flyer-page--front" aria-label="Vorderseite Flyer">
        <div className="flyer-front__inner">
          <p className="flyer-front__kicker">Kammerjäger Bergmann</p>
          <h1 className="flyer-front__title">
            Seit über <em>25 Jahren</em> Familienbetrieb
          </h1>
          <p className="flyer-front__lead">
            Schädlingsbekämpfung Bottrop &amp; Umgebung – bis zu 100&nbsp;km Umkreis.
          </p>
          <ul className="flyer-front__list">
            <li>Familienbetrieb mit Erfahrung</li>
            <li>Schnell vor Ort</li>
            <li>Diskret &amp; zuverlässig</li>
          </ul>
          <div className="flyer-front__contacts">
            <a className="flyer-front__phone" href={TEL}>
              📞 {TEL_DISPLAY}
            </a>
            <a className="flyer-front__wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} />
              WhatsApp
            </a>
          </div>
          <p className="flyer-front__sub">Ihr Ansprechpartner vor Ort</p>
        </div>
      </article>

      <article className="flyer-page flyer-page--back" aria-label="Rückseite Flyer">
        <p className="flyer-back__head">Kammerjäger Bergmann</p>
        <h2 className="flyer-back__title">Unsere Leistungen</h2>

        <div className="flyer-back__section">
          <ul>
            <li>Ratten- &amp; Mäusebekämpfung</li>
            <li>Ameisen &amp; Kakerlaken</li>
            <li>Wespen- &amp; Hornissennest-Service</li>
            <li>Bettwanzenbekämpfung</li>
            <li>Marderabwehr</li>
            <li>Prävention &amp; Monitoring</li>
          </ul>
        </div>

        <div className="flyer-back__section">
          <h3>Warum wir?</h3>
          <ul className="flyer-back__checks">
            <li>Persönlich &amp; ehrlich</li>
            <li>Keine versteckten Kosten</li>
            <li>Schnelle Termine</li>
            <li>Nachhaltige Lösungen</li>
          </ul>
        </div>

        <div className="flyer-back__footer">
          <p>📍 Bottrop &amp; 100&nbsp;km Umkreis</p>
          <p>
            🌐 <a href={SITE_ORIGIN}>{SITE_DOMAIN}</a>
          </p>
          <p>
            📞 <a href={TEL}>{TEL_DISPLAY}</a>
          </p>
          <p>
            <a className="flyer-back__wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
