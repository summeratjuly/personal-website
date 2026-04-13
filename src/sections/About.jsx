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
              I'm a passionate developer who loves building beautiful, interactive
              experiences on the web. With a keen eye for design and a love for
              clean code, I bring ideas to life through technology.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or working on creative side projects
              that push the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Years Coding', value: '5+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Coffee Cups', value: 'Infinite' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-surface-light border border-white/5">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
