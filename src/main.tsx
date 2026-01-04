// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <- important !
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

console.log("Mounting React app...");

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
  console.log("React app mounted");
} catch (error) {
  console.error("Error mounting React app:", error);
  rootElement.innerHTML = `
    <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
      <h1>Erreur de chargement</h1>
      <p>Une erreur s'est produite lors du chargement de l'application.</p>
      <p style="color: red;">${error instanceof Error ? error.message : String(error)}</p>
      <p>Veuillez rafraîchir la page ou contacter le développeur.</p>
    </div>
  `;
}
