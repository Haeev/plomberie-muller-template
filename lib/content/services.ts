import {
  Flame,
  Bath,
  Droplets,
  SearchCheck,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Service = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  highlighted?: boolean
}

export const services: Service[] = [
  {
    id: "depannage",
    icon: Zap,
    title: "Dépannage Urgence 24h/7j",
    description:
      "Fuite, canalisation bouchée, problème de robinetterie ? Nous intervenons en moins de 2h, 7 jours sur 7, même les jours fériés.",
    highlighted: true,
  },
  {
    id: "chauffe-eau",
    icon: Flame,
    title: "Chauffe-eau & Cumulus",
    description:
      "Remplacement, installation et entretien de chauffe-eau thermodynamiques, électriques ou à gaz. Devis gratuit sur place.",
  },
  {
    id: "salle-de-bain",
    icon: Bath,
    title: "Rénovation Salle de Bain",
    description:
      "Conception et réalisation complète de votre salle de bain : carrelage, faïence, plomberie, sanitaires. De A à Z.",
  },
  {
    id: "chaudiere",
    icon: Flame,
    title: "Chaudière & Chauffage",
    description:
      "Installation, remplacement et entretien annuel de chaudières gaz. Certifié RGE QualiGaz pour vos aides à la rénovation.",
  },
  {
    id: "canalisations",
    icon: Droplets,
    title: "Débouchage Canalisations",
    description:
      "Débouchage haute pression, inspection par caméra, hydrocurage. Éviers, WC, douches, colonnes — intervention rapide.",
  },
  {
    id: "detection-fuites",
    icon: SearchCheck,
    title: "Détection de Fuites",
    description:
      "Détection non destructive de fuites cachées par thermographie ou pression. Rapport et devis de réparation inclus.",
  },
]
