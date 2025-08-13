"use client";

import Image from "next/image";
import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
  videoUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoRef.current.readyState > 2) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Video oynatma sırasında beklenmedik hata:", error);
          }
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCanPlay = () => {
    if (isHovered && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Video oynatma sırasında beklenmedik hata:", error);
          }
        });
      }
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image
          src={imageUrl}
          alt={`Proje görseli: ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          muted
          playsInline
          onCanPlay={handleCanPlay}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
          preload="metadata"
        />
      </motion.div>

      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
