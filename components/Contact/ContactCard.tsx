import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
};

export default function ContactCard({
  icon,
  title,
  subtitle,
  href,
}: Props) {
  return (
    <Link
  href={href}
  target={href.startsWith("mailto:") ? undefined : "_blank"}
  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="
      group
      relative
      bg-white
      rounded-[34px]
      p-5 lg:p-6
      border
      border-transparent
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_rgba(73,34,91,0.18)]
      hover:border-[#E6D5F1]
      "
    >
     <div className="flex items-center justify-between">

  <div className="flex items-center gap-4">

    <div
      className="
        w-12
        h-12
        rounded-2xl
        bg-[#F4ECFA]
        text-[#49225B]
        flex
        items-center
        justify-center

        transition-all
        duration-300

        group-hover:bg-[#49225B]
        group-hover:text-white
        group-hover:rotate-6
      "
    >
      {icon}
    </div>

    <div>
      <h3 className="text-xl font-bold text-[#49225B]">
        {title}
      </h3>

      <p className="text-[#777] text-sm">
        {subtitle}
      </p>
    </div>

  </div>

  <ArrowUpRight
    className="
      text-[#49225B]
      transition-transform
      duration-300
      group-hover:rotate-45
    "
  />

</div>
    </Link>
  );
}