import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  "imageUrl": imageUrl.asset->url,
  videoUrl
}`;

export const singleProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  "imageUrl": imageUrl.asset->url,
  videoUrl,
  description,
  "gallery": gallery[].asset->url
}`;
