import React from "react";
import { useNavigate } from "react-router-dom";
import "./Identities.css";
import logoAkom from "../../assets/logoakom.jpg";
import mtd1 from "../../assets/Mtd - 1.png";
import mtd2 from "../../assets/Mtd - 2.png";
import mtd4 from "../../assets/Mtd - 4.png";

export default function Identites() {
  const navigate = useNavigate();

  return (
    <div className="identites-container">
      <h1 className="identites-title">Identités visuelles</h1>

      <p className="identites-intro">
        Une identité visuelle ne se limite pas à un logo.  
        C’est une cohérence globale : formes, couleurs, typographies et intentions.
        J’aime concevoir des univers qui ont du sens et qui racontent une histoire.
      </p>

      <div className="identites-projects">
        {/* PROJET 1 - MTD Transport */}
        <article className="identites-card">
          <h2>MTD Transport</h2>
          <p className="identites-client">Entreprise sénégalaise de transport</p>
          
          <div className="identites-logos-row">
            <div className="identites-logo-square">
              <img src={mtd1} alt="MTD Logo principal" className="identites-logo-img" />
            </div>
            <div className="identites-logo-square">
              <img src={mtd2} alt="MTD Logo courses féminines" className="identites-logo-img" />
            </div>
            <div className="identites-logo-square">
              <img src={mtd4} alt="MTD Logo événements" className="identites-logo-img" />
            </div>
          </div>
          
          <p>
            Création d'une identité visuelle distinctive pour renforcer l'image de marque. 
            Conception de trois logos adaptés à différents contextes : logo principal, 
            logo pour courses féminines, et logo pour événements spéciaux.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Réalisation du logo sur Illustrator, création des cartes de visite, 
            et production de maquettes (mockups) avec Photoshop et InDesign.
          </p>
          
          <div className="identites-colors">
            <h3 className="identites-colors-title">Palette de couleurs</h3>
            <div className="identites-colors-list">
              <div className="color-circle" style={{ backgroundColor: "#3B2B41" }} title="#3B2B41"></div>
              <div className="color-circle" style={{ backgroundColor: "#417286" }} title="#417286"></div>
              <div className="color-circle" style={{ backgroundColor: "#873666" }} title="#873666"></div>
              <div className="color-circle" style={{ backgroundColor: "#B63155" }} title="#B63155"></div>
              <div className="color-circle" style={{ backgroundColor: "#A4B1BA" }} title="#A4B1BA"></div>
            </div>
          </div>
          
          <span className="identites-tag">Logo • Carte de visite • Charte graphique • Mockups</span>
        </article>

        {/* PROJET 2 - Boutique cosmétique */}
        <article className="identites-card">
          <h2>Boutique de cosmétique</h2>
          <p className="identites-client">Entreprise sénégalaise de cosmétique</p>
          
          <div className="identites-logo-container">
            <img src={logoAkom} alt="Logo boutique de cosmétique" className="identites-logo" />
          </div>
          
          <p>
            Conception d'un logo intégrant les couleurs doré et vert, mettant en avant 
            la première lettre avec une transition fluide entre le visage dessiné et la lettre.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Définition complète de la charte graphique pour créer une identité visuelle 
            distinctive et cohérente, en accord avec l'esthétique et les valeurs de l'entreprise.
          </p>
          
          <div className="identites-colors">
            <h3 className="identites-colors-title">Palette de couleurs</h3>
            <div className="identites-colors-list">
              <div className="color-circle" style={{ backgroundColor: "#000000" }} title="#000000"></div>
              <div className="color-circle" style={{ backgroundColor: "#313426" }} title="#313426"></div>
              <div className="color-circle" style={{ backgroundColor: "#FFDE59" }} title="#FFDE59"></div>
              <div className="color-circle" style={{ backgroundColor: "#526C62" }} title="#526C62"></div>
            </div>
          </div>
          
          <span className="identites-tag">Logo • Charte graphique</span>
        </article>
      </div>

      {/* NAVIGATION */}
      <div className="identites-navigation">
        <button onClick={() => navigate("/infographie")}>
          ← Retour Infographie
        </button>
      </div>
    </div>
  );
}