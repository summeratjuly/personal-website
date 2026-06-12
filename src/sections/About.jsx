import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              I'm a data engineering technical lead and manager with 8+ years
              building Meta-scale data foundations across event logging,
              warehouse pipelines, canonical product datasets, experimentation
              attribution, ML training data, and fault-tolerant ETL/ELT systems.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              I specialize in turning complex product environments into reliable,
              decision-grade metrics through SQL, Python, Spark, Airflow, data
              quality systems, and analytics tooling. My recent work also explores
              AI-assisted analysis, context management for internal agents, and
              F1 analytics projects built from public data and video signals.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
