'use client'

import { shopWhatsAppHref } from '@/lib/branding'
import { trackWhatsAppTap } from '@/lib/analytics'
import { useCartGateToast } from '@/app/components/CartGateToast'
import { useOrderCart } from '@/app/components/OrderCartProvider'
import { writeSavedDelivery } from '@/lib/savedDeliveryLocation'

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
  const { lines, whatsappMessage, deliveryAddress, deliveryMapUrl, requestCartAddressFocus } =
    useOrderCart()
  const showToast = useCartGateToast()
  const hasItems = lines.length > 0
  const hasAddress = deliveryAddress.trim().length > 0
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
