export type Testimonial = {
  id: string
  name: string
  city: string
  rating: number
  text: string
  service: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marie C.",
    city: "Sarreguemines",
    rating: 5,
    text: "Intervention un dimanche soir pour une fuite sous l'évier. Thomas est arrivé en moins d'une heure, très professionnel et tarifs complètement honnêtes. Je recommande sans hésitation !",
    service: "Dépannage urgence",
    date: "Mars 2025",
  },
  {
    id: "t2",
    name: "Jean-Pierre K.",
    city: "Forbach",
    rating: 5,
    text: "Rénovation complète de notre salle de bain : travail impeccable, chantier propre et délais respectés. Le résultat dépasse nos attentes. Vraiment satisfait, merci à toute l'équipe !",
    service: "Rénovation salle de bain",
    date: "Janvier 2025",
  },
  {
    id: "t3",
    name: "Isabelle W.",
    city: "Saint-Avold",
    rating: 5,
    text: "Chauffe-eau tombé en panne un vendredi soir. Thomas est intervenu dès le samedi matin, a tout remplacé en 3h. Disponible, efficace, prix correct. Une vraie perle rare dans la région.",
    service: "Chauffe-eau",
    date: "Novembre 2024",
  },
  {
    id: "t4",
    name: "Robert M.",
    city: "Freyming-Merlebach",
    rating: 5,
    text: "Fuite dans les murs, impossible à localiser. Thomas a utilisé une caméra thermique et a trouvé en 20 minutes ce qu'un autre plombier n'avait pas trouvé en 2 heures. Merci !",
    service: "Détection de fuites",
    date: "Septembre 2024",
  },
  {
    id: "t5",
    name: "Nathalie S.",
    city: "Sarralbe",
    rating: 5,
    text: "Remplacement de la chaudière gaz avec dossier MaPrimeRénov' géré entièrement par Thomas. Travail soigné, certification RGE bien utile pour les aides. Je referai appel à lui sans hésiter.",
    service: "Chaudière",
    date: "Juillet 2024",
  },
]
