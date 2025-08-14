import { projectsData } from "../../../../data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900">
      <div className="container mx-auto px-6 py-40 text-center">
        <p className="text-lg text-slate-500 mb-2">{project.category}</p>
        <h1 className="text-5xl font-bold">{project.title}</h1>
      </div>

      <div className="container mx-auto px-6 mb-12">
        <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Proje Hakkında</h2>
          <p className="text-lg leading-relaxed text-slate-700">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">Galeri</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.gallery.map((imgUrl: string, index: number) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} galeri görseli ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
