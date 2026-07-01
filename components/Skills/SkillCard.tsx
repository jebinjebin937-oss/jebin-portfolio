"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  items: {
  name: string;
  icon: React.ElementType;
}[];
  index: number;
}

export default function SkillCard({
  title,
  icon: Icon,
  items,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      
      className="
        rounded-[32px]
        border
        border-[#A56ABD]/20
        bg-white/40
        backdrop-blur-xl
        p-6 lg:p-8
        shadow-[0_20px_50px_rgba(73,34,91,0.08)]
        transition-all
        duration-150
        ease-out
        h-full
      "
    >
      {/* Icon */}

      <div
        className="
          w-14
          h-14

          rounded-2xl

          bg-[#A56ABD]/10

          flex
          items-center
          justify-center

          text-[#6E3482]
          text-2xl
        "
      >
        <Icon />
      </div>

      {/* Title */}

      <h3 className="mt-5 text-xl lg:text-2xl font-bold text-[#49225B]">
        {title}
      </h3>

      <div
  className="
    mt-5
    w-16
    h-[3px]
    rounded-full
    bg-[#A56ABD]
  "
/>

      {/* Skills */}

      <div className="mt-8">
  {items.map((item) => {
    const SkillIcon = item.icon;

    return (
      <div
        key={item.name}
        className="
          flex
          items-center
          gap-4

          py-3

          border-b
          border-[#A56ABD]/10

          last:border-none
        "
      >
        <SkillIcon
          className="text-[#A56ABD]"
          size={20}
        />

        <span
  className="
    text-[#6E3482]
    text-sm lg:text-base
    font-medium
  "
>
          {item.name}
        </span>
      </div>
    );
  })}
</div>
    </motion.div>
  );
}