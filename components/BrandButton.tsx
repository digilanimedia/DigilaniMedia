import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

type BrandButtonProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export const BrandButton: React.FC<BrandButtonProps> = ({
  children,
  className = "",
  ...motionProps
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};
