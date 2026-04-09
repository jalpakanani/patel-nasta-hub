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
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[var(--pn-gold)] bg-white shadow-sm sm:h-14 sm:w-14">
            <Image
              src="/images/logo-seal.png"
              alt={SHOP.nameLatin}
              fill
              className="object-cover"
              sizes="56px"
              priority
            />
          </span>
          <span className="min-w-0 text-left leading-tight">
            <span className="block font-extrabold text-[var(--pn-red)] sm:text-lg">
              {SHOP.name}
            </span>
            <span className="hidden text-xs text-zinc-600 sm:block">
              {SHOP.tagline}
            </span>
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
