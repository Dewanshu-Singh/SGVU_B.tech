import { Sparkles, Smartphone, Zap, Hammer, Rocket } from 'lucide-react'
import { pillarsHeading, pillars } from '../data/pillars'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import { accents, hexToRgba } from '../lib/colors'

const ICONS = { Sparkles, Smartphone, Zap, Hammer, Rocket }

export default function Pillars() {
  return (
    <section className="relative overflow-hidden pt-0 pb-[84px] bg-grid-light">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(560px 380px at 92% 0%, rgba(217,169,78,.10), transparent 60%), radial-gradient(480px 360px at 4% 100%, rgba(79,184,174,.10), transparent 60%)',
        }}
      />
      <div className="relative max-w-[1180px] mx-auto px-6">
        <Eyebrow onLight>{pillarsHeading.eyebrow}</Eyebrow>
        <h2 className="font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(1.7rem,3.6vw,2.6rem)] mt-3.5 mb-3 text-textdark">
          {pillarsHeading.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-[18px] mt-11">
          {pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon]
            const color = accents[pillar.accent] ?? accents.violet
            return (
              <Reveal
                key={pillar.title}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`rounded-brand p-7 bg-white border cursor-pointer ${
                  pillar.wide
                    ? 'md:col-span-2 border-lime bg-gradient-to-r from-lime/10 to-white'
                    : 'border-textdark/10'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-[10px] grid place-items-center mb-4 transition-transform hover:scale-110"
                  style={{ backgroundColor: hexToRgba(color, 0.12), color }}
                >
                  {Icon && <Icon size={19} strokeWidth={1.75} />}
                </div>
                <span
                  className="font-mono text-[0.64rem] tracking-[0.12em] uppercase"
                  style={{ color }}
                >
                  {pillar.kicker}
                </span>
                <h3 className="font-display font-bold text-xl mt-2.5 mb-2 text-textdark">{pillar.title}</h3>
                <p className="text-[0.9rem] text-muted-light">{pillar.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
