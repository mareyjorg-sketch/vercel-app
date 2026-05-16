import { TUV_SUED_LOGO_SRC, IHK_LOGO_SRC } from "../partnerAssets.js";

export default function CertQualificationCards() {
  return (
    <div className="cert-glass-grid">
      <article className="cert-glass-card">
        <div className="cert-glass-card__logo-wrap cert-glass-card__logo-wrap--tuv">
          <img
            className="cert-glass-card__logo-img"
            src={TUV_SUED_LOGO_SRC}
            alt="TÜV SÜD"
            width={120}
            height={80}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="cert-glass-card__body">
          <h3 className="cert-glass-card__title">TÜV Süd – Zertifizierung</h3>
          <span className="cert-glass-card__pill">✓ Zertifizierter Fachbetrieb</span>
          <p className="cert-glass-card__sub">
            Regelmäßige Überwachung und Prüfung unserer Arbeits- und Qualitätsstandards.
          </p>
        </div>
      </article>

      <article className="cert-glass-card">
        <div className="cert-glass-card__logo-wrap cert-glass-card__logo-wrap--ihk">
          <img
            className="cert-glass-card__logo-img"
            src={IHK_LOGO_SRC}
            alt="IHK"
            width={200}
            height={56}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="cert-glass-card__body">
          <h3 className="cert-glass-card__title">Industrie- und Handelskammer</h3>
          <span className="cert-glass-card__pill">✓ IHK-Mitgliedsbetrieb</span>
          <p className="cert-glass-card__sub">
            IHK-geprüfte Qualifikation für die professionelle Schädlingsbekämpfung.
          </p>
        </div>
      </article>
    </div>
  );
}
