"use client";

import Image from "next/image";
import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  slug,
  title,
  category,
  imageUrl,
  videoUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVideo = (videoElement: HTMLVideoElement | null) => {
    if (!videoElement) return;

    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        if (error.name !== "AbortError" && error.name !== "NotAllowedError") {
          console.error("Video oynatma sırasında beklenmedik hata:", error);
        }
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoRef.current.readyState > 2) {
      playVideo(videoRef.current);
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
    if (isHovered) {
      playVideo(videoRef.current);
    }
  };

  return (
    <Link
      href={`/projeler/${slug}`}
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
    >
      <div
        className="cursor-pointer"
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
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "media-visible" : "media-hidden"}`}
          />
        </motion.div>

        <div className="p-4 bg-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
