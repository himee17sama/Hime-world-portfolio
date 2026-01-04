import React from "react";
import { useNavigate } from "react-router-dom";
import "./MisesEnPage.css";
import alcaPlaquette from "../../assets/alca.png";
import gaiaCover from "../../assets/gaiamagazine.jpg";
import gaiaPdf from "../../assets/GAIA RETRO.pdf";

export default function MisesEnPage() {
  const navigate = useNavigate();

  return (
    <div className="mises-container">
      <h1 className="mises-title">Mises en page</h1>

      <p className="mises-intro">
        Ici je partage mes réalisations en mise en page : magazines, plaquettes, rapports ou supports print et digitaux.  
        Chaque projet reflète l’équilibre entre esthétique et lisibilité.
      </p>

      <div className="mises-projects">
        {/* Projet 1 - Magazine Odyssée Immobilier */}
        <article className="mises-card">
          <h2>Odyssée Immobilier – Magazine rétrospectif</h2>
          <p className="mises-client">Projet GAIA, écoquartier de Rouen</p>
          
          <div className="mises-image-container">
            <img src={gaiaCover} alt="Couverture magazine GAIA" className="mises-image" />
          </div>
          
          <p>
            Pour Odyssée Immobilier, j'ai conçu un magazine rétrospectif présentant l'avancement 
            de l'écoquartier GAIA à Rouen. En utilisant InDesign, j'ai créé un flipbook interactif, 
            combinant des photos du chantier et les étapes clés. Inspirée par des plateformes comme 
            Behance et des magazines comme Time, j'ai veillé à une mise en page claire et engageante. 
            Le magazine final a été publié en ligne, renforçant la transparence et la confiance des acquéreurs.
          </p>
          
          <div className="mises-links-container">
            <a 
              href="https://online.fliphtml5.com/behjm/klvq/#p=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mises-link"
            >
              Voir le magazine en ligne →
            </a>
            <a 
              href={gaiaPdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mises-link mises-link-pdf"
            >
              Télécharger le PDF →
            </a>
          </div>
          
          <span className="mises-tag">Magazine • InDesign • Flipbook • Digital</span>
        </article>

        {/* Projet 2 - ALCA Décor */}
        <article className="mises-card">
          <h2>ALCA Décor – Plaquette entreprise</h2>
          <p className="mises-client">Entreprise de construction, Toulon</p>
          
          <div className="mises-image-container">
            <img src={alcaPlaquette} alt="Plaquette ALCA Décor" className="mises-image" />
          </div>
          
          <p>
            J'ai eu l'opportunité de refaire la plaquette de présentation d'une entreprise de construction
            basée à Toulon, nommée ALCA Décor, spécialisée dans le second œuvre. En ayant accès à l'ancienne
            version, j'ai conçu une nouvelle plaquette plus moderne qui met en valeur de manière optimale
            les activités de l'entreprise.
          </p>
          <span className="mises-tag">Plaquette • Print • Refonte</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="mises-navigation">
        <button onClick={() => navigate("/infographie")}>
          ← Retour Infographie
        </button>
        <button onClick={() => navigate("/infographie/identites")}>
          Identités visuelles →
        </button>
      </div>
    </div>
  );
}