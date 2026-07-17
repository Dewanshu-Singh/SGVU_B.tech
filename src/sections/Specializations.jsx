import { specializationsHeading, specializations } from '../data/specializations'
import SectionHeading from '../components/ui/SectionHeading'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import { accents, hexToRgba } from '../lib/colors'

export default function Specializations() {
  return (
    <section id="specializations" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={specializationsHeading.eyebrow}
          title={specializationsHeading.title}
          sub={specializationsHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-11">
          {specializations.map((spec, i) => {
            const color = accents[spec.accent] ?? accents.violet
            return (
              <Reveal
                key={spec.title}
                delay={i * 0.1}
                className="h-full"
              >
                <motion.div
                  className="bg-white border-[1.5px] border-textdark/10 rounded-brand p-6 h-full cursor-pointer"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    borderColor: color,
                    boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span
                    className="inline-block font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-4"
                    style={{ color, backgroundColor: hexToRgba(color, 0.1) }}
                  >
                    {spec.tag}
                  </span>
                  <h3 className="font-display font-bold text-[1.16rem] mb-2">{spec.title}</h3>
                  <p className="text-[0.88rem] text-muted-light">{spec.body}</p>
                  <div className="font-mono text-[0.68rem] text-textdark mt-3.5 pt-3.5 border-t border-dashed border-textdark/10">
                    Career track: <b style={{ color }} className="font-medium">{spec.career}</b>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
