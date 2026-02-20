import { IconType } from "react-icons"

interface SkillItemProps {
  language: string
  logo: IconType
  description: string
}

export default function SkillItem({
  language,
  logo: Logo,
  description,
}: SkillItemProps) {
  return (
    <div className="border-b border-white/10 pb-6">
      <div className="flex items-center justify-between">
        <Logo className="w-6 h-6 text-gray-300" />

        <h3 className="flex gap-4 text-base font-semibold text-white">
         {language}
        </h3>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>
    </div>
  )
}