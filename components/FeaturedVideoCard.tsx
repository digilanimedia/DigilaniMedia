"use client"

import { motion } from "framer-motion"

interface FeaturedVideoCardProps {
  title: string
  youtubeId: string
  className?: string
}

export function FeaturedVideoCard({ title, youtubeId, className = "" }: FeaturedVideoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-md ${className}`}
    >
      {/* Responsive YouTube embed */}
      <div className="relative w-full pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <span className="text-sm text-[#e49400] font-medium">Watch Now →</span>
      </div>
    </motion.div>
  )
}
