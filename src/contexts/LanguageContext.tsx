// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fonction pour obtenir la langue du navigateur
const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split("-")[0].toLowerCase();
  return langCode === "en" ? "en" : "fr";
};

// Fonction pour obtenir une valeur imbriquée dans un objet
const getNestedValue = (obj: any, path: string): string => {
  const keys = path.split(".");
  let value = obj;
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }
  return typeof value === "string" ? value : path;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer la langue sauvegardée ou détecter celle du navigateur
    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")
        ? savedLanguage
        : getBrowserLanguage();
    } catch (e) {
      // Si localStorage n'est pas disponible, utiliser la langue du navigateur
      return getBrowserLanguage();
    }
  });

  useEffect(() => {
    // Sauvegarder la langue dans localStorage
    try {
      localStorage.setItem("language", language);
    } catch (e) {
      // Si localStorage n'est pas disponible, ignorer l'erreur
      console.warn("localStorage not available");
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translation = translations[language];
    return getNestedValue(translation, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

