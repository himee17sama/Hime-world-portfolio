// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialLinks from "./SocialLinks";
import { useLanguage } from "../contexts/LanguageContext";
import { universes, infographieSubpages, getUniverseIndex } from "../data/universes";

export default function Navbar() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 10);
  const [isOpen, setIsOpen] = useState(false);

  const currentIndex = getUniverseIndex(pathname);
  // Le menu des univers a un fond sombre : la barre passe en texte clair
  const isDark = pathname === "/univers";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu mobile ouvert : on bloque le défilement et on ferme avec Échap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${isDark ? "navbar--dark" : ""}`}
      >
        <Link to="/univers" className="navbar-logo" aria-label={t("nav.home")}>
          H
        </Link>

        {/* Liens bureau */}
        <nav className="navbar-links" aria-label={t("nav.main")}>
          {universes.map((u) => (
            <div
              key={u.id}
              className={`navbar-item ${u.id === "infographie" ? "navbar-item--dropdown" : ""}`}
              style={{ "--universe-color": u.color } as React.CSSProperties}
            >
              <NavLink to={u.path} className="navbar-link">
                {t(u.navKey)}
                {u.id === "infographie" && <span className="navbar-caret" aria-hidden="true">▾</span>}
              </NavLink>

              {u.id === "infographie" && (
                <div className="navbar-dropdown">
                  <div className="navbar-dropdown-panel">
                    {infographieSubpages.map((page) => (
                      <NavLink key={page.path} to={page.path} className="navbar-dropdown-link">
                        {t(page.labelKey)}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="navbar-right">
          {currentIndex >= 0 && (
            <span className="navbar-progress-mobile" aria-label={t("nav.progress")}>
              {currentIndex + 1} / {universes.length}
            </span>
          )}
          <LanguageSwitcher inline />
          <button
            className="navbar-burger"
            onClick={() => setIsOpen(true)}
            aria-label={t("nav.menu")}
            aria-expanded={isOpen}
            aria-controls="navbar-overlay"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Menu plein écran mobile */}
      {isOpen && (
        <div
          id="navbar-overlay"
          className="navbar-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.menu")}
        >
          <div className="navbar-overlay-header">
            <Link to="/univers" className="navbar-logo" onClick={closeMenu} aria-label={t("nav.home")}>
              H
            </Link>
            <button className="navbar-overlay-close" onClick={closeMenu} aria-label={t("nav.close")}>
              ×
            </button>
          </div>

          <nav className="navbar-overlay-links" aria-label={t("nav.main")}>
            {universes.map((u, index) => (
              <div
                key={u.id}
                className={`navbar-overlay-universe ${index === currentIndex ? "is-current" : ""}`}
                style={{ "--universe-color": u.color, animationDelay: `${index * 0.07}s` } as React.CSSProperties}
              >
                <NavLink to={u.path} end className="navbar-overlay-link" onClick={closeMenu}>
                  {t(u.titleKey)}
                </NavLink>

                {u.id === "infographie" && (
                  <div className="navbar-overlay-sublinks">
                    {infographieSubpages.map((page) => (
                      <NavLink
                        key={page.path}
                        to={page.path}
                        className="navbar-overlay-sublink"
                        onClick={closeMenu}
                      >
                        {t(page.labelKey)}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="navbar-overlay-footer">
            <SocialLinks />
          </div>
        </div>
      )}
    </>
  );
}
