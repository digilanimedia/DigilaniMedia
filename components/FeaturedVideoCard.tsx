// components/FeaturedVideoCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface FeaturedVideoCardProps {
  title: string;
  youtubeId: string;
}

export const FeaturedVideoCard: React.FC<FeaturedVideoCardProps> = ({
  title,
  youtubeId,
}) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <div className="relative aspect-video">
        <iframe
          className="absolute w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};
