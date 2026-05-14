// =============================================================
// POURQUOI PAUL — données alignées sur lib/constants.js
// =============================================================
window.SITE_DATA = {
  restaurant: {
    name: "Pourquoi Paul",
    tagline: "Cuisine canaille. Produits vrais.\nUne équipe qui se bat pour la qualité.",
    city: "Port-Sainte-Foy-et-Ponchapt",
    region: "Dordogne · Périgord",
    address: { line1: "3 Rue de la Rouquette", line2: "33220 Port-Sainte-Foy-et-Ponchapt" },
    phone: "06 19 65 21 80",
    phoneRaw: "0619652180",
    email: "contact@pourquoipaul.fr",
    hours: [
      { days: "Mardi & Mercredi", time: "Soir uniquement" },
      { days: "Jeudi — Samedi", time: "Midi & Soir" }
    ],
    closed: "Fermé dimanche et lundi",
    social: [
      { name: "Instagram", url: "https://www.instagram.com/pourquoipaul_/" },
      { name: "Facebook", url: "https://www.facebook.com/RestoAuFildelEau/" }
    ],
    founded: 2020
  },

  nav: [
    { id: "manifeste", label: "L'Esprit" },
    { id: "equipe", label: "L'Équipe" },
    { id: "carte", label: "La Carte" },
    { id: "espaces", label: "Les Espaces" },
    { id: "cave", label: "La Cave" },
    { id: "avis", label: "Avis" },
    { id: "trouver", label: "Nous Trouver" }
  ],

  manifeste: {
    title1: "On cuisine",
    title2: "comme on aime.",
    intro: "Adossés à la Dordogne depuis 2020, on se bat chaque jour pour une seule chose : la qualité. Produits locaux, bio, fait maison, traçabilité totale. Pas de filtres, pas de chichis — juste le vrai.",
    quote: "Curiosité, lâcher prise et gourmandise.\nC'est tout ce qu'on vous demande.",
    values: [
      { title: "Circuit court", desc: "Producteurs locaux, traçabilité sans égal" },
      { title: "Fait maison", desc: "Tout, du pain au dernier dessert" },
      { title: "Bio & engagé", desc: "Vins nature, produits responsables" }
    ]
  },

  team: [
    {
      name: "Laurent Genestet",
      role: "Canaille en Chef · Chef chineur",
      bio: "Cet enfant du Fleix prend les rênes du restaurant au printemps 2020. Trente années à aiguiser ses lames dans des établissements gastronomiques, à cuisiner pour des milliardaires, à écumer les fourneaux basques et périgourdins. Au bilan : une carte digne d'un \"gastro\", dentelle et flonflons en moins.",
      quote: "On laisse à la maison ses convictions et ses habitudes."
    },
    {
      name: "Thomas Garoux",
      role: "Chef · Pâtissier",
      bio: "Stéphanois d'origine, débarqué quelques mois après l'ouverture. En cuisine, il est l'acolyte de Laurent — leur symbiose est telle qu'aux fourneaux ils n'ont même plus à se parler. Architecte du beau, formé dans plus de 13 établissements souvent étoilés.",
      quote: "La précision et la rigueur, mêlées à la curiosité."
    },
    {
      name: "Anthony Voisin",
      role: "Sommelier-Pinardier",
      bio: "Né à Cognac — c'était écrit. Formé en sommellerie, il a travaillé ses papilles de cave en cave : Bourgogne, Pays de la Loire, Bouches du Rhône, Bordelais. Sur son chemin, il a œuvré dans les rangs de Christopher Coutanceau à La Rochelle.",
      quote: "Une bonne bouteille, est une bouteille vide."
    }
  ],

  carte: {
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
            { name: "Les Asperges Blanches", desc: "Asperges de Blaye vapeur · crunchy panko amandes · mayo ail fumé · texture ail noir", price: "13 €" }
          ]
        },
        {
          name: "Les Plats",
          items: [
            { name: "Le Cochon", desc: "Carré de cochon \"Le Bougnat\" affiné 40 jours · yakitori · chips banane plantain · shitaké", price: "19 €" },
            { name: "La Marée du Moment", desc: "Retour de criée à la voix", price: "21 €" },
            { name: "Le Bœuf", desc: "Aiguillette de faux-filet limousine de chez Thomas Bessette · chimichurri · maïs · wakamé", price: "19 €" },
            { name: "La Carotte", desc: "Carottes rôties · miel carvi · yaourt orange · cornflakes torréfiés", price: "9 €" },
            { name: "La Pomme de Terre", desc: "Frites maison · triple cuisson", price: "7 €" }
          ]
        },
        {
          name: "Fromages & Desserts",
          items: [
            { name: "Sélection de Fromages Affinés", desc: "", price: "8 €" },
            { name: "Le Chocolat", desc: "Mousse chocolat · crème glacée cappuccino · crumble cacao fleur de sel · gel café", price: "10 €" },
            { name: "Le Vacherin", desc: "Mousseline citron baie de la passion · sorbet citron gingembre · meringue · granola", price: "10 €" },
            { name: "Dessert de l'Instant", desc: "", price: "7 €" }
          ]
        }
      ]
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
            { name: "Frites Maison", desc: "", price: "7 €" }
          ]
        },
        {
          name: "Domaine de Gammareix · Bergerac",
          items: [
            { name: "Pâté de campagne", desc: "180 g", price: "7 €" },
            { name: "Grattons de canard", desc: "180 g", price: "9 €" },
            { name: "Terrine de campagne au piment d'Espelette", desc: "180 g", price: "8 €" },
            { name: "Foie gras de canard entier IGP Périgord", desc: "120 g", price: "25 €" }
          ]
        },
        {
          name: "La Mer",
          items: [
            { name: "Sardinillas Maison Gétaria", desc: "85 g", price: "7 €" },
            { name: "Huîtres de Vanina · Cuvée du Patron n°2", desc: "Par 6", price: "14 €" },
            { name: "Huîtres de Vanina · Apéro n°4", desc: "Par 6", price: "10 €" }
          ]
        }
      ]
    }
  },

  spaces: [
    {
      num: "01",
      name: "Le Restaurant",
      tagline: "Salle gastronomique",
      desc: "Une carte gourmande et travaillée, servie aussi bien à table que sur les canapés. Même carte, même prix — vous choisissez votre confort. Une ambiance hétéroclite, à notre image."
    },
    {
      num: "02",
      name: "La Terrasse",
      tagline: "Aux beaux jours, par l'escalier",
      desc: "Coins salon de jardin, tables, et la carte canaille. Vous passez votre commande au comptoir, et l'un des nôtres vient vous l'apporter. Plus libre, plus relax."
    },
    {
      num: "03",
      name: "Le Bar à Vins",
      tagline: "Sur place ou à emporter",
      desc: "Pour boire un verre, accompagné de la carte canaille, ou repartir avec une bouteille. La cave est ouverte, Anthony est là pour vous guider."
    }
  ],

  concept: {
    eyebrow: "Le concept",
    title1: "Trois lieux,",
    title2: "une seule philosophie",
    body: "Que vous soyez en salle, en terrasse ou au bar à vins — vous êtes au même endroit. La même équipe, le même engagement, la même attention. Chacun choisit son ambiance, et nous, on adapte.",
    highlights: [
      { title: "Pas de carte des vins", desc: "Le prix est sur la bouteille. Anthony vient à vous, écoute, et propose selon le plat et vos goûts. Tout se fait à la voix." },
      { title: "Vin au verre", desc: "Aussi servi à la voix. Le sommelier vous guide vers ce qui vous fera plaisir." },
      { title: "La carte change", desc: "Selon les humeurs et les produits du moment. Demandez-nous, on vous racontera." }
    ]
  },

  cave: {
    quote: ["Une bonne bouteille,", "est une bouteille", "vide."],
    author: "Anthony Voisin, Sommelier-Pinardier",
    body: "Pas de carte des vins ici. Anthony vient à votre table, écoute ce que vous mangez et ce que vous aimez. Puis il disparaît et revient avec la bouteille qu'il fallait. Le prix est sur la bouteille — c'est aussi simple que ça.",
    types: ["Classiques", "Bio & Nature", "Biodynamie", "Vieillis en Jarre"],
    highlight: "Le petit plus : une gamme de blancs particulièrement audacieux, à découvrir."
  },

  reviews: [
    { stars: 5, text: "On y est venu sans attente, on en est ressorti conquis. Cuisine précise, jamais bavarde, et le sommelier nous a fait découvrir un blanc du Jura inouï.", name: "Camille R.", date: "Avril 2026", source: "Google" },
    { stars: 5, text: "Cuisine canaille, ambiance vraie. On sent que les chefs aiment ce qu'ils font. Le chocolat de Thomas mérite à lui seul le détour.", name: "Pierre M.", date: "Mars 2026", source: "TripAdvisor" },
    { stars: 5, text: "Une vraie maison, à l'ancienne, avec une exigence contemporaine. Les produits sont locaux, traçables, et ça se goûte. Anthony est un sommelier-conteur.", name: "Élise D.", date: "Mars 2026", source: "Google" },
    { stars: 5, text: "Mention spéciale pour la terrasse au-dessus de la Dordogne. On y mange canaille, on y boit nature, on y traîne. Exactement ce que je cherchais.", name: "Julien B.", date: "Février 2026", source: "Google" },
    { stars: 4, text: "Un restaurant qui a une âme. La carte change selon l'humeur, c'est ce qui fait son charme — et son challenge. Je reviens chaque saison.", name: "Marie V.", date: "Janvier 2026", source: "Facebook" },
    { stars: 5, text: "Le pigeon, la sauce salmis, et derrière, un Côte-Rôtie sorti de la cave par Anthony. Trente minutes plus tard, on parlait de revenir.", name: "Olivier T.", date: "Décembre 2025", source: "TripAdvisor" }
  ]
};
