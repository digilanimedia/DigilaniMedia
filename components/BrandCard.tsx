// components/BrandCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface BrandCardProps {
  title: string;
  excerpt: string;
  link: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({ title, excerpt, link }) => {
  return (
    <motion.div
      className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <a
        href={link}
        className="text-brand font-semibold hover:underline"
      >
        Learn More →
      </a>
    </motion.div>
  );
};
