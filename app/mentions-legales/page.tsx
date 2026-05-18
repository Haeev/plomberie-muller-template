import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et politique de confidentialité de Plomberie Müller.",
  robots: { index: false, follow: false },
}

const LegalSection = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <div className="mb-10" id={id}>
    <h2 className="mb-4 text-xl font-bold text-fg">{title}</h2>
    <div className="text-fg-muted leading-relaxed space-y-2">{children}</div>
  </div>
)

export default function MentionsLegalesPage() {
  return (
    <div className="bg-bg pb-20 pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-extrabold text-fg">Mentions légales</h1>
          <p className="mb-12 text-sm text-fg-muted">Dernière mise à jour : mai 2026</p>

          <LegalSection title="Éditeur du site">
            <p><strong className="text-fg">Raison sociale :</strong> {siteConfig.legalName}</p>
            <p><strong className="text-fg">SIRET :</strong> {siteConfig.siret}</p>
            <p><strong className="text-fg">Adresse :</strong> {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}</p>
            <p><strong className="text-fg">Téléphone :</strong> {siteConfig.contact.phone}</p>
            <p><strong className="text-fg">Email :</strong> contact[at]plomberie-muller.fr</p>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>Ce site est hébergé par <strong className="text-fg">Vercel Inc.</strong></p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
          </LegalSection>

          <LegalSection title="Conception et développement">
            <p>
              Site conçu et développé par{" "}
              <a
                href="https://nowakowski-web.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                Nowakowski Web
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, structure) est la propriété
              exclusive de {siteConfig.legalName}. Toute reproduction, même partielle, est
              interdite sans autorisation préalable écrite.
            </p>
          </LegalSection>

          <LegalSection title="Politique de confidentialité" id="confidentialite">
            <p>
              Les informations collectées via le formulaire de contact sont utilisées
              exclusivement pour répondre à vos demandes. Elles ne sont en aucun cas
              transmises à des tiers.
            </p>
            <p>
              Conformément au RGPD (Règlement Général sur la Protection des Données),
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données. Pour exercer ce droit, contactez-nous par email.
            </p>
            <p>
              Ce site ne dépose aucun cookie de traçage. Les statistiques de visites
              sont collectées de manière anonyme via Plausible Analytics (sans cookies).
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              Plomberie Müller s&apos;efforce de maintenir les informations de ce site à
              jour mais ne saurait être tenu responsable d&apos;éventuelles erreurs ou
              omissions. Les liens vers des sites tiers sont fournis à titre informatif.
            </p>
          </LegalSection>
        </div>
      </Container>
    </div>
  )
}
