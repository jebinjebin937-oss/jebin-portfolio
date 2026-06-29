"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/YOUR_USERNAME",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/YOUR_USERNAME",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:youremail@example.com",
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="
              w-12
              h-12

              rounded-full

              bg-white/50
              backdrop-blur-xl

              border
              border-[#A56ABD]/20

              flex
              items-center
              justify-center

              text-[#6E3482]

              transition-all
              duration-300

              hover:bg-[#49225B]
              hover:text-white
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}