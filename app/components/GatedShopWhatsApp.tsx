'use client'

import { shopWhatsAppHref } from '@/lib/branding'
import { trackWhatsAppTap } from '@/lib/analytics'
import { useCartGateToast } from '@/app/components/CartGateToast'
import { useOrderCart } from '@/app/components/OrderCartProvider'
import { writeSavedDelivery } from '@/lib/savedDeliveryLocation'
import { HOME_DELIVERY_MIN_SUBTOTAL_INR } from '@/lib/deliveryPricing'

type GatedShopWhatsAppProps = {
  className: string
  disabledClassName?: string
  children: React.ReactNode
  /** GA4 `whatsapp_tap` — ક્યાંથી ટૅપ (header, footer, …) */
  analyticsPlacement?: string
}

export function GatedShopWhatsApp({
  className,
  disabledClassName = 'cursor-not-allowed opacity-50',
  children,
  analyticsPlacement = 'unspecified',
}: GatedShopWhatsAppProps) {
  const {
    lines,
    subtotalInr,
    whatsappMessage,
    deliveryAddress,
    deliveryMapUrl,
    requestCartAddressFocus,
    requestCartMinOrderFocus,
  } = useOrderCart()
  const showToast = useCartGateToast()
  const hasItems = lines.length > 0
  const hasAddress = deliveryAddress.trim().length > 0
  const meetsHomeDeliveryMin = subtotalInr >= HOME_DELIVERY_MIN_SUBTOTAL_INR
  const href = shopWhatsAppHref({ message: whatsappMessage })

  if (!hasItems) {
    return (
      <button
        type="button"
        onClick={() => {
          trackWhatsAppTap({
            placement: analyticsPlacement,
            outcome: 'blocked_no_cart',
            cartLineCount: 0,
          })
          showToast()
        }}
        className={`${className} ${disabledClassName}`.trim()}
        aria-disabled="true"
      >
        {children}
      </button>
    )
  }

  if (!meetsHomeDeliveryMin) {
    return (
      <button
        type="button"
        onClick={() => {
          trackWhatsAppTap({
            placement: analyticsPlacement,
            outcome: 'blocked_below_min_home_delivery',
            cartLineCount: lines.length,
          })
          requestCartMinOrderFocus()
        }}
        className={`${className} ${disabledClassName}`.trim()}
        aria-disabled="true"
      >
        {children}
      </button>
    )
  }

  if (!hasAddress) {
    return (
      <button
        type="button"
        onClick={() => {
          trackWhatsAppTap({
            placement: analyticsPlacement,
            outcome: 'blocked_no_address',
            cartLineCount: lines.length,
          })
          requestCartAddressFocus()
        }}
        className={className}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        trackWhatsAppTap({
          placement: analyticsPlacement,
          outcome: 'opened',
          cartLineCount: lines.length,
        })
        writeSavedDelivery(deliveryAddress, deliveryMapUrl)
      }}
    >
      {children}
    </a>
  )
}
