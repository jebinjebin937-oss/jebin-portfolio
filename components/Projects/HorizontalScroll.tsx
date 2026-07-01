"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

    const updateButtons = () => {
  const container = mobileTrackRef.current;
  if (!container) return;

  const maxScroll = container.scrollWidth - container.clientWidth;

  setCanScrollLeft(container.scrollLeft > 5);
  setCanScrollRight(container.scrollLeft < maxScroll - 5);
};

  useEffect(() => {
  const container = mobileTrackRef.current;

  if (!container) return;

  updateButtons();

  container.addEventListener("scroll", updateButtons);

  return () => {
    container.removeEventListener("scroll", updateButtons);
  };
}, []);



const scrollLeft = () => {
  const container = mobileTrackRef.current;
  if (!container || !canScrollLeft) return;

  container.scrollBy({
    left: -350,
    behavior: "smooth",
  });

  setTimeout(updateButtons, 350);
};

const scrollRight = () => {
  const container = mobileTrackRef.current;
  if (!container || !canScrollRight) return;

  container.scrollBy({
    left: 350,
    behavior: "smooth",
  });

  setTimeout(updateButtons, 350);
};

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

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#49225B]">
            Featured Projects
          </h2>

        </div>

        {/* Mobile & Tablet */}
<div className="xl:hidden">

  {/* Arrow Buttons */}
  

  <div className="relative flex items-center">

  <button
  aria-label="Previous project"
  onClick={scrollLeft}
 className={`
  absolute
  left-2
  top-1/2
  -translate-y-1/2
  z-20
  w-11
  h-11
  rounded-full
  backdrop-blur-md
  shadow-lg
  flex
  items-center
  justify-center
  transition-all
  duration-300
  ${
    canScrollLeft
      ? "bg-white/80 hover:scale-110"
      : "bg-white/40 opacity-50 cursor-not-allowed"
  }
`}
  >
    <ChevronLeft
  size={20}
  aria-hidden="true"
/>
  </button>

  <div
    ref={mobileTrackRef}
    className="
      flex
      gap-6
      overflow-x-auto
      snap-x
      snap-mandatory
      px-6
      pb-4
      scrollbar-hide
    "
  >
    {projectsData.map((project) => (
      <div
        key={project.slug}
        className="snap-center shrink-0"
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>

<button
  aria-label="Next project"
  onClick={scrollRight}
 className={`
  absolute
  right-2
  top-1/2
  -translate-y-1/2
  z-20
  w-11
  h-11
  rounded-full
  backdrop-blur-md
  shadow-lg
  flex
  items-center
  justify-center
  transition-all
  duration-300
  ${
    canScrollRight
      ? "bg-white/80 hover:scale-110"
      : "bg-white/40 opacity-50 cursor-not-allowed"
  }
`}
>
  <ChevronRight
  size={20}
  aria-hidden="true"
/>
</button>

</div>

</div>

{/* Desktop GSAP */}
<div
  ref={trackRef}
  className="hidden xl:flex gap-10 px-[8vw] w-max"
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