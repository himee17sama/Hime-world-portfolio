// src/pages/BTP.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BTP.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function BTP() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="btp-container">
      {/* INTRO */}
      <h1 className="btp-title">{t("btp.title")}</h1>
      <p className="btp-text">
        {t("btp.intro")}
      </p>

      {/* PROJET GAIA */}
      <div className="btp-projects">
        <div className="btp-card">
          <h2>{t("btp.projectTitle")}</h2>
          <p>
            <strong>{t("btp.duration")}</strong> 2022 – Livraison septembre 2025  
            <br />
            <strong>{t("btp.type")}</strong> Promotion immobilière – Quartier résidentiel
          </p>

          <p style={{ marginTop: "1rem" }}>
            {t("btp.projectDescription")}
          </p>
        </div>
      </div>

      {/* ARTICLE DETAIL */}
      <div className="btp-projects">
        <div className="btp-card">
          <h2>{t("btp.roleTitle")}</h2>
          <p>
            {t("btp.roleDescription1")}
          </p>

          <p style={{ marginTop: "1rem" }}>
            {t("btp.roleDescription2")}
          </p>
        </div>
      </div>

      {/* VIDEO */}
      <div className="btp-projects">
        <div className="btp-card">
          <h2>{t("btp.videoTitle")}</h2>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/FV9xCKMsD_o"
              title="Projet GAIA - Rouen"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* LIENS SOCIAUX */}
      <div className="btp-social">
        <SocialLinks />
      </div>

      {/* NAVIGATION */}
      <div className="btp-navigation">
        <button className="btp-btn-back" onClick={() => navigate("/univers")}>
          {t("btp.back")}
        </button>
        <button className="btp-btn-next" onClick={() => navigate("/infographie")}>
          {t("btp.next")}
        </button>
      </div>
    </div>
  );
}