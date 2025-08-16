import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "../../../sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types/index";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = params;
  const project: Project = await client.fetch(singleProjectQuery, { slug });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
