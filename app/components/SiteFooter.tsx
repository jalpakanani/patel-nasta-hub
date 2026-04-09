import { SHOP } from "@/lib/branding";

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
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--pn-gold)]">સંપર્ક</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a className="font-semibold text-white hover:underline" href={`tel:${SHOP.phoneTel}`}>
                  {SHOP.phoneDisplay}
                </a>
              </li>
              {/* <li>
                <a className="hover:underline" href={`mailto:${SHOP.email}`}>
                  {SHOP.email}
                </a>
              </li> */}
              {/* <li>
                <a
                  className="hover:underline"
                  href={SHOP.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.patelnastahub.com
                </a>
              </li> */}
              <li className="pt-1">
                <span className="font-semibold text-white">દુકાન સમય</span>
                <span className="mt-0.5 block text-zinc-400">{SHOP.openingHoursGu}</span>
                <span className="mt-0.5 block text-xs text-zinc-500">{SHOP.openingHoursLatin}</span>
              </li>
              <li className="pt-2 text-zinc-500">Instagram / WhatsApp: {SHOP.socialHandle}</li>
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
