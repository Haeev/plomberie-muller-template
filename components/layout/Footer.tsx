import Link from "next/link"
import { Phone, Mail, MapPin, Wrench, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import Container from "@/components/ui/Container"
import ObfuscatedEmail from "@/components/ui/ObfuscatedEmail"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-fg text-white" role="contentinfo">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
                <Wrench size={18} aria-hidden="true" />
              </div>
              <span className="font-bold text-lg">
                Plomberie <span className="text-brand">Müller</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
              Votre plombier de confiance en Moselle depuis 2008. Dépannage urgence 24h/7j,
              rénovation salle de bain, installation chauffe-eau et chaudière.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Clock size={14} aria-hidden="true" className="shrink-0 text-accent" />
              <span>{siteConfig.hours.display}</span>
            </div>
            <div className="mt-4">
              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notre page Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand text-sm font-bold"
              >
                f
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70" role="list">
              <li>
                <Link
                  href={`tel:${siteConfig.contact.phonePlain}`}
                  className="flex items-center gap-2 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  aria-label={`Appeler le ${siteConfig.contact.phone}`}
                >
                  <Phone size={14} aria-hidden="true" className="shrink-0 text-accent" />
                  {siteConfig.contact.phone}
                </Link>
              </li>
              <li>
                <span className="flex items-start gap-2">
                  <Mail size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                  <ObfuscatedEmail
                    user="contact"
                    domain="plomberie-muller.fr"
                    asLink
                    className="text-white/70 hover:text-brand"
                  />
                </span>
              </li>
              <li>
                <span className="flex items-start gap-2">
                  <MapPin size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-white/70" role="list">
              {[
                "Dépannage urgence",
                "Chauffe-eau & cumulus",
                "Rénovation salle de bain",
                "Chaudière & chauffage",
                "Débouchage canalisations",
                "Détection de fuites",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName} — SIRET {siteConfig.siret}
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              Mentions légales
            </Link>
            <Link
              href="/mentions-legales#confidentialite"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              Confidentialité
            </Link>
          </div>
          <p>
            Site réalisé par{" "}
            <Link
              href="https://nowakowski-web.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
            >
              Nowakowski Web
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
