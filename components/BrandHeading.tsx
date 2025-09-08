import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

type BrandHeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
} & MotionProps;

export const BrandHeading: React.FC<BrandHeadingProps> = ({
  children,
  level = 2,
  className = "",
  ...motionProps
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
};
