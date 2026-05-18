import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Returns true if the given hex color is perceived as dark (luminance < 50%).
 * Used to decide whether to use white or black text on top of a colored background.
 */
export const isColorDark = (hex: string): boolean => {
  const clean = hex.replace("#", "")
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  // Perceived luminance formula (WCAG)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance < 0.5
}

/** Returns initials from a string (up to 2 words) */
export const getInitials = (text: string): string =>
  text
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
