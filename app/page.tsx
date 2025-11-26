import { Hero } from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="bg-black">
        <Hero />
        <About />
    </div>
  );
}
