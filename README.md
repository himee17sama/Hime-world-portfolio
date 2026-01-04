# Hime's World Portfolio v2

Portfolio professionnel interactif présentant les compétences et projets de Hime dans les domaines du BTP/Immobilier, de l'Infographie & Design, et du Développement Web.

## 🎨 À propos

Ce portfolio est conçu comme une immersion dans différents univers, à la manière d'une plateforme de streaming (inspiration Netflix), où chaque univers représente une facette de l'identité professionnelle. L'expérience est immersive, élégante, douce, féminine mais professionnelle, avec une approche narrative.

## ✨ Fonctionnalités

- 🌍 **Multilingue** : Détection automatique de la langue du navigateur (Français/Anglais) avec sélecteur de langue
- 🎭 **Animations narratives** : Transitions es entre les pages
- 🎨 **Charte graphique personnalisée** : Palette de couleurs  pour chaque univers
- 📱 **Responsive Design** : Adaptation  à tous les écrans
- 🚀 **Performance optimisée** : Construit avec Vite pour des chargements rapides
- 🔗 **Liens sociaux** : Intégration LinkedIn, GitHub et Email sur toutes les pages

## 🛠️ Technologies utilisées

- **React 19** - Bibliothèque UI 
- **TypeScript** - Typage statique pour plus de robustesse
- **Vite** - Build tool ultra-rapide
- **React Router DOM** - Navigation client-side
- **CSS3** - Animations et styles personnalisés
- **Google Fonts** - Playfair Display, Raleway, Inter

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── LanguageSwitcher.tsx
│   └── SocialLinks.tsx
├── contexts/            # Contextes React
│   └── LanguageContext.tsx
├── i18n/               # Traductions
│   └── translations.ts
├── pages/              # Pages de l'application
│   ├── Landing.tsx      # Page d'accueil immersive
│   ├── UniverseMenu.tsx # Menu de sélection des univers
│   ├── About.tsx        # Page "Qui suis-je ?"
│   ├── BTP.tsx          # Univers BTP/Immobilier
│   ├── Infographie/     # Sous-pages Infographie
│   │   ├── Identities.tsx
│   │   ├── MisesEnPage.tsx
│   │   ├── Illustrations.tsx
│   │   ├── ReseauxSociaux.tsx
│   │   └── NotionsOutils.tsx
│   ├── Infographie.tsx  # Page principale Infographie
│   └── WebDev.tsx       # Univers Développement Web
└── assets/              # Images et ressources
```

## 🎨 Charte graphique

### Palette principale (site global)
- **Fond principal** : `#FFF6F5` (Beige très clair)
- **Fond alternatif** : `#FFF9F8` (Blanc cassé)
- **Accent principal** : `#F4C7C3` (Rose poudré - signature)
- **Accent secondaire** : `#C8B6E2` (Violet pâle)
- **Texte principal** : `#333333` (Gris foncé)
- **Texte secondaire** : `#7D7D7D` (Gris moyen)

### Univers spécifiques

#### BTP / Immobilier
- Vert sauge pâle : `#B7C4B1`
- Marron nude : `#C2A68D`
- Beige clair : `#FFF6F5`

#### Infographie & Design
- Beige nude : `#F6EFEA`
- Orange pâle : `#E8B89C`
- Rouge doux / Terracotta : `#D6A29A`

#### Web Development
- Nude très clair : `#FFF6F5`
- Rose poudré : `#F4C7C3`
- Gris doux : `#8E8E8E`

### Typographies
- **Display** : Playfair Display (Bold)
- **Headings** : Raleway (Medium)
- **Body** : Inter (Regular)

## 🚀 Installation et démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd himes-world-portfolio-v2

# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev

# L'application sera accessible sur http://localhost:5173
```

### Build de production

```bash
# Créer un build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

### Linting

```bash
# Vérifier le code avec ESLint
npm run lint
```

## 📄 Pages disponibles

- `/` - Page d'accueil immersive avec animation du logo
- `/univers` - Menu de sélection des univers
- `/about` - Présentation personnelle avec timeline
- `/btp` - Projets BTP/Immobilier (Projet GAIA)
- `/infographie` - Menu des projets graphiques
  - `/infographie/identites` - Identités visuelles & logos
  - `/infographie/mises-en-page` - Mises en page (plaquettes, magazines)
  - `/infographie/illustrations` - Illustrations & concepts
  - `/infographie/reseaux-sociaux` - Visuels réseaux sociaux
  - `/infographie/notion` - Notion & outils visuels (en construction)
- `/web` - Développement Web (en construction)

## 🌐 Internationalisation

Le site détecte automatiquement la langue du navigateur et permet de basculer entre :
- **Français** (par défaut)
- **Anglais**

La préférence de langue est sauvegardée dans le localStorage du navigateur.

## 🎯 Fonctionnalités clés

### Animations narratives
- Animation d'entrée du logo sur la page d'accueil
- Transitions fluides entre les pages
- Effets hover élégants sur les boutons et cartes
- Animations fade-in progressives

### Navigation
- Boutons "Retour" et "Section suivante" sur toutes les pages
- Navigation cohérente entre les univers
- Breadcrumbs visuels

### Responsive Design
- Adaptation automatique aux écrans mobiles, tablettes et desktop
- Grilles flexibles pour les projets
- Images optimisées et responsive

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🔗 Liens sociaux

Les liens sociaux (LinkedIn, GitHub, Email) sont disponibles sur toutes les pages :
- **LinkedIn** : [kadidiatou-sysavane](https://www.linkedin.com/in/kadidiatou-sysavane)
- **GitHub** : [himee17sama](https://github.com/himee17sama)
- **Email** : himee17sama@gmail.com

## 📝 Notes de développement

- Les animations sont conçues comme des outils narratifs, pas décoratifs
- Chaque univers a sa propre palette de couleurs tout en respectant la cohérence globale
- Le design privilégie la lisibilité et l'expérience utilisateur
- Les pages "en construction" affichent un filigrane discret

## 🎨 Personnalisation

Pour modifier les couleurs, éditez les variables CSS dans `src/index.css` :

```css
:root {
  --color-bg-light: #FFF6F5;
  --color-accent-primary: #F4C7C3;
  --color-accent-secondary: #C8B6E2;
  /* ... */
}
```

Pour ajouter des traductions, modifiez `src/i18n/translations.ts`.

## 📄 Licence

Ce projet est privé et propriétaire.

## 👤 Auteur

**Hime** - Cheffe de projet 
- Portfolio : [himes-world-portfolio-v2](https://github.com/himee17sama/himes-world-portfolio-v2)
- LinkedIn : [kadidiatou-sysavane](https://www.linkedin.com/in/kadidiatou-sysavane)
- Email : himee17sama@gmail.com

---

*"Donner du sens à ce que je fais est ma motivation principale."*
