import { NextRequest, NextResponse } from "next/server"

// ─── In-memory rate limiter ───────────────────────────────────────────────────
// Max 3 submissions per IP per hour.
// Note: resets on cold-start. For multi-region, use Upstash Redis.
const MAX_REQUESTS = 3
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

type RateEntry = { count: number; resetAt: number }
const rateLimitMap = new Map<string, RateEntry>()

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (entry.count >= MAX_REQUESTS) return false

  entry.count += 1
  return true
}

// ─── Contact form payload ────────────────────────────────────────────────────
type ContactPayload = {
  name: string
  phone: string
  email?: string
  service?: string
  message: string
  website?: string // honeypot — must be empty
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  // Rate limit check
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans une heure." },
      { status: 429 }
    )
  }

  let body: ContactPayload
  try {
    body = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 })
  }

  // Honeypot check — bots fill this hidden field, humans don't
  if (body.website && body.website.trim() !== "") {
    // Return 200 silently to not reveal the trap
    return NextResponse.json({ ok: true })
  }

  // Basic validation
  const { name, phone, message } = body
  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Les champs nom, téléphone et message sont requis." },
      { status: 422 }
    )
  }

  // TODO: configurer RESEND_API_KEY en phase 2
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: "site@plomberie-muller.fr",
  //   to: "contact@plomberie-muller.fr",
  //   subject: `Nouvelle demande — ${name}`,
  //   html: `<p><b>Nom :</b> ${name}</p><p><b>Tél :</b> ${phone}</p>...`,
  // })

  return NextResponse.json({ ok: true }, { status: 200 })
}
