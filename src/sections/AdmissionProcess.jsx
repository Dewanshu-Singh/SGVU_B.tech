import { admissionProcessHeading, admissionSteps, admissionTimeline } from '../data/admissionProcess'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function AdmissionProcess() {
  return (
    <section id="admission-process" className="bg-paper text-textdark py-[84px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeading
          onLight
          eyebrow={admissionProcessHeading.eyebrow}
          title={admissionProcessHeading.title}
          sub={admissionProcessHeading.sub}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-11">
          {admissionSteps.map((s, i) => {
            const color = accentAt(i)
            return (
              <Reveal 
                key={s.step} 
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-white border-[1.5px] border-textdark/10 rounded-brand p-5 cursor-pointer"
              >
                <span className="font-mono text-xs font-semibold" style={{ color }}>
                  {s.step}
                </span>
                <h3 className="font-display font-bold text-[0.98rem] mt-2 mb-1.5">{s.title}</h3>
                <p className="text-[0.78rem] text-muted-light">{s.body}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-brand bg-violet/[.06] border border-violet/20 text-textdark p-6">
          {admissionTimeline.map((item, i) => (
            <div key={item.label}>
              <span
                className="font-mono text-[0.62rem] tracking-[0.1em] uppercase"
                style={{ color: accentAt(i) }}
              >
                {item.label}
              </span>
              <p className="font-display font-semibold text-[0.92rem] mt-1">{item.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
