// components/BrandButton.tsx
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface BrandButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BrandButton: React.FC<BrandButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
