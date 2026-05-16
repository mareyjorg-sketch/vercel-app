import SiteLayout from "./components/SiteLayout.jsx";
import TeamTraditionSection from "./components/TeamTraditionSection.jsx";
import HeroTrustStrip from "./components/HeroTrustStrip.jsx";
import AboutFamilySection from "./components/AboutFamilySection.jsx";
import EinsatzgebietNrwSection from "./components/EinsatzgebietNrwSection.jsx";
import "./App.css";
/* Sicherstellen, dass Karten-Styles geladen sind (auch wenn die Komponente ausgelagert wird) */
import "./components/ServiceCard.css";
import { TEL, TEL_DISPLAY, WHATSAPP_URL } from "./siteInfo.js";
import WhatsAppIcon from "./components/WhatsAppIcon.jsx";
import PhoneIcon from "./components/PhoneIcon.jsx";
import CertQualificationCards from "./components/CertQualificationCards.jsx";
import LeistungenSection from "./components/LeistungenSection.jsx";
import AnfahrtSection from "./components/AnfahrtSection.jsx";
import RatingsBar from "./components/RatingsBar.jsx";
import CustomerReviewsSection from "./components/CustomerReviewsSection.jsx";

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
          <p className="hero-price-hint">
            Anfahrt ab 29 € · Preis vorab unverbindlich am Telefon · Keine versteckten Kosten
          </p>
          <p className="hero-social-proof">Viele zufriedene Kunden vertrauen uns</p>
        </div>
      </section>

      <RatingsBar />

      <LeistungenSection />

      <AnfahrtSection />

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

      <EinsatzgebietNrwSection />

      <CustomerReviewsSection />

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
