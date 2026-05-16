import ServiceCard from "./ServiceCard.jsx";
import { leistungen } from "../data/leistungenData.js";
import "../components/ServiceCard.css";

export default function LeistungenSection({ cityName, sectionId = "leistungen" }) {
  const heading = cityName ? `Schädlingsbekämpfung in ${cityName}` : "Unsere Leistungen";
  const lead = cityName
    ? `Professionelle Schädlingsbekämpfung in ${cityName} – für Privat & Gewerbe.`
    : "Professionelle Schädlingsbekämpfung für Privat & Gewerbe – mit modernsten Mitteln und nachhaltigen Methoden.";

  return (
    <section className="section section--leistungen" id={sectionId}>
      <div className="section-inner">
        <div className="section-header section-header--leistungen">
          <h2>{heading}</h2>
          <div className="underline" aria-hidden />
          <p>{lead}</p>
        </div>

        <div className="leistungen-bento" role="list" data-leistungen-layout="overlay-v2">
          {leistungen.map((item, index) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              description={item.description}
              bullets={item.bullets}
              image={item.image}
              imageAlt={item.imageAlt}
              helpTagline={index % 2 === 0 ? "Soforthilfe möglich" : "Schnelle Hilfe verfügbar"}
              featured={item.title === "Ratten & Mäuse"}
              ctaTo="/#kontakt"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
