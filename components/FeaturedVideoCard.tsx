"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type FeaturedVideoCardProps = {
  title: string;
  youtubeId: string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart"> & MotionProps;

export function FeaturedVideoCard({ title, youtubeId, className = "", ...props }: FeaturedVideoCardProps) {
  return (
    <motion.div className={`rounded-xl shadow-md overflow-hidden ${className}`} {...props}>
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3 className="text-lg font-semibold mt-2 px-4">{title}</h3>
    </motion.div>
  );
}
