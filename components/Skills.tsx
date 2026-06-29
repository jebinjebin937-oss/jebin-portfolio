"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    color: "text-cyan-300",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "text-purple-300",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "AI / ML",
    color: "text-cyan-300",
    skills: ["Python", "YOLOv5", "OpenCV", "PyTorch"],
  },
  {
    title: "Tools",
    color: "text-purple-300",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 md:px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >
              <h3 className={`text-2xl font-bold mb-6 ${group.color}`}>
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-white/80
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:text-cyan-300
                      hover:-translate-y-1
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}