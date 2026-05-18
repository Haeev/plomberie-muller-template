import { Clock, ShieldCheck, Award, ThumbsUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type WhyUsItem = {
  id: string
  icon: LucideIcon
  stat: string
  label: string
  description: string
}

export const whyUsItems: WhyUsItem[] = [
  {
    id: "experience",
    icon: Award,
    stat: "18 ans",
    label: "D'expérience",
    description:
      "Depuis 2008, nous intervenons chez des centaines de particuliers et professionnels en Moselle.",
  },
  {
    id: "urgence",
    icon: Clock,
    stat: "< 2h",
    label: "D'intervention",
    description:
      "En cas d'urgence, nous sommes chez vous en moins de 2 heures, 7 jours sur 7, 365 jours par an.",
  },
  {
    id: "garantie",
    icon: ShieldCheck,
    stat: "100%",
    label: "Assuré & garanti",
    description:
      "Assurance décennale complète, garantie 2 ans sur les installations, certification RGE QualiGaz.",
  },
  {
    id: "avis",
    icon: ThumbsUp,
    stat: "4.8★",
    label: "Note Google",
    description:
      "127 avis vérifiés sur Google. La satisfaction de nos clients est notre meilleure carte de visite.",
  },
]
