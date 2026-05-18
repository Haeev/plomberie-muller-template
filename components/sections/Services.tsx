import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
import { services } from "@/lib/content/services"
import { cn } from "@/lib/utils"

const Services = () => (
  <Section id="services" className="bg-surface">
    <Container>
      <AnimatedSection>
        <SectionHeading
          label="Nos services"
          title="Tout ce dont vous avez besoin"
          description="Plomberie générale, rénovation ou urgences — nous intervenons pour tous vos besoins, avec le même niveau d'exigence."
          centered
        />
      </AnimatedSection>

      <AnimatedList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <AnimatedItem key={service.id}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-lg",
                  service.highlighted
                    ? "border-brand/30 bg-brand/5 dark:bg-brand/10"
                    : "border-border bg-bg hover:border-brand/30"
                )}
                aria-labelledby={`service-${service.id}-title`}
              >
                {service.highlighted && (
                  <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    Disponible 24h/7j
                  </span>
                )}
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                    service.highlighted
                      ? "bg-brand text-white"
                      : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white"
                  )}
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
                <h3
                  id={`service-${service.id}-title`}
                  className="mb-2 text-lg font-bold text-fg"
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </article>
            </AnimatedItem>
          )
        })}
      </AnimatedList>
    </Container>
  </Section>
)

export default Services
