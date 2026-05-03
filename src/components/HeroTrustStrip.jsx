import TrustTuvBadge from "./TrustTuvBadge.jsx";

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

function IconFamily({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 30c0-6 6-10 16-10s16 4 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 22c0-3.3 2.2-6 5-6s5 2.7 5 6M27 22c0-2.8 1.8-5 4-5s4 2.2 4 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="21" cy="14" r="3.5" fill="currentColor" />
      <circle cx="31" cy="15" r="3" fill="currentColor" />
      <circle cx="14" cy="16" r="2.8" fill="currentColor" />
    </svg>
  );
}

export default function HeroTrustStrip() {
  return (
    <ul className="hero-trust" aria-label="Qualifikation und Service">
      <li className="hero-trust__tile hero-trust__tile--badge">
        <TrustTuvBadge variant="hero" />
      </li>
      <li className="hero-trust__tile">
        <img
          className="hero-trust__brand hero-trust__brand--ihk"
          src="/assets/partners/ihk.svg"
          alt="IHK – Sachkunde nach § 18 IfSG"
          width={100}
          height={64}
          loading="eager"
          decoding="async"
        />
      </li>
      <li className="hero-trust__tile hero-trust__tile--icon">
        <Icon24h className="hero-trust__glyph" />
        <span className="hero-trust__label">24/7 Notdienst</span>
      </li>
      <li className="hero-trust__tile hero-trust__tile--icon">
        <IconFamily className="hero-trust__glyph" />
        <span className="hero-trust__label">Familienbetrieb</span>
      </li>
    </ul>
  );
}
