import { GraduationCap, Percent, FileCheck2, MessagesSquare } from 'lucide-react'
import { eligibilityHeading, eligibilityCriteria, eligibilityFootnote } from '../data/eligibility'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

const ICONS = [GraduationCap, Percent, FileCheck2, MessagesSquare]

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={eligibilityHeading.eyebrow}
          title={eligibilityHeading.title}
          sub={eligibilityHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11">
          {eligibilityCriteria.map((item, i) => {
            const Icon = ICONS[i]
            const color = accentAt(i)
            return (
              <Reveal
                key={item.title}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand p-6 cursor-pointer"
              >
                <div
                  className="w-[42px] h-[42px] rounded-[10px] grid place-items-center mb-4"
                  style={{ backgroundColor: hexToRgba(color, 0.12), color }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-[0.82rem] text-muted-light">{item.body}</p>
              </Reveal>
            )
          })}
        </div>

        <p className="text-[0.76rem] text-muted-light mt-6">{eligibilityFootnote}</p>
      </div>
    </section>
  )
}
