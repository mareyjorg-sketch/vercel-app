import { PARTNER_STRIP_SRC } from "../partnerAssets.js";

function PartnerLogoMark({ variant, label }) {
  return (
    <div
      className={`cert-qual-card__logo cert-qual-card__logo--${variant}`}
      style={{ backgroundImage: `url(${PARTNER_STRIP_SRC})` }}
      role="img"
      aria-label={label}
    />
  );
}

export default function CertQualificationCards() {
  return (
    <div className="cert-qual-grid">
      <article className="cert-qual-card">
        <PartnerLogoMark variant="tuv" label="TÜV SÜD Logo" />
        <p className="cert-qual-card__text">Geprüfte Qualität &amp; Sicherheit</p>
      </article>
      <article className="cert-qual-card">
        <PartnerLogoMark variant="ihk" label="IHK Mitgliedsbetrieb Logo" />
        <p className="cert-qual-card__text">IHK-Mitgliedsbetrieb</p>
      </article>
    </div>
  );
}
