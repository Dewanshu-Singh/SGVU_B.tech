import { motion } from 'framer-motion'
import { marqueeItems } from '../data/marquee'

export default function PartnerMarquee() {
  // Duplicate items enough times to ensure seamless infinite scroll
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className="border-y border-textdark/10 py-5 overflow-hidden bg-paper-2 flex" aria-label="Technology and training partners">
      <motion.div 
        className="flex gap-14 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display font-semibold text-[1.05rem] text-muted-light flex items-center gap-14 whitespace-nowrap after:content-['×'] after:text-violet after:text-sm"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
