"use client";
import Button from "../../components/Button";
import ProjectCard from "../../components/ProjectCard";
import Image from "next/image";

const featuredProjects = [
  {
    slug: "marka-kimligi-projesi",
    title: "Marka Kimliği Projesi",
    category: "Tasarım & Strateji",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
  {
    slug: "billboard-kampanyasi",
    title: "Billboard Kampanyası",
    category: "Açıkhava Reklamcılığı",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
  {
    slug: "dijital-urun-lansmani",
    title: "Dijital Ürün Lansmanı",
    category: "Web & Mobil Tasarım",
    imageUrl:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3000"
          alt="Yaratıcı bir çalışma ortamı"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Yaratıcı Fikirler, Etkileyici Tasarımlar
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Markanızın potansiyelini ortaya çıkarıyoruz.
          </p>
          <Button>Projelerimizi Keşfedin</Button>
        </div>
      </section>
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Öne Çıkan Çalışmalarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                slug={project.slug}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
