import Image from "next/image";
import { SHOP } from "@/lib/branding";
import { getFeaturedSpotlight } from "@/lib/menu";

export function FeaturedStrip() {
  const spot = getFeaturedSpotlight();
  if (!spot) return null;

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-md px-4 py-6 sm:px-5 sm:py-8">
        <article className="group overflow-hidden rounded-2xl border border-zinc-100 bg-[var(--pn-cream)] shadow-sm transition hover:shadow-md">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={spot.image}
              alt={`${spot.name} — ${SHOP.nameLatin}`}
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 448px) 100vw, 448px"
            />
          </div>
          <div className="p-4">
            <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-[var(--pn-purple)]">
              {SHOP.featuredEyebrowGu}
            </p>
            <p className="mt-0.5 text-[0.75rem] font-medium uppercase tracking-wide text-zinc-400">
              {SHOP.featuredEyebrowLatin}
            </p>
            <div className="mt-1.5 flex flex-wrap items-baseline gap-2">
              <h2 className="text-lg font-bold text-[var(--pn-red)] sm:text-xl">{spot.name}</h2>
              <span className="text-sm font-extrabold text-[var(--pn-purple)]">{spot.price}</span>
            </div>
            {spot.nameLatin ? (
              <p className="mt-1 text-xs font-medium text-zinc-500">{spot.nameLatin}</p>
            ) : null}
            <p className="mt-2 text-sm text-zinc-600">{spot.descriptionGu}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
