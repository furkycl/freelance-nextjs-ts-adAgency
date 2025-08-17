import { client } from "@/src/sanity/lib/client";
import { singleProjectQuery } from "@/src/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "@/types";

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const project: Project = await client.fetch(singleProjectQuery, {
    slug: slug,
  });
  if (!project) {
    notFound();
  }
  return <ProjectDetailClient project={project} />;
}
