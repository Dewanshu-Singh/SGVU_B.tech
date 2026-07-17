import { motion } from 'framer-motion'
import { ArrowRight, BookX, FileText, Laptop, Briefcase } from 'lucide-react'
import { diffHeading, diffLines, diffPlainSummary } from '../data/diff'
import Eyebrow from '../components/ui/Eyebrow'
import Reveal from '../components/ui/Reveal'
import { accents, hexToRgba } from '../lib/colors'

const SUMMARY_ICONS = { BookX, FileText, Laptop, Briefcase }

const DOT_COLORS = ['bg-[#FF5F57]', 'bg-[#FEBC2E]', 'bg-[#28C840]']

function DiffLine({ type, gut, code, index }) {
  const rowBg =
    type === 'minus' 
      ? 'bg-redx/[.07] hover:bg-redx/[.14]' 
      : type === 'plus' 
        ? 'bg-lime/[.06] hover:bg-lime/[.12]' 
        : 'hover:bg-white/[.04]'
        
  const gutColor =
    type === 'minus' ? 'text-redx/90' : type === 'plus' ? 'text-lime/90' : 'text-muted-dark/55'
  const codeColor =
    type === 'minus'
      ? 'text-[#E89B9B] line-through decoration-redx/60'
      : type === 'plus'
        ? 'text-lime'
        : 'text-muted-dark'

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ x: 6 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.06 + 0.2 }}
      className={`flex py-[7px] cursor-crosshair transition-colors duration-200 ${rowBg}`}
    >
      <span className={`w-9 sm:w-[52px] shrink-0 text-center text-[0.72rem] select-none ${gutColor}`}>
        {gut}
      </span>
      <span className={`pr-5 ${codeColor}`}>{code}</span>
    </motion.div>
  )
}

export default function ComparisonDiff() {
  return (
    <section id="difference" className="py-[84px] bg-ink text-white bg-grid-dark">
      <div className="max-w-[1180px] mx-auto px-6">
        <Eyebrow>{diffHeading.eyebrow}</Eyebrow>
        <h2 className="font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(1.7rem,3.6vw,2.6rem)] mt-3.5 mb-3">
          {diffHeading.title}
        </h2>
        <p className="max-w-xl text-[1.02rem] text-muted-dark">{diffHeading.sub}</p>

        <Reveal
          as="div"
          className="mt-11 bg-ink-2 border border-white/10 rounded-2xl overflow-hidden shadow-diff"
          role="table"
          aria-label="Comparison of traditional B.Tech versus this program"
        >
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-ink-3">
            {DOT_COLORS.map((c, i) => (
              <span key={i} className={`w-[11px] h-[11px] rounded-full ${c}`} />
            ))}
            <span className="ml-2.5 font-mono text-[0.72rem] text-muted-dark">
              {diffHeading.filename}
            </span>
          </div>
          <div className="font-mono text-[0.78rem] sm:text-[0.86rem] py-2 pb-4 overflow-x-auto">
            {diffLines.map((line, i) => (
              <DiffLine key={i} index={i} {...line} />
            ))}
          </div>
        </Reveal>

        <p className="mt-9 font-mono text-[0.64rem] tracking-[0.1em] uppercase text-muted-dark">
          New to coding? Here's the same thing in plain English —
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {diffPlainSummary.map((row, i) => {
            const Icon = SUMMARY_ICONS[row.icon]
            const color = accents[row.accent] ?? accents.violet
            return (
              <Reveal
                key={row.old}
                delay={i * 0.1}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  borderColor: color,
                  boxShadow: `0 14px 30px -10px ${hexToRgba(color, 0.45)}`,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="rounded-brand border p-5 cursor-pointer"
                style={{ borderColor: hexToRgba(color, 0.3), background: hexToRgba(color, 0.06) }}
              >
                <div
                  className="w-9 h-9 rounded-[10px] grid place-items-center mb-3.5"
                  style={{ backgroundColor: hexToRgba(color, 0.16), color }}
                >
                  {Icon && <Icon size={17} strokeWidth={1.75} />}
                </div>
                <p className="text-[0.8rem] text-muted-dark line-through decoration-redx/50 mb-2">
                  {row.old}
                </p>
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} style={{ color }} className="shrink-0" />
                  <p className="text-[0.9rem] font-semibold text-white">{row.next}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
