const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "category", title: "Category", type: "string" },
    {
      name: "imageUrl",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "videoUrl",
      title: "Preview Video URL",
      type: "string",
      description:
        "Örn: /videos/proje-adi.mp4. Video public/videos klasöründe olmalı.",
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

export default project;
