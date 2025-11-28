import { Hero } from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
