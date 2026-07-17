import { globalEdgeHeading, globalEdgeCards } from '../data/globalEdge'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function GlobalEdge() {
  return (
    <section id="global" className="py-[84px] bg-grid-light">
      <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow onLight>{globalEdgeHeading.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(1.7rem,3.6vw,2.6rem)] mt-3.5 mb-3 text-textdark">
            {globalEdgeHeading.titleLines[0]}
            <br />
            {globalEdgeHeading.titleLines[1]}
          </h2>
          <p className="max-w-xl text-[1.02rem] text-muted-light mt-3">{globalEdgeHeading.sub}</p>
        </div>

        <div>
          {globalEdgeCards.map((card, i) => {
            const color = accentAt(i)
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
                className="border-[1.5px] border-textdark/10 rounded-brand p-6 mb-3.5 bg-white last:mb-0 cursor-pointer"
              >
                <b className="font-display text-[1.05rem]" style={{ color }}>
                  {card.title}
                </b>
                <p className="text-[0.88rem] text-muted-light mt-1.5">{card.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
