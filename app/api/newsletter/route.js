import { client } from '@/sanity/lib/client'

export async function POST(req) {
  const { email } = await req.json()
  if (!email || !email.includes('@')) {
    return Response.json({ error: 'Email invalide' }, { status: 400 })
  }

  // Vérifie si l'email existe déjà
  const existing = await client.fetch(
    `*[_type == "newsletter" && email == $email][0]`,
    { email }
  )

  if (existing) {
    return Response.json({ success: true, message: 'Déjà inscrit' })
  }

  await client.create({
    _type: 'newsletter',
    email,
    date: new Date().toISOString(),
  })

  return Response.json({ success: true })
}