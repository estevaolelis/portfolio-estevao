import SkillsGroup, { Skill } from "./SkillsGroup"
import {
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiTailwindcss,
  SiPostgresql,
  SiGithub,
  SiDocker,
  SiPostman,
} from "react-icons/si"

export default function SkillsSection() {
  const languages: Skill[] = [
    { name: "C#", logo: SiSharp, description: "Object-oriented programming and backend development." },
    { name: "TypeScript", logo: SiTypescript, description: "Typed JavaScript for scalable front-end apps." },
    { name: "JavaScript", logo: SiJavascript, description: "Modern ES6+ web development." },
  ]

  const frameworks: Skill[] = [
    { name: ".NET", logo: SiDotnet, description: "APIs, services and backend architecture." },
    { name: "React", logo: SiReact, description: "Component-based UI development." },
    { name: "Next.js", logo: SiNextdotjs, description: "App Router, Server Components and SEO." },
  ]

  const tools: Skill[] = [
    { name: "Tailwind CSS", logo: SiTailwindcss, description: "Utility-first styling for responsive UI." },
    { name: "PostgreSQL", logo: SiPostgresql, description: "Relational database querying and modeling." },
    { name: "Docker", logo: SiDocker, description: "Containerization for consistent environments." },
    { name: "GitHub", logo: SiGithub, description: "Version control and collaboration workflows." },
    { name: "Postman", logo: SiPostman, description: "API testing and validation." },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        <h2 className="text-3xl font-bold text-white">Skills</h2>

        <SkillsGroup title="Languages" items={languages} />
        <SkillsGroup title="Frameworks" items={frameworks} />
        <SkillsGroup title="Tools" items={tools} />
      </div>
    </section>
  )
}