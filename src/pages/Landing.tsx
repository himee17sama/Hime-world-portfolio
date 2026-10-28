// src/pages/Landing.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";

export default function Landing() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isExiting, setIsExiting] = React.useState(false);
  const [showContent, setShowContent] = React.useState(false);
  const [isIntroDone, setIsIntroDone] = React.useState(false);
  const [isSkipped, setIsSkipped] = React.useState(false);

  React.useEffect(() => {
    // Animation narrative : logo d'abord, puis contenu après 1s
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    // Fin de l'intro : le bouton "Passer" n'est plus utile
    const introTimer = setTimeout(() => {
      setIsIntroDone(true);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(introTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsSkipped(true);
    setShowContent(true);
    setIsIntroDone(true);
  };

  const handleNavigate = () => {
    setIsExiting(true);
    // Animation narrative : scission avant navigation
    setTimeout(() => {
      navigate("/univers");
    }, 600); // Durée de l'animation de scission
  };

  return (
    <div className={`landing-container ${isExiting ? 'exiting' : ''} ${isSkipped ? 'skipped' : ''}`}>
      {!isIntroDone && (
        <button className="landing-skip" onClick={handleSkip}>
          {t("landing.skip")} →
        </button>
      )}
      <div className={`landing-logo-container ${showContent ? 'logo-to-background' : 'logo-intro'}`}>
        <div className="landing-logo">H</div>
      </div>
      {showContent && (
        <div className="landing-content fade-in-up">
          <h1 className="landing-title">{t("landing.title")}</h1>
          <p className="landing-subtitle italic-text">{t("landing.subtitle")}</p>
          
          {/* Liens sociaux */}
          <div className="landing-social-links">
            <SocialLinks />
          </div>
          
          <button 
            className="landing-button fade-in"
            onClick={handleNavigate}
            style={{ animationDelay: '0.4s' }}
          >
            {t("landing.enter")}
          </button>
        </div>
      )}
    </div>
  );
}
