import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Developer",
      period: "2025 — 2026",
      company: "TMB · São José dos Campos, Brazil",
      description:
        "Worked on the development and maintenance of scalable web applications, contributing to backend APIs, database modeling and performance optimization. Implemented automated tests using Playwright and validated integrations with external services. Actively collaborated with cross-functional teams to improve system reliability, monitoring and deployment workflows.",
    },
    {
      role: "Quality Assurance Engineer",
      period: "2024 — 2025",
      company: "TMB · São José dos Campos, Brazil",
      description:
        "Responsible for automated and manual testing, API validation, Playwright e2e tests, Azure DevOps documentation and database validation.",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-3xl px-1">
        <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              period={exp.period}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
