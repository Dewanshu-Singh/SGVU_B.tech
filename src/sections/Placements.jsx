import { motion } from 'framer-motion'
import { placementsHeading, placementStats, roleTicker, placementsFootnote } from '../data/placements'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function Placements() {
  return (
    <section id="placements" className="bg-paper text-textdark pt-0 pb-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={placementsHeading.eyebrow}
          title={placementsHeading.title}
          sub={placementsHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-11">
          {placementStats.map((stat, i) => {
            const color = accentAt(i)
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand p-6 text-center cursor-pointer"
              >
                <b className="block font-display text-[2rem]" style={{ color }}>
                  {stat.value}
                </b>
                <span className="text-[0.8rem] text-muted-light">{stat.label}</span>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.4} className="flex flex-wrap gap-2.5 justify-center mt-2">
          {roleTicker.map((role, i) => {
            const color = accentAt(i)
            return (
              <motion.span
                key={role}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="font-mono text-[0.72rem] px-4 py-2 rounded-full cursor-pointer"
                style={{ backgroundColor: hexToRgba(color, 0.1), color }}
              >
                {role}
              </motion.span>
            )
          })}
        </Reveal>

        <p className="text-center mt-8 text-[0.9rem] text-muted-light">
          Recent outcomes range from <b className="text-textdark">₹10 LPA</b> to a{' '}
          <b className="text-textdark">₹1.8 Cr international package</b> at Walmart, USA.
          <br />
          {placementsFootnote}
        </p>
      </div>
    </section>
  )
}
