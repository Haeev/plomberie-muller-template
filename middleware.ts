import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { isProduction } from "@/lib/env"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!isProduction()) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
