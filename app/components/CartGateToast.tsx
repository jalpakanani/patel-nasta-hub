'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

const CartGateToastContext = createContext<(() => void) | null>(null)

export const CART_GATE_TOAST_MESSAGE_GU =
  'પહેલા મેનુમાંથી વસ્તુ ઉમેરો (+ દબાવો), પછી WhatsApp વાપરો.' as const

export function CartGateToastProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = useCallback(() => {
    setVisible(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setVisible(false)
      timerRef.current = null
    }, 3200)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <CartGateToastContext.Provider value={show}>
      {children}
      {visible ? (
        <div
          role="status"
          className="pointer-events-none fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-[100] w-[min(calc(100vw-1.5rem),22rem)] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-zinc-900 px-4 py-3 text-center text-sm font-semibold leading-snug text-white shadow-lg shadow-black/25"
        >
          {CART_GATE_TOAST_MESSAGE_GU}
        </div>
      ) : null}
    </CartGateToastContext.Provider>
  )
}

export function useCartGateToast() {
  const ctx = useContext(CartGateToastContext)
  if (!ctx) {
    throw new Error('useCartGateToast must be used inside CartGateToastProvider')
  }
  return ctx
}
