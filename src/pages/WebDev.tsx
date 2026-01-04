// src/pages/WebDev.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WebDev.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function WebDev() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="webdev-container">
      <div className="webdev-watermark">EN CONSTRUCTION</div>
      <h2 className="webdev-title">{t("webdev.title")}</h2>
      <p className="webdev-text">
        {t("webdev.intro")}
      </p>
      <div className="webdev-projects">
        {/* Exemple de projet */}
        <div className="webdev-card">
          <h3>Projet 1</h3>
          <p>Description courte du projet</p>
        </div>
        <div className="webdev-card">
          <h3>Projet 2</h3>
          <p>Description courte du projet</p>
        </div>
      </div>

      {/* LIENS SOCIAUX */}
      <div className="webdev-social">
        <SocialLinks />
      </div>

      {/* NAVIGATION BUTTON - Retour seulement */}
      <div className="webdev-navigation">
        <button 
          className="webdev-btn-back" 
          onClick={() => navigate("/univers")}
        >
          {t("webdev.back")}
        </button>
      </div>
    </div>
  );
}
