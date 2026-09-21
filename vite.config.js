import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pages = [
  'index.html',
  'work.html',
  'case-google.html',
  'case-banco.html',
  'case-mastercard.html',
  'case-more.html',
  'lab-workspace.html',
  'lab-assistant.html',
  'about.html',
  'contact.html',
  '404.html',
]

function cleanUrls() {
  const rewrite = (req) => {
    if (!req.url) return
    const url = req.url.split('?')[0]
    if (url.includes('.') || url === '/') return
    req.url = `${url.replace(/\/$/, '')}.html${req.url.slice(url.length)}`
  }
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req)
        next()
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const input = Object.fromEntries(
    pages.map((file) => [file.replace(/\.html$/, '') || 'main', resolve(__dirname, file)]),
  )
  return {
    plugins: [react(), cleanUrls()],
    define: {
      'import.meta.env.VERCEL': JSON.stringify(env.VERCEL || process.env.VERCEL || ''),
    },
    build: {
      rollupOptions: { input },
    },
    server: {
      port: 5173,
      open: false,
    },
  }
})
