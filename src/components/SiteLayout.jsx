import { Link, useLocation } from "react-router-dom";
import { EMAIL, TEL, TEL_DISPLAY, SITE_NAME, SITE_DOMAIN, SITE_ORIGIN, WHATSAPP_URL } from "../siteInfo.js";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export default function SiteLayout({ children }) {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isSdb = pathname === "/sicherheitsdatenblaetter";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Zum Inhalt springen
      </a>

      <header className="site-header">
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

          {/*
            Mobile-Burger (optional): Button mit Klasse main-nav__toggle, aria-controls="site-navigation",
            aria-expanded + Panel per JS; Styles in App.css (.main-nav__toggle) vorbereitet.
          */}
          <nav id="site-navigation" className="main-nav" aria-label="Hauptnavigation">
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

          <div className="header-actions">
            <a
              href={WHATSAPP_URL}
              className="header-cta-wa"
              target="_blank"
              rel="noopener noreferrer"
              title="Foto schicken & sofort Einschätzung erhalten"
              aria-label="Foto schicken und sofort Einschätzung erhalten"
            >
              <WhatsAppIcon size={20} />
              <span className="wa-label" aria-hidden="true">
                Foto schicken &amp; sofort Einschätzung erhalten
              </span>
            </a>
            <a href={TEL} className="header-cta">
              📞 <span>{TEL_DISPLAY}</span>
            </a>
          </div>
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
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Foto schicken &amp; sofort Einschätzung erhalten
                </a>
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
                <Link to="/flyer">Flyer (Vorder- &amp; Rückseite)</Link>
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
            © {year} {SITE_NAME} &nbsp;|&nbsp;
            <a href={SITE_ORIGIN}>{SITE_DOMAIN}</a>
            &nbsp;|&nbsp;
            <a href="/impressum.html">Impressum</a>
            &nbsp;·&nbsp;
            <a href="/datenschutz.html">Datenschutz</a>
            &nbsp;·&nbsp;
            <a href="/agb.html">AGB</a>
          </p>
        </div>
      </footer>

      <div className="float-actions" aria-label="Schnellkontakt">
        <div className="float-wa-wrap">
          <span className="float-wa-badge" aria-hidden="true">
            Online
          </span>
          <span className="float-wa-hover-tip" aria-hidden="true">
            Wir antworten meist in wenigen Minuten
          </span>
          <a
            href={WHATSAPP_URL}
            className="float-wa"
            target="_blank"
            rel="noopener noreferrer"
            title="Foto schicken & sofort Einschätzung erhalten"
            aria-label="Foto schicken und sofort Einschätzung erhalten"
          >
            <WhatsAppIcon size={32} />
          </a>
        </div>
        <a href={TEL} className="float-phone" title="Jetzt anrufen" aria-label="Jetzt anrufen">
          📞
        </a>
      </div>
    </>
  );
}
