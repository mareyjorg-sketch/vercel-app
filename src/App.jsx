import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SeoStadtstruktur from "./SeoStadtstruktur.jsx";
import Sicherheitsdatenblaetter from "./Sicherheitsdatenblaetter.jsx";
import Flyer from "./Flyer.jsx";
import CitySlugPage from "./pages/CitySlugPage.jsx";
import HomeSectionPage from "./pages/HomeSectionPage.jsx";
import ImpressumPage from "./pages/ImpressumPage.jsx";
import UeberUnsPage from "./pages/UeberUnsPage.jsx";
import ZertifizierungPage from "./pages/ZertifizierungPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/leistungen" element={<HomeSectionPage section="leistungen" />} />
      <Route path="/leistungen/" element={<HomeSectionPage section="leistungen" />} />
      <Route path="/ueber-uns" element={<UeberUnsPage />} />
      <Route path="/ueber-uns/" element={<UeberUnsPage />} />
      <Route path="/zertifizierung" element={<ZertifizierungPage />} />
      <Route path="/zertifizierung/" element={<ZertifizierungPage />} />
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
