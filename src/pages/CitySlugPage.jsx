import { Link, useParams } from "react-router-dom";
import { getGeoPageBySlugParam } from "../data/cityLookup.js";
import SiteLayout from "../components/SiteLayout.jsx";
import StadtLandingPage from "./StadtLandingPage.jsx";
import DistrictLandingPage from "./DistrictLandingPage.jsx";

export default function CitySlugPage() {
  const { slug } = useParams();
  const page = getGeoPageBySlugParam(slug);

  if (!page) {
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

  if (page.pageType === "district") {
    return <DistrictLandingPage district={page} />;
  }

  return <StadtLandingPage city={page} />;
}
