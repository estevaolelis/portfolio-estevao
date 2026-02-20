import type { GithubRepo } from "@/services/serviceGithub"

export default function ProjectCard({ project }: { project: GithubRepo }) {
  const year = new Date(project.created_at).getFullYear()

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05] hover:border-white/15"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-white">
              {project.name}
            </h3>

            <span className="text-sm text-gray-400">{year}</span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            {project.description ?? "Sem descrição"}
          </p>
        </div>

        <span className="mt-1 text-gray-500 transition group-hover:text-gray-300">
          →
        </span>
      </div>
    </a>
  )
}