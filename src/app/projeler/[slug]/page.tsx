const featuredProjects = [
  {
    slug: "marka-kimligi-projesi",
    title: "Marka Kimliği Projesi",
    category: "Tasarım & Strateji",
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
  {
    slug: "bilboard-kampanyasi",
    title: "Billboard Kampanyası",
    category: "Açıkhava Reklamcılığı",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
  {
    slug: "dijital-urun-lansmani",
    title: "Dijital Ürün Lansmanı",
    category: "Web & Mobil Tasarım",
    imageUrl:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600",
    videoUrl: "/videos/project-branding.mp4",
  },
];

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div className="container mx-auto py-40 px-6">
      <h1 className="text-4xl font-bold mb-4">Proje Detay Sayfası</h1>
      <p className="text-xl">
        <span className="font-mono bg-gray-200 p-1 rounded">{slug}</span>
      </p>
    </div>
  );
}
