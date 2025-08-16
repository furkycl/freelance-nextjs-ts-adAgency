export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="pt-40 text-center">
      <h1 className="text-4xl">Test Sayfası</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
