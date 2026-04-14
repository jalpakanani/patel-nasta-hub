'use client'

import Image from 'next/image'
import {useCallback, useEffect, useRef, useState} from 'react'
import {SHOP} from '@/lib/branding'

const VISIBLE_MS = 1000
const FADE_MS = 600

export function HomeSplashOverlay() {
  const timersRef = useRef<{fade?: number; hide?: number}>({})
  const [phase, setPhase] = useState<'on' | 'fade' | 'off'>('on')

  const clearSplashTimers = useCallback(() => {
    if (timersRef.current.fade != null)
      window.clearTimeout(timersRef.current.fade)
    if (timersRef.current.hide != null)
      window.clearTimeout(timersRef.current.hide)
    timersRef.current = {}
  }, [])

  const dismissNow = useCallback(() => {
    clearSplashTimers()
    setPhase('off')
  }, [clearSplashTimers])

  useEffect(() => {
    timersRef.current.fade = window.setTimeout(
      () => setPhase('fade'),
      VISIBLE_MS,
    )
    timersRef.current.hide = window.setTimeout(() => {
      setPhase('off')
    }, VISIBLE_MS + FADE_MS)

    return () => clearSplashTimers()
  }, [clearSplashTimers])

  useEffect(() => {
    if (phase === 'off') {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'off') return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') dismissNow()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, dismissNow])

  if (phase === 'off') return null

  const backdropMotionClass =
    phase === 'on' ? 'pn-splash-backdrop opacity-100' : ''

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[var(--pn-cream)] px-6 transition-opacity ease-out [-webkit-tap-highlight-color:transparent] duration-[600ms] touch-manipulation ${
        phase === 'fade'
          ? 'pointer-events-none opacity-0 [animation:none]'
          : backdropMotionClass
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${SHOP.nameLatin} welcome`}
      onClick={() => dismissNow()}
    >
      <div
        className="pn-splash-orb pointer-events-none absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-[var(--pn-gold)]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pn-splash-orb pointer-events-none absolute -right-16 bottom-1/4 h-48 w-48 rounded-full bg-[var(--pn-orange)]/20 blur-3xl [animation-delay:0.6s]"
        aria-hidden
      />

      <div className="pn-splash-logo-wrap relative z-[1] shrink-0 rounded-3xl bg-zinc-950 px-4 py-3 shadow-2xl ring-1 ring-[var(--pn-gold)]/45 sm:px-5 sm:py-3.5">
        <div className="relative mx-auto h-24 w-36 sm:h-28 sm:w-44">
          <Image
            src={SHOP.logoSrc}
            alt={SHOP.nameLatin}
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 144px, 176px"
            priority
          />
        </div>
      </div>

      <div className="pn-splash-shimmer-bar relative z-[1] mt-1" aria-hidden />

      <div className="relative z-[1] mt-5 max-w-sm text-center">
        <p className="pn-splash-rise-1 text-2xl font-extrabold text-[var(--pn-purple-deep)] sm:text-3xl">
          {SHOP.name}
        </p>
        <p className="pn-splash-rise-2 mt-1 text-sm font-semibold text-[var(--pn-purple)] sm:text-base">
          {SHOP.nameLatin}
        </p>
        <p className="pn-splash-rise-3 mt-3 text-sm leading-relaxed text-zinc-600">
          {SHOP.tagline}
        </p>
      </div>

      <button
        type="button"
        onClick={e => {
          e.stopPropagation()
          dismissNow()
        }}
        className="pn-splash-skip-in touch-manipulation absolute right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-[2] min-h-11 min-w-11 rounded-full px-3 py-2 text-xs font-semibold text-zinc-600 underline-offset-2 transition hover:bg-zinc-200/60 hover:text-zinc-800"
        aria-label="સ્પ્લાશ બંધ કરો"
      >
        છોડો
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-6">
        <button
          type="button"
          onClick={e => {
            e.stopPropagation()
            dismissNow()
          }}
          className="pointer-events-auto min-h-12 w-full max-w-xs touch-manipulation rounded-full bg-[var(--pn-purple-deep)] px-6 text-sm font-extrabold text-white shadow-lg transition hover:brightness-110 active:brightness-95"
        >
          ચાલુ કરો
        </button>
      </div>
    </div>
  )
}
