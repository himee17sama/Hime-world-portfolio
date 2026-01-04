import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotionsOutils.css";

export default function NotionsOutils() {
  const navigate = useNavigate();

  return (
    <div className="notions-container">
      <div className="notions-watermark">EN CONSTRUCTION</div>
      <h1 className="notions-title">Notions & Outils Visuels</h1>

      <p className="notions-intro">
        Ici je présente les compétences et outils que j’utilise pour mes projets graphiques et de design : logiciels de création, méthodologies UX/UI, gestion de projets créatifs et techniques.
      </p>

      <div className="notions-projects">
        <article className="notions-card">
          <h2>Logiciels & Outils</h2>
          <p>Adobe Photoshop, Illustrator, InDesign, Figma, Canva, Blender, Notion.</p>
        </article>

        <article className="notions-card">
          <h2>Compétences UX/UI</h2>
          <p>Wireframes, prototypage, design interactif, ergonomie et parcours utilisateur.</p>
        </article>

        <article className="notions-card">
          <h2>Méthodologies</h2>
          <p>Gestion de projet créatif, moodboards, brainstorming, test utilisateur et itérations.</p>
        </article>
      </div>

      {/* Navigation */}
      <div className="notions-navigation">
        <button onClick={() => navigate("/infographie")}>
          ← Retour Infographie
        </button>
      </div>
    </div>
  );
}