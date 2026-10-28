import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReseauxSociaux.css";
import post7 from "../../assets/7.jpg";
import post8 from "../../assets/8.jpg";
import post9 from "../../assets/9.jpg";
import post10 from "../../assets/10.jpg";
import post11 from "../../assets/11.jpg";
import post12 from "../../assets/12.jpg";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ReseauxSociaux() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const postAlt = t("socialPage.agency.postAlt");

  return (
    <div className="social-container">
      <h1 className="social-title">{t("socialPage.title")}</h1>

      <p className="social-intro">
        {t("socialPage.intro")}
      </p>

      <div className="social-projects">
        <article className="social-card social-card-full">
          <h2>{t("socialPage.agency.title")}</h2>
          <p className="social-client">{t("socialPage.agency.client")}</p>

          <p>
            {t("socialPage.agency.description")}
          </p>

          <div className="social-images-grid">
            <div className="social-image-wrapper">
              <img src={post7} alt={`${postAlt} 7`} className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post8} alt={`${postAlt} 8`} className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post12} alt={`${postAlt} 12`} className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post9} alt={`${postAlt} 9`} className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post10} alt={`${postAlt} 10`} className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post11} alt={`${postAlt} 11`} className="social-image" />
            </div>
          </div>

          <span className="social-tag">{t("socialPage.agency.tag")}</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="social-navigation">
        <button onClick={() => navigate("/infographie")}>
          {t("common.backToInfographie")}
        </button>
        <button onClick={() => navigate("/infographie/mises-en-page")}>
          {t("socialPage.next")}
        </button>
      </div>
    </div>
  );
}
