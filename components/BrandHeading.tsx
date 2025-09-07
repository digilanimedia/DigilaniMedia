"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type BrandHeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

export default function BrandHeading({ level = 1, children }: BrandHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionTag>
  );
}
