import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types/index";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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
}: {
  params: { slug: string };
}) {
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
