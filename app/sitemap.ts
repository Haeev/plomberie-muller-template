import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/env"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
