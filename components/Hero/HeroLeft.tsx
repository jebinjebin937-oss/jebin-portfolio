"use client";

import TechStack from "./TechStack";
import SocialLinks from "./SocialLinks";

export default function HeroLeft() {
  return (
    <div>

      {/* Greeting */}

      <p className="text-[#A56ABD] text-lg font-medium">
        Hello There! 👋
      </p>

      {/* Name */}

      <h1 className="mt-6 text-7xl lg:text-7xl font-black tracking-tight text-[#49225B]">
        JEBIN <span className="text-[#A56ABD]">J</span>
      </h1>

      {/* Subtitle */}

      <h2 className="mt-5 text-3xl font-semibold text-[#6E3482]">
        Creative Developer & AI Enthusiast
      </h2>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-[#6E3482]">
        I build modern web applications with clean UI,great user experience, and AI-powered solutions.
        Passionate about creating products people enjoy using.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          className="
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
        </button>

        <button
          className="
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
        </button>

      </div>

      <TechStack />

      <SocialLinks />

    </div>
  );
}