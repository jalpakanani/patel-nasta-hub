'use client'

import { useEffect, useRef } from 'react'
import { getAdsenseClientId, getAdsenseSlotHome } from '@/lib/adsense'

/** Home page display ad — needs client ID + `NEXT_PUBLIC_ADSENSE_SLOT_HOME`. Auto ads work without this. */
export function AdSenseBanner() {
  const clientId = getAdsenseClientId()
  const slotId = getAdsenseSlotHome()
  const pushed = useRef(false)

  useEffect(() => {
    if (!clientId || !slotId || pushed.current) return
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      pushed.current = true
    } catch {
      /* ad blocker / script not loaded */
    }
  }, [clientId, slotId])

  if (!clientId || !slotId) return null

  return (
    <aside
      className="mx-auto max-w-4xl px-4 py-2 sm:px-6"
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
