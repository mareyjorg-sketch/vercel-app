import { Link, useLocation } from "react-router-dom";
import { EMAIL, TEL, TEL_DISPLAY, SITE_NAME } from "../siteInfo.js";

export default function SiteLayout({ children }) {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isSdb = pathname === "/sicherheitsdatenblaetter";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

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
            <Link to="/" title="Zur Startseite">
              <img
                className="logo-full"
                src="/assets/logo.png"
                width={951}
                height={507}
                alt={`${SITE_NAME} – Schädlingsbekämpfung`}
              />
            </Link>
          </div>

          <nav className="main-nav" aria-label="Hauptnavigation">
            <ul>
              <li>
                <Link to="/#leistungen">Leistungen</Link>
              </li>
              <li>
                <Link to="/#zertifizierung">Zertifizierung</Link>
              </li>
              <li>
                <Link to="/#ueber-uns">Über uns</Link>
              </li>
              <li>
                <Link to="/sicherheitsdatenblaetter" aria-current={isSdb ? "page" : undefined} className={isSdb ? "nav-active" : undefined}>
                  Sicherheitsdatenblätter
                </Link>
              </li>
              <li>
                <Link to="/#kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>

          <a href={TEL} className="header-cta">
            📞 <span>{TEL_DISPLAY}</span>
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-col">
            <div className="footer-logo-text">
              <strong>{SITE_NAME}</strong>
            </div>
            <p>Professionelle Schädlingsbekämpfung für Privathaushalte, Gewerbe, Industrie und Gastronomie im Ruhrgebiet.</p>
            <br />
            <p>Effizient, zuverlässig und kompetent.</p>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li>{SITE_NAME}</li>
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
                <Link to="/#kontakt">Kontakt</Link>
              </li>
              <li>
                <Link to="/sicherheitsdatenblaetter">Sicherheitsdatenblätter</Link>
              </li>
              <li>
                <Link to="/seo-stadtstruktur">SEO-Stadtstruktur</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Einsatzgebiet</h4>
            <ul>
              <li>
                <Link to="/#gebiete-heading">Bottrop</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">Oberhausen</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">Gelsenkirchen</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">Essen</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">Gladbeck</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">Dorsten</Link>
              </li>
              <li>
                <Link to="/#gebiete-heading">andere Gebiete auf Anfrage</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul>
              <li>
                <Link to="/#leistungen">Ratten &amp; Mäuse</Link>
              </li>
              <li>
                <Link to="/#leistungen">Ameisen</Link>
              </li>
              <li>
                <Link to="/#leistungen">Wespen</Link>
              </li>
              <li>
                <Link to="/#leistungen">Bettwanzen</Link>
              </li>
              <li>
                <Link to="/#leistungen">Kakerlaken</Link>
              </li>
              <li>
                <Link to="/#leistungen">Marder</Link>
              </li>
              <li>
                <Link to="/#leistungen">Prävention</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} {SITE_NAME} &nbsp;|&nbsp; Impressum &amp; Datenschutz auf Anfrage
          </p>
        </div>
      </footer>

      <a href={TEL} className="float-phone" title="Jetzt anrufen" aria-label="Jetzt anrufen">
        📞
      </a>
    </>
  );
}
