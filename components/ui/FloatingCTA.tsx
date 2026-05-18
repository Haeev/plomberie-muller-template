"use client"

import { Phone, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const FloatingCTA = () => (
  <>
    {/* Mobile bottom bar */}
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-0 shadow-2xl lg:hidden"
      role="navigation"
      aria-label="Actions rapides"
    >
      <a
        href={`tel:${siteConfig.contact.phonePlain}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand py-4 text-sm font-bold text-white transition-colors active:bg-brand/90"
        aria-label={`Appeler le ${siteConfig.contact.phone}`}
      >
        <Phone size={18} aria-hidden="true" />
        Appeler
      </a>
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-green-600 py-4 text-sm font-bold text-white transition-colors active:bg-green-700"
        aria-label="Contacter par WhatsApp"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp
      </a>
    </div>

    {/* Desktop WhatsApp floating button */}
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl text-white transition-all hover:bg-green-600 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 lg:flex"
      aria-label="Contacter par WhatsApp"
    >
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  </>
)

export default FloatingCTA
