import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SeoStadtstruktur from "./SeoStadtstruktur.jsx";
import Sicherheitsdatenblaetter from "./Sicherheitsdatenblaetter.jsx";
import Flyer from "./Flyer.jsx";
import CitySlugPage from "./pages/CitySlugPage.jsx";
import HomeSectionPage from "./pages/HomeSectionPage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leistungen" element={<HomeSectionPage section="leistungen" />} />
      <Route path="/leistungen/" element={<HomeSectionPage section="leistungen" />} />
      <Route path="/ueber-uns" element={<HomeSectionPage section="ueber-uns" />} />
      <Route path="/ueber-uns/" element={<HomeSectionPage section="ueber-uns" />} />
      <Route path="/zertifizierung" element={<HomeSectionPage section="zertifizierung" />} />
      <Route path="/zertifizierung/" element={<HomeSectionPage section="zertifizierung" />} />
      <Route path="/kontakt" element={<HomeSectionPage section="kontakt" />} />
      <Route path="/kontakt/" element={<HomeSectionPage section="kontakt" />} />
      <Route path="/impressum" element={<ImpressumPage />} />
      <Route path="/impressum/" element={<ImpressumPage />} />
      <Route path="/flyer" element={<Flyer />} />
      <Route path="/sicherheitsdatenblaetter" element={<Sicherheitsdatenblaetter />} />
      <Route path="/seo-stadtstruktur" element={<SeoStadtstruktur />} />
      <Route path="/:slug" element={<CitySlugPage />} />
    </Routes>
  );
}
