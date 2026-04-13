'use client'

import Image from 'next/image'
import {
  formatGuWeightLabel,
  MENU_CATEGORIES,
  menuCartItemKey,
} from '@/lib/menu'
import { useOrderCart } from '@/app/components/OrderCartProvider'

export function MenuItemsGrid() {
  const { lines, addOne, increment, decrement } = useOrderCart()

  const qtyFor = (categoryId: string, itemName: string) => {
    const key = menuCartItemKey(categoryId, itemName)
    return lines.find(l => l.key === key)?.qty ?? 0
  }

  return (
    <div className="space-y-16">
      {MENU_CATEGORIES.map(cat => (
        <div key={cat.id}>
          <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[var(--pn-red)]">
            <span className="h-1 w-8 rounded-full bg-[var(--pn-orange)]" />
            {cat.title}
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map(item => {
              const key = menuCartItemKey(cat.id, item.name)
              const qty = qtyFor(cat.id, item.name)
              return (
                <li
                  key={key}
                  className="relative flex items-stretch overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative z-0 w-28 min-h-28 shrink-0 self-stretch overflow-hidden sm:min-h-32 sm:w-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center select-none"
                      draggable={false}
                      sizes="(max-width: 640px) 112px, 128px"
                    />
                  </div>
                  <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center self-stretch p-3 sm:p-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <p className="break-words font-bold leading-snug text-zinc-900">
                        {item.name}
                      </p>
                      {item.featured ? (
                        <span className="shrink-0 rounded-full bg-[var(--pn-gold)]/25 px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wide text-[var(--pn-purple-deep)] ring-1 ring-[var(--pn-gold)]/40">
                          ફેમસ પિક
                        </span>
                      ) : null}
                    </div>
                    {item.tags?.length ? (
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {item.tags.map(tag => (
                          <span
                            key={`${item.name}-${tag}`}
                            className="inline-block rounded-full bg-[var(--pn-orange)]/15 px-2 py-0.5 text-[0.65rem] font-bold text-[var(--pn-red)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {item.note ? (
                      <p className="mt-1 text-xs text-zinc-500">{item.note}</p>
                    ) : null}
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <p className="min-w-0 max-w-[min(100%,14rem)] break-words text-base font-extrabold leading-tight text-[var(--pn-purple)] sm:text-lg">
                        {item.price}
                      </p>
                      {qty === 0 ? (
                        <button
                          type="button"
                          onClick={() => addOne(cat.id, item.name, item.price)}
                          className="touch-manipulation shrink-0 select-none rounded-full bg-[var(--pn-purple)] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:brightness-110 active:brightness-95 min-h-11 min-w-[5.5rem] sm:min-h-0 sm:min-w-0 sm:px-3 sm:py-1.5"
                        >
                          + ઉમેરો
                        </button>
                      ) : (
                        <div className="flex shrink-0 items-center gap-2">
                          <div className="flex items-center gap-0.5 rounded-full border border-zinc-200 bg-zinc-50 p-1">
                            <button
                              type="button"
                              aria-label="ઓછી કરો"
                              onClick={() => decrement(key)}
                              className="touch-manipulation flex min-h-11 min-w-11 select-none items-center justify-center rounded-full text-xl font-bold text-zinc-700 transition hover:bg-white active:bg-zinc-100 sm:min-h-9 sm:min-w-9"
                            >
                              -
                            </button>
                            <span className="min-w-[2rem] text-center text-sm font-bold text-zinc-900 tabular-nums">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label="વધારો"
                              onClick={() => increment(key)}
                              className="touch-manipulation flex min-h-11 min-w-11 select-none items-center justify-center rounded-full text-xl font-bold text-zinc-700 transition hover:bg-white active:bg-zinc-100 sm:min-h-9 sm:min-w-9"
                            >
                              +
                            </button>
                          </div>
                          {item.gramsPerCartStep ? (
                            <span className="max-w-[5rem] text-right text-[0.6875rem] font-bold leading-tight text-zinc-600 tabular-nums sm:text-xs">
                              {formatGuWeightLabel(
                                qty,
                                item.gramsPerCartStep,
                              )}
                            </span>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
