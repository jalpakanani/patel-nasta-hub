'use client'

import { useEffect, useState } from 'react'
import { SHOP, shopWhatsAppHref } from '@/lib/branding'
import { IconWhatsApp } from '@/app/components/BrandIcons'
import { useOrderCart } from '@/app/components/OrderCartProvider'
import { deliveryBelowMinLabelGu } from '@/lib/deliveryPricing'
import { googleMapsPinUrlFromCoords } from '@/lib/googleMapsLinks'

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
    deliveryMapUrl,
    setDeliveryMapUrl,
  } = useOrderCart()

  const [panelOpen, setPanelOpen] = useState(true)
  const [geoHint, setGeoHint] = useState<string | null>(null)

  useEffect(() => {
    if (lines.length === 0) setPanelOpen(true)
  }, [lines.length])

  if (lines.length === 0) return null

  const href = shopWhatsAppHref({ message: whatsappMessage })

  function fillMapLinkFromDeviceLocation() {
    setGeoHint(null)
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setGeoHint('આ બ્રાઉઝર પર લોકેશન ઉપલબ્ધ નથી. નીચે Google Maps લિંક પેસ્ટ કરો.')
      return
    }
    setGeoHint('સ્થાન લઈ રહ્યા છીએ…')
    navigator.geolocation.getCurrentPosition(
      pos => {
        const url = googleMapsPinUrlFromCoords(
          pos.coords.latitude,
          pos.coords.longitude,
        )
        setDeliveryMapUrl(url)
        setGeoHint('મેપ લિંક ઉમેરાઈ — WhatsApp મેસેજમાં જશે.')
        window.setTimeout(() => setGeoHint(null), 4000)
      },
      () => {
        setGeoHint(
          'લોકેશન મંજૂરી ન મળી. સેટિંગમાં GPS ચાલુ કરો, અથવા Maps માંથી શેર લિંક પેસ્ટ કરો.',
        )
      },
      { enableHighAccuracy: false, timeout: 14_000, maximumAge: 60_000 },
    )
  }

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
      className={`${barPositionClass} border-t border-zinc-200 bg-white/98 px-3 py-2 shadow-[0_-6px_24px_rgba(0,0,0,0.1)] backdrop-blur-md md:rounded-2xl md:border md:px-3 md:py-2.5 md:shadow-lg`}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-2 md:max-w-none">
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
              className="touch-manipulation inline-flex min-h-11 shrink-0 items-center justify-center gap-1.5 self-stretch rounded-full bg-[#25D366] px-3.5 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-105 active:brightness-95 sm:self-center sm:py-2"
            >
              <IconWhatsApp className="h-4 w-4 shrink-0 text-white" />
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

        <p className="rounded-lg border border-[var(--pn-purple)]/30 bg-[var(--pn-purple)]/5 px-2.5 py-1.5 text-[0.6875rem] font-semibold leading-snug text-zinc-800">
          {SHOP.whatsappOrderMustCallGu}
        </p>

        <div className="min-w-0 space-y-2">
          <div>
            <label
              htmlFor="order-delivery-address"
              className="block text-[0.6875rem] font-bold text-zinc-800"
            >
              સરનામું (WhatsApp)
            </label>
            <textarea
              id="order-delivery-address"
              name="deliveryAddress"
              value={deliveryAddress}
              onChange={e => setDeliveryAddress(e.target.value)}
              rows={2}
              autoComplete="street-address"
              placeholder="એરિયા, લેન્ડમાર્ક, ફ્લેટ…"
              className="mt-1 w-full resize-y rounded-lg border border-zinc-200 bg-white px-2.5 py-2 text-sm leading-snug text-zinc-900 shadow-inner outline-none placeholder:text-zinc-400 focus:border-[var(--pn-purple)] focus:ring-1 focus:ring-[var(--pn-purple)]/25"
            />
          </div>

          <details className="rounded-lg border border-zinc-200 bg-zinc-50/90 open:border-zinc-300">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-2.5 py-2 text-[0.6875rem] font-bold text-zinc-800 [&::-webkit-details-marker]:hidden">
              <span>
                મેપ લિંક{' '}
                <span className="font-normal text-zinc-500">(વૈકલ્પિક)</span>
              </span>
              {deliveryMapUrl.trim() ? (
                <span className="shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[0.625rem] font-extrabold text-emerald-900">
                  ✓
                </span>
              ) : (
                <span className="text-zinc-400">▼</span>
              )}
            </summary>
            <div className="space-y-1.5 border-t border-zinc-200/80 px-2.5 pb-2 pt-1.5">
              <p className="text-[0.625rem] leading-snug text-zinc-600">
                GPS અથવા Maps share લિંક પેસ્ટ — WhatsApp માં જશે.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={fillMapLinkFromDeviceLocation}
                  className="touch-manipulation inline-flex min-h-9 items-center justify-center rounded-full border border-[var(--pn-purple)] bg-white px-2.5 py-1.5 text-[0.6875rem] font-bold text-[var(--pn-purple)] transition hover:bg-[var(--pn-purple)]/5"
                >
                  GPS લિંક
                </button>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-manipulation inline-flex min-h-9 items-center justify-center rounded-full bg-zinc-200/90 px-2.5 py-1.5 text-[0.6875rem] font-bold text-zinc-800 transition hover:bg-zinc-300/90"
                >
                  Maps
                </a>
                {deliveryMapUrl.trim() ? (
                  <button
                    type="button"
                    onClick={() => {
                      setDeliveryMapUrl('')
                      setGeoHint(null)
                    }}
                    className="touch-manipulation min-h-9 px-1 text-[0.6875rem] font-bold text-zinc-500 underline underline-offset-2 hover:text-zinc-800"
                  >
                    કાઢો
                  </button>
                ) : null}
              </div>
              {geoHint ? (
                <p className="text-[0.625rem] font-medium leading-snug text-zinc-700">
                  {geoHint}
                </p>
              ) : null}
              <label htmlFor="order-map-url" className="sr-only">
                Google Maps લિંક
              </label>
              <input
                id="order-map-url"
                name="deliveryMapUrl"
                type="url"
                inputMode="url"
                value={deliveryMapUrl}
                onChange={e => setDeliveryMapUrl(e.target.value)}
                placeholder="maps.app.goo.gl / google.com/maps…"
                className="w-full rounded-md border border-zinc-200 bg-white px-2 py-1.5 text-[0.6875rem] text-zinc-900 outline-none focus:border-[var(--pn-purple)] focus:ring-1 focus:ring-[var(--pn-purple)]/20"
              />
              {deliveryMapUrl.trim() ? (
                <a
                  href={deliveryMapUrl.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[0.625rem] font-bold text-[var(--pn-purple)] underline-offset-2 hover:underline"
                >
                  લિંક ખોલો
                </a>
              ) : null}
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
