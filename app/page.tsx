import { Hero } from "@/components/Hero";
import Projects from "@/components/projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-black">
        <Hero />
        <About />
    </div>
  );
}
