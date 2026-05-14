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

const ordres = {
  'Pour commencer': 1,
  'Les Plats': 2,
  'Fromages & Desserts': 3,
  'Nos Canailles': 1,
  'Domaine de Gammareix': 2,
  'La Mer': 3,
}

async function run() {
  const plats = await client.fetch(`*[_type == "plat"]{ _id, section }`)
  console.log(`${plats.length} plats trouvés`)
  
  for (const plat of plats) {
    const ordre = ordres[plat.section] || 99
    await client.patch(plat._id).set({ ordre }).commit()
    console.log(`✓ ${plat.section} → ordre ${ordre}`)
  }
  console.log('Terminé !')
}

run().catch(console.error)