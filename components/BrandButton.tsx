"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type BrandButtonProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart"> & MotionProps;

export function BrandButton({ children, className = "", ...props }: BrandButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`bg-[#e49400] text-black font-semibold px-6 py-3 rounded-xl shadow-md transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
