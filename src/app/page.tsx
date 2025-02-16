import Footer from "@/components/Footer/Footer";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Proficiency from "@/pages/Proficiency";
import Projects from "@/pages/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col">

      <Hero />
       <Proficiency />
      <Projects/>
      {/*<Experience /> */}
      <Contact />
      {/* <Articles /> */}
      <Footer/>
    </div>
  </main>
  );
}
