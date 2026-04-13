import Image from 'next/image'
import { MenuItemsGrid } from '@/app/components/MenuItemsGrid'
import { SHOP } from '@/lib/branding'
import { deliveryWebHighlightGu } from '@/lib/deliveryPricing'
import { MENU_NOTES, PRINTED_MENU_ALT, PRINTED_MENU_SRC } from '@/lib/menu'

export function MenuSection() {
  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-[var(--pn-cream)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[var(--pn-purple)]/10 px-4 py-1 text-sm font-bold text-[var(--pn-purple)]">
            મેનુ અને કિંમતો
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[var(--pn-purple-deep)] sm:text-4xl">
            તાજો નાસ્તો, વ્યાજબી ભાવ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            દરેક વસ્તુની સંખ્યા પસંદ કરો, નીચે &quot;WhatsApp પર ઓર્ડર&quot;
            દબાવો — તમારી યાદી અને કુલ રકમ WhatsApp પર મોકલાશે.
          </p>
        </div>

        <div
          className="mx-auto mb-10 max-w-2xl rounded-2xl border border-amber-300/80 bg-gradient-to-br from-amber-50 via-orange-50/90 to-amber-50/70 px-4 py-3.5 text-center shadow-sm ring-1 ring-amber-200/50 sm:px-5"
          role="note"
        >
          <p className="text-[0.8125rem] font-extrabold uppercase tracking-wide text-amber-950/90 sm:text-xs">
            ડિલિવરી ચાર્જ
          </p>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-amber-950 sm:text-[0.9375rem]">
            {deliveryWebHighlightGu()}
          </p>
        </div>

        <div
          className="mx-auto mb-10 max-w-2xl rounded-2xl border border-[var(--pn-purple)]/35 bg-[var(--pn-purple)]/6 px-4 py-3.5 text-center shadow-sm ring-1 ring-[var(--pn-purple)]/10 sm:px-5"
          role="note"
        >
          <p className="text-[0.8125rem] font-extrabold uppercase tracking-wide text-[var(--pn-purple-deep)] sm:text-xs">
            ઓર્ડર કન્ફર્મ કરવા
          </p>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-zinc-800 sm:text-[0.9375rem]">
            {SHOP.whatsappOrderMustCallGu}
          </p>
        </div>

        <MenuItemsGrid />

        <div className="mt-12 rounded-2xl border border-dashed border-[var(--pn-gold)]/60 bg-white/60 p-5 text-center text-sm font-medium text-zinc-700">
          {MENU_NOTES.map(line => (
            <p key={line} className="py-1">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="mb-6 text-center text-lg font-bold text-[var(--pn-purple-deep)] sm:text-xl">
            અમારું પ્રિન્ટ મેનુ
          </h3>
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl">
            <div className="overflow-hidden rounded-lg shadow-2xl ring-1 ring-black/10">
              <Image
                src={PRINTED_MENU_SRC}
                alt={PRINTED_MENU_ALT}
                width={1200}
                height={1800}
                className="h-auto w-full object-contain object-top"
                sizes="(max-width: 768px) 100vw, 672px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
