// src/components/LanguageSwitcher.tsx
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./LanguageSwitcher.css";

// inline : intégré dans la barre de menu au lieu de flotter en haut à droite
export default function LanguageSwitcher({ inline = false }: { inline?: boolean }) {
  try {
    const { language, setLanguage } = useLanguage();

    return (
      <div className={`language-switcher ${inline ? "language-switcher--inline" : ""}`}>
        <button
          className={`lang-btn ${language === "fr" ? "active" : ""}`}
          onClick={() => setLanguage("fr")}
          aria-label="Français"
        >
          FR
        </button>
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
          aria-label="English"
        >
          EN
        </button>
      </div>
    );
  } catch (error) {
    // Si le contexte n'est pas disponible, ne rien afficher
    console.error("LanguageSwitcher error:", error);
    return null;
  }
}

