"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#49225B] text-white mt-0">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* Left */}

          <div className="max-w-lg">

            <h2 className="text-4xl lg:text-5xl font-bold">
              Let&apos;s create something people remember.
            </h2>

            <p className="mt-6 text-white/70 leading-8 text-lg">
              Whether it&apos;s a website, an idea, or a collaboration,
  I&apos;m always excited to build meaningful digital experiences.
            </p>

            <Link
              href="#contact"
              className="
              inline-flex
              items-center
              gap-2
              mt-8
              bg-white
              text-[#49225B]
              px-7
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition-all
              "
            >
              Let&apos;s Talk →
            </Link>

          </div>

          {/* Right */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            <div>

              <h3 className="uppercase tracking-[4px] text-sm text-white/60 mb-6">
                Navigation
              </h3>

              <div className="flex flex-col gap-4">

                <Link href="/">Home</Link>
                <Link href="/#about">About</Link>
                <Link href="/#skills">Skills</Link>
                <Link href="/#projects">Projects</Link>
                <Link href="/#contact">Contact</Link>

              </div>

            </div>

            <div>

              <h3 className="uppercase tracking-[4px] text-sm text-white/60 mb-6">
                Connect
              </h3>

              <div className="flex flex-col gap-4">

                <a
                  href="mailto:your@email.com"
                  className="flex items-center gap-3 hover:text-[#D4B6E6]"
                >
                  <Mail size={20} />
                  Email
                </a>

                <a
                  href="https://github.com/jebinjebin937-oss"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#D4B6E6]"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#D4B6E6]"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#D4B6E6]"
                >
                  <FaInstagram />
                  Instagram
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">

          <p className="text-white/60 text-sm sm:text-base">
            © 2026 Jebin. Designed & Developed by Jebin.
          </p>

          <button
            onClick={scrollTop}
            className="
            flex
            items-center
            gap-2
            mt-6
            md:mt-0
            hover:text-[#D4B6E6]
            transition-colors
            "
          >
            Back to Top
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}