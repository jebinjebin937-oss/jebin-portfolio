"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const getScrollAmount = () => {
      return -(track.scrollWidth - window.innerWidth);
    };

    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${track.scrollWidth - window.innerWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// Pause after pinning
tl.to({}, { duration: 0.4 });

// Then start moving
tl.to(track, {
  x: getScrollAmount,
  ease: "none",
  duration: 0.75,
});

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#F8F4FB]"
    >
      <div className="h-screen flex flex-col justify-center">

        <div className="max-w-7xl mx-auto w-full px-6 mb-16">

          <p className="uppercase tracking-[6px] text-sm font-semibold text-[#A56ABD]">
            MY WORK
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#49225B]">
            Featured Projects
          </h2>

        </div>

        <div
          ref={trackRef}
          className="flex gap-10 px-[8vw] w-max"
        >
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}