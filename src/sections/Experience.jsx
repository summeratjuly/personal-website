import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const experiences = [
  {
    title: 'Senior Developer',
    company: 'Company Name',
    period: '2023 — Present',
    description: 'Led development of key features and mentored junior developers. Architected scalable solutions serving thousands of users.',
    tech: ['React', 'Node.js', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Company Name',
    period: '2021 — 2023',
    description: 'Built and maintained multiple web applications. Improved performance by 40% through optimization and caching strategies.',
    tech: ['Python', 'React', 'PostgreSQL'],
  },
  {
    title: 'Junior Developer',
    company: 'Company Name',
    period: '2019 — 2021',
    description: 'Developed features for client-facing applications. Collaborated with design team to implement pixel-perfect UIs.',
    tech: ['JavaScript', 'CSS', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-surface-light/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-8 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              <div className="absolute left-[-5px] md:left-auto md:right-[-5px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-surface"
                style={i % 2 !== 0 ? { left: '-5px', right: 'auto' } : {}}
              />

              <div className="p-6 rounded-xl bg-surface-light border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-sm text-accent">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                <p className="text-primary-light text-sm mb-3">{exp.company}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
