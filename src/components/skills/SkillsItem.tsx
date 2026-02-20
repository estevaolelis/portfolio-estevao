interface SkillItemProps {
  language: string
  description: string
}

export default function SkillItem({
  language,
  description,
}: SkillItemProps) {
  return (
    <div className="border-b border-white/10 pb-6">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {language}
        </h3>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>
    </div>
  )
}