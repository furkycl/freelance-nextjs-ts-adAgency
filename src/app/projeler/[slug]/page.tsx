import { projectsData } from "../../../../data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
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
  return <ProjectDetailClient project={project} />;
}
