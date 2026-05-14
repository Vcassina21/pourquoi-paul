import { client } from '@/sanity/lib/client'

export async function GET() {
  const reviews = await client.fetch(
    `*[_type == "avis"] | order(_createdAt desc) {
      "id": _id,
      name,
      "rating": stars,
      text,
      date,
      source,
      "verified": true
    }`
  )
  return Response.json(reviews)
}

export async function POST(req) {
  const body = await req.json()
  await client.create({
    _type: 'avis',
    name: body.name,
    stars: body.rating,
    text: body.text,
    date: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
    source: 'Site web',
    statut: 'en attente',
  })
  return Response.json({ success: true })
}

export async function DELETE(req) {
  const { id } = await req.json()
  await client.delete(id)
  return Response.json({ success: true })
}