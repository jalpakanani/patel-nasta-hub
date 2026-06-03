/**
 * Build પછી `out/ads.txt` — AdSense publisher verification.
 * Env: NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-… (Netlify env અથવા `.env.local`)
 */
const fs = require('fs')
const path = require('path')

function loadEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    const key = t.slice(0, i).trim()
    let val = t.slice(i + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    if (process.env[key] == null || process.env[key] === '') {
      process.env[key] = val
    }
  }
}

loadEnvLocal()

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim()
const outDir = path.join(__dirname, '..', 'out')
const outPath = path.join(outDir, 'ads.txt')

if (!clientId || !/^ca-pub-\d+$/i.test(clientId)) {
  console.warn(
    '[ads.txt] skipped — set NEXT_PUBLIC_ADSENSE_CLIENT_ID (Netlify env or .env.local)',
  )
  process.exit(0)
}

if (!fs.existsSync(outDir)) {
  console.error('[ads.txt] out/ not found — run next build first')
  process.exit(1)
}

const pubId = clientId.replace(/^ca-pub-/i, 'pub-')
const line = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
fs.writeFileSync(outPath, line, 'utf8')
console.log('[ads.txt] written to out/ads.txt for', pubId)
