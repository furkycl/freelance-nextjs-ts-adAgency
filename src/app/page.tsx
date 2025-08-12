"use client";

import Button from "../../components/Button";
import ProjectCard from "../../components/ProjectCard";

const featuredProjects = [
  {
    title: "Marka Kimliği Projesi",
    category: "Tasarım & Strateji",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
  },
  {
    title: "Billboard Kampanyası",
    category: "Açıkhava Reklamcılığı",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
  },
  {
    title: "Dijital Ürün Lansmanı",
    category: "Web & Mobil Tasarım",
    imageUrl:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Yaratıcı Fikirler, Etkileyici Tasarımlar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Markanızın potansiyelini ortaya çıkarıyoruz.
          </p>
          <Button>Projelerimizi Keşfedin</Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Öne Çıkan Çalışmalarımız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
