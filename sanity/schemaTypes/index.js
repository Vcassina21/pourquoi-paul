const avis = {
  name: 'avis',
  title: 'Avis clients',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom du client', type: 'string' },
    { name: 'stars', title: 'Note (1-5)', type: 'number' },
    { name: 'text', title: 'Avis', type: 'text' },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'source', title: 'Source (Google, TripAdvisor…)', type: 'string' },
    { name: 'statut', title: 'Statut', type: 'string', options: { list: ['publié', 'en attente'] }, initialValue: 'en attente' },
  ]
}

const plat = {
  name: 'plat',
  title: 'Carte / Plats',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom du plat', type: 'string' },
    { name: 'desc', title: 'Description', type: 'text' },
    { name: 'price', title: 'Prix (ex: 12 €)', type: 'string' },
    { name: 'section', title: 'Section', type: 'string' },
    { name: 'espace', title: 'Espace', type: 'string' },
    { name: 'photo', title: 'Photo du plat', type: 'image', options: { hotspot: true } },
  ]
}

const membre = {
  name: 'membre',
  title: 'Équipe',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string' },
    { name: 'role', title: 'Rôle', type: 'string' },
    { name: 'bio', title: 'Biographie', type: 'text' },
    { name: 'quote', title: 'Citation', type: 'string' },
    { name: 'photo', title: 'Photo', type: 'image' },
  ]
}

const parametres = {
  name: 'parametres',
  title: 'Paramètres du restaurant',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom du restaurant', type: 'string' },
    { name: 'tagline', title: 'Accroche', type: 'text' },
    { name: 'phone', title: 'Téléphone (affiché)', type: 'string' },
    { name: 'phoneRaw', title: 'Téléphone (sans espaces)', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'addressLine1', title: 'Adresse ligne 1', type: 'string' },
    { name: 'addressLine2', title: 'Adresse ligne 2 (code postal)', type: 'string' },
    { name: 'closed', title: 'Jours fermés', type: 'string' },
    {
      name: 'hours',
      title: 'Horaires',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'days', title: 'Jours', type: 'string' },
          { name: 'time', title: 'Heures', type: 'string' },
        ]
      }]
    },
    {
      name: 'social',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nom (Instagram, Facebook...)', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
        ]
      }]
    },
  ]
}

const medias = {
  name: 'medias',
  title: 'Photos du site',
  type: 'document',
  fields: [
    { name: 'heroImage', title: 'Photo Hero (fond accueil)', type: 'image', options: { hotspot: true } },
    { name: 'espaceRestaurant', title: 'Photo — Le Restaurant', type: 'image', options: { hotspot: true } },
    { name: 'espaceTerasse', title: 'Photo — La Terrasse', type: 'image', options: { hotspot: true } },
    { name: 'espaceBar', title: 'Photo — Le Bar à Vins', type: 'image', options: { hotspot: true } },
    { name: 'manifeste', title: "Photo — L'Esprit / Manifeste", type: 'image', options: { hotspot: true } },
    { name: 'equipe1', title: 'Photo — Laurent Genestet', type: 'image', options: { hotspot: true } },
    { name: 'equipe2', title: 'Photo — Thomas Garoux', type: 'image', options: { hotspot: true } },
    { name: 'equipe3', title: 'Photo — Anthony Voisin', type: 'image', options: { hotspot: true } },
    { name: 'logo', title: 'Logo du restaurant', type: 'image', options: { hotspot: false } },
    { name: 'cave', title: 'Photo — La Cave', type: 'image', options: { hotspot: true } },
    { name: 'concept', title: 'Photo — Le Concept (fond)', type: 'image', options: { hotspot: true } },
  ]
}
export const schemaTypes = [avis, plat, membre, parametres, medias]
export const schema = { types: schemaTypes }