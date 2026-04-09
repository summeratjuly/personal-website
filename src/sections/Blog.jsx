import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const posts = [
  {
    title: 'Building Interactive 3D Experiences on the Web',
    excerpt: 'A deep dive into Three.js and React Three Fiber for creating immersive web experiences.',
    date: 'Coming Soon',
    tags: ['Three.js', 'React', 'WebGL'],
  },
  {
    title: 'My Development Setup in 2026',
    excerpt: 'Tools, extensions, and workflows that keep me productive every day.',
    date: 'Coming Soon',
    tags: ['Productivity', 'Tools'],
  },
  {
    title: 'Lessons from Building Side Projects',
    excerpt: 'What I learned from shipping multiple projects and how it shaped my approach to development.',
    date: 'Coming Soon',
    tags: ['Career', 'Projects'],
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Blog" subtitle="Thoughts and tutorials" />

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-surface-light border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-accent shrink-0">{post.date}</span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
