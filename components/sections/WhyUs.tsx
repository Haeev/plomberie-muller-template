import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
import { whyUsItems } from "@/lib/content/why-us"

const WhyUs = () => (
  <Section id="pourquoi-nous" className="bg-bg">
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text side */}
        <AnimatedSection>
          <SectionHeading
            label="Pourquoi nous choisir"
            title="Le bon artisan au bon moment"
            description="En Moselle, les bons plombiers sont rares. Chez Müller, nous combinons réactivité, expertise et honnêteté depuis 18 ans."
          />
          <p className="mt-4 text-fg-muted leading-relaxed">
            Pas de mauvaises surprises : nos devis sont gratuits, détaillés et respectés.
            Nous nous déplaçons dans tout l&apos;est de la Moselle et garantissons nos interventions.
          </p>
        </AnimatedSection>

        {/* Stats grid */}
        <AnimatedList className="grid grid-cols-2 gap-4">
          {whyUsItems.map((item) => {
            const Icon = item.icon
            return (
              <AnimatedItem key={item.id}>
                <div
                  className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-brand/30 hover:shadow-md"
                  aria-labelledby={`why-${item.id}-label`}
                >
                  <div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>
                  <p
                    className="mb-1 text-3xl font-extrabold text-brand"
                    aria-label={`${item.stat} — ${item.label}`}
                  >
                    {item.stat}
                  </p>
                  <p
                    id={`why-${item.id}-label`}
                    className="mb-2 text-sm font-semibold text-fg"
                  >
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedItem>
            )
          })}
        </AnimatedList>
      </div>
    </Container>
  </Section>
)

export default WhyUs
