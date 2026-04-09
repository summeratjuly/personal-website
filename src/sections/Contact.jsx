import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up email service (EmailJS, Formspree, etc.)
    alert('Form submission not yet configured. Add your email service!')
  }

  return (
    <section id="contact" className="py-32 px-6 bg-surface-light/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12">
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
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'hello@example.com' },
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Your Location' },
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
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
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

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-text placeholder-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary-light rounded-xl text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
