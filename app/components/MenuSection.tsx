import Image from "next/image";
import {
  MENU_CATEGORIES,
  MENU_NOTES,
  PRINTED_MENU_ALT,
  PRINTED_MENU_SRC,
} from "@/lib/menu";

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-24 bg-[var(--pn-cream)] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[var(--pn-purple)]/10 px-4 py-1 text-sm font-bold text-[var(--pn-purple)]">
            મેનુ અને કિંમતો
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[var(--pn-purple-deep)] sm:text-4xl">
            તાજા નાસ્તા, વાજબી ભાવ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            મેનુ જોવો, ફોન પર ઓર્ડર આપો ને ફ્રેશ નાસ્તાનો આનંદ માણો.
          </p>
        </div>

        <div className="space-y-16">
          {MENU_CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[var(--pn-red)]">
                <span className="h-1 w-8 rounded-full bg-[var(--pn-orange)]" />
                {cat.title}
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <li
                    key={`${cat.id}-${item.name}`}
                    className="flex overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 112px, 128px"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4">
                      <p className="break-words font-bold leading-snug text-zinc-900">{item.name}</p>
                      {item.note ? (
                        <p className="mt-1 text-xs text-zinc-500">{item.note}</p>
                      ) : null}
                      <p className="mt-2 text-lg font-extrabold text-[var(--pn-purple)]">
                        {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-[var(--pn-gold)]/60 bg-white/60 p-5 text-center text-sm font-medium text-zinc-700">
          {MENU_NOTES.map((line) => (
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
  );
}
