import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReseauxSociaux.css";
import post7 from "../../assets/7.jpg";
import post8 from "../../assets/8.jpg";
import post9 from "../../assets/9.jpg";
import post10 from "../../assets/10.jpg";
import post11 from "../../assets/11.jpg";
import post12 from "../../assets/12.jpg";

export default function ReseauxSociaux() {
  const navigate = useNavigate();

  return (
    <div className="social-container">
      <h1 className="social-title">Conceptions visuelles pour réseaux sociaux</h1>

      <p className="social-intro">
        Ici je partage mes créations graphiques adaptées aux réseaux sociaux : visuels, posts, stories et concepts interactifs pour Instagram, LinkedIn, et autres plateformes.
      </p>

      <div className="social-projects">
        <article className="social-card social-card-full">
          <h2>Gestion de réseaux sociaux – Agence de communication</h2>
          <p className="social-client">Agence de communication et marketing</p>
          
          <p>
            Au sein d'une agence de communication et de marketing, j'ai été chargée de produire
            du contenu captivant pour diverses plateformes numériques telles que des articles de
            blog, des vidéos, des infographies, etc. Ma principale mission consistait à gérer les
            publications sur les pages Instagram et LinkedIn de l'entreprise. Mon objectif était
            d'attirer de nouveaux clients tout en présentant les missions, la vision de l'entreprise et
            en mettant en valeur son savoir-faire.
          </p>

          <div className="social-images-grid">
            <div className="social-image-wrapper">
              <img src={post7} alt="Post réseaux sociaux 7" className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post8} alt="Post réseaux sociaux 8" className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post12} alt="Post réseaux sociaux 12" className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post9} alt="Post réseaux sociaux 9" className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post10} alt="Post réseaux sociaux 10" className="social-image" />
            </div>
            <div className="social-image-wrapper">
              <img src={post11} alt="Post réseaux sociaux 11" className="social-image" />
            </div>
          </div>
          
          <span className="social-tag">Instagram • LinkedIn • Contenu digital • Community management</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="social-navigation">
        <button onClick={() => navigate("/infographie")}>
          ← Retour Infographie
        </button>
        <button onClick={() => navigate("/infographie/mises-en-page")}>
          Mises en page →
        </button>
      </div>
    </div>
  );
}