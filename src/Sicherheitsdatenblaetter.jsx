import { useEffect } from "react";
import SiteLayout from "./components/SiteLayout.jsx";
import "./App.css";
import { EMAIL, TEL, TEL_DISPLAY, WHATSAPP_URL } from "./siteInfo.js";
import { sicherheitsdatenblaetter, sdbBasePath } from "./data/sicherheitsdatenblaetterData.js";

const PAGE_TITLE = "Sicherheitsdatenblätter | Kammerjäger Bergmann";
const DEFAULT_TITLE = "Kammerjäger Bergmann | Schädlingsbekämpfung Bottrop & Umgebung";

export default function Sicherheitsdatenblaetter() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <SiteLayout>
      <div className="sdb-page">
        <div className="sdb-hero">
          <h1>Sicherheitsdatenblätter</h1>
          <p>
            Auf dieser Seite finden Sie die Sicherheitsdatenblätter (SDB) der von uns eingesetzten Produkte. Sie können diese als PDF speichern und ausdrucken. Fehlt ein Dokument noch oder Sie benötigen ein
            Hersteller-SDB, melden Sie sich gern –{" "}
            <a href={TEL}>{TEL_DISPLAY}</a>,{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            , <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </div>

        <ul className="sdb-list" aria-label="Sicherheitsdatenblätter">
          {sicherheitsdatenblaetter.map((item) => {
            const href = item.hasPdf ? `${sdbBasePath}/${item.file}` : null;
            return (
              <li key={item.name} className="sdb-row">
                <span className="sdb-name">{item.name}</span>
                {href ? (
                  <a className="sdb-pdf-btn" href={href} target="_blank" rel="noopener noreferrer">
                    PDF öffnen
                  </a>
                ) : (
                  <span className="sdb-pending" title="PDF folgt – bitte kontaktieren Sie uns bei Bedarf">
                    PDF folgt
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <p className="sdb-footnote">Stand der Auflistung entspricht den eingesetzten Mitteln; Hersteller aktualisieren SDB regelmäßig – bei Rückfragen helfen wir gern weiter.</p>
      </div>
    </SiteLayout>
  );
}
