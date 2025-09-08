"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type BrandCardProps = {
  title: string;
  excerpt: string;
  link: string;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart"> & MotionProps;

export function BrandCard({ title, excerpt, link, className = "", ...props }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-neutral-800 rounded-xl p-6 shadow-md ${className}`}
      {...props}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <a href={link} className="text-[#e49400] font-semibold">Read More</a>
    </motion.div>
  );
}
