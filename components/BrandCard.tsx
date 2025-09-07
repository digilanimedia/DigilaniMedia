"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface BrandCardProps {
  title: string
  excerpt: string
  link: string
  className?: string
  children?: ReactNode
}

export function BrandCard({ title, excerpt, link, className = "", children }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-md transition-transform ${className}`}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{excerpt}</p>
      {children}
      <Link
        href={link}
        className="text-[#e49400] font-semibold hover:underline transition-colors"
      >
        Read More →
      </Link>
    </motion.div>
  )
}
