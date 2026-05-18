import Image from "next/image"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
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
            <article
              className="group overflow-hidden rounded-2xl border border-border bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              aria-labelledby={`real-${item.id}-title`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`Réalisation : ${item.title} à ${item.city}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fg/60 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h3
                    id={`real-${item.id}-title`}
                    className="font-bold text-fg"
                  >
                    {item.title}
                  </h3>
                  <span className="text-xs text-fg-muted">{item.city}</span>
                </div>
                <p className="mb-3 text-sm text-fg-muted">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2 py-0.5 text-xs text-fg-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedItem>
        ))}
      </AnimatedList>
    </Container>
  </Section>
)

export default Realisations
