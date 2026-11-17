/* PROJECTEN
   Regels:
   - category moet een van de "Soort"-opties zijn (Website, PWA, Game, Tool, Dashboard, Software)
   - tags mogen alle filteropties bevatten (Gevoel, Onderwerp, Eigenschappen, ook extra Soort-opties)
   - hoofdletters maken niet uit, de spelling wel
   - url leeg laten geeft de melding "Kan geen URL laden" */

const SITES = [
  {
    name: "Takenlijst",
    category: "Tool",
    description: "Een overzichtelijke takenlijst om je taken en werkzaamheden te beheren.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/takenlijst-app-v1.0/",
    tags: [
      "PWA", "Dashboard",
      "Modern", "Professioneel",
      "Werk", "Zakelijk",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },
   
  {
    name: "Wie is de mol?",
    category: "Game",
    description: "Een familiespel met woorden omschrijven/uitbeelden met een mol die alles saboteert.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/wie-is-de-mol/",
    tags: [
      "PWA", "Game",
      "Speels", "Modern",
      "Spellen", "Vermaak",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },

  {
    name: "Apex Race Simulator",
    category: "Game",
    description: "Een 3d racesimulator om over een realistische racebaan te racen.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/apex-race/",
    tags: [
      "Website", "Game",
      "Modern", "Technisch",
      "Spellen", "Vermaak",
      "Desktop", "Online"
    ]
  }   
];


/* FILTERGROEPEN (6 per groep) */

const FILTERS = [
  {
    name: "Soort",
    options: ["Website", "PWA", "Game", "Tool", "Dashboard", "Software"]
  },
  {
    name: "Gevoel",
    options: ["Modern", "Minimalistisch", "Speels", "Professioneel", "Natuurlijk", "Technisch"]
  },
  {
    name: "Onderwerp",
    options: ["Werk", "Tech", "Spellen", "Vermaak", "Leren", "Zakelijk"]
  },
  {
    name: "Eigenschappen",
    options: ["Responsive", "Mobiel", "Desktop", "Online", "Offline"]
  }
];
