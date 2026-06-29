"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Damage Detection",
    description:
      "Deep learning based vehicle damage detection using YOLOv5 and Computer Vision.",
    tech: ["Python", "YOLOv5", "OpenCV"],
  },
  
  {
    title: "Solex Ecommerce",
    description:
      "Premium footwear ecommerce platform built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 md:px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 pt-24"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              overflow-hidden
              "
            >

              <div
                className="
                h-52
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500/20
                to-purple-500/20
                mb-6
                "
              />

              <h3 className="text-3xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-white/70 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="
      px-3
      py-2
      rounded-full
      bg-white/5
      border
      border-white/10
      text-sm
      "
    >
      {tech}
    </span>
  ))}
</div>

<div className="flex gap-3 mt-6">
  <button
    className="
    px-5
    py-2
    rounded-full

    bg-cyan-500/20
    border
    border-cyan-400/30

    hover:bg-cyan-500/30
    transition-all
    "
  >
    Live Demo
  </button>

  <button
    className="
    px-5
    py-2
    rounded-full

    bg-white/5
    border
    border-white/10

    hover:bg-white/10
    transition-all
    "
  >
    View Details
  </button>
</div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}