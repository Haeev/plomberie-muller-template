"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type ObfuscatedEmailProps = {
  user: string
  domain: string
  className?: string
  /** If true, renders as a clickable mailto link */
  asLink?: boolean
}

/**
 * Renders an obfuscated email address.
 * - SSR output: a safe placeholder (invisible to crawlers)
 * - Client-side: reconstructs the real address via useEffect
 * - When asLink=true, also wraps in a mailto: anchor
 */
const ObfuscatedEmail = ({
  user,
  domain,
  className,
  asLink = false,
}: ObfuscatedEmailProps) => {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(`${user}@${domain}`)
  }, [user, domain])

  const displayText = email ?? `${user}[at]${domain}`

  if (asLink && email) {
    return (
      <a
        href={`mailto:${email}`}
        className={cn("transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded", className)}
        aria-label={`Envoyer un email à ${email}`}
      >
        {displayText}
      </a>
    )
  }

  return (
    <span
      className={cn(className)}
      aria-label={email ? `Adresse email : ${email}` : "Adresse email"}
    >
      {displayText}
    </span>
  )
}

export default ObfuscatedEmail
