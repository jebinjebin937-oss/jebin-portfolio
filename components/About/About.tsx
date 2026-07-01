"use client";

import AboutLeft from "./AboutLeft";
import AboutCenter from "./AboutCenter";
import AboutRight from "./AboutRight";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 lg:py-24 xl:py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Top */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-20 items-center">

          <AboutLeft />

          <AboutCenter />

        </div>

        {/* Bottom */}

        <div className="mt-12 lg:mt-14 xl:mt-16">

          <AboutRight />

        </div>

      </div>
    </section>
  );
}