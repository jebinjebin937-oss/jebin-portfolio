"use client";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
];

export default function TechStack() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <div
          key={tech}
          className="
            px-3
            py-1.5
            rounded-full

            bg-white/40
            backdrop-blur-xl

            border
            border-[#A56ABD]/20

            text-[#6E3482]
            text-sm
            font-medium

            transition-all
            duration-300

            hover:bg-white/70
            hover:border-[#A56ABD]/40
            hover:-translate-y-1
          "
        >
          {tech}
        </div>
      ))}
    </div>
  );
}