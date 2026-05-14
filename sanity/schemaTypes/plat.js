export default {
  name: 'plat',
  title: 'Carte / Plats',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom du plat', type: 'string' },
    { name: 'desc', title: 'Description', type: 'text' },
    { name: 'price', title: 'Prix (ex: 12 €)', type: 'string' },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          'Pour commencer',
          'Les Plats',
          'Fromages & Desserts',
          'Nos Canailles',
          'Domaine de Gammareix',
          'La Mer',
        ]
      }
    },
    {
      name: 'espace',
      title: 'Espace',
      type: 'string',
      options: { list: ['Restaurant', 'Terrasse'] }
    },
  ]
}