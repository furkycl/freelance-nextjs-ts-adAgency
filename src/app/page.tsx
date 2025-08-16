import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import HomePageClient from "../app/components/HomePageClient";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  gallery: string[];
}

export default async function HomePage() {
  const projects: Project[] = await client.fetch(projectsQuery);
  return <HomePageClient projects={projects} />;
}
