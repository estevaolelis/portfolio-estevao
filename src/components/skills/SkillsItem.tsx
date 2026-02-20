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
      <div className="flex items-center gap-3">
        <Logo className="w-5 h-5 text-gray-300" />

        <h3 className="text-sm font-semibold text-white">
         {language}
        </h3>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {description}
      </p>
    </div>
  )
}