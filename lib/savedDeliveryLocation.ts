const STORAGE_KEY = 'pn:delivery:last' as const

type StoredV1 = { v: 1; address: string; mapUrl: string }
type StoredV2 = { v: 2; address: string; mapUrl: string; orderNote: string }

type StoredDelivery = StoredV1 | StoredV2

export function readSavedDelivery(): {
  address: string
  mapUrl: string
  orderNote: string
} | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const p = JSON.parse(raw) as Partial<StoredDelivery>
    if (p?.v === 2) {
      return {
        address: typeof p.address === 'string' ? p.address : '',
        mapUrl: typeof p.mapUrl === 'string' ? p.mapUrl : '',
        orderNote: typeof p.orderNote === 'string' ? p.orderNote : '',
      }
    }
    if (p?.v === 1) {
      return {
        address: typeof p.address === 'string' ? p.address : '',
        mapUrl: typeof p.mapUrl === 'string' ? p.mapUrl : '',
        orderNote: '',
      }
    }
    return null
  } catch {
    return null
  }
}

/** ખાલી address, map અને note હોય તો સ્ટોરેજ કાઢી નાખો. */
export function writeSavedDelivery(
  address: string,
  mapUrl: string,
  orderNote = '',
) {
  if (typeof window === 'undefined') return
  const a = address.trim()
  const m = mapUrl.trim()
  const n = orderNote.trim()
  try {
    if (!a && !m && !n) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    const payload: StoredV2 = { v: 2, address: a, mapUrl: m, orderNote: n }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    /* quota / private */
  }
}
