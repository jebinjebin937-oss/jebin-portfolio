"use client";

import TechStack from "./TechStack";
import SocialLinks from "./SocialLinks";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Eye, Download } from "lucide-react";

export default function HeroLeft() {
  const [resumeOpen, setResumeOpen] = useState(false);

const resumeRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      resumeRef.current &&
      !resumeRef.current.contains(event.target as Node)
    ) {
      setResumeOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div className="flex flex-col items-center lg:items-start">

      {/* Greeting */}

      <p className="text-[#A56ABD] text-base sm:text-lg font-medium text-center lg:text-left">
        Hello There! 👋
      </p>

      {/* Name */}

      <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#49225B] text-center lg:text-left">
        JEBIN <span className="text-[#A56ABD]">J</span>
      </h1>

      {/* Subtitle */}

      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-[#6E3482] text-center lg:text-left">
        Full Stack Developer | Building Modern Web Experiences
      </h2>

      {/* Description */}

      <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-7 sm:leading-8 text-[#6E3482] text-center lg:text-left">
        I build modern web applications with clean UI, great user experience, and scalable solutions.
Passionate about creating products people enjoy using.
      </p>

      {/* Buttons */}

      <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start gap-4">

        <a
  href="#projects"
  className="
    inline-flex
    items-center
    justify-center
    px-9
    py-4
    rounded-full
    bg-[#49225B]
    text-white
    font-medium
    transition-all
    duration-300
    hover:bg-[#6E3482]
  "
>
  View Projects
</a>

        {/* Desktop */}
<div className="hidden lg:block">
  <a
    href="/Jebin_Resume.pdf"
    download="Jebin_Resume.pdf"
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      rounded-full
      border
      border-[#A56ABD]/30
      bg-white/50
      text-[#49225B]
      font-medium
      transition-all
      duration-300
      hover:bg-white
    "
  >
    Download Resume
  </a>
</div>

{/* Mobile */}
<div
  ref={resumeRef}
  className="relative lg:hidden flex justify-center"
>
  <button
    onClick={() => setResumeOpen(!resumeOpen)}
    className="
      inline-flex
      items-center
      gap-2
      px-8
      py-4
      rounded-full
      border
      border-[#A56ABD]/30
      bg-white/50
      text-[#49225B]
      font-medium
    "
  >
    Resume
    <ChevronDown
      size={18}
      className={`transition-transform ${
        resumeOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {resumeOpen && (
    <div
      className="
        absolute
        left-0
        mt-3
        w-56
        rounded-2xl
        bg-white
        shadow-xl
        border
        border-[#E6D5F1]
        overflow-hidden
        z-50
      "
    >
      <a
        href="/Jebin_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setResumeOpen(false)}
        className="flex items-center gap-3 px-5 py-4 hover:bg-[#F8F4FB]"
      >
        <Eye size={18} />
        View Resume
      </a>

      <a
        href="/Jebin_Resume.pdf"
        download="Jebin_Resume.pdf"
        onClick={() => setResumeOpen(false)}
        className="flex items-center gap-3 px-5 py-4 hover:bg-[#F8F4FB]"
      >
        <Download size={18} />
        Download Resume
      </a>
    </div>
  )}
</div>

      </div>

      <TechStack />

      <SocialLinks />

    </div>
  );
}