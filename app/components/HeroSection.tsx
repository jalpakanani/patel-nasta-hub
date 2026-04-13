import Link from 'next/link'
import { SHOP } from '@/lib/branding'
import {HeroFlyerCard} from './HeroFlyerCard'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--pn-purple)] via-[var(--pn-purple-deep)] to-[var(--pn-gradient-end)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[var(--pn-gold)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[var(--pn-orange)]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:items-center sm:gap-12 sm:px-6 sm:py-16">
        <div className="order-2 sm:order-1">
          <div className="rounded-3xl border border-white/20 bg-white/[0.08] p-6 shadow-lg backdrop-blur-md ring-1 ring-[var(--pn-gold)]/25 sm:p-8">
            <p className="mb-2 inline-block rounded-full bg-[var(--pn-gold)]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--pn-gold)] ring-1 ring-[var(--pn-gold)]/35">
              {SHOP.nameLatin}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-extrabold leading-tight drop-shadow-md sm:text-4xl lg:text-5xl">
              ફ્રી હોમ ડિલિવરી
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              ઓફર, ફોન અને એડ્રેસ{' '}
              <span className="sm:hidden">ઉપરના પોસ્ટર પર</span>
              <span className="hidden sm:inline">જમણી બાજુના પોસ્ટર પર</span>
              {' '}
              — અહીંથી મેનુ જુઓ અથવા કૉલ કરો.
            </p>
            <p className="mt-2 text-sm text-[var(--pn-gold)]/90">
              * નિયમો લાગુ
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#menu"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--pn-gold)] px-6 py-3 text-base font-bold text-[var(--pn-purple-deep)] shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-auto"
              >
                મેનુ જુઓ
              </Link>
              <a
                href={`tel:${SHOP.phoneTel}`}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white/70 bg-white/5 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition hover:border-[var(--pn-gold)] hover:bg-white/10 sm:w-auto"
              >
                ઓર્ડર માટે કૉલ
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 sm:order-2">
          <HeroFlyerCard />
        </div>
      </div>
    </section>
  )
}
