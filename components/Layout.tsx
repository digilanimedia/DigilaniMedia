"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart"> & MotionProps;

export function Layout({ children, ...props }: LayoutProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
}
