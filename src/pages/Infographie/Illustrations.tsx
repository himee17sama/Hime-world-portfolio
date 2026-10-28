import React from "react";
import { useNavigate } from "react-router-dom";
import "./Illustrations.css";
import nourIllustration from "../../assets/Nour.png";
import indianaIllustration from "../../assets/indiana.jpg";
import kourouIllustration from "../../assets/kourou.png";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Illustrations() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="illus-container">
      <h1 className="illus-title">{t("illusPage.title")}</h1>

      <p className="illus-intro">
        {t("illusPage.intro")}
      </p>

      <div className="illus-projects">
        {/* Projet 1 - Affiche DC */}
        <article className="illus-card">
          <h2>{t("illusPage.dc.title")}</h2>
          <p className="illus-client">{t("illusPage.dc.client")}</p>

          <div className="illus-image-container">
            <img src={nourIllustration} alt={t("illusPage.dc.alt")} className="illus-image" />
          </div>

          <p>
            {t("illusPage.dc.description1")}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {t("illusPage.dc.description2")}
          </p>

          <span className="illus-tag">{t("illusPage.dc.tag")}</span>
        </article>

        {/* Projet 2 - Affiche Indiana Jones */}
        <article className="illus-card">
          <h2>{t("illusPage.indiana.title")}</h2>
          <p className="illus-client">{t("illusPage.indiana.client")}</p>

          <div className="illus-image-container">
            <img src={indianaIllustration} alt={t("illusPage.indiana.alt")} className="illus-image" />
          </div>

          <p>
            {t("illusPage.indiana.description1")}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {t("illusPage.indiana.description2")}
          </p>

          <span className="illus-tag">{t("illusPage.indiana.tag")}</span>
        </article>

        {/* Projet 3 - Pochette Kourou Carter */}
        <article className="illus-card">
          <h2>{t("illusPage.kourou.title")}</h2>
          <p className="illus-client">{t("illusPage.kourou.client")}</p>

          <div className="illus-image-container">
            <img src={kourouIllustration} alt={t("illusPage.kourou.alt")} className="illus-image" />
          </div>

          <p>
            {t("illusPage.kourou.description1")}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {t("illusPage.kourou.description2")}
          </p>

          <span className="illus-tag">{t("illusPage.kourou.tag")}</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="illus-navigation">
        <button onClick={() => navigate("/infographie")}>
          {t("common.backToInfographie")}
        </button>
      </div>
    </div>
  );
}
