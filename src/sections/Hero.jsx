import { motion } from 'framer-motion'
import { hero } from '../data/hero'
import Eyebrow from '../components/ui/Eyebrow'
import Chip from '../components/ui/Chip'
import LeadForm from '../components/LeadForm'
import BrochureDownload from '../components/BrochureDownload'
import SpecializationQuickLinks from '../components/SpecializationQuickLinks'
import { accentAt } from '../lib/colors'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-14 pb-20 bg-grid-light">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px 400px at 85% 8%, rgba(123,92,255,.10), transparent 60%), radial-gradient(520px 400px at 15% 100%, rgba(94,168,224,.09), transparent 60%), radial-gradient(420px 320px at 45% 40%, rgba(224,122,158,.06), transparent 65%), radial-gradient(500px 380px at 8% 90%, rgba(200,241,53,.10), transparent 60%)',
        }}
      />
      <div className="relative max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[1.15fr_.85fr] gap-11 items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow onLight>{hero.eyebrow}</Eyebrow>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold leading-[1.12] tracking-[-0.01em] text-[clamp(2.3rem,5.2vw,3.9rem)] mt-4 mb-2 text-textdark"
          >
            {hero.headline.main}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="mt-3.5 mb-1 text-[1.08rem] text-muted-light max-w-xl">
            {hero.sub}
          </motion.p>

          <motion.div variants={itemVariants}>
            <SpecializationQuickLinks />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mt-6">
            {hero.trustChips.map((chip, i) => (
              <motion.div 
                key={chip.b}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Chip strong={chip.b} color={accentAt(i)}>
                  {chip.text}
                </Chip>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap border border-textdark/10 rounded-brand overflow-hidden mt-8 bg-white">
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex-1 min-w-[130px] px-5 py-[18px] ${
                  i !== hero.stats.length - 1 ? 'border-r border-textdark/10' : ''
                }`}
              >
                <b className="block font-display text-2xl" style={{ color: accentAt(i) }}>
                  {stat.value}
                </b>
                <span className="font-mono text-[0.66rem] tracking-wide uppercase text-muted-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="lg:sticky lg:top-24"
        >
          <LeadForm />
          <BrochureDownload />
        </motion.div>
      </div>
    </header>
  )
}
