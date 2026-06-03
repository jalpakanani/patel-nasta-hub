/**
 * Build પહેલાં `public/ads.txt` — AdSense publisher verification.
 * Env: NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-…
 */
const fs = require('fs')
const path = require('path')

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim()
const outPath = path.join(__dirname, '..', 'public', 'ads.txt')

if (!clientId || !/^ca-pub-\d+$/i.test(clientId)) {
  if (fs.existsSync(outPath)) fs.unlinkSync(outPath)
  process.exit(0)
}

const pubId = clientId.replace(/^ca-pub-/i, 'pub-')
const line = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
fs.writeFileSync(outPath, line, 'utf8')
console.log('[ads.txt] written for', pubId)
