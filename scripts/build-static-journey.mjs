/**
 * Preview-only static assemble publisher.
 * Copies the intended journey (Home → Google → Banco → Mastercard → Lab → Contact)
 * into dist/ so the existing Vercel Git integration (npm run build → dist) serves it.
 * Not a production publish path.
 */
import { cpSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')

const entries = [
  'index.html',
  'google',
  'banco',
  'mastercard',
  'lab',
  'contact',
  'css',
  'js',
  'system',
  'assets',
]

function copyEntry(name) {
  const src = join(root, name)
  if (!existsSync(src)) {
    console.warn(`[build-static-journey] skip missing: ${name}`)
    return
  }
  const dest = join(dist, name)
  cpSync(src, dest, {
    recursive: true,
    filter: (source) => {
      // Exclude QA capture folders if present
      const base = source.split(/[/\\]/).pop()
      if (base === 'renders') return false
      return true
    },
  })
  console.log(`[build-static-journey] copied ${name}`)
}

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })
for (const name of entries) copyEntry(name)

// Sanity: list top-level dist
console.log('[build-static-journey] dist contents:', readdirSync(dist).join(', '))
const index = join(dist, 'index.html')
if (!existsSync(index) || statSync(index).size < 1000) {
  console.error('[build-static-journey] FAIL: dist/index.html missing or too small')
  process.exit(1)
}
console.log('[build-static-journey] OK')
