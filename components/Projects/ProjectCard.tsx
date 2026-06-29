"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="
          group

          relative

          w-[88vw]
          max-w-[1200px]

          h-[72vh]

          rounded-[36px]

          overflow-hidden

          bg-white

          shadow-[0_25px_80px_rgba(73,34,91,0.12)]

          flex-shrink-0

          cursor-pointer
        "
      >
        {/* Image */}

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/80
            via-black/20
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            absolute

            bottom-0
            left-0
            right-0

            p-10
          "
        >
          <h2 className="text-5xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-3 text-white/80 max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tech.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2

                  rounded-full

                  bg-white/15

                  backdrop-blur-md

                  text-white
                  text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}

        <div
          className="
            absolute

            top-8
            right-8

            w-14
            h-14

            rounded-full

            bg-white/20

            backdrop-blur-md

            flex
            items-center
            justify-center

            transition-transform
            duration-300

            group-hover:rotate-45
          "
        >
          <ArrowUpRight className="text-white" size={28} />
        </div>
      </div>
    </Link>
  );
}