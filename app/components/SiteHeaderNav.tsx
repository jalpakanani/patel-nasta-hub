'use client'

import { usePathname } from 'next/navigation'

const sectionNav = [
  { hash: '#menu', label: 'મેનુ' },
  { hash: '#delivery', label: 'ડિલિવરી' },
  { hash: '#pay', label: 'ચૂકવણી' },
] as const

const contactHash = '#contact' as const

type SiteHeaderNavRow = 'bar' | 'rail'

export function SiteHeaderNav({ row }: { row: SiteHeaderNavRow }) {
  const pathname = usePathname()
  const sectionHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`)

  if (row === 'bar') {
    return (
      <nav
        className="hidden items-center gap-1 md:flex"
        aria-label="મુખ્ય નેવિગેશન"
      >
        {sectionNav.map(item => (
          <a
            key={item.hash}
            href={sectionHref(item.hash)}
            className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--pn-purple-deep)] transition hover:bg-white/80"
          >
            {item.label}
          </a>
        ))}
        <a
          href="/help"
          className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--pn-purple-deep)] transition hover:bg-white/80"
        >
          વેબ ઓર્ડર
        </a>
        <a
          href={sectionHref(contactHash)}
          className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--pn-purple-deep)] transition hover:bg-white/80"
        >
          સંપર્ક
        </a>
      </nav>
    )
  }

  return (
    <nav
      className="flex gap-2 overflow-x-auto border-t border-[#4a1f13]/10 px-4 py-2.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:px-6 md:hidden [&::-webkit-scrollbar]:hidden"
      aria-label="સેક્શન પર જાઓ"
    >
      {sectionNav.map(item => (
        <a
          key={item.hash}
          href={sectionHref(item.hash)}
          className="shrink-0 rounded-full border border-[var(--pn-purple-deep)]/12 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-sm active:bg-white"
        >
          {item.label}
        </a>
      ))}
      <a
        href="/help"
        className="shrink-0 rounded-full border border-[var(--pn-purple-deep)]/12 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-sm active:bg-white"
      >
        વેબ ઓર્ડર
      </a>
      <a
        href={sectionHref(contactHash)}
        className="shrink-0 rounded-full border border-[var(--pn-purple-deep)]/12 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-sm active:bg-white"
      >
        સંપર્ક
      </a>
    </nav>
  )
}
