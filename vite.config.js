import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { devAnnotate } from '../dev-annotate/src/vite-plugin.js'

export default defineConfig({
  plugins: [react(), tailwindcss(), devAnnotate()],
  server: { port: 5187 },
})
