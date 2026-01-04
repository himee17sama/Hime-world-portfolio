import React from "react";
import { useNavigate } from "react-router-dom";
import "./Illustrations.css";
import nourIllustration from "../../assets/Nour.png";
import indianaIllustration from "../../assets/indiana.jpg";
import kourouIllustration from "../../assets/kourou.png";

export default function Illustrations() {
  const navigate = useNavigate();

  return (
    <div className="illus-container">
      <h1 className="illus-title">Illustrations & concepts</h1>

      <p className="illus-intro">
        Ici je partage mes illustrations, concepts graphiques et explorations visuelles
        pour enrichir un univers ou une narration.
      </p>

      <div className="illus-projects">
        {/* Projet 1 - Affiche DC */}
        <article className="illus-card">
          <h2>Affiche de film DC</h2>
          <p className="illus-client">Formation Doranco</p>
          
          <div className="illus-image-container">
            <img src={nourIllustration} alt="Affiche de film DC" className="illus-image" />
          </div>
          
          <p>
            Pendant ma formation chez Doranco, j'ai suivi un module sur Photoshop où
            nous avons réalisé une affiche de film mettant en scène un ou plusieurs
            super-héros de l'univers DC. La consigne était de créer une affiche au
            format A4 avec un titre de film choisi, en respectant la structure du template
            d'affiche fourni. Nous devions nous assurer que tous les éléments de
            l'affiche étaient en 300 dpi et qu'aucun faux texte (lorem ipsum) n'était utilisé.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Ce projet m'a permis de mettre en pratique mes compétences en design
            graphique et en manipulation d'images à travers la création d'une affiche
            attrayante et cohérente pour un film de super-héros DC.
          </p>
          
          <span className="illus-tag">Affiche • Photoshop • Design graphique</span>
        </article>

        {/* Projet 2 - Affiche Indiana Jones */}
        <article className="illus-card">
          <h2>Indiana Jones et le Monde Perdu</h2>
          <p className="illus-client">Formation Doranco</p>
          
          <div className="illus-image-container">
            <img src={indianaIllustration} alt="Affiche Indiana Jones" className="illus-image" />
          </div>
          
          <p>
            Pendant ma formation chez Doranco, j'ai eu l'opportunité de créer une affiche pour
            la sortie d'un jeu vidéo intitulé "Indiana Jones et le Monde Perdu". La consigne
            était de concevoir une affiche dans le style pulp, mettant en scène un décor de
            jungle préhistorique avec au moins trois personnages : le héros, l'héroïne et
            l'antagoniste. L'affiche devait inclure toutes les informations typiques d'un jeu
            vidéo telles que le support, le studio de développement, etc.
          </p>
          <p style={{ marginTop: "1rem" }}>
            De plus, le logo Indiana Jones devait être légèrement retravaillé et vectorisé, tout comme le
            titre du jeu. Ce projet impliquait la création d'un photomontage complexe,
            comprenant la reconstitution des décors et la création des personnages, pour
            capturer l'esprit aventureux du jeu.
          </p>
          
          <span className="illus-tag">Affiche • Photomontage • Style pulp</span>
        </article>

        {/* Projet 3 - Pochette Kourou Carter */}
        <article className="illus-card">
          <h2>Kourou Carter – Pochette d'album</h2>
          <p className="illus-client">Stage full remote</p>
          
          <div className="illus-image-container">
            <img src={kourouIllustration} alt="Pochette album Kourou Carter" className="illus-image" />
          </div>
          
          <p>
            Pendant mon stage en full remote, j'ai été chargé de concevoir la
            pochette d'album de Kourou Carter pour une série de mixtapes
            inspirées qui aspirent à transporter l'audience dans un voyage spatial,
            avec des éléments sous-marins et spatiaux représentant l'univers
            musical.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Mon objectif principal était de saisir l'essence musicale de sa série
            de mix à travers la conception de la pochette de l'album.
          </p>
          
          <span className="illus-tag">Pochette d'album • Design • Mixtape</span>
        </article>
      </div>

      {/* Navigation */}
      <div className="illus-navigation">
        <button onClick={() => navigate("/infographie")}>
          ← Retour Infographie
        </button>
      </div>
    </div>
  );
}

