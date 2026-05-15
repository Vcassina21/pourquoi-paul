import { client } from '@/sanity/lib/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { projectId, dataset } from '@/sanity/env'

const builder = createImageUrlBuilder({ projectId, dataset })
const url = (src) => src ? builder.image(src).width(900).url() : null

export async function GET() {
  const m = await client.fetch(`*[_type == "medias"][0]`)
  if (!m) return Response.json({})
  return Response.json({
    heroImageUrl:        url(m.heroImage),
    espaceRestaurantUrl: url(m.espaceRestaurant),
    espaceTerrasseUrl:   url(m.espaceTerasse),
    espaceBarUrl:        url(m.espaceBar),
    manifesteUrl:        url(m.manifeste),
    equipe1Url:          url(m.equipe1),
    equipe2Url:          url(m.equipe2),
    equipe3Url:          url(m.equipe3),
    logoUrl:             url(m.logo),
    caveUrl: url(m.cave),
    conceptUrl: url(m.concept),
    bouteilles: m.bouteilles ? m.bouteilles.map(b => url(b)) : [],
  })
}