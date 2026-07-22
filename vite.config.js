import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    // Expose VERCEL so analytics only load on Vercel production builds
    define: {
      'import.meta.env.VERCEL': JSON.stringify(env.VERCEL || process.env.VERCEL || ''),
    },
    server: {
      port: 5173,
      open: false,
    },
  }
})
