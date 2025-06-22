import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ['@google/generative-ai'],
  },
  base: command === 'serve'
    ? '/'
    : '/GEMINI-Clone-App/',  // 🛑 Replace with your repo name
}))
