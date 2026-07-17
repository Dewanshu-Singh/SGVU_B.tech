import { Cpu, Bot, Waves, Glasses } from 'lucide-react'
import { labsHeading, labs } from '../data/labs'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import PhotoPlaceholder from '../components/ui/PhotoPlaceholder'
import { accents, hexToRgba } from '../lib/colors'

const ICONS = [Cpu, Bot, Waves, Glasses]

export default function LabShowcase() {
  return (
    <section id="labs" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={labsHeading.eyebrow}
          title={labsHeading.title}
          sub={labsHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11">
          {labs.map((lab, i) => {
            const Icon = ICONS[i]
            const color = accents[lab.accent] ?? accents.violet
            return (
              <Reveal
                key={lab.title}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full transition-transform duration-500 hover:scale-105">
                    <img src={lab.image} alt={lab.title} className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute -bottom-4 left-5 w-[42px] h-[42px] rounded-[10px] grid place-items-center shadow-lg"
                    style={{ backgroundColor: color, color: '#0D0A1C' }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-6 pt-6">
                  <h3 className="font-display font-bold text-base mb-1.5">{lab.title}</h3>
                  <p className="text-[0.82rem] text-muted-light">{lab.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
