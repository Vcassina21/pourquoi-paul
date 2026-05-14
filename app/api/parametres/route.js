import { client } from '@/sanity/lib/client'

export async function GET() {
  const p = await client.fetch(`*[_type == "parametres"][0]`)
  return Response.json(p || {})
}