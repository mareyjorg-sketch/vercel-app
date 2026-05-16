import { useCallback, useEffect, useRef, useState } from "react";
import { TEL, TEL_DISPLAY, WHATSAPP_URL } from "../siteInfo.js";
import PopupRatingsSummary from "./PopupRatingsSummary.jsx";
import "./CtaPopup.css";

const STORAGE_KEY = "popupClosed";
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const OPEN_DELAY_MS = 18000;

function shouldShowPopup() {
  try {
    const closed = localStorage.getItem(STORAGE_KEY);
    if (!closed) return true;
    return Date.now() - Number.parseInt(closed, 10) > THREE_DAYS_MS;
  } catch {
    return true;
  }
}

export default function CtaPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const openedRef = useRef(false);
  const canTriggerRef = useRef(shouldShowPopup());

  const openPopup = useCallback(() => {
    if (!canTriggerRef.current || openedRef.current) return;
    openedRef.current = true;
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    canTriggerRef.current = false;
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!canTriggerRef.current) return undefined;

    const timer = window.setTimeout(openPopup, OPEN_DELAY_MS);

    const onMouseLeave = (e) => {
      if (e.clientY < 10) openPopup();
    };

    let scrollFired = false;
    const onScroll = () => {
      if (scrollFired) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const scrolled = window.scrollY / maxScroll;
      if (scrolled > 0.6) {
        scrollFired = true;
        openPopup();
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closePopup]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) closePopup();
  };

  return (
    <div
      id="cta-popup"
      className={`cta-popup${isOpen ? " cta-popup--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cta-popup-title"
      aria-hidden={!isOpen}
      onClick={onBackdropClick}
    >
      <div className="cta-popup__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cta-popup__close" onClick={closePopup} aria-label="Popup schließen">
          ✕
        </button>

        <div className="cta-popup__phone-icon" aria-hidden="true">
          📞
        </div>

        <div className="cta-popup__eyebrow">🟢 Jetzt erreichbar – 24/7</div>

        <h2 id="cta-popup-title" className="cta-popup__title">
          Schädlingsbefall?
          <br />
          Wir helfen sofort.
        </h2>

        <p className="cta-popup__sub">Rufen Sie jetzt an – kostenlose Erstberatung, unverbindlich und diskret.</p>

        <p className="cta-popup__hint">Antwort in wenigen Minuten · Anfahrt ab 29 €</p>

        <a href={TEL} className="cta-popup__call" onClick={closePopup}>
          📞 {TEL_DISPLAY}
        </a>

        <a href={WHATSAPP_URL} className="cta-popup__wa" target="_blank" rel="noopener noreferrer" onClick={closePopup}>
          💬 Foto schicken &amp; Einschätzung erhalten
        </a>

        <PopupRatingsSummary />

        <div className="cta-popup__trust">
          <span>✓ TÜV-zertifiziert</span>
          <span>✓ IHK-geprüft</span>
          <span>✓ Kein Auftrag ohne Ihr OK</span>
        </div>
      </div>
    </div>
  );
}
