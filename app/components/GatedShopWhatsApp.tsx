'use client'

import { shopWhatsAppHref } from '@/lib/branding'
import { useCartGateToast } from '@/app/components/CartGateToast'
import { useOrderCart } from '@/app/components/OrderCartProvider'
import { writeSavedDelivery } from '@/lib/savedDeliveryLocation'

type GatedShopWhatsAppProps = {
  className: string
  disabledClassName?: string
  children: React.ReactNode
}

export function GatedShopWhatsApp({
  className,
  disabledClassName = 'cursor-not-allowed opacity-50',
  children,
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
        onClick={() => showToast()}
        className={`${className} ${disabledClassName}`.trim()}
        aria-disabled="true"
      >
        {children}
      </button>
    )
  }

  if (!hasAddress) {
    return (
      <button type="button" onClick={() => requestCartAddressFocus()} className={className}>
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
      onClick={() => writeSavedDelivery(deliveryAddress, deliveryMapUrl)}
    >
      {children}
    </a>
  )
}
