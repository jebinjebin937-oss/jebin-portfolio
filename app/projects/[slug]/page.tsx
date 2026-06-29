type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#49225B]">
          {slug}
        </h1>

        <p className="mt-4 text-[#6E3482]">
          Project details page coming soon...
        </p>
      </div>
    </main>
  );
}