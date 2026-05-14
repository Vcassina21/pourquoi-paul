// ═══════════════════════════════════════════════════════════════════════════
//  AU FIL DE L'EAU — Constantes & contenus du site
//  Modifie les textes ici pour mettre à jour le site
// ═══════════════════════════════════════════════════════════════════════════

export const COLORS = {
  bg: "#0a0a0a",
  surface: "#121212",
  card: "#1a1a1a",
  accent: "#ff6b1a",
  accent2: "#e85a0c",
  text: "#ffffff",
  textDim: "#d6d6d6",
  muted: "#8a8a8a",
  border: "#2a2a2a",
  borderLight: "#3a3a3a",
};

export const RESTAURANT = {
  name: "Pourquoi Paul",
  shortName: "Pourquoi Paul",
  tagline: "Une cuisine canaille, des produits vrais,\nune équipe qui se bat pour la qualité.",
  city: "Port-Sainte-Foy-et-Ponchapt",
  region: "Dordogne · Périgord",
  address: {
    line1: "3 Rue de la Rouquette",
    line2: "33220 Port-Sainte-Foy-et-Ponchapt",
  },
  phone: "06 19 65 21 80",
  phoneRaw: "0619652180",
  email: "restaurantpourquoipaul@gmail.com", // À remplacer par le vrai email si différent
  hours: [
    { days: "Mardi & Mercredi", time: "Soir uniquement" },
    { days: "Jeudi — Samedi", time: "Midi & Soir" },
  ],
  closed: "Fermé dimanche et lundi",
  social: [
    { name: "Instagram", url: "https://www.instagram.com/pourquoipaul_/" },
    { name: "Facebook", url: "https://www.facebook.com/RestoAuFildelEau/" },
  ],
  founded: 2020,
};

export const NAV_ITEMS = [
  { id: "manifeste", label: "L'Esprit" },
  { id: "equipe", label: "L'Équipe" },
  { id: "carte", label: "La Carte" },
  { id: "espaces", label: "Les Espaces" },
  { id: "cave", label: "La Cave" },
  { id: "avis", label: "Avis" },
  { id: "trouver", label: "Nous Trouver" },
];

export const MANIFESTE = {
  title1: "Une cuisine engagée,",
  title2: "à notre image.",
  intro: "Adossés à la Dordogne depuis 2020, nous nous battons chaque jour pour une seule chose : la qualité. Produits locaux, bio, fait maison, traçabilité totale. Pas de filtres, pas de chichis — juste le vrai.",
  quote: "Curiosité, lâcher prise et gourmandise.\nC'est tout ce qu'on vous demande.",
  duoPhoto: "/team/duo.jpg",
  values: [
    { title: "Circuit court", desc: "Producteurs locaux, traçabilité sans égal" },
    { title: "Fait maison", desc: "Chaque plat, préparé ici, par nous." },
    { title: "Bio & engagé", desc: "Vins nature, produits responsables" },
  ],
};

