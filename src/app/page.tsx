"use client";

import Button from "../../components/Button";
import ProjectCard from "../../components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../data/projects";
import { FadeIn } from "../../components/FadeIn";

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative h-screen bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3000"
          alt="Yaratıcı bir çalışma ortamı"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Yaratıcı Fikirler, Etkileyici Tasarımlar
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Markanızın potansiyelini ortaya çıkarıyoruz.
            </p>
            <Link href="#featured-projects">
              <Button>Projelerimizi Keşfedin</Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Öne Çıkan Çalışmalarımız
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.1}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  imageUrl={project.imageUrl}
                  videoUrl={project.videoUrl}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
