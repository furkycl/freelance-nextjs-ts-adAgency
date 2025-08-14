"use client";

import ProjectCard from "../../../components/ProjectCard";
import { projectsData } from "../../../data/projects";
import { FadeIn } from "../../../components/FadeIn";

export default function ProjectsPage() {
  return (
    <div className="bg-white text-slate-900">
      <div className="container mx-auto px-6 pt-40 pb-24 text-center">
        <FadeIn>
          <div>
            <h1 className="text-5xl font-bold">Çalışmalarımız</h1>
            <p className="text-xl text-slate-600 mt-4">
              Markalar için yarattığımız değere yakından bakın.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="container mx-auto px-6 pb-24">
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
    </div>
  );
}
