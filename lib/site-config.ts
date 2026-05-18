export const siteConfig = {
  name: "Plomberie Müller",
  legalName: "MÜLLER THOMAS SARL",
  siret: "812 345 678 00019",
  tagline: "Votre plombier de confiance en Moselle",
  description:
    "Plombier professionnel à Sarreguemines — dépannage urgence 24h/7j, rénovation salle de bain, installation chauffe-eau et chaudière. Devis gratuit. Intervention en moins de 2h.",
  url: "https://plomberie-muller.fr",
  locale: "fr_FR",
  address: {
    street: "12 Rue de la Blies",
    city: "Sarreguemines",
    postalCode: "57200",
    region: "Moselle",
    country: "France",
    countryCode: "FR",
  },
  contact: {
    phone: "03 87 52 14 78",
    phonePlain: "+33387521478",
    email: "contact@plomberie-muller.fr",
    whatsapp: "+33687521478",
  },
  hours: {
    display: "Lun–Sam : 7h–19h · Urgences 24h/7j",
    urgent: "24h/7j — 365 jours par an",
  },
  social: {
    facebook: "https://facebook.com/plomberiemuller",
  },
  geo: {
    latitude: 49.1128,
    longitude: 7.0645,
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20797.17!2d7.0645!3d49.1128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479608c8ca5c4f0d%3A0x40b6c6a5bbee4631!2sSarreguemines%2C%2057200!5e0!3m2!1sfr!2sfr",
  rating: {
    value: 4.8,
    count: 127,
  },
  certifications: ["RGE QualiGaz", "Assurance décennale", "Qualibat"],
} as const

export type SiteConfig = typeof siteConfig
