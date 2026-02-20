import SkillItem from "./SkillsItem"
import type { IconType } from "react-icons"

export type Skill = {
  name: string
  logo: IconType
  description: string
}

export default function SkillsGroup({
  title,
  items,
}: {
  title: string
  items: Skill[]
}) {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <SkillItem
            key={s.name}
            language={s.name}
            logo={s.logo}
            description={s.description}
          />
        ))}
      </div>
    </section>
  )
}