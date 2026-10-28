// src/App.tsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import UniverseMenu from "./pages/UniverseMenu";
import About from "./pages/About";
import BTP from "./pages/BTP";
import Infographie from "./pages/Infographie";
import Identites from "./pages/Infographie/Identities";
import MisesEnPage from "./pages/Infographie/MisesEnPage";
import Illustrations from "./pages/Infographie/Illustrations";
import ReseauxSociaux from "./pages/Infographie/ReseauxSociaux";
import NotionsOutils from "./pages/Infographie/NotionsOutils";
import WebDev from "./pages/WebDev";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import ProgressIndicator from "./components/ProgressIndicator";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { pathname } = useLocation();
  // Pas de barre de menu sur l'accueil, pour garder l'intro immersive
  const isLanding = pathname === "/";

  return (
    <>
      <ScrollToTop />
      {isLanding ? (
        <LanguageSwitcher />
      ) : (
        <>
          <Navbar />
          <ProgressIndicator />
        </>
      )}
      <main className={isLanding ? undefined : "with-navbar"}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/univers" element={<UniverseMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/btp" element={<BTP />} />
        <Route path="/infographie" element={<Infographie />} />
        <Route path="/infographie/identites" element={<Identites />} />
        <Route path="/infographie/mises-en-page" element={<MisesEnPage />} />
        <Route path="/infographie/illustrations" element={<Illustrations />} />
        <Route path="/infographie/reseaux-sociaux" element={<ReseauxSociaux />} />
        <Route path="/infographie/notion" element={<NotionsOutils />} />
        <Route path="/web" element={<WebDev />} />
      </Routes>
      </main>
    </>
  );
}



