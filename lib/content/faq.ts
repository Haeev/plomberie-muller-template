export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: "urgences",
    question: "Intervenez-vous en urgence le week-end et les jours fériés ?",
    answer:
      "Oui, absolument. Nous assurons des interventions d'urgence 24h/24 et 7j/7, y compris les dimanches et jours fériés. Notre ligne d'urgence est disponible en permanence. En cas d'urgence, appelez directement le 03 87 52 14 78.",
  },
  {
    id: "devis",
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Pour une rénovation de salle de bain ou une installation de chaudière, nous nous déplaçons gratuitement pour évaluer votre projet et vous remettre un devis détaillé sous 48h.",
  },
  {
    id: "zone",
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Nous intervenons dans tout l'est de la Moselle : Sarreguemines, Forbach, Saint-Avold, Freyming-Merlebach, Sarralbe, Bitche, Puttelange-aux-Lacs, Morhange, Creutzwald et les communes environnantes. Pour les urgences, nous étendons notre rayon d'action selon la situation.",
  },
  {
    id: "rge",
    question: "Êtes-vous certifié RGE ? Peut-on bénéficier des aides à la rénovation ?",
    answer:
      "Oui, nous sommes certifiés RGE QualiGaz. Cette certification vous permet de bénéficier des aides de l'État pour vos travaux de rénovation énergétique : MaPrimeRénov', éco-PTZ, TVA à 5,5%... Nous vous accompagnons dans la constitution de votre dossier d'aides.",
  },
  {
    id: "delai",
    question: "Quel est le délai d'intervention pour une urgence ?",
    answer:
      "Pour les urgences (fuite, dégât des eaux, chauffe-eau HS), nous garantissons une intervention en moins de 2 heures dans notre zone principale. Nous disposons d'un véhicule équipé en permanence pour intervenir immédiatement.",
  },
  {
    id: "garantie",
    question: "Proposez-vous une garantie sur vos travaux ?",
    answer:
      "Oui. Tous nos travaux sont couverts par notre assurance décennale pour les gros chantiers, et nous offrons une garantie de bon fonctionnement de 2 ans sur les installations. En cas de problème, nous revenons sans supplément.",
  },
  {
    id: "paiement",
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les paiements par chèque, virement bancaire, et espèces. Pour les chantiers importants (salle de bain, chaudière), nous proposons un échelonnement en 3 fois sans frais sur accord.",
  },
]
