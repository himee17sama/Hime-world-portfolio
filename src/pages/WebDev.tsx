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
      <h2 className="webdev-title">{t("webdev.title")}</h2>
      <p className="webdev-text">
        {t("webdev.intro")}
      </p>
      <div className="webdev-projects">
        {/* Projet Nohera */}
        <div className="webdev-card webdev-card-featured">
          <h3 className="webdev-card-title">{t("webdev.nohera.title")}</h3>
          <p className="webdev-card-subtitle">{t("webdev.nohera.subtitle")}</p>
          
          <p className="webdev-card-description">
            {t("webdev.nohera.description")}
          </p>

          <div className="webdev-features">
            <h4 className="webdev-features-title">{t("webdev.nohera.features.title")}</h4>
            <ul className="webdev-features-list">
              <li>{t("webdev.nohera.features.library")}</li>
              <li>{t("webdev.nohera.features.status")}</li>
              <li>{t("webdev.nohera.features.search")}</li>
              <li>{t("webdev.nohera.features.stats")}</li>
              <li>{t("webdev.nohera.features.tabs")}</li>
              <li>{t("webdev.nohera.features.persistence")}</li>
            </ul>
          </div>

          <div className="webdev-tech">
            <h4 className="webdev-tech-title">{t("webdev.nohera.tech.title")}</h4>
            <p className="webdev-tech-stack">{t("webdev.nohera.tech.stack")}</p>
          </div>

          <div className="webdev-link-container">
            <a
              href="https://nohera-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="webdev-link"
            >
              {t("webdev.nohera.linkText")}
            </a>
          </div>
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
