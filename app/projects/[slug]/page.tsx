import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";


import { projectsData } from "@/components/Projects/projectsData";
import GalleryLightbox from "@/components/Projects/GalleryLightbox";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = projectsData.find((p) => p.slug === slug);

  const currentIndex = projectsData.findIndex(
  (p) => p.slug === slug
);

const previousProject =
  currentIndex > 0
    ? projectsData[currentIndex - 1]
    : null;

const nextProject =
  currentIndex < projectsData.length - 1
    ? projectsData[currentIndex + 1]
    : null;

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F4FB]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        

      
      <Link
  href="/"
  className="inline-flex items-center gap-2 text-[#6E3482] hover:text-[#49225B]"
>
  <ArrowLeft size={20} />
  Back to Portfolio
</Link>

        {/* Title */}

        <div className="mt-10">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#49225B]">
            {project.title}
          </h1>

          <p className="mt-4 text-lg lg:text-xl text-[#6E3482]">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Image */}

        <div className="relative mt-10 lg:mt-10 xl:mt-14 w-full h-[260px] sm:h-[420px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Stats */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
  {project.stats.map((stat, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-6 shadow-md text-center"
    >
      <h3 className="text-3xl font-bold text-[#49225B]">
        {stat.value}
      </h3>

      <p className="text-[#666] mt-2">
        {stat.label}
      </p>
    </div>
  ))}
</div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#49225B] text-white px-8 py-4 rounded-2xl hover:scale-105 hover:bg-[#5d2b74] transition-all duration-300"
          >
            <FaGithub size={20} />
            GitHub
          </a>
{project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-[#49225B] text-[#49225B] px-8 py-4 rounded-2xl hover:bg-[#49225B] hover:text-white transition-all duration-300"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
)}
        </div>

        {/* Overview */}

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#49225B]">
            Overview
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#555]">
            {project.overview}
          </p>
        </section>

        {/* Highlights */}

<section className="mt-20">

  <h2 className="text-3xl font-bold text-[#49225B]">
    Project Highlights
  </h2>

  <div className="grid md:grid-cols-3 gap-6 mt-10">

    {project.highlights.map((item) => (

      <div
        key={item.title}
        className="
          bg-white
          rounded-3xl
          p-8
          shadow-lg
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-300
        "
      >

        <h3 className="text-2xl font-bold text-[#49225B]">
          {item.title}
        </h3>

        <p className="mt-4 text-[#666] leading-7">
          {item.description}
        </p>

      </div>

    ))}

  </div>

</section>

        {/* Tech */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-[#49225B]">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.tech.map((item) => (
              <span
                key={item}
                className="bg-white px-6 py-3 rounded-full shadow-md"
              >
                {item}
              </span>
            ))}
          </div>

        </section>

        

        {/* Gallery */}

<section className="mt-20">

  <h2 className="text-3xl font-bold text-[#49225B]">
    Project Gallery
  </h2>

  {project.gallery.length > 0 && (
    <GalleryLightbox images={project.gallery} />
  )}


</section>

{/* Challenges & Learnings */}

<section className="mt-20 grid md:grid-cols-2 gap-8">

  <div className="bg-white rounded-3xl p-10 shadow-lg">

    <h2 className="text-3xl font-bold text-[#49225B]">
      Challenges
    </h2>

    <p className="mt-6 leading-8 text-[#666]">
      {project.challenges}
    </p>

  </div>

  <div className="bg-white rounded-3xl p-10 shadow-lg">

    <h2 className="text-3xl font-bold text-[#49225B]">
      What I Learned
    </h2>

    <p className="mt-6 leading-8 text-[#666]">
      {project.learnings}
    </p>

  </div>

</section>

        {/* Features */}

<section className="mt-20">

  <h2 className="text-3xl font-bold text-[#49225B]">
    Key Features
  </h2>

  <div className="grid md:grid-cols-2 gap-6 mt-10">

    {project.features.map((feature) => (

      <div
        key={feature}
        className="
          bg-white
          rounded-2xl
          p-6
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
        "
      >

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[#49225B] text-white flex items-center justify-center">
            ✓
          </div>

          <h3 className="font-semibold text-lg text-[#49225B]">
            {feature}
          </h3>

        </div>

      </div>

    ))}


  </div>

</section>

<section className="mt-14 pt-5 flex justify-between">

  <div>
    {previousProject ? (
      <Link
        href={`/projects/${previousProject.slug}`}
        className="text-[#49225B] font-semibold"
      >
        ← {previousProject.title}
      </Link>
    ) : (
      <Link
        href="/"
        className="text-[#49225B] font-semibold"
      >
        ← Back to Portfolio
      </Link>
    )}
  </div>

  <div>
    {nextProject ? (
      <Link
        href={`/projects/${nextProject.slug}`}
        className="text-[#49225B] font-semibold"
      >
        {nextProject.title} →
      </Link>
    ) : (
      <Link
        href="/"
        className="text-[#49225B] font-semibold"
      >
        Back to Portfolio →
      </Link>
    )}
  </div>

</section>
      </div>
    </main>
  );
}