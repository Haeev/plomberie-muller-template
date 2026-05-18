"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { faqItems } from "@/lib/content/faq"
import { cn } from "@/lib/utils"

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <Section id="faq" className="bg-bg">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="FAQ"
            title="Questions fréquentes"
            description="Tout ce que vous voulez savoir avant d'appeler."
            centered
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border overflow-hidden"
            role="list"
            aria-label="Questions fréquemment posées"
          >
            {faqItems.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id} role="listitem">
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold transition-colors",
                      "hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand",
                      isOpen ? "bg-surface text-brand" : "text-fg bg-bg"
                    )}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-surface px-6 pb-5 pt-2 text-sm leading-relaxed text-fg-muted">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  )
}

export default FAQ
