"use client";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-12 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroLeft />

          <HeroRight />

        </div>
      </div>
    </section>
  );
}