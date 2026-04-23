'use client'

import { useEffect, useState } from 'react'
import { SHOP, shopWhatsAppHref } from '@/lib/branding'
import { trackWhatsAppTap } from '@/lib/analytics'
import { IconWhatsApp } from '@/app/components/BrandIcons'
import {
  ORDER_DELIVERY_ADDRESS_REQUIRED_GU,
  useOrderCart,
} from '@/app/components/OrderCartProvider'
import { deliveryBelowMinLabelGu } from '@/lib/deliveryPricing'
import { googleMapsPinUrlFromCoords } from '@/lib/googleMapsLinks'
import { writeSavedDelivery } from '@/lib/savedDeliveryLocation'
import {
  formatGuWeightLabel,
  gramsPerCartStepForCartKey,
} from '@/lib/menu'

const barPositionClass =
  'fixed inset-x-0 bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] z-[60] md:inset-x-auto md:bottom-6 md:right-6 md:left-auto md:max-w-md'

export function OrderCartBar() {
  const {
    totalQty,
    totalInr,
    subtotalInr,
    deliveryChargeInr,
    whatsappMessage,
    clear,
    increment,
    decrement,
    lines,
    deliveryAddress,
    setDeliveryAddress,
    deliveryMapUrl,
    setDeliveryMapUrl,
    cartAddressFocusToken,
  } = useOrderCart()

  const [panelOpen, setPanelOpen] = useState(true)
  const [geoHint, setGeoHint] = useState<string | null>(null)
  const [addressError, setAddressError] = useState<string | null>(null)

  useEffect(() => {
    if (lines.length === 0) setPanelOpen(true)
  }, [lines.length])

  useEffect(() => {
    if (cartAddressFocusToken === 0 || lines.length === 0) return
    setPanelOpen(true)
    setAddressError(ORDER_DELIVERY_ADDRESS_REQUIRED_GU)
    const id = window.requestAnimationFrame(() => {
      const el = document.getElementById('order-delivery-address')
      el?.focus({ preventScroll: true })
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
    return () => window.cancelAnimationFrame(id)
  }, [cartAddressFocusToken, lines.length])

  if (lines.length === 0) return null

  const href = shopWhatsAppHref({ message: whatsappMessage })

  function openWhatsAppOrder() {
    if (!deliveryAddress.trim()) {
      trackWhatsAppTap({
        placement: 'cart_bar_order',
        outcome: 'blocked_no_address',
        cartLineCount: lines.length,
      })
      setAddressError(ORDER_DELIVERY_ADDRESS_REQUIRED_GU)
      const el = document.getElementById('order-delivery-address')
      el?.focus({ preventScroll: true })
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setAddressError(null)
    trackWhatsAppTap({
      placement: 'cart_bar_order',
      outcome: 'opened',
      cartLineCount: lines.length,
    })
    writeSavedDelivery(deliveryAddress, deliveryMapUrl)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

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
      className={`${barPositionClass} flex max-h-[min(90dvh,calc(100dvh-5.5rem-env(safe-area-inset-bottom,0px)))] flex-col overflow-hidden border-t border-zinc-200 bg-white/98 py-2 pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] shadow-[0_-6px_24px_rgba(0,0,0,0.1)] backdrop-blur-md md:rounded-2xl md:border md:px-3 md:py-2.5 md:shadow-lg`}
    >
      <div className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col gap-2 md:max-w-none">
        <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_2.75rem] items-start gap-x-2 gap-y-2 pt-0.5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:gap-x-2">
          <div className="col-start-1 row-start-1 min-w-0 text-sm text-zinc-700">
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
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            aria-label="કાર્ટ પેનલ બંધ કરો"
            className="col-start-2 row-start-1 flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center justify-self-end self-start rounded-full border border-zinc-300 bg-zinc-100 text-2xl font-light leading-none text-zinc-700 shadow-sm transition hover:bg-zinc-200 hover:text-zinc-900 active:bg-zinc-300 sm:col-start-3 sm:row-start-1 sm:justify-self-center"
          >
            <span aria-hidden>×</span>
          </button>
          <button
            type="button"
            onClick={() => openWhatsAppOrder()}
            className="col-span-2 col-start-1 row-start-2 flex h-11 min-h-11 w-full min-w-0 cursor-pointer items-center justify-center gap-1.5 self-start rounded-full border-0 bg-[#25D366] px-3 text-xs font-bold text-white shadow-md transition hover:brightness-105 active:brightness-95 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:w-auto sm:self-start sm:shrink-0 sm:px-3.5"
          >
            <IconWhatsApp className="h-4 w-4 shrink-0 text-white" />
            WhatsApp પર ઓર્ડર
          </button>
        </div>

        {addressError ? (
          <p
            id="order-address-error"
            className="shrink-0 rounded-lg border border-red-300 bg-red-50 px-2.5 py-1.5 text-center text-[0.6875rem] font-bold leading-snug text-red-900"
            role="alert"
          >
            {addressError}
          </p>
        ) : null}

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable]">
          <div className="flex flex-col gap-2 pb-1">
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="touch-manipulation w-full rounded-lg border border-zinc-200 bg-white py-2 text-center text-xs font-extrabold text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:bg-zinc-100 md:hidden"
            >
              ← કાર્ટ બંધ કરો
            </button>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/90">
              <p className="border-b border-zinc-200/80 px-2.5 py-1.5 text-[0.6875rem] font-extrabold uppercase tracking-wide text-zinc-600">
                તમારો ઓર્ડર
              </p>
              <ul className="divide-y divide-zinc-200/90">
                {lines.map(line => {
                  const stepG = gramsPerCartStepForCartKey(line.key)
                  const lineTotal = line.priceInr * line.qty
                  return (
                    <li
                      key={line.key}
                      className="flex items-center gap-2 px-2 py-2.5 text-sm"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-bold leading-snug text-zinc-900">
                          {line.name}
                        </p>
                        {stepG ? (
                          <p className="mt-0.5 text-[0.6875rem] font-medium text-zinc-500">
                            {formatGuWeightLabel(line.qty, stepG)} ·{' '}
                            {line.priceDisplay}
                          </p>
                        ) : (
                          <p className="mt-0.5 text-[0.6875rem] text-zinc-500">
                            {line.priceDisplay}
                          </p>
                        )}
                      </div>
                      <div className="flex shrink-0 items-center gap-0.5 overflow-visible rounded-full border border-zinc-200 bg-white p-0.5">
                        <button
                          type="button"
                          aria-label={`${line.name} ઓછી કરો`}
                          onClick={() => decrement(line.key)}
                          className="touch-manipulation flex min-h-9 min-w-9 items-center justify-center rounded-full text-lg font-bold text-zinc-700 transition hover:bg-zinc-100 active:bg-zinc-200"
                        >
                          −
                        </button>
                        <span
                          className={`shrink-0 px-1 py-0.5 text-center text-sm font-extrabold tabular-nums text-zinc-900 ${
                            stepG ? 'min-w-[4.25rem]' : 'min-w-8'
                          }`}
                        >
                          {stepG ? (
                            <span className="flex flex-col items-center gap-0.5 leading-snug">
                              <span className="tabular-nums">{line.qty}</span>
                              <span className="whitespace-nowrap text-[0.625rem] font-semibold leading-snug text-zinc-600">
                                ×{stepG} ગ્રામ
                              </span>
                            </span>
                          ) : (
                            line.qty
                          )}
                        </span>
                        <button
                          type="button"
                          aria-label={`${line.name} વધારો`}
                          onClick={() => increment(line.key)}
                          className="touch-manipulation flex min-h-9 min-w-9 items-center justify-center rounded-full text-lg font-bold text-zinc-700 transition hover:bg-zinc-100 active:bg-zinc-200"
                        >
                          +
                        </button>
                      </div>
                      <p className="w-14 shrink-0 text-right text-sm font-extrabold tabular-nums text-[var(--pn-purple-deep)]">
                        ₹{lineTotal}
                      </p>
                    </li>
                  )
                })}
              </ul>
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
                  સરનામું (WhatsApp){' '}
                  <span className="font-extrabold text-red-700">* ફરજિયાત</span>
                </label>
                <textarea
                  id="order-delivery-address"
                  name="deliveryAddress"
                  value={deliveryAddress}
                  onChange={e => {
                    setDeliveryAddress(e.target.value)
                    if (addressError) setAddressError(null)
                  }}
                  rows={2}
                  required
                  aria-invalid={addressError ? true : undefined}
                  aria-describedby={addressError ? 'order-address-error' : undefined}
                  autoComplete="street-address"
                  placeholder="એરિયા, લેન્ડમાર્ક, ફ્લેટ…"
                  className={`mt-1 w-full resize-y rounded-lg border bg-white px-2.5 py-2 text-sm leading-snug text-zinc-900 shadow-inner outline-none placeholder:text-zinc-400 focus:ring-1 ${
                    addressError
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-zinc-200 focus:border-[var(--pn-purple)] focus:ring-[var(--pn-purple)]/25'
                  }`}
                />
                <p className="mt-1 text-[0.625rem] leading-snug text-zinc-500">
                  આ ફોન/બ્રાઉઝર પર યાદ રાખાશે — બીજા સરનામે ઓર્ડર હોય તો અહીં બદલી લખો.
                </p>
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
      </div>
    </div>
  )
}
