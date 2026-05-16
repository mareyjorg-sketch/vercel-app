import { Link, useParams } from "react-router-dom";
import { getCityBySlugParam } from "../data/cityLookup.js";
import SiteLayout from "../components/SiteLayout.jsx";
import StadtLandingPage from "./StadtLandingPage.jsx";

export default function CitySlugPage() {
  const { slug } = useParams();
  const city = getCityBySlugParam(slug);

  if (!city) {
    return (
      <SiteLayout>
        <section className="section section--stadt-intro">
          <div className="section-inner" style={{ textAlign: "center" }}>
            <h1>Seite nicht gefunden</h1>
            <p style={{ marginTop: 12, color: "var(--muted)" }}>
              Die angeforderte Ortsseite existiert nicht oder wurde verschoben.
            </p>
            <Link to="/" className="btn-hero btn-hero--call" style={{ display: "inline-block", marginTop: 24 }}>
              Zur Startseite
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return <StadtLandingPage city={city} />;
}
