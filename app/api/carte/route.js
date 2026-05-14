import { client } from '@/sanity/lib/client'

export async function GET() {
  const plats = await client.fetch(`*[_type == "plat"] | order(espace asc, ordre asc, name asc)`)

  // Groupe par espace puis par section
  const grouped = { restaurant: {}, terrasse: {} }

  plats.forEach(p => {
    const espace = p.espace?.toLowerCase() === 'terrasse' ? 'terrasse' : 'restaurant'
    const section = p.section || 'Autres'
    if (!grouped[espace][section]) grouped[espace][section] = []
    grouped[espace][section].push({ name: p.name, desc: p.desc || '', price: p.price || '' })
  })

  const format = (espaceData) => Object.entries(espaceData).map(([name, items]) => ({ name, items }))

  return Response.json({
    restaurant: { sections: format(grouped.restaurant) },
    terrasse: { sections: format(grouped.terrasse) },
  })
}