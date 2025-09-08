"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type BrandHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLHeadingElement>, "onAnimationStart"> & MotionProps;

export function BrandHeading({ level, children, className = "", ...props }: BrandHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const MotionTag = motion[Tag] as React.FC<React.HTMLAttributes<HTMLHeadingElement> & MotionProps>;

  return <MotionTag className={className} {...props}>{children}</MotionTag>;
}
