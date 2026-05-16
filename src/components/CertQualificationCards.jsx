function CertChecklist({ items }) {
  return (
    <ul className="cert-glass-card__checks">
      {items.map((text) => (
        <li key={text} className="cert-glass-card__check">
          <span className="cert-glass-card__check-mark" aria-hidden="true">
            ✓
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

function TuvSuedBadge() {
  return (
    <div className="cert-badge cert-badge--tuv" role="img" aria-label="TÜV SÜD">
      <span className="cert-badge__main">TÜV</span>
      <span className="cert-badge__sub">SÜD</span>
    </div>
  );
}

function IhkBadge() {
  return (
    <div className="cert-badge cert-badge--ihk" role="img" aria-label="IHK">
      <span className="cert-badge__main">IHK</span>
    </div>
  );
}

const TUV_CHECKS = ["Zertifizierter Fachbetrieb", "Regelmäßige Qualitätsprüfung", "Geprüfte Arbeitsstandards"];

const IHK_CHECKS = ["IHK-Mitgliedsbetrieb", "Sachkunde § 18 IfSG", "Behördlich anerkannte Qualifikation"];

export default function CertQualificationCards() {
  return (
    <div className="cert-glass-grid">
      <article className="cert-glass-card">
        <TuvSuedBadge />
        <div className="cert-glass-card__body">
          <h3 className="cert-glass-card__title">TÜV Süd – Zertifizierung</h3>
          <CertChecklist items={TUV_CHECKS} />
        </div>
      </article>

      <article className="cert-glass-card">
        <IhkBadge />
        <div className="cert-glass-card__body">
          <h3 className="cert-glass-card__title">Industrie- und Handelskammer</h3>
          <CertChecklist items={IHK_CHECKS} />
        </div>
      </article>
    </div>
  );
}
