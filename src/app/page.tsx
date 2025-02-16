import Navbar from "@/components/_ui/Navbar";
import ParticleBackground from "@/components/_ui/Particle";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Proficiency from "@/pages/Proficiency";
import Projects from "@/pages/Projects";

export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col">
      
    <ParticleBackground />
    <Navbar />

      <Hero />
       <Proficiency />
      <Projects/>
      {/*<Experience /> */}
      <Contact />
      {/* <Articles /> */}
    </div>
  </main>
  );
}
