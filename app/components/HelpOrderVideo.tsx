'use client'

import { useCallback, useState } from 'react'

const SOURCES = [
  { src: '/videos/help-order.mp4', type: 'video/mp4' },
  { src: '/videos/help-order.webm', type: 'video/webm' },
] as const

export function HelpOrderVideo() {
  const [mediaFailed, setMediaFailed] = useState(false)

  const onError = useCallback(() => {
    setMediaFailed(true)
  }, [])

  if (mediaFailed) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-zinc-100 px-5 py-8 text-center sm:px-8">
        <p className="text-sm font-bold text-[var(--pn-purple-deep)]">વિડિયો અહીં દેખાશે</p>
        <p className="max-w-md text-xs leading-relaxed text-zinc-600">
          તમારી ટૂંકી રેકોર્ડિંગ આ ફાઇલ નામે પ્રોજેક્ટમાં મૂકો:{' '}
          <span className="mt-1 block font-mono text-[0.65rem] text-zinc-800">
            public/videos/help-order.mp4
          </span>
          <span className="mt-2 block text-zinc-500">(વૈકલ્પિક: help-order.webm)</span>
        </p>
      </div>
    )
  }

  return (
    <video
      className="aspect-video w-full bg-zinc-950 object-contain"
      controls
      playsInline
      preload="metadata"
      onError={onError}
      aria-label="વેબ પરથી ઓર્ડર કરવાનો ટૂંકો વિડિયો"
    >
      {SOURCES.map(s => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  )
}
