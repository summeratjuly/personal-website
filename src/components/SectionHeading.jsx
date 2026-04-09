import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-text-muted text-lg">{subtitle}</p>}
      <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
    </motion.div>
  )
}
