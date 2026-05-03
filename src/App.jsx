import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import SeoStadtstruktur from "./SeoStadtstruktur.jsx";
import Sicherheitsdatenblaetter from "./Sicherheitsdatenblaetter.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sicherheitsdatenblaetter" element={<Sicherheitsdatenblaetter />} />
      <Route path="/seo-stadtstruktur" element={<SeoStadtstruktur />} />
    </Routes>
  );
}
