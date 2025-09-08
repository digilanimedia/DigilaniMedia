// components/BrandHeading.tsx
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface BrandHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const BrandHeading: React.FC<BrandHeadingProps> = ({
  children,
  level = 1,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <motion[Tag]
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion[Tag]>
  );
};
