/** `.env.local` / Netlify: `NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-…` */
const CLIENT_RAW = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim()

/** Optional display unit — home page (AdSense → Ads → By ad unit → Slot ID) */
const SLOT_HOME_RAW = process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME?.trim()

const CA_PUB_RE = /^ca-pub-\d+$/i
const SLOT_RE = /^\d+$/

export function getAdsenseClientId(): string | undefined {
  if (!CLIENT_RAW || !CA_PUB_RE.test(CLIENT_RAW)) return undefined
  return CLIENT_RAW.toLowerCase()
}

export function getAdsenseSlotHome(): string | undefined {
  if (!SLOT_HOME_RAW || !SLOT_RE.test(SLOT_HOME_RAW)) return undefined
  return SLOT_HOME_RAW
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[]
  }
}

export {}
