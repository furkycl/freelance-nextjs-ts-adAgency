import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types/index";
import { Metadata } from "next";

interface ProjectPageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });

  if (!project) {
    return { title: "Proje Bulunamadı" };
  }

  return {
    title: `${project.title} | Şirket Adı`,
    description: project.description.substring(0, 155),
    openGraph: {
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
