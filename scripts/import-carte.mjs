import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const plats = [
  // RESTAURANT — Pour commencer
  { name: "Jambon Bellota", desc: "Dégustation de jambon", price: "12 €", section: "Pour commencer", espace: "Restaurant" },
  { name: "Magret de canard IGP Périgord", desc: "Séché maison", price: "8,50 €", section: "Pour commencer", espace: "Restaurant" },
  { name: "Le Foie Gras", desc: "Escalope de foie gras IGP Sud-Ouest poêlée · panettone perdu · sorbet rhubarbe", price: "18 €", section: "Pour commencer", espace: "Restaurant" },
  { name: "Le Canard", desc: "Tataki de magret IGP Périgord · vinaigrette kiwi acidulée · baies rouges · sarrasin", price: "12 €", section: "Pour commencer", espace: "Restaurant" },
  { name: "Les Asperges Blanches", desc: "Asperges de Blaye vapeur · crunchy panko amandes · mayo ail fumé · texture ail noir", price: "13 €", section: "Pour commencer", espace: "Restaurant" },
  // RESTAURANT — Les Plats
  { name: "Le Cochon", desc: "Carré de cochon \"Le Bougnat\" affiné 40 jours · yakitori · chips banane plantain · shitaké", price: "19 €", section: "Les Plats", espace: "Restaurant" },
  { name: "La Marée du Moment", desc: "Retour de criée à la voix", price: "21 €", section: "Les Plats", espace: "Restaurant" },
  { name: "Le Bœuf", desc: "Aiguillette de faux-filet limousine de chez Thomas Bessette · chimichurri · maïs · wakamé", price: "19 €", section: "Les Plats", espace: "Restaurant" },
  { name: "La Carotte", desc: "Carottes rôties · miel carvi · yaourt orange · cornflakes torréfiés", price: "9 €", section: "Les Plats", espace: "Restaurant" },
  { name: "La Pomme de Terre", desc: "Frites maison · triple cuisson", price: "7 €", section: "Les Plats", espace: "Restaurant" },
  // RESTAURANT — Fromages & Desserts
  { name: "Sélection de Fromages Affinés", desc: "", price: "8 €", section: "Fromages & Desserts", espace: "Restaurant" },
  { name: "Le Chocolat", desc: "Mousse chocolat · crème glacée cappuccino · crumble cacao fleur de sel · gel café", price: "10 €", section: "Fromages & Desserts", espace: "Restaurant" },
  { name: "Le Vacherin", desc: "Mousseline citron baie de la passion · sorbet citron gingembre · meringue · granola", price: "10 €", section: "Fromages & Desserts", espace: "Restaurant" },
  { name: "Dessert de l'Instant", desc: "", price: "7 €", section: "Fromages & Desserts", espace: "Restaurant" },
  // TERRASSE — Nos Canailles
  { name: "Jambon Bellota", desc: "Dégustation", price: "12 €", section: "Nos Canailles", espace: "Terrasse" },
  { name: "Magret de canard IGP Sud-Ouest", desc: "Séché maison", price: "8,50 €", section: "Nos Canailles", espace: "Terrasse" },
  { name: "Croque-Monsieur Truffatta", desc: "", price: "10 €", section: "Nos Canailles", espace: "Terrasse" },
  { name: "Frites Maison", desc: "", price: "7 €", section: "Nos Canailles", espace: "Terrasse" },
  // TERRASSE — Domaine de Gammareix
  { name: "Pâté de campagne", desc: "180 g", price: "7 €", section: "Domaine de Gammareix", espace: "Terrasse" },
  { name: "Grattons de canard", desc: "180 g", price: "9 €", section: "Domaine de Gammareix", espace: "Terrasse" },
  { name: "Terrine de campagne au piment d'Espelette", desc: "180 g", price: "8 €", section: "Domaine de Gammareix", espace: "Terrasse" },
  { name: "Foie gras de canard entier IGP Périgord", desc: "120 g", price: "25 €", section: "Domaine de Gammareix", espace: "Terrasse" },
  // TERRASSE — La Mer
  { name: "Sardinillas Maison Gétaria", desc: "85 g", price: "7 €", section: "La Mer", espace: "Terrasse" },
  { name: "Huîtres de Vanina · Cuvée du Patron n°2", desc: "Par 6", price: "14 €", section: "La Mer", espace: "Terrasse" },
  { name: "Huîtres de Vanina · Apéro n°4", desc: "Par 6", price: "10 €", section: "La Mer", espace: "Terrasse" },
]

async function run() {
  console.log(`Import de ${plats.length} plats...`)
  for (const plat of plats) {
    await client.create({ _type: 'plat', ...plat })
    console.log(`✓ ${plat.name}`)
  }
  console.log('Import terminé !')
}

run().catch(console.error)