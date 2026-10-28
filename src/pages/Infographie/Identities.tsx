import React from "react";
import { useNavigate } from "react-router-dom";
import "./Identities.css";
import logoAkom from "../../assets/logoakom.jpg";
import mtd1 from "../../assets/Mtd - 1.png";
import mtd2 from "../../assets/Mtd - 2.png";
import mtd4 from "../../assets/Mtd - 4.png";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Identites() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="identites-container">
      <h1 className="identites-title">{t("identitesPage.title")}</h1>

      <p className="identites-intro">
        {t("identitesPage.intro")}
      </p>

      <div className="identites-projects">
        {/* PROJET 1 - MTD Transport */}
        <article className="identites-card">
          <h2>{t("identitesPage.mtd.title")}</h2>
          <p className="identites-client">{t("identitesPage.mtd.client")}</p>

          <div className="identites-logos-row">
            <div className="identites-logo-square">
              <img src={mtd1} alt={t("identitesPage.mtd.altMain")} className="identites-logo-img" />
            </div>
            <div className="identites-logo-square">
              <img src={mtd2} alt={t("identitesPage.mtd.altWomen")} className="identites-logo-img" />
            </div>
            <div className="identites-logo-square">
              <img src={mtd4} alt={t("identitesPage.mtd.altEvents")} className="identites-logo-img" />
            </div>
          </div>

          <p>
            {t("identitesPage.mtd.description1")}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {t("identitesPage.mtd.description2")}
          </p>

          <div className="identites-colors">
            <h3 className="identites-colors-title">{t("identitesPage.paletteTitle")}</h3>
            <div className="identites-colors-list">
              <div className="color-circle" style={{ backgroundColor: "#3B2B41" }} title="#3B2B41"></div>
              <div className="color-circle" style={{ backgroundColor: "#417286" }} title="#417286"></div>
              <div className="color-circle" style={{ backgroundColor: "#873666" }} title="#873666"></div>
              <div className="color-circle" style={{ backgroundColor: "#B63155" }} title="#B63155"></div>
              <div className="color-circle" style={{ backgroundColor: "#A4B1BA" }} title="#A4B1BA"></div>
            </div>
          </div>

          <span className="identites-tag">{t("identitesPage.mtd.tag")}</span>
        </article>

        {/* PROJET 2 - Boutique cosmétique */}
        <article className="identites-card">
          <h2>{t("identitesPage.akom.title")}</h2>
          <p className="identites-client">{t("identitesPage.akom.client")}</p>

          <div className="identites-logo-container">
            <img src={logoAkom} alt={t("identitesPage.akom.alt")} className="identites-logo" />
          </div>

          <p>
            {t("identitesPage.akom.description1")}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {t("identitesPage.akom.description2")}
          </p>

          <div className="identites-colors">
            <h3 className="identites-colors-title">{t("identitesPage.paletteTitle")}</h3>
            <div className="identites-colors-list">
              <div className="color-circle" style={{ backgroundColor: "#000000" }} title="#000000"></div>
              <div className="color-circle" style={{ backgroundColor: "#313426" }} title="#313426"></div>
              <div className="color-circle" style={{ backgroundColor: "#FFDE59" }} title="#FFDE59"></div>
              <div className="color-circle" style={{ backgroundColor: "#526C62" }} title="#526C62"></div>
            </div>
          </div>

          <span className="identites-tag">{t("identitesPage.akom.tag")}</span>
        </article>
      </div>

      {/* NAVIGATION */}
      <div className="identites-navigation">
        <button onClick={() => navigate("/infographie")}>
          {t("common.backToInfographie")}
        </button>
      </div>
    </div>
  );
}
