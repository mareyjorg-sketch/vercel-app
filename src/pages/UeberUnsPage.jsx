import SiteLayout from "../components/SiteLayout.jsx";
import TeamTraditionSection from "../components/TeamTraditionSection.jsx";
import { PageHead } from "../components/PageHead.jsx";
import PhoneIcon from "../components/PhoneIcon.jsx";
import { TEL, TEL_DISPLAY, SITE_ORIGIN } from "../siteInfo.js";
import "./Subpages.css";

const SEO = {
  title: "Über uns – Kammerjäger Bergmann Bottrop",
  description:
    "Jörg Bergmann und sein Team – 25 Jahre Familienbetrieb aus Bottrop. TÜV-zertifiziert, IHK-geprüft, persönlich & diskret.",
  canonical: `${SITE_ORIGIN}/ueber-uns/`,
  robots: "index, follow",
  geo: false,
  og: {
    type: "website",
    title: "Über uns – Kammerjäger Bergmann Bottrop",
    description:
      "Jörg Bergmann und sein Team – 25 Jahre Familienbetrieb aus Bottrop. TÜV-zertifiziert, IHK-geprüft, persönlich & diskret.",
    url: `${SITE_ORIGIN}/ueber-uns/`,
    locale: "de_DE",
  },
};

const VALUES = [
  {
    icon: "🤝",
    title: "Vertrauen",
    text: "Diskrete Einsätze, klare Kommunikation und faire Preise – ohne Überraschungen.",
  },
  {
    icon: "⚡",
    title: "Schnelligkeit",
    text: "Oft noch am selben Tag vor Ort – im gesamten Ruhrgebiet und NRW.",
  },
  {
    icon: "🌿",
    title: "Nachhaltigkeit",
    text: "Langfristige Lösungen statt kurzfristiger Bekämpfung – für dauerhaften Schutz.",
  },
];

const STATS = [
  { value: "25 Jahre", label: "Erfahrung" },
  { value: "100 km", label: "Einsatzgebiet" },
  { value: "24/7", label: "Notdienst" },
  { value: "TÜV", label: "Zertifiziert" },
];

export default function UeberUnsPage() {
  return (
    <SiteLayout>
      <PageHead seo={SEO} />
      <TeamTraditionSection hideCta />

      <section className="subpage-block" aria-labelledby="werte-heading">
        <div className="subpage-inner">
          <h2 id="werte-heading" className="subpage-h2">
            Unsere Werte
          </h2>
          <div className="values-grid">
            {VALUES.map((item) => (
              <article key={item.title} className="values-card">
                <span className="values-card__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="values-card__title">{item.title}</h3>
                <p className="values-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-stats" aria-label="Kennzahlen">
        <div className="subpage-inner">
          <ul className="stats-row">
            {STATS.map((stat) => (
              <li key={stat.label} className="stats-row__item">
                <span className="stats-row__value">{stat.value}</span>
                <span className="stats-row__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="subpage-cta">
        <div className="subpage-inner subpage-cta__inner">
          <h2 className="subpage-cta__title">Jetzt kostenlos beraten lassen</h2>
          <a href={TEL} className="btn-hero btn-hero--call subpage-cta__btn">
            <PhoneIcon size={22} className="subpage-cta__phone" aria-hidden />
            {TEL_DISPLAY}
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
