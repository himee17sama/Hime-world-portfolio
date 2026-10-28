import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotionsOutils.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function NotionsOutils() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="notions-container">
      <h1 className="notions-title">{t("notionsPage.title")}</h1>

      <p className="notions-intro">
        {t("notionsPage.intro")}
      </p>

      {/* PROJETS NOTION */}
      <div className="notions-showcase">
        <article className="notions-project">
          <div className="notions-placeholder" aria-hidden="true">
            <span>{t("notionsPage.placeholder")}</span>
          </div>
          <div className="notions-project-text">
            <p className="notions-client">{t("notionsPage.internship.context")}</p>
            <h2>{t("notionsPage.internship.title")}</h2>
            <p>{t("notionsPage.internship.description")}</p>
            <span className="notions-tag">{t("notionsPage.internship.tag")}</span>
          </div>
        </article>
      </div>

      {/* Navigation */}
      <div className="notions-navigation">
        <button onClick={() => navigate("/infographie")}>
          {t("common.backToInfographie")}
        </button>
      </div>
    </div>
  );
}
