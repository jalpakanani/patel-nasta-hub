import Link from "next/link";
import { SHOP } from "@/lib/branding";
import { GatedShopWhatsApp } from "@/app/components/GatedShopWhatsApp";
import { IconInstagram, IconMapPin, IconWhatsApp } from "@/app/components/BrandIcons";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#1a0a12] py-12 text-zinc-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">{SHOP.name}</h3>
            <p className="mt-2 text-sm leading-relaxed">{SHOP.tagline}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--pn-gold)]">સરનામું</h3>
            <address className="mt-2 not-italic text-sm leading-relaxed">
              {SHOP.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3">
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pn-gold)] underline-offset-2 hover:underline"
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconMapPin className="h-4 w-4 shrink-0" />
                Google Maps પર લોકેશન
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--pn-gold)]">સંપર્ક</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a className="font-semibold text-white hover:underline" href={`tel:${SHOP.phoneTel}`}>
                  {SHOP.phoneDisplay}
                </a>
              </li>
              <li>
                <GatedShopWhatsApp className="inline-flex items-center gap-2 border-0 bg-transparent p-0 text-left font-semibold text-[#25D366] hover:underline">
                  <IconWhatsApp className="h-4 w-4 shrink-0" />
                  WhatsApp ઓર્ડર
                </GatedShopWhatsApp>
              </li>
              <li>
                <Link
                  className="text-sm font-semibold text-[var(--pn-gold)] underline-offset-2 hover:underline"
                  href="/help"
                >
                  વેબથી ઓર્ડર કેવી રીતે કરવો
                </Link>
              </li>
             
             
              <li className="pt-1">
                <span className="font-semibold text-white">દુકાન સમય</span>
                <span className="mt-0.5 block text-zinc-400">{SHOP.openingHoursGu}</span>
                <span className="mt-0.5 block text-xs text-zinc-500">{SHOP.openingHoursLatin}</span>
              </li>
              <li className="pt-2 space-y-1.5 text-zinc-500">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <IconInstagram className="h-4 w-4 shrink-0" />
                  <span className="text-zinc-400">Instagram</span>
                  <a
                    className="text-[var(--pn-gold)] hover:underline"
                    href={SHOP.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SHOP.socialHandleLatin}
                  </a>
                  <span className="text-zinc-600">({SHOP.socialHandle})</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {SHOP.nameLatin}. બધા અધિકાર સુરક્ષિત.
        </p>
      </div>
    </footer>
  );
}
