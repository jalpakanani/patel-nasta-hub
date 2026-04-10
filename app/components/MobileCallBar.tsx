import { SHOP, shopWhatsAppHref } from "@/lib/branding";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${SHOP.phoneTel}`}
          className="flex flex-1 items-center justify-center rounded-2xl bg-[var(--pn-purple)] py-3.5 text-center text-sm font-bold text-white"
        >
          ઓર્ડર: કૉલ કરો
        </a>
        <a
          href={shopWhatsAppHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-2xl border-2 border-[#25D366] bg-[#25D366]/10 py-3.5 text-center text-sm font-bold text-[#128C7E]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
