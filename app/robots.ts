import type { MetadataRoute } from "next"
import { getSiteUrl, isProduction } from "@/lib/env"

export default function robots(): MetadataRoute.Robots {
  if (!isProduction()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}
