import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      
    </main>
  );
}