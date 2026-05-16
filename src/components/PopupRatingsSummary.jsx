import "./Ratings.css";

export default function PopupRatingsSummary() {
  return (
    <div className="ratings-popup-summary" aria-label="Bewertungen">
      <div className="ratings-popup-summary__item">
        <div className="ratings-popup-summary__stars-google" aria-hidden="true">
          ★★★★★
        </div>
        <div className="ratings-popup-summary__text">5,0 Google</div>
      </div>
      <div className="ratings-popup-summary__divider" aria-hidden="true" />
      <div className="ratings-popup-summary__item">
        <div className="ratings-popup-summary__stars-tp" aria-hidden="true">
          ★★★★★
        </div>
        <div className="ratings-popup-summary__text">4,9 Trustpilot</div>
      </div>
    </div>
  );
}

