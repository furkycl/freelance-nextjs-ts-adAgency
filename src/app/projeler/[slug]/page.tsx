import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "project"]{ "slug": slug.current }`
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
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
