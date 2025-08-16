import { client } from "@/sanity/lib/client";
import { singleProjectQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { Project } from "../../../../types/";

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
  const project: Project = await client.fetch(singleProjectQuery, {
    slug: params.slug,
  });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
