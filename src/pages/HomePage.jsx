import Home from "../Home.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { HOME_SEO, buildHomeSchemaGraph } from "../seo/siteSeo.js";

export default function HomePage() {
  return (
    <>
      <PageHead seo={HOME_SEO} jsonLd={buildHomeSchemaGraph()} />
      <Home />
    </>
  );
}
