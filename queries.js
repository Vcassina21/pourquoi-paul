import { client } from './sanity/lib/client'

export async function getAvis() {
  return client.fetch(`*[_type == "avis"] | order(_createdAt desc)`)
}

export async function getPlats() {
  return client.fetch(`*[_type == "plat"] | order(section asc)`)
}

export async function getMembres() {
  return client.fetch(`*[_type == "membre"]`)
}

export async function getParametres() {
  return client.fetch(`*[_type == "parametres"][0]`)
}

export async function getMedias() {
  return client.fetch(`*[_type == "medias"][0]{
    heroImage, espaceRestaurant, espaceTerasse, espaceBar
  }`)
}