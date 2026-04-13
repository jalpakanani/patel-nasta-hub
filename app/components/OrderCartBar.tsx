'use client'

import { useEffect, useState } from 'react'
import { SHOP, shopWhatsAppHref } from '@/lib/branding'
import { IconWhatsApp } from '@/app/components/BrandIcons'
import { useOrderCart } from '@/app/components/OrderCartProvider'
import { deliveryBelowMinLabelGu } from '@/lib/deliveryPricing'

const barPositionClass =
  'fixed inset-x-0 bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] z-[45] md:inset-x-auto md:bottom-6 md:right-6 md:left-auto md:max-w-md'

export function OrderCartBar() {
  const {
    totalQty,
    totalInr,
    subtotalInr,
    deliveryChargeInr,
    whatsappMessage,
    clear,
    lines,
    deliveryAddress,
    setDeliveryAddress,
  } = useOrderCart()

  const [panelOpen, setPanelOpen] = useState(true)

  useEffect(() => {
    if (lines.length === 0) setPanelOpen(true)
  }, [lines.length])

  if (lines.length === 0) return null

  const href = shopWhatsAppHref({ message: whatsappMessage })

  if (!panelOpen) {
    return (
      <div className={`${barPositionClass} px-3 md:px-0`}>
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="touch-manipulation mx-auto flex w-full max-w-lg items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white/98 px-4 py-3 text-left shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:max-w-none md:shadow-md"
        >
          <span className="min-w-0 text-sm font-bold text-[var(--pn-purple-deep)]">
            કાર્ટ · {totalQty} વસ્તુ · કુલ ₹{totalInr}
          </span>
          <span className="shrink-0 text-xs font-extrabold text-[var(--pn-purple)]">
            ખોલો ▲
          </span>
        </button>
      </div>
    )
  }

  return (
    <div
      className={`${barPositionClass} border-t border-zinc-200 bg-white/98 px-3 py-2.5 shadow-[0_-6px_24px_rgba(0,0,0,0.1)] backdrop-blur-md md:rounded-2xl md:border md:px-4 md:py-3 md:shadow-lg`}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-3 md:max-w-none">
        <div className="flex items-start gap-1">
          <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 text-sm text-zinc-700">
              <p className="font-bold text-[var(--pn-purple-deep)]">
                {totalQty} વસ્તુ · કુલ ₹{totalInr}
              </p>
              {deliveryChargeInr > 0 ? (
                <p className="mt-0.5 text-xs font-medium text-zinc-600">
                  {`વસ્તુઓ ₹${subtotalInr} + ડિલિવરી ₹${deliveryChargeInr} (${deliveryBelowMinLabelGu()})`}
                </p>
              ) : null}
              <button
                type="button"
                onClick={() => clear()}
                className="touch-manipulation mt-0.5 min-h-9 text-left text-xs font-medium text-zinc-500 underline-offset-2 hover:text-zinc-700 hover:underline"
              >
                કાર્ટ ખાલી કરો
              </button>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-stretch rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-105 active:brightness-95 sm:min-h-11 sm:self-center sm:py-2.5"
            >
              <IconWhatsApp className="h-5 w-5 text-white" />
              WhatsApp પર ઓર્ડર
            </a>
          </div>
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            aria-label="કાર્ટ પેનલ બંધ કરો"
            className="touch-manipulation flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl font-light leading-none text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800"
          >
            ×
          </button>
        </div>

        <p className="rounded-xl border border-[var(--pn-purple)]/30 bg-[var(--pn-purple)]/5 px-3 py-2.5 text-xs font-semibold leading-snug text-zinc-800">
          {SHOP.whatsappOrderMustCallGu}
        </p>

        <div className="min-w-0">
          <label
            htmlFor="order-delivery-address"
            className="block text-xs font-bold text-zinc-800"
          >
            ડિલિવરી / પિકઅપ સરનામું (WhatsApp માં જશે)
          </label>
          <textarea
            id="order-delivery-address"
            name="deliveryAddress"
            value={deliveryAddress}
            onChange={e => setDeliveryAddress(e.target.value)}
            rows={2}
            autoComplete="street-address"
            placeholder="દા.ત. એરિયા, લેન્ડમાર્ક, સોસાયટી/શોપ નામ, ફ્લેટ નંબર..."
            className="mt-1.5 w-full resize-y rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-base leading-snug text-zinc-900 shadow-inner outline-none ring-zinc-300 placeholder:text-zinc-400 focus:border-[var(--pn-purple)] focus:ring-2 focus:ring-[var(--pn-purple)]/20"
          />
        </div>
      </div>
    </div>
  )
}
