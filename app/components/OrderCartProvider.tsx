'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {SHOP} from '@/lib/branding'
import {
  DELIVERY_FEE_BELOW_THRESHOLD_INR,
  DELIVERY_FREE_MIN_SUBTOTAL_INR,
} from '@/lib/deliveryPricing'
import {formatOrderSentAtIst} from '@/lib/formatOrderSentAtIst'
import {menuCartItemKey, parsePriceInr} from '@/lib/menu'

export type CartLine = {
  key: string
  name: string
  priceDisplay: string
  priceInr: number
  qty: number
}

function buildWhatsAppMessage(
  lines: CartLine[],
  subtotalInr: number,
  deliveryChargeInr: number,
  grandTotalInr: number,
  deliveryAddress: string,
  deliveryMapUrl: string,
): string {
  if (lines.length === 0) return SHOP.whatsappOrderMessageGu
  const header = `નમસ્તે ${SHOP.name},\n\nઓર્ડર:\n`
  const body = lines
    .map(l => `${l.qty} × ${l.name} — ₹${l.priceInr * l.qty}`)
    .join('\n')
  const lineItemsSumInr = lines.reduce((s, l) => s + l.priceInr * l.qty, 0)
  let totals = `\n\nવસ્તુઓ કુલ: ₹${subtotalInr}`
  if (deliveryChargeInr > 0) {
    totals += `\nડિલિવરી (ઓર્ડર ₹${DELIVERY_FREE_MIN_SUBTOTAL_INR}થી ઓછો): ₹${deliveryChargeInr}`
  }
  totals += `\nકુલ ચૂકવવાનું: ₹${grandTotalInr}`
  const verifyLine =
    deliveryChargeInr > 0
      ? `\nચકાસણી (વસ્તુઓ નો સરવાળો  + ડિલિવરી): ₹${lineItemsSumInr} + ₹${deliveryChargeInr} = ₹${grandTotalInr}`
      : `\nચકાસણી (વસ્તુઓ નો સરવાળો ): ₹${lineItemsSumInr} = વસ્તુઓ કુલ`
  const sentAt = `\n\nઓર્ડર મોકલ્યાનો સમય (IST): ${formatOrderSentAtIst()}`
  const addr = deliveryAddress.trim()
  const map = deliveryMapUrl.trim()
  let locationBlock = ''
  if (addr || map) {
    locationBlock = '\n\n'
    if (addr) locationBlock += `ડિલિવરી / પિકઅપ સરનામું:\n${addr}`
    if (addr && map) locationBlock += '\n\n'
    if (map) locationBlock += `Google Maps લોકેશન:\n${map}`
  }
  return `${header}${body}${totals}${verifyLine}${sentAt}${locationBlock}\n\n${SHOP.whatsappOrderIntegrityNoteGu}\n\n${SHOP.whatsappOrderMustCallGu}`
}

type OrderCartContextValue = {
  lines: CartLine[]
  addOne: (categoryId: string, itemName: string, priceDisplay: string) => void
  increment: (key: string) => void
  decrement: (key: string) => void
  clear: () => void
  deliveryAddress: string
  setDeliveryAddress: (value: string) => void
  deliveryMapUrl: string
  setDeliveryMapUrl: (value: string) => void
  totalQty: number
  /** વસ્તુઓનો કુલ (ડિલિવરી વગર) */
  subtotalInr: number
  /** ₹300થી ઓછા ઓર્ડર પર ડિલિવરી ફી; નહીંતર 0 */
  deliveryChargeInr: number
  /** subtotal + delivery — ચૂકવવાનું કુલ */
  totalInr: number
  whatsappMessage: string
}

const OrderCartContext = createContext<OrderCartContextValue | null>(null)

export function useOrderCart() {
  const ctx = useContext(OrderCartContext)
  if (!ctx) {
    throw new Error('useOrderCart must be used inside OrderCartProvider')
  }
  return ctx
}

export function OrderCartProvider({children}: {children: ReactNode}) {
  const [byKey, setByKey] = useState<Record<string, CartLine>>({})
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [deliveryMapUrl, setDeliveryMapUrl] = useState('')

  const lines = useMemo(
    () =>
      Object.values(byKey)
        .filter(l => l.qty > 0)
        .sort((a, b) => a.key.localeCompare(b.key)),
    [byKey],
  )

  const addOne = useCallback(
    (categoryId: string, itemName: string, priceDisplay: string) => {
      const key = menuCartItemKey(categoryId, itemName)
      const priceInr = parsePriceInr(priceDisplay)
      setByKey(prev => {
        const cur = prev[key]
        const qty = (cur?.qty ?? 0) + 1
        return {
          ...prev,
          [key]: {
            key,
            name: itemName,
            priceDisplay,
            priceInr,
            qty,
          },
        }
      })
    },
    [],
  )

  const increment = useCallback((key: string) => {
    setByKey(prev => {
      const cur = prev[key]
      if (!cur) return prev
      return {...prev, [key]: {...cur, qty: cur.qty + 1}}
    })
  }, [])

  const decrement = useCallback((key: string) => {
    setByKey(prev => {
      const cur = prev[key]
      if (!cur) return prev
      if (cur.qty <= 1) {
        const next = {...prev}
        delete next[key]
        return next
      }
      return {...prev, [key]: {...cur, qty: cur.qty - 1}}
    })
  }, [])

  const clear = useCallback(() => {
    setByKey({})
    setDeliveryAddress('')
    setDeliveryMapUrl('')
  }, [])

  const totalQty = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines])
  const subtotalInr = useMemo(
    () => lines.reduce((s, l) => s + l.priceInr * l.qty, 0),
    [lines],
  )
  const deliveryChargeInr = useMemo(() => {
    if (subtotalInr <= 0) return 0
    if (subtotalInr < DELIVERY_FREE_MIN_SUBTOTAL_INR)
      return DELIVERY_FEE_BELOW_THRESHOLD_INR
    return 0
  }, [subtotalInr])
  const totalInr = subtotalInr + deliveryChargeInr

  const whatsappMessage = useMemo(
    () =>
      buildWhatsAppMessage(
        lines,
        subtotalInr,
        deliveryChargeInr,
        totalInr,
        deliveryAddress,
        deliveryMapUrl,
      ),
    [
      lines,
      subtotalInr,
      deliveryChargeInr,
      totalInr,
      deliveryAddress,
      deliveryMapUrl,
    ],
  )

  const value = useMemo(
    () => ({
      lines,
      addOne,
      increment,
      decrement,
      clear,
      deliveryAddress,
      setDeliveryAddress,
      deliveryMapUrl,
      setDeliveryMapUrl,
      totalQty,
      subtotalInr,
      deliveryChargeInr,
      totalInr,
      whatsappMessage,
    }),
    [
      lines,
      addOne,
      increment,
      decrement,
      clear,
      deliveryAddress,
      setDeliveryAddress,
      deliveryMapUrl,
      setDeliveryMapUrl,
      totalQty,
      subtotalInr,
      deliveryChargeInr,
      totalInr,
      whatsappMessage,
    ],
  )

  return (
    <OrderCartContext.Provider value={value}>
      {children}
    </OrderCartContext.Provider>
  )
}
