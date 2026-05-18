"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import ObfuscatedEmail from "@/components/ui/ObfuscatedEmail"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
  website: string // honeypot
}

type FormStatus = "idle" | "loading" | "success" | "error"

const serviceOptions = [
  "Dépannage urgence",
  "Chauffe-eau / Cumulus",
  "Rénovation salle de bain",
  "Chaudière / Chauffage",
  "Débouchage canalisations",
  "Détection de fuite",
  "Autre",
]

const inputClass = cn(
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle",
  "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
)

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    website: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <Section id="contact" className="bg-surface">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Contactez-nous"
            description="Un devis, une urgence, une question ? Nous répondons sous 2h en jours ouvrés."
            centered
          />
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <div className="rounded-2xl bg-brand p-8 text-white h-full">
              <h3 className="mb-8 text-xl font-bold">Coordonnées</h3>

              <ul className="space-y-6" role="list">
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phonePlain}`}
                    className="flex items-center gap-4 group"
                    aria-label={`Appeler le ${siteConfig.contact.phone}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors">
                      <Phone size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 mb-0.5">Téléphone</p>
                      <p className="font-semibold">{siteConfig.contact.phone}</p>
                    </div>
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Email</p>
                    <ObfuscatedEmail
                      user="contact"
                      domain="plomberie-muller.fr"
                      className="font-semibold text-sm text-white"
                    />
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Adresse</p>
                    <address className="not-italic font-semibold text-sm leading-relaxed">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Clock size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Horaires</p>
                    <p className="font-semibold text-sm">Lun–Sam : 7h–19h</p>
                    <p className="text-xs text-white/70 mt-0.5">Urgences : 24h/7j</p>
                  </div>
                </li>
              </ul>

              {/* Google Map embed */}
              <div className="mt-8 overflow-hidden rounded-xl" aria-label="Carte de localisation">
                <iframe
                  title="Localisation Plomberie Müller à Sarreguemines"
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-3" delay={0.2}>
            <div className="rounded-2xl border border-border bg-bg p-8 min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="flex flex-1 flex-col items-center justify-center py-16 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                      className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20"
                    >
                      <CheckCircle2 size={40} className="text-green-600" aria-hidden="true" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold text-fg">Message envoyé !</h3>
                    <p className="text-fg-muted max-w-xs">
                      Nous vous répondrons dans les 2 heures en jours ouvrés.
                      <br />
                      Pour une urgence, appelez directement le{" "}
                      <a
                        href={`tel:${siteConfig.contact.phonePlain}`}
                        className="text-brand font-semibold underline"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Formulaire de contact — Plomberie Müller"
                    className="flex flex-col flex-1"
                  >
                    {/* Honeypot — hidden from humans, visible to bots */}
                    <div
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
                    >
                      <label htmlFor="website">Ne pas remplir</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        value={form.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
                          Nom complet{" "}
                          <span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className={inputClass}
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-fg">
                          Téléphone{" "}
                          <span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="06 12 34 56 78"
                          className={inputClass}
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean@exemple.fr"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-fg">
                          Type de demande
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Sélectionner…</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
                          Décrivez votre besoin{" "}
                          <span aria-hidden="true" className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre problème ou projet..."
                          className={cn(inputClass, "resize-none")}
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Error message */}
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/10"
                          role="alert"
                          aria-live="assertive"
                        >
                          <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-600" aria-hidden="true" />
                          <p className="text-sm text-red-700 dark:text-red-400">
                            Une erreur est survenue, veuillez appeler directement le{" "}
                            <a
                              href={`tel:${siteConfig.contact.phonePlain}`}
                              className="font-semibold underline"
                            >
                              {siteConfig.contact.phone}
                            </a>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "loading"}
                      className="mt-6 w-full"
                      aria-label="Envoyer le message"
                    >
                      {status === "loading" ? (
                        <>
                          <span
                            className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                            aria-hidden="true"
                          />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} aria-hidden="true" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>

                    <p className="mt-3 text-center text-xs text-fg-subtle">
                      Réponse garantie sous 2h · Données confidentielles
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
