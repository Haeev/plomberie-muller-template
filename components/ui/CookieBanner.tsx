"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Cookie } from "lucide-react"
import { useConsent } from "@/app/providers"

const CookieBanner = () => {
  const { consent, accept, refuse } = useConsent()

  return (
    <AnimatePresence>
      {consent === "pending" && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-20 left-0 right-0 z-50 px-4 pb-2 lg:bottom-6 lg:px-6"
          role="dialog"
          aria-label="Bandeau de consentement aux cookies"
          aria-live="polite"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-border bg-surface shadow-2xl p-5 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <Cookie
                size={20}
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden="true"
              />
              <p className="text-sm text-fg-muted leading-relaxed">
                Ce site utilise des cookies analytiques{" "}
                <span className="font-medium text-fg">(Plausible, anonymes)</span> pour
                mesurer l&apos;audience.{" "}
                <span className="text-fg-subtle">
                  Aucune donnée personnelle n&apos;est collectée sans votre consentement.
                </span>
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={refuse}
                className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label="Refuser les cookies analytiques"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label="Accepter les cookies analytiques"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
