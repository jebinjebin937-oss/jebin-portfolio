"use client";



interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  items: {
    name: string;
    icon: React.ElementType;
  }[];
}

export default function SkillCard({
  title,
  icon: Icon,
  items,
  
}: SkillCardProps) {
  return (
    <div
      
      className="
  rounded-[32px]
  border
  border-[#A56ABD]/20
  bg-white/40
  backdrop-blur-xl
  p-6 lg:p-8
  shadow-[0_20px_50px_rgba(73,34,91,0.08)]
  h-full
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:scale-[1.015]
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
    </div>
  );
}