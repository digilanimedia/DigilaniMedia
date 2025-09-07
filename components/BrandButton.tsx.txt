"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export function BrandButton({ children, className = "", ...props }: BrandButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`bg-[#e49400] text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-colors duration-300 hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
