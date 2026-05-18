import { Star, Quote } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnimatedItem, { AnimatedList } from "@/components/ui/AnimatedItem"
import { testimonials } from "@/lib/content/testimonials"
import { siteConfig } from "@/lib/site-config"

const Testimonials = () => (
  <Section id="avis" className="bg-bg">
    <Container>
      <AnimatedSection>
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            label="Avis clients"
            title="Ce que disent nos clients"
            description="127 avis Google vérifiés — voici ce que nos clients pensent de nous."
          />
          <div
            className="shrink-0 rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/30 dark:bg-amber-900/10"
            aria-label={`Note globale Google : ${siteConfig.rating.value} sur 5 — ${siteConfig.rating.count} avis`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xl font-extrabold text-fg">{siteConfig.rating.value}</span>
            </div>
            <p className="text-xs text-fg-muted">{siteConfig.rating.count} avis Google vérifiés</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedList className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <AnimatedItem key={t.id}>
            <blockquote
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-brand/30 hover:shadow-md"
              aria-label={`Témoignage de ${t.name} de ${t.city}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex" aria-label={`Note : ${t.rating} étoiles sur 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <Quote size={20} className="text-brand/30" aria-hidden="true" />
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-fg-muted">
                &ldquo;{t.text}&rdquo;
              </p>

              <footer className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <div>
                  <cite className="not-italic text-sm font-semibold text-fg">{t.name}</cite>
                  <p className="text-xs text-fg-muted">{t.city}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brand font-medium">{t.service}</p>
                  <p className="text-xs text-fg-subtle">{t.date}</p>
                </div>
              </footer>
            </blockquote>
          </AnimatedItem>
        ))}
      </AnimatedList>
    </Container>
  </Section>
)

export default Testimonials
