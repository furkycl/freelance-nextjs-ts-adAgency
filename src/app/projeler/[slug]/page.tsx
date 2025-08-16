import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types";
import { Metadata } from "next";

// Page props fully compatible with Next.js App Router
interface ProjectPageProps {
  params: { slug: string | string[] };
  searchParams?: Record<string, string | string[] | undefined>;
}

// Generate static paths for all projects
export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  const slugs: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

// Metadata for SEO and Open Graph
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const project: Project | null = await client.fetch(singleProjectQuery, {
    slug,
  });

  if (!project) {
    return { title: "Proje Bulunamadı" };
  }

  return {
    title: `${project.title} | Şirket Adı`,
    description: project.description?.substring(0, 155) ?? "",
    openGraph: {
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}

// Main page component
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const project: Project | null = await client.fetch(singleProjectQuery, {
    slug,
  });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
