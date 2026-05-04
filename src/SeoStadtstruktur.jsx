import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SeoStadtstruktur.css";
import { seoRegions } from "./data/seoStadtstrukturData.js";
import { EMAIL, TEL_DISPLAY, SITE_ORIGIN } from "./siteInfo.js";

const TITLE = "SEO-Stadtstruktur | Kammerjäger Bergmann";
const DEFAULT_TITLE = "Kammerjäger Bergmann | Schädlingsbekämpfung Bottrop & Umgebung";

function CityRow({ name, slug, extra, extraVariant }) {
  const lineClass = extraVariant === "pop" ? "city-pop" : "city-dist";
  return (
    <div className="city-item">
      <div className="city-name">{name}</div>
      <div className="city-slug">{slug}</div>
      {extra ? <div className={lineClass}>{extra}</div> : null}
    </div>
  );
}

export default function SeoStadtstruktur() {
  useEffect(() => {
    document.title = TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <div className="seo-page">
      <div className="page-header">
        <h1>🗺️ SEO-Stadtstruktur — Kammerjäger Bergmann</h1>
        <p>100 km Umkreis Bottrop · Alle Städte + Unterseiten-Struktur + Seiten-Template</p>
        <Link className="seo-back" to="/">
          ← Zur Startseite
        </Link>
      </div>

      <div className="intro">
        <div className="stats">
          <div className="stat">
            <div className="num">142</div>
            <div className="lbl">Städte & Gemeinden</div>
          </div>
          <div className="stat">
            <div className="num">100km</div>
            <div className="lbl">Umkreis Bottrop</div>
          </div>
          <div className="stat">
            <div className="num">142</div>
            <div className="lbl">SEO-Unterseiten</div>
          </div>
          <div className="stat">
            <div className="num">~8M</div>
            <div className="lbl">Einwohner erreicht</div>
          </div>
        </div>

        <div className="intro-box">
          <h2>📁 URL-Struktur</h2>
          <p>
            Jede Stadt bekommt eine eigene URL nach diesem Muster:
            <br />
            <br />
            <code className="url-code">
              {SITE_ORIGIN}/schaedlingsbekaempfung-<strong>[stadt]</strong>/
            </code>
            <br />
            <br />
            Beispiele:
            <br />
            <code>…/schaedlingsbekaempfung-duesseldorf/</code> &nbsp;→&nbsp; Wenn jemand &quot;Kammerjäger Düsseldorf&quot; googelt
            <br />
            <code>…/schaedlingsbekaempfung-stockum/</code> &nbsp;→&nbsp; Stadtteil-Seite für Düsseldorf-Stockum
            <br />
            <code>…/schaedlingsbekaempfung-essen/</code> &nbsp;→&nbsp; Wenn jemand &quot;Schädlingsbekämpfung Essen&quot; googelt
          </p>
        </div>

        {seoRegions.map((region) => (
          <div className="region" key={region.id}>
            <div className="region-header">
              <h3>{region.heading}</h3>
              <span className="count">{region.count}</span>
            </div>
            <div className="city-grid">
              {region.cities.map((c) => (
                <CityRow key={`${region.id}-${c.slug}`} name={c.name} slug={c.slug} extra={c.extra} extraVariant={c.extraVariant} />
              ))}
            </div>
          </div>
        ))}

        <div className="template-section">
          <h2>📄 SEO-Seitentemplate — so sieht jede Stadtseite aus</h2>

          <div className="slug-info">
            <h4>Variablen die sich pro Stadt ändern:</h4>
            <code>{`{STADT} = Düsseldorf  |  {STADTTEIL} = Stockum  |  {ENTFERNUNG} = 25 km  |  {PLZ_BEREICH} = 40xxx`}</code>
          </div>

          <div className="content-block">
            <h4>🔍 Meta-Titel (60 Zeichen)</h4>
            <div className="meta-example">Kammerjäger {"{STADT}"} – Schädlingsbekämpfung ☎ {TEL_DISPLAY}</div>
            <p>
              Beispiel: <em>&quot;Kammerjäger Düsseldorf – Schädlingsbekämpfung ☎ {TEL_DISPLAY}&quot;</em> — enthält Stadt + Keyword + Telefon
            </p>
          </div>

          <div className="content-block">
            <h4>🔍 Meta-Description (155 Zeichen)</h4>
            <div className="meta-example">
              {`Schädlingsbekämpfung in {STADT} ✓ Schnell vor Ort ✓ Ratten, Bettwanzen, Wespen & mehr. Kammerjäger Bergmann – TÜV SÜD-geprüft. Jetzt anrufen: ${TEL_DISPLAY}`}
            </div>
          </div>

          <div className="content-block">
            <h4>📝 H1 Überschrift</h4>
            <div className="meta-example">Schädlingsbekämpfung in {"{STADT}"} – Kammerjäger Bergmann</div>
          </div>

          <div className="content-block">
            <h4>📝 Einleitungstext (individuell pro Stadt, ~120 Wörter)</h4>
            <p>
              Sie suchen einen zuverlässigen <strong>Kammerjäger in {"{STADT}"}</strong>? Kammerjäger Bergmann aus Bottrop ist schnell bei Ihnen vor Ort – auch in {"{STADT}"} und dem gesamten{" "}
              {"{PLZ_BEREICH}"}-Gebiet. Ob Ratten, Mäuse, Bettwanzen, Kakerlaken, Ameisen oder Wespen: Wir bekämpfen Ihren Schädlingsbefall professionell, diskret und nachhaltig.
              <br />
              <br />
              Unser Betrieb ist TÜV SÜD-geprüft und IHK-geprüft nach § 18 IfSG. Von Bottrop aus erreichen wir {"{STADT}"} in ca. {"{ENTFERNUNG}"} – schnelle Hilfe ist garantiert, oft noch am
              selben Tag.
            </p>
          </div>

          <div className="content-block">
            <h4>🛠️ Leistungen in {"{STADT}"} (H2-Block)</h4>
            <p>
              H2: <em>&quot;Unsere Leistungen in {"{STADT}"}&quot;</em>
              <br />
              → Ratten &amp; Mäuse bekämpfen in {"{STADT}"}
              <br />
              → Bettwanzen-Bekämpfung {"{STADT}"}
              <br />
              → Wespen-Notdienst {"{STADT}"}
              <br />
              → Kakerlaken &amp; Schaben {"{STADT}"}
              <br />
              → Ameisen-Bekämpfung {"{STADT}"}
              <br />→ Marder-Vergrämung {"{STADT}"}
            </p>
          </div>

          <div className="content-block">
            <h4>📍 Lokaler Bezug (wichtig für SEO!)</h4>
            <p>
              H2: <em>&quot;Kammerjäger Bergmann – Ihr Experte für {"{STADT}"} und Umgebung&quot;</em>
              <br />
              <br />
              Als Familienbetrieb aus Bottrop kennen wir die Region gut. Wir sind regelmäßig in {"{STADT}"} im Einsatz und kennen die typischen Schädlingsprobleme in der Gegend.{" "}
              <span className="placeholder">→ Für Stadtteile: &quot;Ob {"{STADTTEIL}"}, Innenstadt oder Randgebiet – wir kommen überall in {"{STADT}"} zu Ihnen.&quot;</span>
            </p>
          </div>

          <div className="content-block">
            <h4>📞 CTA / Kontaktblock</h4>
            <div className="meta-example">
              {`Jetzt Kammerjäger in {STADT} anrufen: ${TEL_DISPLAY}
Oder schreiben Sie uns: ${EMAIL}
→ Schnelle Rückmeldung · Diskreter Einsatz · Festpreise auf Anfrage`}
            </div>
          </div>

          <div className="content-block">
            <h4>⚙️ Schema.org Markup (LocalBusiness) — in jede Stadtseite einfügen</h4>
            <div className="meta-example">{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kammerjäger Bergmann",
  "url": "${SITE_ORIGIN}",
  "description": "Schädlingsbekämpfung in {STADT} und Umgebung",
  "telephone": "+491635276870",
  "areaServed": "{STADT}",
  "priceRange": "€€",
  "hasCredential": ["TÜV SÜD", "IHK § 18 IfSG"]
}`}</div>
          </div>
        </div>

        <div className="intro-box">
          <h2>💡 Pro-Tipp: Stadtteile = doppelter SEO-Vorteil</h2>
          <p>
            Wenn jemand googelt <strong>&quot;Kammerjäger Stockum&quot;</strong> oder <strong>&quot;Schädlingsbekämpfung Düsseldorf Stockum&quot;</strong>, landet er auf{" "}
            <code>/schaedlingsbekaempfung-stockum/</code> — die Seite erwähnt aber auch &quot;Düsseldorf&quot;, sodass Google beide Keywords rankt. Das ist der Trick:{" "}
            <strong>Stadtteil als eigene Seite + Elternstadt im Text nennen.</strong>
            <br />
            <br />
            Priorität: Erst Großstädte (Düsseldorf, Essen, Dortmund), dann schrittweise Stadtteile und kleine Orte hinzufügen.
          </p>
        </div>
      </div>
    </div>
  );
}
