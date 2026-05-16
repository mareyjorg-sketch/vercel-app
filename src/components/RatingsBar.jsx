import { GoogleLogo, TrustpilotLogo } from "./ratings/RatingLogos.jsx";
import "./Ratings.css";

export default function RatingsBar() {
  return (
    <aside className="ratings-bar" aria-label="Kundenbewertungen auf Google und Trustpilot">
      <div className="ratings-bar__inner">
        <div className="ratings-bar__item">
          <GoogleLogo />
          <div>
            <div className="ratings-bar__stars">
              <span className="ratings-bar__stars-google" aria-hidden="true">
                ★★★★★
              </span>
              <span className="ratings-bar__score">5,0</span>
            </div>
            <div className="ratings-bar__label">Bewertung auf Google</div>
          </div>
        </div>

        <div className="ratings-bar__divider" aria-hidden="true" />

        <div className="ratings-bar__item">
          <TrustpilotLogo />
          <div>
            <div className="ratings-bar__stars">
              <span className="ratings-bar__stars-trustpilot" aria-hidden="true">
                <span className="full">★★★★</span>
                <span className="dim">★</span>
              </span>
              <span className="ratings-bar__score">4,9</span>
            </div>
            <div className="ratings-bar__label">Bewertung auf Trustpilot</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
