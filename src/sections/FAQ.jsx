import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqHeading, faqItems } from '../data/faq'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import { accentAt, hexToRgba } from '../lib/colors'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-[84px] bg-grid-light">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center">
          <Eyebrow onLight className="justify-center">{faqHeading.eyebrow}</Eyebrow>
          <h2 className="font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(1.7rem,3.6vw,2.6rem)] mt-3.5 mb-3 text-textdark">
            {faqHeading.title}
          </h2>
        </div>

        <div className="max-w-[820px] mx-auto mt-11">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            const color = accentAt(i)
            return (
              <Reveal 
                key={item.q} 
                delay={i * 0.1}
                whileHover={{ 
                  scale: 1.01, 
                  y: -2,
                  borderColor: color,
                  boxShadow: `0 8px 24px -8px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="border-[1.5px] border-textdark/10 rounded-brand mb-3 bg-white overflow-hidden transition-colors duration-300"
              >
                <details open={isOpen} onToggle={() => {}}>
                  <summary
                    className="cursor-pointer px-6 py-5 font-display font-semibold text-[1.02rem] text-textdark flex justify-between items-center gap-4"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpenIndex(isOpen ? -1 : i)
                    }}
                  >
                    {item.q}
                    {isOpen ? (
                      <Minus size={18} className="text-violet shrink-0" />
                    ) : (
                      <Plus size={18} className="text-violet shrink-0" />
                    )}
                  </summary>
                  {isOpen && <div className="px-6 pb-6 text-muted-light text-[0.92rem]">{item.a}</div>}
                </details>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
