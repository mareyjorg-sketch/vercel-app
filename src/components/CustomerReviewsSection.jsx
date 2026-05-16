import { GoogleLogoLarge, TrustpilotLogoLarge } from "./ratings/RatingLogos.jsx";
import "./Ratings.css";

const REVIEWS = [
  {
    text: "Sehr schnell und professionell. Innerhalb weniger Stunden war der Techniker da und das Bettwanzenproblem war gelöst. Absolut empfehlenswert!",
    author: "Sandra K.",
    source: "Essen · Google Rezension",
  },
  {
    text: "Herr Bergmann war sehr diskret und kompetent. Ratten im Keller – nach dem Einsatz nie wieder ein Problem. Klare Weiterempfehlung!",
    author: "Michael T.",
    source: "Bottrop · Trustpilot",
  },
  {
    text: "Wespennest unter dem Dach – Bergmann hat alles sicher entfernt. Faire Preise, freundlich am Telefon und pünktlich vor Ort. Top!",
    author: "Familie Özdemir",
    source: "Oberhausen · Google Rezension",
  },
];

export default function CustomerReviewsSection() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-section__inner">
        <p className="reviews-section__eyebrow">Kundenbewertungen</p>
        <h2 id="reviews-heading" className="reviews-section__title">
          Was unsere Kunden sagen
        </h2>

        <div className="reviews-platforms">
          <article className="reviews-platform-box">
            <GoogleLogoLarge className="reviews-platform-box__logo" />
            <div className="reviews-platform-box__score">5,0</div>
            <div className="reviews-platform-box__stars-google" aria-hidden="true">
              ★★★★★
            </div>
            <p className="reviews-platform-box__meta">Basierend auf Google Rezensionen</p>
          </article>

          <article className="reviews-platform-box">
            <TrustpilotLogoLarge className="reviews-platform-box__logo" />
            <div className="reviews-platform-box__score">4,9</div>
            <div className="reviews-platform-box__stars-tp" aria-hidden="true">
              ★★★★★
            </div>
            <p className="reviews-platform-box__meta">Basierend auf Trustpilot Bewertungen</p>
          </article>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <article key={review.author} className="review-card">
              <div className="review-card__stars" aria-hidden="true">
                ★★★★★
              </div>
              <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-card__author">{review.author}</div>
              <div className="review-card__source">{review.source}</div>
            </article>
          ))}
        </div>

        <p className="reviews-section__disclaimer">
          Google und Trustpilot sind eingetragene Marken ihrer jeweiligen Eigentümer. Bewertungen basieren auf echten Kundenerfahrungen.
        </p>
      </div>
    </section>
  );
}

