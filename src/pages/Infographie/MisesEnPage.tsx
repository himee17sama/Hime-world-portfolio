import React from "react";
import { useNavigate } from "react-router-dom";
import "./MisesEnPage.css";
import alcaPlaquette from "../../assets/alca.png";
import gaiaCover from "../../assets/gaiamagazine.jpg";
import gaiaPdf from "../../assets/GAIA RETRO.pdf";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MisesEnPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="mises-container">
      <h1 className="mises-title">{t("misesPage.title")}</h1>

      <p className="mises-intro">
        {t("misesPage.intro")}
      </p>

      <div className="mises-projects">
        {/* Projet 1 - Magazine Odyssée Immobilier */}
        <article className="mises-card">
          <h2>{t("misesPage.gaia.title")}</h2>
          <p className="mises-client">{t("misesPage.gaia.client")}</p>

          <div className="mises-image-container">
            <img src={gaiaCover} alt={t("misesPage.gaia.alt")} className="mises-image" />
          </div>

          <p>
            {t("misesPage.gaia.description")}
          </p>

          <div className="mises-links-container">
            <a
              href="https://online.fliphtml5.com/behjm/klvq/#p=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mises-link"
            >
              {t("misesPage.gaia.linkOnline")}
            </a>
            <a
              href={gaiaPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mises-link mises-link-pdf"
            >
              {t("misesPage.gaia.linkPdf")}
            </a>
          </div>

          <span className="mises-tag">{t("misesPage.gaia.tag")}</span>
        </article>

        {/* Projet 2 - ALCA Décor */}
        <article className="mises-card">
          <h2>{t("misesPage.alca.title")}</h2>
          <p className="mises-client">{t("misesPage.alca.client")}</p>

          <div className="mises-image-container">
            <img src={alcaPlaquette} alt={t("misesPage.alca.alt")} className="mises-image" />
          </div>

          <p>
            {t("misesPage.alca.description")}
          </p>
          <span className="mises-tag">{t("misesPage.alca.tag")}</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="mises-navigation">
        <button onClick={() => navigate("/infographie")}>
          {t("common.backToInfographie")}
        </button>
        <button onClick={() => navigate("/infographie/identites")}>
          {t("misesPage.next")}
        </button>
      </div>
    </div>
  );
}
