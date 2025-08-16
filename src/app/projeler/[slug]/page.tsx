import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

async function getProjectData(slug: string): Promise<Project> {
  const project = await client.fetch(singleProjectQuery, { slug });
  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectData(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Şirket Adı`,
    description: project.description.substring(0, 155),
    openGraph: {
      title: `${project.title} | Şirket Adı`,
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

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectData(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
