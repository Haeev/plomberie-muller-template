import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
}

const Section = ({ children, className, id, as: Tag = "section" }: SectionProps) => (
  <Tag id={id} className={cn("py-20 lg:py-28", className)}>
    {children}
  </Tag>
)

export default Section
