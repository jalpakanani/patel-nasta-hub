'use client'

import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { CartGateToastProvider } from '@/app/components/CartGateToast'
import { GoogleAnalyticsRouteTracker } from '@/app/components/GoogleAnalyticsRouteTracker'
import { OrderCartBar } from '@/app/components/OrderCartBar'
import { OrderCartProvider } from '@/app/components/OrderCartProvider'

export function AppOrderShell({ children }: { children: ReactNode }) {
  return (
    <OrderCartProvider>
      <Suspense fallback={null}>
        <GoogleAnalyticsRouteTracker />
      </Suspense>
      <CartGateToastProvider>
        {children}
        <OrderCartBar />
      </CartGateToastProvider>
    </OrderCartProvider>
  )
}
