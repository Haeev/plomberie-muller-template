"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import SectionHeading from "@/components/ui/SectionHeading"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
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

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
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
    // TODO: configurer RESEND_API_KEY en phase 2
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus("success")
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
                    <p
                      className="font-semibold text-sm"
                      aria-label="Adresse email"
                    >
                      contact[at]plomberie-muller.fr
                    </p>
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
            <div className="rounded-2xl border border-border bg-bg p-8">
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-fg">Message envoyé !</h3>
                  <p className="text-fg-muted">
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
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulaire de contact — Plomberie Müller"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-fg"
                      >
                        Nom complet <span aria-hidden="true" className="text-red-500">*</span>
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
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle",
                          "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        )}
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-fg"
                      >
                        Téléphone <span aria-hidden="true" className="text-red-500">*</span>
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
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle",
                          "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        )}
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-fg"
                      >
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
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle",
                          "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        )}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-fg"
                      >
                        Type de demande
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg",
                          "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        )}
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
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-fg"
                      >
                        Décrivez votre besoin <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre problème ou projet..."
                        className={cn(
                          "w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle",
                          "transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        )}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="mt-6 w-full"
                    aria-label="Envoyer le message"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Envoi en cours...
                      </span>
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
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
