import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Providers } from "@/app/providers"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingCTA from "@/components/ui/FloatingCTA"
import CookieBanner from "@/components/ui/CookieBanner"
import { siteConfig } from "@/lib/site-config"
import { getSiteUrl } from "@/lib/env"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} — Plombier Sarreguemines 24h/7j`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "plombier Sarreguemines",
    "plombier urgence Moselle",
    "dépannage plomberie 57",
    "rénovation salle de bain Sarreguemines",
    "plombier RGE Moselle",
    "chauffe-eau Sarreguemines",
    "chaudière gaz Moselle",
    "plombier Forbach",
    "plombier Saint-Avold",
    "débouchage canalisation Moselle",
  ],
  authors: [{ name: "Thomas Müller", url: getSiteUrl() }],
  creator: "Nowakowski Web",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getSiteUrl(),
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Plombier Sarreguemines 24h/7j`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plomberie Müller — Votre plombier de confiance en Moselle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Plombier Sarreguemines 24h/7j`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getSiteUrl(),
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // PlumbingService is the most specific Google-recognised type for plumbers
      "@type": ["PlumbingService", "LocalBusiness"],
      "@id": `${getSiteUrl()}/#business`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: getSiteUrl(),
      telephone: siteConfig.contact.phonePlain,
      description: siteConfig.description,
      image: `${getSiteUrl()}/og-image.jpg`,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      // Regular opening hours Lun–Sam 07:00–19:00
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "07:00",
          closes: "19:00",
        },
      ],
      // Emergency service available 24/7 — separate specialOpeningHoursSpecification
      specialOpeningHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        name: "Dépannage urgence 24h/7j",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: siteConfig.rating.value,
        reviewCount: siteConfig.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
      areaServed: [
        { "@type": "City", name: "Sarreguemines" },
        { "@type": "City", name: "Forbach" },
        { "@type": "City", name: "Saint-Avold" },
        { "@type": "City", name: "Freyming-Merlebach" },
        { "@type": "City", name: "Sarralbe" },
        { "@type": "City", name: "Bitche" },
        { "@type": "City", name: "Creutzwald" },
        { "@type": "City", name: "Morhange" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "RGE QualiGaz",
          recognizedBy: { "@type": "Organization", name: "QualiGaz" },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de plomberie",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dépannage urgence 24h/7j" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation salle de bain" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation chauffe-eau" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remplacement chaudière gaz" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Débouchage canalisations" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Détection de fuites" } },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${getSiteUrl()}/#founder`,
      name: "Thomas Müller",
      jobTitle: "Artisan plombier",
      worksFor: { "@id": `${getSiteUrl()}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${getSiteUrl()}/#website`,
      url: getSiteUrl(),
      name: siteConfig.name,
      publisher: { "@id": `${getSiteUrl()}/#business` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <Providers>
          {/* Skip to main content */}
          <a href="#main-content" className="skip-to-main">
            Aller au contenu principal
          </a>

          <Navbar />

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <Footer />
          <FloatingCTA />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  )
}
