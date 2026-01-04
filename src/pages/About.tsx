// src/pages/About.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import avatar from "../assets/avatar.png"; // changer l'avatar
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const timelineData = [
    {
      year: t("about.timeline.item1.year"),
      title: t("about.timeline.item1.title"),
      description: t("about.timeline.item1.description")
    },
    {
      year: t("about.timeline.item2.year"),
      title: t("about.timeline.item2.title"),
      description: t("about.timeline.item2.description")
    },
    {
      year: t("about.timeline.item3.year"),
      title: t("about.timeline.item3.title"),
      description: t("about.timeline.item3.description")
    },
    {
      year: t("about.timeline.item4.year"),
      title: t("about.timeline.item4.title"),
      description: t("about.timeline.item4.description")
    },
    {
      year: t("about.timeline.item5.year"),
      title: t("about.timeline.item5.title"),
      description: t("about.timeline.item5.description")
    },
    {
      year: t("about.timeline.item6.year"),
      title: t("about.timeline.item6.title"),
      description: t("about.timeline.item6.description")
    }
  ];

  return (
    <div className="about-container">
      {/* INTRO */}
      <div className="about-intro">
        <div className="about-text">
          <h1>{t("about.title")}</h1>
          <p>
            {t("about.description")}
          </p>
        </div>
        <div className="about-avatar">
          <img src={avatar} alt="Hime" />
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-circle"></div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-title">{item.title}</div>
              <div className="timeline-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* LIENS SOCIAUX */}
      <div className="about-social">
        <SocialLinks />
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="about-navigation">
        <button 
          className="about-btn-back" 
          onClick={() => navigate("/univers")}
        >
          {t("about.back")}
        </button>
        <button 
          className="about-btn-next" 
          onClick={() => navigate("/btp")}
        >
          {t("about.next")}
        </button>
      </div>
    </div>
  );
}

