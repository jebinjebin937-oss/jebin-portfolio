"use client";

import { motion } from "framer-motion";

export default function AboutLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-[#A56ABD] uppercase tracking-[6px] text-sm font-semibold text-center lg:text-left">
        About Me
      </p>
<div className="max-w-xl mx-auto lg:mx-0">
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#49225B] leading-tight text-center lg:text-left">
        Turning Ideas Into
        <br />
        Digital Experiences.
      </h2>
</div>
      <p className="mt-8 text-base sm:text-lg leading-8 sm:leading-9 text-[#6E3482] text-center lg:text-left">
        I'm Jebin, a Computer Science Engineering student passionate about
        building modern web applications with clean user interfaces and
        meaningful user experiences.
      </p>

      <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-[#6E3482] text-center lg:text-left">
        Alongside web development, I enjoy exploring Artificial Intelligence
        and creating projects that solve real-world problems through
        technology.
      </p>

      <a
  href="#skills"
  className="
    inline-flex
    items-center
    justify-center
    mt-10
    px-8
    py-4
    rounded-full
    bg-[#49225B]
    text-white
    font-medium
    transition-all
    duration-300
    hover:bg-[#6E3482]
    hover:-translate-y-1
  "
>
  Know More
</a>
    </motion.div>
  );
}