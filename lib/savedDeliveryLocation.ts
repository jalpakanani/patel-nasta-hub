const STORAGE_KEY = 'pn:delivery:last' as const

type StoredV1 = { v: 1; address: string; mapUrl: string }

export function readSavedDelivery(): { address: string; mapUrl: string } | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const p = JSON.parse(raw) as Partial<StoredV1>
    if (p?.v !== 1) return null
    return {
      address: typeof p.address === 'string' ? p.address : '',
      mapUrl: typeof p.mapUrl === 'string' ? p.mapUrl : '',
    }
  } catch {
    return null
  }
}

/** ખાલી address અને map હોય તો સ્ટોરેજ કાઢી નાખો. */
export function writeSavedDelivery(address: string, mapUrl: string) {
  if (typeof window === 'undefined') return
  const a = address.trim()
  const m = mapUrl.trim()
  try {
    if (!a && !m) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    const payload: StoredV1 = { v: 1, address: a, mapUrl: m }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    /* quota / private */
  }
}
