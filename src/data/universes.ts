// src/data/universes.ts
// Liste des univers dans l'ordre du parcours narratif

export const universes = [
  { id: "about", path: "/about", navKey: "nav.about", titleKey: "universe.about", color: "#C8B6E2" },
  { id: "btp", path: "/btp", navKey: "nav.btp", titleKey: "universe.btp", color: "#B7C4B1" },
  { id: "infographie", path: "/infographie", navKey: "nav.infographie", titleKey: "universe.infographie", color: "#E8B89C" },
  { id: "web", path: "/web", navKey: "nav.web", titleKey: "universe.webdev", color: "#F4C7C3" }
];

export const infographieSubpages = [
  { path: "/infographie/identites", labelKey: "infographie.identities" },
  { path: "/infographie/mises-en-page", labelKey: "infographie.misesEnPage" },
  { path: "/infographie/illustrations", labelKey: "infographie.illustrations" },
  { path: "/infographie/reseaux-sociaux", labelKey: "infographie.reseauxSociaux" },
  { path: "/infographie/notion", labelKey: "infographie.notions" }
];

// Retourne la position de l'univers courant (-1 si la page n'appartient à aucun univers)
export const getUniverseIndex = (pathname: string): number =>
  universes.findIndex((u) => pathname === u.path || pathname.startsWith(`${u.path}/`));
