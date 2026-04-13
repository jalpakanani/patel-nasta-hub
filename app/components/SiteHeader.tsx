import Image from 'next/image'
import Link from 'next/link'
import { SHOP, shopWhatsAppHref } from '@/lib/branding'
import { IconWhatsApp } from '@/app/components/BrandIcons'

const nav = [
  {href: '#menu', label: 'મેનુ'},
  {href: '#delivery', label: 'ડિલિવરી'},
  {href: '#pay', label: 'ચૂકવણી'},
  {href: '#contact', label: 'સંપર્ક'},
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4a1f13]/10 bg-[var(--pn-cream)]/95 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-4">
          <span className="flex shrink-0 items-center rounded-2xl bg-zinc-950 px-2.5 py-2 shadow-md ring-1 ring-[var(--pn-gold)]/45 sm:px-3 sm:py-2.5">
            <Image
              src={SHOP.logoSrc}
              alt={SHOP.nameLatin}
              width={300}
              height={96}
              className="h-9 w-auto max-w-[min(48vw,300px)] object-contain object-left sm:h-11"
              priority
            />
          </span>
          <span className="min-w-0 text-left leading-tight">
            <span className="block font-extrabold text-[var(--pn-red)] sm:text-lg">
              {SHOP.name}
            </span>
            <span className="mt-0.5 line-clamp-2 text-[11px] text-zinc-600 sm:mt-0 sm:block sm:text-xs sm:line-clamp-none">
              {SHOP.tagline}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="મુખ્ય નેવિગેશન"
        >
          {nav.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--pn-purple-deep)] transition hover:bg-white/80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={shopWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-sm font-semibold text-[#25D366] sm:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${SHOP.phoneTel}`}
            className="inline-flex min-h-11 min-w-[5.5rem] items-center justify-center rounded-full bg-[var(--pn-purple)] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[var(--pn-purple)]/25 transition hover:brightness-110"
          >
            કૉલ કરો
          </a>
        </div>
      </div>

      <nav
        className="flex gap-2 overflow-x-auto border-t border-[#4a1f13]/10 px-4 py-2.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:px-6 md:hidden [&::-webkit-scrollbar]:hidden"
        aria-label="સેક્શન પર જાઓ"
      >
        {nav.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-[var(--pn-purple-deep)]/12 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-sm active:bg-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
