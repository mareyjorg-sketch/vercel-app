import { PARTNER_STRIP_SRC } from "../partnerAssets.js";

function Icon24h({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="25" r="15" stroke="currentColor" strokeWidth="2" strokeOpacity="0.9" />
      <path d="M24 25V14M24 25l7.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M9 25a15 15 0 0 1 30 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 5"
        strokeOpacity="0.55"
        fill="none"
      />
    </svg>
  );
}

function IconHouseHeart({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10 22.5 24 11l14 11.5V38H10V22.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M24 29.2c-2.65-2.05-5.2-1.1-5.2 1.25 0 1.95 2.35 3.4 5.2 5.75 2.85-2.35 5.2-3.8 5.2-5.75 0-2.35-2.55-3.3-5.2-1.25Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroTrustStrip() {
  return (
    <ul className="hero-trust" aria-label="Qualifikation und Service">
      <li className="hero-trust__tile hero-trust__tile--partners">
        <div className="hero-trust__partners-panel">
          <div className="hero-trust__partners-media">
            <img
              className="hero-trust__partners-img"
              src={PARTNER_STRIP_SRC}
              alt="TÜV SÜD, IHK-Mitgliedsbetrieb und Zertifikat – Übersichtsgrafik"
              width={640}
              height={280}
              loading="eager"
              decoding="async"
            />
            <p className="hero-trust__partners-subline" aria-hidden="true">
              Geprüfte Qualität &amp; Sicherheit · IHK-Mitgliedsbetrieb
            </p>
          </div>
        </div>
      </li>
      <li className="hero-trust__tile hero-trust__tile--icon">
        <Icon24h className="hero-trust__glyph" />
        <span className="hero-trust__label">24/7 Notdienst</span>
      </li>
      <li className="hero-trust__tile hero-trust__tile--icon">
        <IconHouseHeart className="hero-trust__glyph" />
        <span className="hero-trust__label">Familienbetrieb</span>
      </li>
    </ul>
  );
}
