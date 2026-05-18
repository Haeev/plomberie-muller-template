"use client"

import { motion } from "framer-motion"
import { Phone, Star, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Button from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { siteConfig } from "@/lib/site-config"

const badges = [
  "Intervention en moins de 2h",
  "Devis gratuit",
  "Certifié RGE",
]

const Hero = () => (
  <section
    className="relative min-h-screen overflow-hidden bg-bg pt-24 pb-12 lg:pt-32"
    aria-labelledby="hero-heading"
  >
    {/* Background gradient */}
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
    </div>

    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Text */}
        <div>
          {/* Urgence badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Urgences 24h/7j — 365 jours par an
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-extrabold leading-tight text-fg sm:text-6xl lg:text-6xl xl:text-7xl [text-wrap:balance]"
          >
            Votre plombier{" "}
            <span className="text-brand">de confiance</span>{" "}
            en Moselle
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl text-fg-muted leading-relaxed max-w-xl"
          >
            Dépannage, rénovation salle de bain, chauffe-eau, chaudière — depuis 2008,
            Thomas Müller intervient rapidement chez vous dans tout l&apos;est de la Moselle.
          </motion.p>

          {/* Badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-3"
            role="list"
            aria-label="Points forts"
          >
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-1.5 text-sm font-medium text-fg-muted"
              >
                <CheckCircle2 size={16} className="text-brand shrink-0" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              href={`tel:${siteConfig.contact.phonePlain}`}
              variant="secondary"
              size="lg"
              className="min-h-[56px] w-full sm:w-auto text-lg"
              aria-label={`Appeler maintenant le ${siteConfig.contact.phone}`}
            >
              <Phone size={22} aria-hidden="true" />
              Appeler maintenant
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="min-h-[56px] w-full sm:w-auto"
              aria-label="Demander un devis gratuit"
            >
              Demander un devis
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </motion.div>

          {/* Google rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-3"
            aria-label={`Note Google ${siteConfig.rating.value} sur 5 — ${siteConfig.rating.count} avis`}
          >
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-fg">{siteConfig.rating.value}/5</span>
            <span className="text-sm text-fg-muted">
              ({siteConfig.rating.count} avis Google)
            </span>
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative h-[580px] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=85"
              alt="Thomas Müller, plombier professionnel à Sarreguemines"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 rounded-xl bg-surface p-4 shadow-xl border border-border"
            role="complementary"
            aria-label="Délai d'intervention garanti"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-fg-muted mb-1">
              Délai garanti
            </p>
            <p className="text-2xl font-extrabold text-brand">{"< 2h"}</p>
            <p className="text-xs text-fg-muted">en Moselle Est</p>
          </motion.div>

          {/* Floating cert badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -top-4 -right-4 flex items-center gap-2 rounded-xl bg-surface px-4 py-3 shadow-xl border border-border"
            role="complementary"
            aria-label="Certifié RGE QualiGaz"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10">
              <CheckCircle2 size={18} className="text-brand" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-fg">Certifié RGE</p>
              <p className="text-[10px] text-fg-muted">QualiGaz</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  </section>
)

export default Hero
