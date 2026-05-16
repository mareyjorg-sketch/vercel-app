import PhoneIcon from "./PhoneIcon.jsx";
import { TEL, TEL_DISPLAY } from "../siteInfo.js";
import "./AnfahrtSection.css";

const INFO_CARDS = [
  {
    icon: "📍",
    title: "Ihr Standort",
    text: "Sagen Sie uns einfach Ihre Adresse – wir berechnen sofort die Anfahrt.",
  },
  {
    icon: "🚐",
    title: "Entfernung",
    text: "Ab Bottrop – je näher, desto günstiger. Ruhrgebiet meist günstigste Staffel.",
  },
  {
    icon: "📞",
    title: "Unverbindlich anfragen",
    text: "Kein Auftrag ohne Ihr OK. Wir beraten Sie kostenlos und nennen Ihnen alle Kosten vorher.",
  },
];

export default function AnfahrtSection() {
  return (
    <section className="anfahrt-section" id="anfahrt" aria-labelledby="anfahrt-heading">
      <div className="anfahrt-section__inner">
        <header className="anfahrt-section__header">
          <h2 id="anfahrt-heading">Anfahrtspauschale</h2>
          <div className="underline" aria-hidden />
          <p className="anfahrt-section__subtitle">Transparente Preise – keine versteckten Kosten</p>
        </header>

        <div className="anfahrt-price">
          <p className="anfahrt-price__amount">
            <span className="anfahrt-price__prefix">ab</span> 29 €
          </p>
          <p className="anfahrt-price__sub">Anfahrt je nach Entfernung</p>
        </div>

        <div className="anfahrt-info-box" role="note">
          <span className="anfahrt-info-box__icon" aria-hidden="true">
            ℹ️
          </span>
          <p>
            Die genaue Anfahrtspauschale hängt davon ab, wo Sie sich befinden und wohin wir fahren müssen. Je nach Entfernung von Bottrop kann der Betrag variieren – wir nennen Ihnen den genauen Preis vorab und unverbindlich am Telefon.
          </p>
        </div>

        <div className="anfahrt-cards">
          {INFO_CARDS.map((card) => (
            <article key={card.title} className="anfahrt-card">
              <span className="anfahrt-card__icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3 className="anfahrt-card__title">{card.title}</h3>
              <p className="anfahrt-card__text">{card.text}</p>
            </article>
          ))}
        </div>

        <p className="anfahrt-disclaimer">
          * Die Anfahrtspauschale ab 29 € gilt für Einsätze in Bottrop und der näheren Umgebung. Für weitere Entfernungen im 100km Umkreis staffelt sich der Preis entsprechend. Alle Preise werden vor dem Einsatz transparent kommuniziert – keine Überraschungen.
        </p>

        <a href={TEL} className="anfahrt-cta">
          <PhoneIcon size={20} className="anfahrt-cta__icon" aria-hidden />
          Jetzt unverbindlich anfragen – {TEL_DISPLAY}
        </a>
      </div>
    </section>
  );
}
