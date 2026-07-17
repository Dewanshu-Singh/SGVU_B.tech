import { Home, Dumbbell, PartyPopper, ShieldCheck } from 'lucide-react'
import { campusLifeHeading, campusLifeCards, accreditations } from '../data/campusLife'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import PhotoPlaceholder from '../components/ui/PhotoPlaceholder'
import AccreditationBadge from '../components/ui/AccreditationBadge'
import { accents, hexToRgba } from '../lib/colors'

const ICONS = [Home, Dumbbell, PartyPopper, ShieldCheck]

export default function CampusLife() {
  return (
    <section id="campus-life" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={campusLifeHeading.eyebrow}
          title={campusLifeHeading.title}
          sub={campusLifeHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11">
          {campusLifeCards.map((card, i) => {
            const Icon = ICONS[i]
            const color = accents[card.accent] ?? accents.violet
            return (
              <Reveal
                key={card.title}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full transition-transform duration-500 hover:scale-105">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute -bottom-4 left-5 w-[42px] h-[42px] rounded-[10px] grid place-items-center shadow-lg"
                    style={{ backgroundColor: color, color: '#0D0A1C' }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="p-5 pt-6">
                  <h3 className="font-display font-bold text-base mb-1.5">{card.title}</h3>
                  <p className="text-[0.82rem] text-muted-light">{card.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-16 pt-10 border-t border-dashed border-textdark/15">
          {accreditations.map((badge) => (
            <AccreditationBadge key={badge.title} onLight {...badge} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
