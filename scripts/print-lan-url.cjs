/* Run: npm run lan:url — shows URLs to open on your phone (same Wi‑Fi). */
const os = require('node:os')

const port = process.env.PORT || '3000'

console.log('')
console.log('  Phone par yeh URL try karo (same Wi‑Fi as Mac):')
console.log('')

let ifaces
try {
  ifaces = os.networkInterfaces()
} catch {
  console.log('    (Could not list IPs here — Mac: System Settings → Wi‑Fi → Details → IP Address)')
  console.log('    Then open: http://<that-ip>:' + port)
  console.log('')
  process.exit(0)
}

for (const list of Object.values(ifaces)) {
  if (!list) continue
  for (const iface of list) {
    if (iface.family === 'IPv4' && !iface.internal) {
      console.log('    http://' + iface.address + ':' + port)
    }
  }
}

console.log('')
console.log('  Important:')
console.log('    • localhost / 127.0.0.1 phone par kaam NAHI karega.')
console.log('    • npm run dev pehle chalu rakho, phir upar wala URL.')
console.log('    • Mac: System Settings → Network → Firewall — Node ko incoming allow karo.')
console.log('')
