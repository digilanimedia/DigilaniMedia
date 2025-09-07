"use client";

import { motion } from "framer-motion";
import React from "react";

type BrandHeadingProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export function BrandHeading({
  children,
  level = 1,
  className = "",
}: BrandHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Tag className={`font-bold tracking-tight ${className}`}>{children}</Tag>
    </motion.div>
  );
}
