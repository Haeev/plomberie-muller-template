"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  "aria-label"?: string
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps & {
  href: string
  target?: string
  rel?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand shadow-sm",
  secondary:
    "bg-accent text-white hover:bg-accent/90 focus-visible:ring-accent shadow-sm",
  outline:
    "border-2 border-brand text-brand hover:bg-brand hover:text-white focus-visible:ring-brand",
  ghost:
    "text-fg hover:bg-surface-2 focus-visible:ring-fg",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    const { target, rel, ...linkProps } = props as ButtonAsLink
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        {...(linkProps as Record<string, unknown>)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
