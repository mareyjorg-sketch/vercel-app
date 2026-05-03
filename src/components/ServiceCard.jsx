import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TEL, WHATSAPP_URL } from "../siteInfo.js";
import "./ServiceCard.css";

function useFinePointer() {
  const [fine, setFine] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(hover: hover) and (pointer: fine)").matches : true,
  );

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return fine;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

export default function ServiceCard({
  title,
  summary,
  description,
  bullets,
  image,
  imageAlt,
  ctaTo = "/#kontakt",
  helpTagline = "Soforthilfe möglich",
  featured = false,
}) {
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  const flip3d = finePointer && !reducedMotion;
  const expandMode = !flip3d;

  useEffect(() => {
    setFlipped(false);
  }, [flip3d]);

  const toggle = useCallback(() => setFlipped((v) => !v), []);

  const onFrontClick = useCallback(
    (e) => {
      if (e.target.closest("a, button")) return;
      toggle();
    },
    [toggle],
  );

  const onFlipBtn = useCallback((e) => {
    e.stopPropagation();
    toggle();
  }, [toggle]);

  const closePanel = useCallback((e) => {
    e.stopPropagation();
    setFlipped(false);
  }, []);

  const rootClass = [
    "service-card",
    flip3d ? "service-card--flip3d" : "service-card--expand-mode",
    flipped ? "service-card--flipped" : "",
    reducedMotion ? "service-card--reduced-motion" : "",
    featured ? "service-card--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={rootClass} role="listitem" aria-expanded={flipped}>
      <div className="service-card__shell">
        <div className="service-card__inner">
          <div className="service-card__face service-card__face--front" onClick={onFrontClick}>
            <div className="service-card__media">
              <img className="service-card__img" src={image} alt={imageAlt ?? ""} width={800} height={1000} loading="lazy" decoding="async" />
              <div className="service-card__scrim" aria-hidden="true" />
            </div>
            <div className="service-card__front-bottom">
              <p className="service-card__interaction-hint service-card__interaction-hint--corner" aria-hidden="true">
                <span className="service-card__hint service-card__hint--coarse">Tippen für Details</span>
                <span className="service-card__hint service-card__hint--fine">Problem lösen →</span>
              </p>
              <div className="service-card__front-actions">
                <button type="button" className="service-card__btn-flip" onClick={onFlipBtn}>
                  Jetzt Hilfe ansehen
                </button>
              </div>
              <p className="service-card__summary">{summary}</p>
              <div className="service-card__front-caption">
                <p className="service-card__help-tag">{helpTagline}</p>
                <h3 className="service-card__title">{title}</h3>
              </div>
            </div>
          </div>

          <div className="service-card__face service-card__face--back">
            <div className="service-card__back-inner">
              <h3 className="service-card__back-title">{title}</h3>
              <div className="service-card__back-ctas">
                <a href={WHATSAPP_URL} className="service-card__cta service-card__cta--wa" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  Foto schicken &amp; sofort Einschätzung erhalten
                </a>
                <a href={TEL} className="service-card__cta service-card__cta--call" onClick={(e) => e.stopPropagation()}>
                  Jetzt anrufen
                </a>
                <Link to={ctaTo} className="service-card__cta service-card__cta--inquiry" onClick={(e) => e.stopPropagation()}>
                  Jetzt anfragen
                </Link>
              </div>
              <ul className="service-card__trust">
                <li>Antwort meist innerhalb weniger Minuten</li>
                <li>Kostenlose Ersteinschätzung</li>
                <li>Diskret &amp; schnell vor Ort</li>
              </ul>
              <ul className="service-card__bullets">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="service-card__back-desc">{description}</p>
              <button type="button" className="service-card__btn-back" onClick={closePanel}>
                Zurück
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
