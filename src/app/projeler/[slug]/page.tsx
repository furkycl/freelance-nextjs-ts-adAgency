import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "../../../sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types/index";
import { Metadata } from "next";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const project: Project = await client.fetch(singleProjectQuery, { slug });

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Akgüler Reklam`,
    description: project.description.substring(0, 155),
    openGraph: {
      title: `${project.title} | Akgüler Reklam`,
      description: project.description.substring(0, 155),
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
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
