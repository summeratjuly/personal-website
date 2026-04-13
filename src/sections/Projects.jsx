import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Pit Wall Insight',
    description: 'Real-time F1 race strategy analysis tool with tyre degradation charts, energy simulations, and telemetry visualizations powered by FastF1 data.',
    tech: ['React', 'Python', 'FastAPI', 'FastF1'],
    image: null,
    github: null,
    live: 'https://pitwallinsight.com',
  },
  {
    title: 'Project Two',
    description: 'Mobile-first web app with offline support and push notifications.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    image: null,
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'Open source CLI tool that automates development workflows.',
    tech: ['Node.js', 'Shell', 'Docker'],
    image: null,
    github: '#',
    live: null,
  },
  {
    title: 'dev-annotate',
    description: 'Click-to-annotate overlay for any Vite project. Select elements in the browser, describe what needs fixing, and export structured annotations for Claude Code, Codex, or any AI coding assistant.',
    tech: ['JavaScript', 'Vite Plugin'],
    image: '/projects/dev-annotate-preview.svg',
    github: 'https://github.com/summeratjuly/dev-annotate',
    live: null,
  },
]

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl bg-surface-light border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-text-muted text-sm">Project Screenshot</span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-text-muted">
                    {project.github && (
                      <a href={project.github} className="hover:text-primary transition-colors">
                        <GithubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="hover:text-primary transition-colors">
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
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
