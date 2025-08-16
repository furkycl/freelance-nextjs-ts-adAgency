import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types";
// import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};
/*
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const project: Project = await client.fetch(singleProjectQuery, { slug });
  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project.title} | Şirket Adı`,
    description: project.description.substring(0, 155),
    openGraph: {
      title: `${project.title} | Şirket Adı`,
      description: project.description.substring(0, 155),
      images: [project.imageUrl, ...previousImages],
    },
  };
}
*/
export default async function ProjectDetailPage({ params }: Props) {
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });
  if (!project) {
    notFound();
  }
  return <ProjectDetailClient project={project} />;
}
