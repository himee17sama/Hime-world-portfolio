import React from "react";
import { useNavigate } from "react-router-dom";
import "./Infographie.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function Infographie() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="infographie-container">
      <h1 className="infographie-title">{t("infographie.title")}</h1>

      <p className="infographie-text">
        {t("infographie.intro")}
      </p>

      <div className="infographie-projects">
        <div 
          className="infographie-card"
          onClick={() => navigate("/infographie/identites")}
        >
          <h2>{t("infographie.identities")}</h2>
          <p>
            {t("infographie.identitiesDesc")}
          </p>
        </div>

        <div 
          className="infographie-card"
          onClick={() => navigate("/infographie/mises-en-page")}
        >
          <h2>{t("infographie.misesEnPage")}</h2>
          <p>
            {t("infographie.misesEnPageDesc")}
          </p>
        </div>

        <div 
          className="infographie-card"
          onClick={() => navigate("/infographie/illustrations")}
        >
          <h2>{t("infographie.illustrations")}</h2>
          <p>
            {t("infographie.illustrationsDesc")}
          </p>
        </div>

        <div className="infographie-bottom-wrapper">
          <div 
            className="infographie-card"
            onClick={() => navigate("/infographie/reseaux-sociaux")}
          >
            <h2>{t("infographie.reseauxSociaux")}</h2>
            <p>
              {t("infographie.reseauxSociauxDesc")}
            </p>
          </div>

          <div 
            className="infographie-card"
            onClick={() => navigate("/infographie/notion")}
          >
            <h2>{t("infographie.notions")}</h2>
            <p>
              {t("infographie.notionsDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* LIENS SOCIAUX */}
      <div className="infographie-social">
        <SocialLinks />
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="infographie-navigation">
        <button 
          className="infographie-btn-back" 
          onClick={() => navigate("/univers")}
        >
          {t("infographie.back")}
        </button>
        <button 
          className="infographie-btn-next" 
          onClick={() => navigate("/web")}
        >
          {t("infographie.next")}
        </button>
      </div>
    </div>
  );
}