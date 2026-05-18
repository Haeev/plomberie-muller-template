export type Realisation = {
  id: string
  title: string
  category: string
  city: string
  description: string
  imageUrl: string
  tags: string[]
}

export const realisations: Realisation[] = [
  {
    id: "r1",
    title: "Salle de bain moderne",
    category: "Rénovation",
    city: "Sarreguemines",
    description: "Rénovation complète : douche à l'italienne, double vasque, carrelage grand format.",
    imageUrl: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    tags: ["Salle de bain", "Douche italienne", "Carrelage"],
  },
  {
    id: "r2",
    title: "Installation chaudière gaz",
    category: "Chauffage",
    city: "Forbach",
    description: "Remplacement d'une ancienne chaudière fioul par une chaudière gaz à condensation.",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    tags: ["Chaudière", "RGE", "Économies d'énergie"],
  },
  {
    id: "r3",
    title: "Salle d'eau familiale",
    category: "Rénovation",
    city: "Saint-Avold",
    description: "Création d'une seconde salle d'eau dans une maison familiale, avec baignoire balnéo.",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-996317702782?w=600&q=80",
    tags: ["Salle d'eau", "Baignoire", "Création"],
  },
  {
    id: "r4",
    title: "Remplacement chauffe-eau",
    category: "Installation",
    city: "Sarralbe",
    description: "Installation d'un chauffe-eau thermodynamique 200L avec récupération d'énergie.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    tags: ["Chauffe-eau", "Thermodynamique", "Économies"],
  },
  {
    id: "r5",
    title: "WC suspendu design",
    category: "Installation",
    city: "Freyming-Merlebach",
    description: "Pose de WC suspendus avec bâti support, carrelage et habillage sur mesure.",
    imageUrl: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=600&q=80",
    tags: ["WC suspendu", "Design", "Rénovation"],
  },
  {
    id: "r6",
    title: "Réfection robinetterie",
    category: "Dépannage",
    city: "Sarreguemines",
    description: "Remplacement complet de la robinetterie cuisine et salle de bain, finitions chromées.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tags: ["Robinetterie", "Cuisine", "Rénovation"],
  },
]
