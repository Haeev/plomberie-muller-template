import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
  id?: string
}

const SectionHeading = ({
  label,
  title,
  description,
  centered = false,
  className,
  id,
}: SectionHeadingProps) => (
  <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
    {label && (
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
        {label}
      </p>
    )}
    <h2 id={id} className="text-3xl font-bold leading-tight text-fg sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 max-w-2xl text-lg text-fg-muted [text-wrap:balance]">
        {description}
      </p>
    )}
  </div>
)

export default SectionHeading
