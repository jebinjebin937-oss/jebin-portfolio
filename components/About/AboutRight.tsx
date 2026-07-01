"use client";

import { motion } from "framer-motion";

const details = [
  {
    title: "Education",
    value: "Bachelor of Technology",
    sub: "Computer Science & Engineering • 2022–2026",
  },

  {
    title: "Institution",
    value: "Hindustan Institute of Technology and Science",
    sub: "Chennai, Tamil Nadu",
  },

  {
    title: "Specialization",
    value: "Full Stack Development",
    sub: "Next.js • React • Node.js",
  },

  {
    title: "Location",
    value: "Chennai, India",
    sub: "Open to Full-Time Opportunities",
  },
];

export default function AboutRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
    >
      {details.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            bg-white/40
            backdrop-blur-xl
            border
            border-[#A56ABD]/20
            p-4 sm:p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/60
            hover:shadow-lg
          "
        >
          <p className="text-sm uppercase tracking-[3px] text-[#A56ABD]">
            {item.title}
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#49225B]">
            {item.value}
          </h3>

          <p className="mt-1 text-[#6E3482]">
            {item.sub}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}