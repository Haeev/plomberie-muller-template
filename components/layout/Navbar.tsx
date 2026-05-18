"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import Button from "@/components/ui/Button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis clients" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/90 shadow-md backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-md"
          aria-label="Plomberie Müller — retour à l'accueil"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
            <Wrench size={18} aria-hidden="true" />
          </div>
          <span className="font-bold text-fg text-lg leading-tight">
            Plomberie <span className="text-brand">Müller</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-fg-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={`tel:${siteConfig.contact.phonePlain}`}
            variant="primary"
            size="sm"
            aria-label={`Appeler le ${siteConfig.contact.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            {siteConfig.contact.phone}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-fg transition-colors hover:bg-surface-2 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navigation mobile"
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          menuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="bg-bg/95 backdrop-blur-md border-b border-border px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              href={`tel:${siteConfig.contact.phonePlain}`}
              variant="primary"
              size="lg"
              className="w-full"
              aria-label={`Appeler le ${siteConfig.contact.phone}`}
            >
              <Phone size={18} aria-hidden="true" />
              Appeler maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
