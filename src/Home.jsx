import SiteLayout from "./components/SiteLayout.jsx";
import ServiceCard from "./components/ServiceCard.jsx";
import TeamTraditionSection from "./components/TeamTraditionSection.jsx";
import HeroTrustStrip from "./components/HeroTrustStrip.jsx";
import AboutFamilySection from "./components/AboutFamilySection.jsx";
import "./App.css";
/* Sicherstellen, dass Karten-Styles geladen sind (auch wenn die Komponente ausgelagert wird) */
import "./components/ServiceCard.css";
import { TEL, TEL_DISPLAY, WHATSAPP_URL } from "./siteInfo.js";
import { leistungen } from "./data/leistungenData.js";
import WhatsAppIcon from "./components/WhatsAppIcon.jsx";
import PhoneIcon from "./components/PhoneIcon.jsx";
import CertQualificationCards from "./components/CertQualificationCards.jsx";

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
          <p className="hero-lead">Schnell vor Ort – diskret &amp; zuverlässig</p>
          <HeroTrustStrip />
          <div className="hero-actions">
            <div className="hero-wa-block">
              <a href={WHATSAPP_URL} className="btn-hero btn-hero--wa" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={22} />
                Foto schicken &amp; sofort Einschätzung erhalten
              </a>
              <p className="hero-wa-sub">Antwort meist in wenigen Minuten</p>
            </div>
            <a href={TEL} className="btn-hero btn-hero--call">
              Jetzt anrufen
            </a>
          </div>
          <p className="hero-social-proof">Viele zufriedene Kunden vertrauen uns</p>
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
            {leistungen.map((item, index) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                summary={item.summary}
                description={item.description}
                bullets={item.bullets}
                image={item.image}
                imageAlt={item.imageAlt}
                helpTagline={index % 2 === 0 ? "Soforthilfe möglich" : "Schnelle Hilfe verfügbar"}
                featured={item.title === "Ratten & Mäuse"}
              />
            ))}
          </div>
        </div>
      </section>

      <TeamTraditionSection />

      <section className="cert-section" id="zertifizierung">
        <div className="section-inner">
          <div className="section-header">
            <h2>Qualifikation &amp; Zertifizierung</h2>
            <div className="underline" aria-hidden />
            <p>Extern geprüfte Qualität – für Ihr Vertrauen und nachvollziehbare Standards bei Gewerbe &amp; Versicherung.</p>
          </div>

          <CertQualificationCards />

          <p className="cert-disclaimer">
            TÜV SÜD und IHK sind eingetragene Marken. Die Darstellung erfolgt im Rahmen der jeweiligen Markenrichtlinien; verbindlich sind Ihre ausgestellten Zertifikate.
          </p>
        </div>
      </section>

      <AboutFamilySection />

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
        <h2>Sofort Hilfe – schreiben Sie uns</h2>
        <p>Per WhatsApp melden wir uns meist in wenigen Minuten. Notfall? Wir koordinieren den schnellsten Weg.</p>
        <a href={TEL} className="phone-big">
          <PhoneIcon className="phone-big__icon" size={40} aria-hidden />
          <span className="phone-big__num">{TEL_DISPLAY}</span>
        </a>
        <div className="cta-actions">
          <div className="cta-wa-block">
            <a href={WHATSAPP_URL} className="btn-cta btn-cta--wa-pill" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={22} />
              Foto schicken &amp; sofort Einschätzung erhalten
            </a>
            <p className="cta-wa-sub">Antwort meist in wenigen Minuten</p>
          </div>
          <a href={TEL} className="btn-cta btn-cta--call-outline">
            Jetzt anrufen
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
