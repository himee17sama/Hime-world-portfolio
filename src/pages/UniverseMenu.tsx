// src/pages/UniverseMenu.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UniverseMenu.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function UniverseMenu() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="menu-container">
      <div className="menu-logo-container">
        <div className="menu-logo">H</div>
      </div>
      <h2>{t("universe.title")}</h2>
      <div className="menu-buttons">
        <button onClick={() => navigate("/about")}>{t("universe.about")}</button>
        <button onClick={() => navigate("/btp")}>{t("universe.btp")}</button>
        <button onClick={() => navigate("/infographie")}>{t("universe.infographie")}</button>
        <button onClick={() => navigate("/web")}>{t("universe.webdev")}</button>
      </div>
      <SocialLinks />
    </div>
  );
}
