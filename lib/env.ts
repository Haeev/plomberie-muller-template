export const isProduction = () => process.env.NODE_ENV === "production"

export const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://plomberie-muller.fr"

export const getVercelEnv = () =>
  process.env.VERCEL_ENV ?? "development"
