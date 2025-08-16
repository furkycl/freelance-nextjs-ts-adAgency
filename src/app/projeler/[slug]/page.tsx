import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types";

type Props = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: Props) {
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
