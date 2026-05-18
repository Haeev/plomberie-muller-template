"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimatedItemProps = {
  children: React.ReactNode
  className?: string
  index?: number
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
  },
}

export const AnimatedList = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    className={cn(className)}
  >
    {children}
  </motion.div>
)

const AnimatedItem = ({ children, className }: AnimatedItemProps) => (
  <motion.div variants={itemVariant} className={cn(className)}>
    {children}
  </motion.div>
)

export default AnimatedItem
