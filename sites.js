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
      "PWA", "Dashboard", "Tool",
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
      "Modern", "Technisch", "Professioneel",
      "Spellen", "Vermaak",
      "Desktop", "Online"
    ]
  },   

  {
    name: "30 Seconds",
    category: "Game",
    description: "Een gezinsspel vanaf 4 spelers. Verdien punten door woorden te raden.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/30seconds/",
    tags: [
      "PWA", "Game",
      "Modern", "Speels",
      "Spellen", "Vermaak",
      "Responsive", "Desktop", "Mobiel", "Online"
    ]
  },     

  {
    name: "Afvinken",
    category: "Tool",
    description: "Een afvink app om snel dingen te noteren en af te vinken.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/vink-app/",
    tags: [
      "PWA", "Dashboard", "Tool",
      "Modern", "Professioneel",
      "Werk", "Zakelijk",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },

  {
    name: "Highway drive",
    category: "Game",
    description: "Een klassieke racegame voor in de auto.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/8bitrace/",
    tags: [
      "PWA", "Game",
      "Speels", "Minimalistisch",
      "Spellen", "Vermaak",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },   

  {
    name: "Flappy plane",
    category: "Game",
    description: "Een aangepaste versie van Flappy Bird. Ideaal voor in de auto.",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/8bitflappy/",
    tags: [
      "PWA", "Game",
      "Speels", "Minimalistisch",
      "Spellen", "Vermaak",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },  

  {
    name: "Tower Stacker",
    category: "Game",
    description: "Een oud klassiek spel voor in de auto",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/8bitstack/",
    tags: [
      "PWA", "Game",
      "Speels", "Minimalistisch",
      "Spellen", "Vermaak",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },

  {
    name: "PacMan",
    category: "Game",
    description: "Een oneindige versie van PacMan",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/8bitpac/",
    tags: [
      "PWA", "Game",
      "Speels", "Minimalistisch",
      "Spellen", "Vermaak",
      "Responsive", "Mobiel", "Desktop", "Online", "Offline"
    ]
  },

  {
    name: "Veray Filmstudio",
    category: "Dashboard",
    description: "Een programma om filmpjes te maken en te exporteren",
    thumbnail: "",
    url: "https://sycdenbreems-prog.github.io/veray/",
    tags: [
      "Website", "Tool", "Dashboard",
      "Modern", "Technisch", "Professioneel",
      "Werk", "Zakelijk",
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
