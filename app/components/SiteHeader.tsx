import Image from "next/image";
import Link from "next/link";
import { SHOP } from "@/lib/branding";

const nav = [
  { href: "#menu", label: "મેનુ" },
  { href: "#delivery", label: "ડિલિવરી" },
  { href: "#pay", label: "ચૂકવણી" },
  { href: "#contact", label: "સંપર્ક" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#4a1f13]/10 bg-[var(--pn-cream)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="flex shrink-0 items-center rounded-2xl bg-zinc-950 px-2.5 py-1.5 shadow-md ring-1 ring-[#c9a227]/40 sm:px-3 sm:py-2">
            <Image
              src={SHOP.logoSrc}
              alt={SHOP.nameLatin}
              width={220}
              height={72}
              className="h-9 w-auto max-w-[min(52vw,220px)] object-contain object-left sm:h-11"
              priority
            />
          </span>
          <span className="hidden min-w-0 text-left leading-tight sm:block">
            <span className="block text-sm font-bold text-zinc-800">{SHOP.name}</span>
            <span className="text-xs text-zinc-500">{SHOP.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
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
            href={SHOP.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2 text-sm font-semibold text-[#128C7E] sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${SHOP.phoneTel}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--pn-purple)] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[var(--pn-purple)]/25 transition hover:brightness-110"
          >
            કૉલ કરો
          </a>
        </div>
      </div>
    </header>
  );
}
