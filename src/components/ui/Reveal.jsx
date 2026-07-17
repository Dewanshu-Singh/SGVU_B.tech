import { motion } from 'framer-motion'

export default function Reveal({ as = 'div', className = '', children, delay = 0, ...props }) {
  const MotionComponent = motion[as] || motion.div

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
