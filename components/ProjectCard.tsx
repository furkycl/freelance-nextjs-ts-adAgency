import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, category, imageUrl }) => {
  return (
    <div className="group rounded-lg overflow-hidden cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Proje görseli: ${title}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
