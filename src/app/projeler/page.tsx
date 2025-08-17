import { client } from "@/src/sanity/lib/client";
import { projectsQuery } from "@/src/sanity/lib/queries";
import ProjectCard from "../../../components/ProjectCard";
import { FadeIn } from "../../../components/FadeIn";
import { Project } from "@/types";

export default async function ProjectsPage() {
  const projects: Project[] = await client.fetch(projectsQuery);
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
          {projects.map((project, index) => (
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
