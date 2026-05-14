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

async function run() {
  await client.create({
    _type: 'parametres',
    name: 'Pourquoi Paul',
    tagline: 'Cuisine canaille. Produits vrais.\nUne équipe qui se bat pour la qualité.',
    phone: '06 19 65 21 80',
    phoneRaw: '0619652180',
    email: 'contact@pourquoipaul.fr',
    addressLine1: '3 Rue de la Rouquette',
    addressLine2: '33220 Port-Sainte-Foy-et-Ponchapt',
    closed: 'Fermé dimanche et lundi',
    hours: [
      { days: 'Mardi & Mercredi', time: 'Soir uniquement' },
      { days: 'Jeudi — Samedi', time: 'Midi & Soir' },
    ],
    social: [
      { name: 'Instagram', url: 'https://www.instagram.com/pourquoipaul_/' },
      { name: 'Facebook', url: 'https://www.facebook.com/RestoAuFildelEau/' },
    ],
  })
  console.log('✓ Paramètres importés !')
}

run().catch(console.error)