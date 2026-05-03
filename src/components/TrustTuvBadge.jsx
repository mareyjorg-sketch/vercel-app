/** Text-Hinweis «TÜV geprüft» ohne TÜV-Logo (variant: hero | light). */
export default function TrustTuvBadge({ variant = "hero", className = "" }) {
  const rootClass = ["trust-badge", variant === "light" && "trust-badge--light", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} role="group" aria-label="TÜV geprüft, zertifizierte Qualität">
      <div className="trust-icon" aria-hidden="true">
        ✓
      </div>
      <div>
        <div className="trust-title">TÜV geprüft</div>
        <div className="trust-sub">Zertifizierte Qualität</div>
      </div>
    </div>
  );
}
