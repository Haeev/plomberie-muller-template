"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import { ThemeProvider } from "next-themes"

// ─── Consent types ────────────────────────────────────────────────────────────
export type ConsentStatus = "pending" | "accepted" | "refused"

type ConsentContextType = {
  consent: ConsentStatus
  accept: () => void
  refuse: () => void
}

const CONSENT_KEY = "cookie-consent"

export const ConsentContext = createContext<ConsentContextType>({
  consent: "pending",
  accept: () => {},
  refuse: () => {},
})

export const useConsent = () => useContext(ConsentContext)

// ─── Providers ────────────────────────────────────────────────────────────────
export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<ConsentStatus>("pending")

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === "accepted") setConsent("accepted")
    else if (stored === "refused") setConsent("refused")
  }, [])

  const accept = useCallback(() => {
    setConsent("accepted")
    localStorage.setItem(CONSENT_KEY, "accepted")
  }, [])

  const refuse = useCallback(() => {
    setConsent("refused")
    localStorage.setItem(CONSENT_KEY, "refused")
  }, [])

  return (
    <ConsentContext.Provider value={{ consent, accept, refuse }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
      </ThemeProvider>
    </ConsentContext.Provider>
  )
}
