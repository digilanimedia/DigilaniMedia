"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface BrandHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export function BrandHeading({ children, level = 2, className = "" }: BrandHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <motion[Tag]
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`font-bold tracking-tight text-white mb-4 ${className}`}
    >
      <span className="text-[#e49400]">▌</span> {children}
    </motion[Tag]>
  )
}
