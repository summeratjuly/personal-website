import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'AWS', 'Vite'],
  },
  {
    title: 'Other',
    skills: ['UI/UX Design', 'Figma', 'Agile', 'Technical Writing', 'Open Source', 'Problem Solving'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface-light/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-surface border border-white/5 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 text-sm rounded-lg bg-surface-light text-text-muted border border-white/5 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
