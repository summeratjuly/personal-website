import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

let devAnnotate
try {
  devAnnotate = (await import('../dev-annotate/src/vite-plugin.js')).devAnnotate
} catch {
  // dev-annotate not available (e.g. CI/Vercel build) — skip
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devAnnotate?.()].filter(Boolean),
  server: { port: 5187 },
})
