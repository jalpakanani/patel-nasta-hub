'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { isGaConfigured, trackGaPageView } from '@/lib/analytics'

/** App Router પર ક્લાયન્ટ નેવિગેશન પછી પણ GA4 માં `page_view` મોકલે */
export function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const searchKey = searchParams.toString()

  useEffect(() => {
    if (!isGaConfigured()) return
    const path = searchKey ? `${pathname}?${searchKey}` : pathname
    trackGaPageView(path, typeof document !== 'undefined' ? document.title : undefined)
  }, [pathname, searchKey])

  return null
}
