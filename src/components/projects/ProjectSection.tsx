import { getGithubProjects } from "@/services/serviceGithub"
import ProjectCard from "./ProjectCard"

export default async function ProjectsSection() {
  const projects = await getGithubProjects()

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>

        <div className="space-y-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}