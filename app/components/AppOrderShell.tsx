'use client'

import type { ReactNode } from 'react'
import { CartGateToastProvider } from '@/app/components/CartGateToast'
import { OrderCartBar } from '@/app/components/OrderCartBar'
import { OrderCartProvider } from '@/app/components/OrderCartProvider'

export function AppOrderShell({ children }: { children: ReactNode }) {
  return (
    <OrderCartProvider>
      <CartGateToastProvider>
        {children}
        <OrderCartBar />
      </CartGateToastProvider>
    </OrderCartProvider>
  )
}
