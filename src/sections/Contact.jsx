import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-surface-light/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Let's work together" />

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-muted leading-relaxed mb-8">
              I'm always open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'roxyshuwang@gmail.com' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Bay Area, California' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-text-muted">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {['GitHub', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 text-sm rounded-lg bg-surface border border-white/5 text-text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
