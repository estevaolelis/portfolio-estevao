interface ExperienceItemProps {
  role: string
  period: string
  company: string
  description: string
}

export default function ExperienceItem({
  role,
  period,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <div className="border-b border-white/10 pb-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {role}
        </h3>

        <span className="text-sm text-gray-400">
          {period}
        </span>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        {company}
      </p>
    </div>
  )
}