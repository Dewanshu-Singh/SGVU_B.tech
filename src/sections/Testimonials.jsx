import { testimonialsHeading, testimonials } from '../data/testimonials'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper text-textdark pt-0 pb-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={testimonialsHeading.eyebrow}
          title={testimonialsHeading.title}
          sub={testimonialsHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-11">
          {testimonials.map((t, i) => {
            const color = accentAt(i)
            return (
              <Reveal
                key={t.name}
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="flex items-center gap-4 bg-white border-[1.5px] border-textdark/10 rounded-brand p-5 cursor-pointer"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover shrink-0 border-2"
                  style={{ borderColor: hexToRgba(color, 0.4) }}
                />
                <div className="min-w-0">
                  <b className="block text-[0.92rem] truncate">{t.name}</b>
                  <span className="block font-mono text-[0.62rem] text-muted-light">{t.batch}</span>
                  <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono text-[0.68rem] text-muted-light">{t.company}</span>
                    <span
                      className="font-mono text-[0.68rem] font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: hexToRgba(color, 0.12), color }}
                    >
                      {t.package}
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
