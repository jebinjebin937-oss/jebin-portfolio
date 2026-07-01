"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 pt-8 pb-20 lg:pt-10 lg:pb-24 xl:pt-12 xl:pb-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#A56ABD] uppercase tracking-[6px] text-sm font-semibold">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#49225B]">
            Tech Stack
          </h2>

          <p className="mt-6 text-[#6E3482] max-w-2xl mx-auto">
            Technologies I use to build modern web applications and AI-powered
            solutions.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}

        <div
  className="
    mt-16 lg:mt-16 xl:mt-20
    flex
    gap-5 lg:gap-6 xl:gap-8
    overflow-x-auto
    pb-4
    snap-x
    snap-mandatory
    scroll-smooth
    px-1
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="
                w-[280px]
                sm:w-[320px]
                snap-center
                flex-shrink-0
              "
            >
              <SkillCard
                title={skill.title}
                icon={skill.icon}
                items={skill.items}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}