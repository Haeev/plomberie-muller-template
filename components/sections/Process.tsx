import { Phone, ClipboardList, Wrench } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"

const steps = [
  {
    id: 1,
    icon: Phone,
    title: "Appelez-nous",
    description:
      "Expliquez votre problème en quelques mots. Nous évaluons l'urgence et convenons d'un créneau d'intervention adapté.",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Devis gratuit",
    description:
      "Sur place ou par téléphone, nous établissons un devis clair et transparent. Aucune surprise sur la facture finale.",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Intervention soignée",
    description:
      "Nos techniciens interviennent proprement, dans les délais annoncés, avec du matériel de qualité et une garantie 2 ans.",
  },
]

const Process = () => (
  <Section className="bg-brand relative overflow-hidden" aria-labelledby="process-heading">
    {/* Decorative pattern */}
    <div className="pointer-events-none absolute inset-0 opacity-5" aria-hidden="true">
      <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
    </div>

    <Container>
      <AnimatedSection>
        <SectionHeading
          id="process-heading"
          label="Notre processus"
          title="Simple, rapide, efficace"
          description="De votre appel à la fin du chantier, nous gérons tout."
          centered
          className="text-white [&_p]:text-white/70 [&_h2]:text-white"
        />
      </AnimatedSection>

      <AnimatedList className="relative grid gap-8 lg:grid-cols-3">
        {/* Connector line */}
        <div
          className="absolute top-12 left-1/6 right-1/6 hidden h-0.5 bg-white/20 lg:block"
          aria-hidden="true"
        />

        {steps.map((step) => {
          const Icon = step.icon
          return (
            <AnimatedItem key={step.id}>
              <div className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative mb-6">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white ring-2 ring-white/30 backdrop-blur-sm"
                    aria-hidden="true"
                  >
                    <Icon size={30} />
                  </div>
                  <span
                    className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
                    aria-label={`Étape ${step.id}`}
                  >
                    {step.id}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{step.description}</p>
              </div>
            </AnimatedItem>
          )
        })}
      </AnimatedList>
    </Container>
  </Section>
)

export default Process
