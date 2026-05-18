import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
import RealisationCard from "@/components/ui/RealisationCard"
import { realisations } from "@/lib/content/realisations"

const Realisations = () => (
  <Section id="realisations" className="bg-surface">
    <Container>
      <AnimatedSection>
        <SectionHeading
          label="Nos réalisations"
          title="Des chantiers dont on est fiers"
          description="Quelques exemples parmi les centaines de chantiers réalisés depuis 2008 en Moselle."
          centered
        />
      </AnimatedSection>

      <AnimatedList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((item) => (
          <AnimatedItem key={item.id}>
            <RealisationCard item={item} />
          </AnimatedItem>
        ))}
      </AnimatedList>
    </Container>
  </Section>
)

export default Realisations
