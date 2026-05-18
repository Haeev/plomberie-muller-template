import { Zap, Flame, Bath, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
import Button from "@/components/ui/Button"

type TarifCard = {
  id: string
  icon: LucideIcon
  title: string
  price: string
  priceDetail: string
  description: string
  inclus: string[]
  highlighted?: boolean
}

const tarifs: TarifCard[] = [
  {
    id: "depannage",
    icon: Zap,
    title: "Dépannage urgence",
    price: "À partir de 89 €",
    priceDetail: "HT — déplacement inclus",
    description:
      "Intervention rapide pour toute panne ou fuite, 24h/7j. Diagnostic sur place offert.",
    inclus: [
      "Déplacement inclus",
      "Diagnostic offert",
      "Intervention sous 2h",
      "Disponible 7j/7",
    ],
  },
  {
    id: "chauffe-eau",
    icon: Flame,
    title: "Remplacement chauffe-eau",
    price: "À partir de 349 €",
    priceDetail: "HT — pose incluse, hors matériel",
    description:
      "Dépose de l'ancien appareil et pose du nouveau chauffe-eau. Mise en service et test inclus.",
    inclus: [
      "Main-d'œuvre pose",
      "Dépose ancien appareil",
      "Mise en service",
      "Garantie 2 ans",
    ],
    highlighted: true,
  },
  {
    id: "salle-de-bain",
    icon: Bath,
    title: "Rénovation salle de bain",
    price: "Sur devis",
    priceDetail: "généralement 2 500 – 8 000 € HT",
    description:
      "De la conception à la réalisation complète. Carrelage, sanitaires, plomberie, finitions.",
    inclus: [
      "Devis détaillé offert",
      "Conception sur mesure",
      "Tous corps de métier",
      "Assurance décennale",
    ],
  },
]

const TarifsIndicatifs = () => (
  <Section id="tarifs" className="bg-bg">
    <Container>
      <AnimatedSection>
        <SectionHeading
          label="Tarifs indicatifs"
          title="Des prix clairs et honnêtes"
          description="Nos tarifs sont donnés à titre indicatif. Chaque intervention fait l'objet d'un devis gratuit, détaillé et sans engagement."
          centered
        />
      </AnimatedSection>

      <AnimatedList className="grid gap-6 md:grid-cols-3">
        {tarifs.map((tarif) => {
          const Icon = tarif.icon
          return (
            <AnimatedItem key={tarif.id}>
              <div
                className={
                  tarif.highlighted
                    ? "relative flex h-full flex-col rounded-2xl border-2 border-brand bg-brand p-8 text-white shadow-xl"
                    : "relative flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-brand/40 hover:shadow-lg"
                }
                aria-labelledby={`tarif-${tarif.id}-title`}
              >
                {tarif.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
                    Le plus demandé
                  </span>
                )}

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    tarif.highlighted ? "bg-white/20" : "bg-brand/10"
                  }`}
                  aria-hidden="true"
                >
                  <Icon
                    size={24}
                    className={tarif.highlighted ? "text-white" : "text-brand"}
                  />
                </div>

                <h3
                  id={`tarif-${tarif.id}-title`}
                  className={`mb-1 text-xl font-bold ${
                    tarif.highlighted ? "text-white" : "text-fg"
                  }`}
                >
                  {tarif.title}
                </h3>

                <div className="mb-4">
                  <p
                    className={`text-2xl font-extrabold ${
                      tarif.highlighted ? "text-white" : "text-brand"
                    }`}
                  >
                    {tarif.price}
                  </p>
                  <p
                    className={`text-xs ${
                      tarif.highlighted ? "text-white/70" : "text-fg-muted"
                    }`}
                  >
                    {tarif.priceDetail}
                  </p>
                </div>

                <p
                  className={`mb-5 text-sm leading-relaxed ${
                    tarif.highlighted ? "text-white/80" : "text-fg-muted"
                  }`}
                >
                  {tarif.description}
                </p>

                <ul className="mb-6 flex-1 space-y-2" role="list" aria-label="Inclus">
                  {tarif.inclus.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        size={15}
                        className={`shrink-0 ${
                          tarif.highlighted ? "text-white/80" : "text-brand"
                        }`}
                        aria-hidden="true"
                      />
                      <span className={tarif.highlighted ? "text-white/90" : "text-fg-muted"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-2">
                  <Button
                    href="#contact"
                    variant={tarif.highlighted ? "secondary" : "outline"}
                    size="md"
                    className="w-full"
                    aria-label={`Demander un devis pour ${tarif.title}`}
                  >
                    Devis gratuit
                  </Button>
                  <p
                    className={`text-center text-xs ${
                      tarif.highlighted ? "text-white/60" : "text-fg-subtle"
                    }`}
                  >
                    Sans engagement
                  </p>
                </div>
              </div>
            </AnimatedItem>
          )
        })}
      </AnimatedList>
    </Container>
  </Section>
)

export default TarifsIndicatifs
