import "./globals.css";

export const metadata = {
  title: "Pourquoi Paul — Restaurant gastronomique Dordogne · Port-Sainte-Foy",
  description: "Restaurant Pourquoi Paul à Port-Sainte-Foy-et-Ponchapt (Dordogne). Cuisine canaille, produits locaux & bio, fait maison. Bar à vins nature. Réservation : 06 19 65 21 80.",
  keywords: [
    "restaurant Dordogne", "restaurant Périgord", "restaurant Port-Sainte-Foy",
    "Pourquoi Paul", "cuisine gastronomique Dordogne", "restaurant bistronomique Périgord",
    "vins nature Dordogne", "restaurant fait maison Dordogne", "Laurent Genestet",
    "bar à vins Périgord", "restaurant bord Dordogne", "cuisine canaille"
  ],
  authors: [{ name: "Pourquoi Paul" }],
  creator: "Pourquoi Paul",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.pourquoipaul.fr" },
  openGraph: {
    title: "Pourquoi Paul — Restaurant gastronomique Dordogne",
    description: "Cuisine canaille, produits vrais, une équipe qui se bat pour la qualité. Bar à vins nature & biodynamie. Port-Sainte-Foy-et-Ponchapt.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.pourquoipaul.fr",
    siteName: "Pourquoi Paul",
    images: [{ url: "https://www.pourquoipaul.fr/og-image.jpg", width: 1200, height: 630, alt: "Restaurant Pourquoi Paul — Dordogne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pourquoi Paul — Restaurant Dordogne",
    description: "Cuisine canaille, produits locaux, vins nature. Port-Sainte-Foy-et-Ponchapt.",
  },
  verification: {
  google: 'tcaU4pMF8rbqhtsvZTw0oFrGNka7Qd8rh2hudeZ-hiw',
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="FR-24" />
        <meta name="geo.placename" content="Port-Sainte-Foy-et-Ponchapt" />
        <meta name="geo.position" content="44.8378;0.2139" />
        <meta name="ICBM" content="44.8378, 0.2139" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Pourquoi Paul",
              "description": "Restaurant gastronomique à Port-Sainte-Foy-et-Ponchapt. Cuisine canaille, produits locaux et bio, fait maison. Bar à vins nature et biodynamie.",
              "url": "https://www.pourquoipaul.fr",
              "telephone": "+33619652180",
              "email": "contact@pourquoipaul.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 Rue de la Rouquette",
                "addressLocality": "Port-Sainte-Foy-et-Ponchapt",
                "postalCode": "33220",
                "addressCountry": "FR",
                "addressRegion": "Dordogne"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8378,
                "longitude": 0.2139
              },
              "servesCuisine": ["Française", "Bistronomique", "Cuisine du marché"],
              "priceRange": "€€",
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday"], "opens": "19:00", "closes": "22:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Thursday", "Friday", "Saturday"], "opens": "12:00", "closes": "22:00" }
              ],
              "sameAs": [
                "https://www.instagram.com/pourquoipaul_/",
                "https://www.facebook.com/RestoAuFildelEau/"
              ],
              "hasMap": "https://maps.google.com/?q=Pourquoi+Paul+Port-Sainte-Foy-et-Ponchapt"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}