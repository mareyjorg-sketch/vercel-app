const TUV_LOGO_SRC = "/assets/partners/tuev-rheinland.svg";

/** TÜV Rheinland: Logo + Kurztext (variant: hero | light). */
export default function TrustTuvBadge({ variant = "hero", className = "" }) {
  const rootClass = ["trust-badge", variant === "light" && "trust-badge--light", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClass} role="group" aria-label="TÜV Rheinland, zertifizierter Fachbetrieb">
      <div className="trust-badge__logo" aria-hidden="true">
        <img
          className="trust-badge__logo-img"
          src={TUV_LOGO_SRC}
          alt=""
          width={132}
          height={35}
          decoding="async"
          loading={variant === "light" ? "lazy" : "eager"}
        />
      </div>
      <div className="trust-badge__copy">
        <div className="trust-title">Zertifizierter Fachbetrieb</div>
        <div className="trust-sub">Qualität &amp; Standards geprüft</div>
      </div>
    </div>
  );
}
