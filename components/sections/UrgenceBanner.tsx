"use client"

import { motion } from "framer-motion"
import { Phone, AlertTriangle } from "lucide-react"
import Button from "@/components/ui/Button"
import { siteConfig } from "@/lib/site-config"

const UrgenceBanner = () => (
  <div
    className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 py-4"
    role="alert"
    aria-live="polite"
  >
    <div className="absolute inset-0 opacity-10" aria-hidden="true">
      <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
    </div>
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="flex items-center gap-3 text-white"
      >
        <AlertTriangle size={20} aria-hidden="true" className="shrink-0" />
        <p className="text-sm font-bold sm:text-base">
          <span className="uppercase">Urgence plomberie ?</span>
          {" "}—{" "}
          <span className="font-normal">Nous intervenons en moins de 2h, 24h/7j</span>
        </p>
      </motion.div>
      <Button
        href={`tel:${siteConfig.contact.phonePlain}`}
        variant="secondary"
        size="sm"
        className="shrink-0 bg-white text-red-700 hover:bg-red-50"
        aria-label={`Appel d'urgence — ${siteConfig.contact.phone}`}
      >
        <Phone size={15} aria-hidden="true" />
        {siteConfig.contact.phone}
      </Button>
    </div>
  </div>
)

export default UrgenceBanner