export const TEAM = [
  {
    name: "Laurent Genestet",
    role: "Canaille en Chef · Chef chineur",
    photo: "/team/laurent.jpg",
    bio: "Cet enfant du Fleix prend les rênes du restaurant au printemps 2020. Trente années à aiguiser ses lames dans des établissements gastronomiques, à cuisiner pour des milliardaires, à écumer les fourneaux basques et périgourdins. Au bilan : une carte digne d'un \"gastro\", dentelle et flonflons en moins.",
    bioFull: "Amoureux des bonnes choses qu'il pratique dans l'excellence : bons vins, bons produits, bons convives. Comme sa cuisine, il est exigeant, joueur, piquant parfois et sucré à la fois. Il défend une cuisine canaille, stylée, impertinente et sans filtres, à son image.",
    quote: "On laisse à la maison ses convictions et ses habitudes.",
    gradient: "linear-gradient(135deg, #d4a574 0%, #8b5e3c 50%, #3d2818 100%)",
  },
  {
    name: "Thomas Garoux",
    role: "Chef · Pâtissier",
    photo: "/team/thomas.jpg",
    bio: "Stéphanois d'origine, débarqué quelques mois après l'ouverture. En cuisine, il est l'acolyte de Laurent — leur symbiose est telle qu'aux fourneaux ils n'ont même plus à se parler. Architecte du beau, formé dans plus de 13 établissements souvent étoilés, du Lot à la Haute-Loire, en passant par les fourneaux de Palaces.",
    bioFull: "Aux entrées, au chaud parfois, on retrouve sa signature un peu partout. Mais c'est aux desserts qu'il s'impose en Maître. Il marie l'exigence d'une pâtisserie étoilée à la liberté d'une table créative, simple et décomplexée. Pourquoi fait-il ce travail ? Parce qu'il est gourmand et l'assume pleinement.",
    quote: "La précision et la rigueur, mêlées à la curiosité.",
    gradient: "linear-gradient(135deg, #c9a96e 0%, #6b4423 50%, #2a1810 100%)",
  },
  {
    name: "Anthony Voisin",
    role: "Sommelier-Pinardier",
    photo: "/team/anthony.jpg",
    bio: "Né à Cognac — c'était écrit. Formé en sommellerie, il a travaillé ses papilles de cave en cave : Bourgogne, Pays de la Loire, Bouches du Rhône, Bordelais. Sur son chemin, il a œuvré dans les rangs de Christopher Coutanceau à La Rochelle. C'est à noter.",
    bioFull: "Il signe pour la saison une cave multiple et percutante : vins classiques, bio, natures, vieillis en jarre, travaillés en biodynamie. Le petit plus ? Une gamme de blancs particulièrement audacieux, à découvrir.",
    quote: "Une bonne bouteille, est une bouteille vide.",
    gradient: "linear-gradient(135deg, #b8956a 0%, #4a3520 50%, #1a0f08 100%)",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
//  CARTE — Restaurant (gastronomique) + Terrasse (canaille)
// ═══════════════════════════════════════════════════════════════════════════

export const CARTE = {
  intro: "Notre carte change au gré des humeurs et des produits. Voici un aperçu de notre signature.",
  note: "Carte susceptible d'évoluer selon les saisons et les arrivages.",

  restaurant: {
    title: "Au Restaurant",
    subtitle: "Carte gastronomique",
    desc: "Servie à table comme sur les canapés — dans la même salle, au même prix.",
    sections: [
      {
        name: "Pour commencer",
        items: [
          { name: "Jambon Bellota", desc: "Dégustation de jambon", price: "12 €" },
          { name: "Magret de canard IGP Périgord", desc: "Séché maison", price: "8,50 €" },
          { name: "Le Foie Gras", desc: "Escalope de foie gras IGP Sud-Ouest poêlée · panettone perdu · sorbet rhubarbe", price: "18 €" },
          { name: "Le Canard", desc: "Tataki de magret IGP Périgord · vinaigrette kiwi acidulée · baies rouges · sarrasin", price: "12 €" },
          { name: "Les Asperges Blanches", desc: "Asperges de Blaye vapeur · crunchy panko amandes · mayo ail fumé · texture ail noir", price: "13 €" },
        ],
      },
      {
        name: "Les Plats",
        items: [
          { name: "Le Cochon", desc: "Carré de cochon \"Le Bougnat\" affiné 40 jours · yakitori · chips banane plantain · shitaké", price: "19 €" },
          { name: "La Marée du Moment", desc: "Retour de criée à la voix", price: "21 €" },
          { name: "Le Bœuf", desc: "Aiguillette de faux-filet limousine de chez Thomas Bessette · chimichurri · maïs · wakamé", price: "19 €" },
          { name: "La Carotte", desc: "Carottes rôties · miel carvi · yaourt orange · cornflakes torréfiés", price: "9 €" },
          { name: "La Pomme de Terre", desc: "Frites maison · triple cuisson", price: "7 €" },
        ],
      },
      {
        name: "Fromages & Desserts",
        items: [
          { name: "Sélection de Fromages Affinés", desc: "", price: "8 €" },
          { name: "Le Chocolat", desc: "Mousse chocolat · crème glacée cappuccino · crumble cacao fleur de sel · gel café", price: "10 €" },
          { name: "Le Vacherin", desc: "Mousseline citron baie de la passion · sorbet citron gingembre · meringue · granola", price: "10 €" },
          { name: "Dessert de l'Instant", desc: "", price: "7 €" },
        ],
      },
    ],
  },

  terrasse: {
    title: "En Terrasse",
    subtitle: "Carte canaille",
    desc: "À découvrir au comptoir : commandez, on vous l'apporte.",
    sections: [
      {
        name: "Nos Canailles",
        items: [
          { name: "Jambon Bellota", desc: "Dégustation", price: "12 €" },
          { name: "Magret de canard IGP Sud-Ouest", desc: "Séché maison", price: "8,50 €" },
          { name: "Croque-Monsieur Truffatta", desc: "", price: "10 €" },
          { name: "Frites Maison", desc: "", price: "7 €" },
        ],
      },
      {
        name: "Domaine de Gammareix · Bergerac",
        items: [
          { name: "Pâté de campagne", desc: "180 g", price: "7 €" },
          { name: "Grattons de canard", desc: "180 g", price: "9 €" },
          { name: "Terrine de campagne au piment d'Espelette", desc: "180 g", price: "8 €" },
          { name: "Foie gras de canard entier IGP Périgord", desc: "120 g", price: "25 €" },
        ],
      },
      {
        name: "La Mer",
        items: [
          { name: "Sardinillas Maison Gétaria", desc: "85 g", price: "7 €" },
          { name: "Huîtres de Vanina · Cuvée du Patron n°2", desc: "Par 6", price: "14 €" },
          { name: "Huîtres de Vanina · Apéro n°4", desc: "Par 6", price: "10 €" },
        ],
      },
    ],
  },
};

export const SPACES = [
  {
    num: "01",
    name: "Le Restaurant",
    tagline: "Salle gastronomique",
    desc: "Une carte gourmande et travaillée, servie aussi bien à table que sur les canapés. Même carte, même prix — vous choisissez votre confort. Une ambiance hétéroclite, à notre image.",
    bg: "linear-gradient(135deg, #2d1f0e 0%, #1a1208 50%, #0d0a07 100%)",
  },
  {
    num: "02",
    name: "La Terrasse",
    tagline: "Aux beaux jours, par l'escalier",
    desc: "Coins salon de jardin, tables, et la carte canaille. Vous passez votre commande au comptoir, et l'un des nôtres vient vous l'apporter. Plus libre, plus relax.",
    bg: "linear-gradient(135deg, #3d3220 0%, #2d2418 50%, #1a1408 100%)",
  },
  {
    num: "03",
    name: "Le Bar à Vins",
    tagline: "Sur place ou à emporter",
    desc: "Pour boire un verre, accompagné de la carte canaille, ou repartir avec une bouteille. La cave est ouverte, Anthony est là pour vous guider.",
    bg: "linear-gradient(135deg, #261a0c 0%, #1a1408 50%, #0f0a05 100%)",
  },
];

export const CONCEPT = {
  eyebrow: "Le concept",
  title1: "Trois lieux,",
  title2: "une seule philosophie",
  body: "Que vous soyez en salle, en terrasse ou au bar à vins — vous êtes au même endroit. La même équipe, le même engagement, la même attention. Chacun choisit son ambiance, et nous, on adapte.",
  highlights: [
    {
      title: "Pas de carte des vins",
      desc: "Le prix est sur la bouteille. Anthony vient à vous, écoute, et propose selon le plat et vos goûts. Tout se fait à la voix.",
    },
    {
      title: "Vin au verre",
      desc: "Aussi servi à la voix. Le sommelier vous guide vers ce qui vous fera plaisir.",
    },
    {
      title: "La carte change",
      desc: "Selon les humeurs et les produits du moment. Demandez-nous, on vous racontera.",
    },
  ],
};

export const CAVE = {
  quotePart1: "Une bonne bouteille,",
  quotePart2: "est une bouteille",
  quotePart3: "vide.",
  author: "Anthony Voisin, Sommelier-Pinardier",
  body: "Pas de carte des vins ici. Anthony vient à votre table, écoute ce que vous mangez et ce que vous aimez. Puis il disparaît et revient avec la bouteille qu'il fallait. Le prix est sur la bouteille — c'est aussi simple que ça.",
  types: ["Classiques", "Bio & Nature", "Biodynamie", "Vieillis en Jarre"],
  highlight: "Le petit plus : une gamme de blancs particulièrement audacieux, à découvrir.",
};

export const NEWSLETTER = {
  title1: "Restez à",
  title2: "l'écoute",
  desc: "Une lettre par mois. Les nouveautés, les vins arrivés, les soirées exceptionnelles. Rien d'autre.",
};
