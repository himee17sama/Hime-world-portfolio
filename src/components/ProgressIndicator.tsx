// src/components/ProgressIndicator.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProgressIndicator.css";
import { useLanguage } from "../contexts/LanguageContext";
import { universes, getUniverseIndex } from "../data/universes";

// Indicateur de parcours : où en est le visiteur dans l'histoire
export default function ProgressIndicator() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const currentIndex = getUniverseIndex(pathname);

  if (currentIndex < 0) return null;

  return (
    <nav className="progress" aria-label={t("nav.progress")}>
      <ol className="progress-list">
        {universes.map((u, index) => (
          <li
            key={u.id}
            className={`progress-step ${index < currentIndex ? "is-done" : ""} ${index === currentIndex ? "is-current" : ""}`}
            style={{ "--universe-color": u.color } as React.CSSProperties}
          >
            <Link to={u.path} aria-current={index === currentIndex ? "step" : undefined}>
              <span className="progress-label">{t(u.navKey)}</span>
              <span className="progress-dot" />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
