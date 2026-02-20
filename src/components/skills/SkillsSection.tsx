import SkillItem from "./SkillsItem";

export default function SkillsSection() {
  const skills = [
    {
      language: "C#",
      description:
        "",
    },
    {
      language: ".NET",
      description:
        "",
    },
    {
      language: "React",
      description:
        "",
    },
    {
      language: "Next",
      description:
        "",
    },
    {
      language: "JavaScript",
      description:
        "",
    },
    {
      language: "Tailwind",
      description:
        "",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-3xl px-1">
        <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>

        <div className="space-y-8">
          {skills.map((exp, index) => (
            <SkillItem
              key={index}
              language={exp.language}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}