import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"

const certifications = [
  "RGE QualiGaz — certification officielle",
  "Assurance décennale complète",
  "Qualibat agréé",
  "SIRET 812 345 678 00019",
]

const About = () => (
  <Section id="a-propos" className="bg-surface overflow-hidden">
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <AnimatedSection className="relative">
          <div className="relative h-[480px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=700&q=85"
              alt="Thomas Müller, artisan plombier à Sarreguemines"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Experience badge */}
          <div
            className="absolute -bottom-4 -right-4 rounded-2xl bg-brand px-6 py-5 text-white shadow-xl"
            aria-label="18 ans d'expérience"
          >
            <p className="text-4xl font-extrabold leading-none">18</p>
            <p className="text-sm font-medium text-white/80">ans d&apos;expérience</p>
          </div>
        </AnimatedSection>

        {/* Text */}
        <AnimatedSection delay={0.15}>
          <SectionHeading
            label="Notre histoire"
            title="Thomas Müller, artisan passionné"
          />

          <div className="space-y-4 text-fg-muted leading-relaxed">
            <p>
              Né à Sarreguemines, j&apos;ai grandi avec une passion pour le travail bien fait.
              Après mon CAP Plomberie et un BTS Génie Climatique, j&apos;ai travaillé 6 ans
              dans une grande entreprise de la région avant de créer <strong className="text-fg">
              Plomberie Müller</strong> en 2008.
            </p>
            <p>
              Aujourd&apos;hui, j&apos;interviens avec mon équipe chez des centaines de
              particuliers et professionnels chaque année. Notre philosophie est simple :
              arriver à l&apos;heure, faire un travail propre, et repartir avec un client satisfait.
            </p>
            <p>
              Chaque intervention est une occasion de montrer que le métier d&apos;artisan
              peut être exercé avec sérieux, transparence et fierté.
            </p>
          </div>

          <ul className="mt-8 space-y-3" role="list" aria-label="Certifications et agréments">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 text-sm">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-brand"
                  aria-hidden="true"
                />
                <span className="text-fg-muted">{cert}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </Container>
  </Section>
)

export default About
