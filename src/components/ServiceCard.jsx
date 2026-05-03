import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

function useTouchExpandMode() {
  const [touchExpand, setTouchExpand] = useState(() =>
    typeof window !== "undefined" ? !window.matchMedia("(hover: hover) and (pointer: fine)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setTouchExpand(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return touchExpand;
}

function usePrefersReducedMotion() {
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

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.summary – eine kurze Zeile auf dem Bild
 * @param {string} props.description – erweiterter Text (Hover / Tap)
 * @param {string} props.image
 * @param {string} [props.imageAlt]
 * @param {string} [props.ctaTo]
 */
export default function ServiceCard({ title, summary, description, image, imageAlt, ctaTo = "/#kontakt" }) {
  const touchExpand = useTouchExpandMode();
  const reducedMotion = usePrefersReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!touchExpand) setIsExpanded(false);
  }, [touchExpand]);

  const toggleExpanded = useCallback(
    (e) => {
      if (!touchExpand || reducedMotion) return;
      if (e.target.closest("a")) return;
      setIsExpanded((v) => !v);
    },
    [touchExpand, reducedMotion],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (!touchExpand || reducedMotion) return;
      if (e.target.closest("a")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsExpanded((v) => !v);
      }
    },
    [touchExpand, reducedMotion],
  );

  const expanded = touchExpand ? isExpanded : false;
  const showRevealAlways = reducedMotion;

  const rootClass = [
    "service-card",
    touchExpand ? "service-card--touch" : "",
    expanded || showRevealAlways ? "service-card--expanded" : "",
    reducedMotion ? "service-card--reduced-motion" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={rootClass}
      role="listitem"
      onClick={touchExpand && !reducedMotion ? toggleExpanded : undefined}
      onKeyDown={touchExpand && !reducedMotion ? onKeyDown : undefined}
      tabIndex={touchExpand && !reducedMotion ? 0 : undefined}
      aria-expanded={touchExpand ? expanded : undefined}
    >
      <div className="service-card__frame">
        <div className="service-card__media">
          <img className="service-card__img" src={image} alt={imageAlt ?? ""} width={800} height={1067} loading="lazy" decoding="async" />
          <div className="service-card__scrim" aria-hidden="true" />
        </div>

        <div className="service-card__panel">
          <div className="service-card__panel-head">
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__summary">{summary}</p>
            {touchExpand && !reducedMotion ? (
              <span className="service-card__hint">{expanded ? "Schließen" : "Mehr anzeigen"}</span>
            ) : null}
          </div>

          <div className="service-card__reveal">
            <div className="service-card__reveal-inner">
              <p className="service-card__description">{description}</p>
              <Link to={ctaTo} className="service-card__cta" onClick={(e) => e.stopPropagation()}>
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
