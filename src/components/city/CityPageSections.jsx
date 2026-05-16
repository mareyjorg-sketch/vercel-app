import { Link } from "react-router-dom";
import { getCitiesByRegion, getDistrictsForCity, getNearestCities } from "../../data/geoLookup.js";
import { intentVariants } from "../../data/keywords.js";
import { TEL, TEL_DISPLAY } from "../../siteInfo.js";
import "./CityPage.css";

function formatDistrictList(districts, max = 3) {
  const names = districts.slice(0, max).map((d) => d.districtName);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} und ${names[1]}`;
  return `${names[0]}, ${names[1]} oder ${names[2]}`;
}

export function CityBreadcrumb({ items }) {
  return (
    <nav className="city-breadcrumb" aria-label="Brotkrumen">
      {items.map((item, i) => (
        <span key={item.href ?? item.label}>
          {i > 0 && <span className="city-breadcrumb__sep" aria-hidden="true"> › </span>}
          {item.href ? <Link to={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/** @param {{ city: import("../../data/geoLookup.js").CityPage }} props */
export function CityHeroIntro({ city }) {
  return (
    <section className="section section--stadt-intro">
      <div className="section-inner city-intro-block">
        <CityBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Einsatzgebiet", href: "/#anfahrt" },
            { label: city.name },
          ]}
        />
        <p className="stadt-intro city-intro-block__text">
          Sie suchen einen zuverlässigen Kammerjäger in <strong>{city.name}</strong>? Kammerjäger Bergmann aus Bottrop ist schnell bei
          Ihnen vor Ort – {city.name} liegt nur ca. <strong>{city.km} km</strong> von unserem Standort entfernt. Wir bekämpfen Ratten,
          Mäuse, Bettwanzen, Wespen, Kakerlaken, Ameisen und Marder – professionell, diskret und nachhaltig.
        </p>
        <p className="city-intro-block__meta">
          PLZ {city.plz} · {city.region} · {intentVariants.slice(0, 4).join(" · ")}
        </p>
      </div>
    </section>
  );
}

/** @param {{ city: import("../../data/geoLookup.js").CityPage }} props */
export function CityDistrictsSection({ city }) {
  const districts = getDistrictsForCity(city.slug);
  if (districts.length === 0) return null;

  const sample = formatDistrictList(districts);

  return (
    <section className="city-section city-section--districts">
      <div className="section-inner">
        <h2 className="city-section__title">Auch in allen Stadtteilen von {city.name}</h2>
        <div className="city-district-pills">
          {districts.map((d) => (
            <Link key={d.slugKey} to={`/${d.slugKey}/`} className="city-district-pill">
              {d.districtName}
            </Link>
          ))}
        </div>
        {sample && (
          <p className="city-section__sub">
            Ob {sample} – wir kommen in alle Stadtteile von {city.name}.
          </p>
        )}
      </div>
    </section>
  );
}

/** @param {{ city: import("../../data/geoLookup.js").CityPage }} props */
export function CityNearbySection({ city }) {
  const nearby = getNearestCities(city, 4);

  return (
    <section className="city-section city-section--muted">
      <div className="section-inner">
        <h2 className="city-section__title">Auch in der Nähe von {city.name} tätig</h2>
        <ul className="city-nearby-links">
          {nearby.map((near) => (
            <li key={near.slug}>
              <Link to={`/schaedlingsbekaempfung-${near.slug}/`}>Kammerjäger {near.name}</Link>
              <span className="city-nearby-links__km">ca. {near.km} km</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** @param {{ city: import("../../data/geoLookup.js").CityPage }} props */
export function CitySeoTextSection({ city }) {
  const districts = getDistrictsForCity(city.slug);
  const d0 = districts[0]?.districtName ?? city.name;
  const d1 = districts[1]?.districtName ?? city.name;
  const d2 = districts[2]?.districtName ?? city.name;

  return (
    <section className="city-section">
      <div className="section-inner city-seo-text">
        <h2 className="city-section__title">Warum Kammerjäger Bergmann in {city.name}?</h2>
        <p>
          Als erfahrener Schädlingsbekämpfer kennen wir {city.name} und die {city.region}-Region gut. Von Bottrop aus sind wir in ca.{" "}
          {city.km} km bei Ihnen – oft noch am selben Tag.
        </p>
        <p>
          Ob Privathaushalt in {d0}, Gewerbebetrieb in {d1} oder Gastronomie in {d2} – wir bekämpfen Ihren Schädlingsbefall diskret und
          nachhaltig.
        </p>
        <p>
          Rufen Sie uns jetzt an: <a href={TEL}>{TEL_DISPLAY}</a> – kostenlose Erstberatung, Anfahrt ab 29 €, Preis vorab unverbindlich am
          Telefon.
        </p>
      </div>
    </section>
  );
}

/** @param {{ city: import("../../data/geoLookup.js").CityPage }} props */
export function CityFaqSection({ city }) {
  const faqs = [
    {
      q: `Wie schnell kommt der Kammerjäger nach ${city.name}?`,
      a: `Von Bottrop nach ${city.name} sind es ca. ${city.km} km. In der Regel sind wir innerhalb weniger Stunden, oft noch am selben Tag bei Ihnen.`,
    },
    {
      q: `Was kostet ein Kammerjäger in ${city.name}?`,
      a: `Die Anfahrt nach ${city.name} berechnen wir ab 29 €. Den genauen Preis nennen wir Ihnen vorab und unverbindlich am Telefon.`,
    },
    {
      q: `Welche Schädlinge bekämpfen Sie in ${city.name}?`,
      a: "Alle: Ratten, Mäuse, Bettwanzen, Wespen, Hornissen, Kakerlaken, Ameisen, Marder und mehr.",
    },
  ];

  return (
    <section className="city-section city-section--faq">
      <div className="section-inner">
        <h2 className="city-section__title">Häufige Fragen – Kammerjäger {city.name}</h2>
        <dl className="city-faq">
          {faqs.map((item) => (
            <div key={item.q} className="city-faq__item">
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function CityInternalLinksSection() {
  const byRegion = getCitiesByRegion();

  return (
    <section className="city-section city-section--links">
      <div className="section-inner">
        <h2 className="city-section__title city-section__title--sm">Weitere Einsatzgebiete in NRW</h2>
        {Array.from(byRegion.entries()).map(([region, list]) => (
          <div key={region} className="city-region-links">
            <h3 className="city-region-links__heading">{region}</h3>
            <p className="city-region-links__list">
              {list.map((c, i) => (
                <span key={c.slugKey}>
                  {i > 0 && " · "}
                  <Link to={`/${c.slugKey}/`}>{c.name}</Link>
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** @param {{ district: import("../../data/geoLookup.js").DistrictPage }} props */
export function DistrictIntro({ district }) {
  const parent = district.parentCity;
  const parentKey = `schaedlingsbekaempfung-${parent.slug}`;

  return (
    <section className="section section--stadt-intro">
      <div className="section-inner city-intro-block">
        <CityBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: parent.name, href: `/${parentKey}/` },
            { label: district.districtName },
          ]}
        />
        <p className="stadt-intro city-intro-block__text">
          Sie suchen einen Kammerjäger in <strong>{district.districtName}</strong>? {district.districtName} ist ein Stadtteil von{" "}
          <strong>{parent.name}</strong> und liegt ca. <strong>{parent.km} km</strong> von unserem Standort in Bottrop entfernt. Kammerjäger
          Bergmann kommt schnell zu Ihnen – diskret, professionell und zuverlässig.
        </p>
        <p className="city-intro-block__back">
          <Link to={`/${parentKey}/`}>→ Alle Leistungen in {parent.name}</Link>
        </p>
      </div>
    </section>
  );
}
