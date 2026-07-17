import { Brain, Database, Cloud, Bot, ShieldCheck } from 'lucide-react'
import { specializations } from '../data/specializations'
import { accents, hexToRgba } from '../lib/colors'

const ICONS = { Brain, Database, Cloud, Bot, ShieldCheck }

export default function SpecializationQuickLinks() {
  return (
    <nav aria-label="Specializations quick access" className="mt-6 -mx-1 overflow-x-auto pb-1">
      <div className="flex gap-2.5 px-1 min-w-max sm:min-w-0 sm:flex-wrap">
        {specializations.map((spec) => {
          const Icon = ICONS[spec.icon]
          const color = accents[spec.accent] ?? accents.violet
          return (
            <a
              key={spec.title}
              href="#specializations"
              className="flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-full border bg-white transition-transform hover:-translate-y-0.5"
              style={{ borderColor: hexToRgba(color, 0.3) }}
            >
              <span
                className="w-6 h-6 rounded-full grid place-items-center shrink-0"
                style={{ backgroundColor: hexToRgba(color, 0.14), color }}
              >
                {Icon && <Icon size={13} strokeWidth={2} />}
              </span>
              <span className="font-mono text-[0.72rem] text-textdark whitespace-nowrap">{spec.title}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
