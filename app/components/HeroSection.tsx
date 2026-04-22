import Image from 'next/image'
import Link from 'next/link'
import { SHOP } from '@/lib/branding'
import { HeroFlyerCard } from './HeroFlyerCard'

function IconPlayBadge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="20" stroke="white" strokeOpacity="0.92" strokeWidth="1.75" />
      <path
        d="M20 15.5v17L32 24 20 15.5Z"
        fill="white"
        fillOpacity="0.95"
      />
    </svg>
  )
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--pn-purple)] via-[var(--pn-purple-deep)] to-[var(--pn-gradient-end)]"
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
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:items-center sm:gap-12 sm:px-6 sm:py-16">
        <div className="order-2 sm:order-1">
          <div className="rounded-3xl border border-white/20 bg-white/[0.08] p-4 shadow-lg backdrop-blur-md ring-1 ring-[var(--pn-gold)]/25 sm:p-8">
            <p className="mb-1.5 inline-block rounded-full bg-[var(--pn-gold)]/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--pn-gold)] ring-1 ring-[var(--pn-gold)]/35 sm:mb-2 sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.2em]">
              {SHOP.nameLatin}
            </p>
            <h1 className="mt-2 text-balance text-[1.65rem] font-extrabold leading-tight drop-shadow-md sm:mt-3 sm:text-4xl lg:text-5xl">
              ફ્રી હોમ ડિલિવરી
            </h1>
            <p className="mt-3 text-base leading-snug text-white/90 sm:mt-4 sm:text-lg sm:leading-relaxed">
              ઓફર, ફોન અને એડ્રેસ{' '}
              <span className="sm:hidden">ઉપરના પોસ્ટર પર</span>
              <span className="hidden sm:inline">જમણી બાજુના પોસ્ટર પર</span>
              {' '}
              — અહીંથી મેનુ જુઓ અથવા કૉલ કરો.
            </p>
            <p className="mt-1.5 text-xs text-[var(--pn-gold)]/90 sm:mt-2 sm:text-sm">
              * નિયમો લાગુ
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href="#menu"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[var(--pn-gold)] px-5 py-2.5 text-sm font-bold text-[var(--pn-purple-deep)] shadow-lg shadow-black/20 transition hover:brightness-110 sm:min-h-11 sm:px-6 sm:py-3 sm:text-base sm:w-auto"
              >
                મેનુ જુઓ
              </Link>
              <a
                href={`tel:${SHOP.phoneTel}`}
                className="inline-flex min-h-10 w-full appearance-none items-center justify-center rounded-full border-2 border-white/70 bg-[rgba(255,255,255,0.14)] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[var(--pn-gold)] hover:bg-[rgba(255,255,255,0.24)] active:bg-[rgba(255,255,255,0.2)] sm:min-h-11 sm:px-6 sm:py-3 sm:text-base sm:w-auto"
              >
                ઓર્ડર માટે કૉલ
              </a>
            </div>
            <div className="mt-4 border-t border-white/15 pt-4 sm:mt-6 sm:pt-7">
              <Link
                href="/help"
                aria-label="મદદ: પગલાં અને વિડિયો સાથે ઓર્ડર શીખો"
                className="group relative mx-auto flex max-w-lg items-center overflow-hidden rounded-2xl p-[2px] shadow-[0_12px_36px_rgba(0,0,0,0.2)] ring-1 ring-[var(--pn-gold)]/45 transition hover:ring-[var(--pn-gold)]/80 active:scale-[0.99] sm:rounded-[1.65rem]"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 via-[var(--pn-gold)] to-amber-600"
                  aria-hidden
                />
                <span
                  className="absolute inset-[2px] rounded-[calc(1rem-2px)] bg-gradient-to-br from-[#2a1208] via-[var(--pn-purple-deep)] to-[#1a0a06] sm:rounded-[1.5rem]"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-[2px] rounded-[calc(1rem-2px)] bg-gradient-to-tr from-white/[0.06] to-transparent sm:rounded-[1.5rem]"
                  aria-hidden
                />
                <div className="relative flex min-w-0 flex-1 items-center gap-2.5 px-3 py-2.5 sm:gap-5 sm:px-6 sm:py-5">
                  <div className="relative h-14 w-[5.35rem] shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-white/30 sm:h-[5.25rem] sm:w-[8.75rem] sm:rounded-2xl">
                    <Image
                      src="/images/featured-cheese-masala-pakwan.jpg"
                      alt=""
                      fill
                      className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width:640px) 86px, 140px"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/45 via-black/15 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconPlayBadge className="h-8 w-8 drop-shadow sm:h-11 sm:w-11" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 space-y-0.5 text-left pr-0.5 sm:space-y-2 sm:pr-2">
                    <p className="text-[0.62rem] font-bold uppercase leading-tight tracking-[0.1em] text-[var(--pn-gold)]/95 sm:text-[0.7rem] sm:tracking-[0.12em]">
                      સાઇટ સમજાતી ન હોય?
                    </p>
                    <p className="text-[0.8125rem] font-black leading-snug tracking-tight text-white sm:text-lg">
                      એક વાર જુઓ — પગલાં + વિડિયો
                    </p>
                    <p className="hidden text-xs font-semibold leading-snug text-white/75 sm:block sm:text-sm">
                      ઓનલાઇન ઓર્ડર શીખો
                    </p>
                  </div>
                  <IconChevronRight className="h-6 w-6 shrink-0 self-center text-[var(--pn-gold)] opacity-85 transition group-hover:translate-x-0.5 group-hover:opacity-100 sm:h-8 sm:w-8" />
                </div>
              </Link>
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
