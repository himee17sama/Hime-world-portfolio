// src/pages/UniverseMenu.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./UniverseMenu.css";
import SocialLinks from "../components/SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";
import { universes } from "../data/universes";
import avatar from "../assets/avatar.png";
import gaiaCover from "../assets/gaiamagazine.jpg";
import mtdLogo from "../assets/Mtd - 1.png";

// Image de chaque carte (le Web a un visuel en CSS)
const covers: Record<string, string> = {
  about: avatar,
  btp: gaiaCover,
  infographie: mtdLogo
};

export default function UniverseMenu() {
  const { t } = useLanguage();

  return (
    <div className="menu-container">
      <div className="menu-logo-container">
        <div className="menu-logo">H</div>
      </div>
      <h2>{t("universe.title")}</h2>
      <div className="menu-cards">
        {universes.map((u, index) => (
          <Link
            key={u.id}
            to={u.path}
            className={`menu-card menu-card--${u.id}`}
            style={{ "--universe-color": u.color, animationDelay: `${0.3 + index * 0.1}s` } as React.CSSProperties}
          >
            <div className="menu-card-image">
              {covers[u.id] ? (
                <img src={covers[u.id]} alt="" loading="lazy" />
              ) : (
                <span className="menu-card-code" aria-hidden="true">&lt;/&gt;</span>
              )}
            </div>
            <span className="menu-card-label">{t(u.titleKey)}</span>
          </Link>
        ))}
      </div>
      <SocialLinks />
    </div>
  );
}
