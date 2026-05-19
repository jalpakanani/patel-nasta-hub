import Image from "next/image";
import { SHOP } from "@/lib/branding";
import { getFeaturedSpotlights } from "@/lib/menu";

export function FeaturedStrip() {
  const spots = getFeaturedSpotlights();
  if (!spots.length) return null;

  const twoUp = spots.length > 1;

  return (
    <section className="border-y border-zinc-200 bg-white">
      <div
        className={
          twoUp
            ? "mx-auto grid max-w-3xl grid-cols-2 gap-2.5 px-3 py-6 min-[400px]:gap-3 sm:gap-4 sm:px-5 sm:py-8"
            : "mx-auto max-w-md space-y-6 px-4 py-6 sm:px-5 sm:py-8"
        }
      >
        {spots.map((spot) => (
          <article
            key={spot.name}
            className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-100 bg-[var(--pn-cream)] shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full min-[400px]:aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src={spot.image}
                alt={`${spot.name} — ${SHOP.nameLatin}`}
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                sizes={
                  twoUp
                    ? "(max-width: 640px) 46vw, 340px"
                    : "(max-width: 448px) 100vw, 448px"
                }
              />
            </div>
            <div className={twoUp ? "p-2.5 sm:p-4" : "p-4"}>
              <p
                className={
                  twoUp
                    ? "text-[0.6rem] font-semibold uppercase leading-tight tracking-wide text-[var(--pn-purple)] sm:text-[0.75rem]"
                    : "text-[0.75rem] font-semibold uppercase tracking-wide text-[var(--pn-purple)]"
                }
              >
                {SHOP.featuredEyebrowGu}
              </p>
              <p
                className={
                  twoUp
                    ? "mt-0.5 text-[0.6rem] font-medium uppercase leading-tight tracking-wide text-zinc-400 sm:text-[0.75rem]"
                    : "mt-0.5 text-[0.75rem] font-medium uppercase tracking-wide text-zinc-400"
                }
              >
                {SHOP.featuredEyebrowLatin}
              </p>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                <h2
                  className={
                    twoUp
                      ? "text-sm font-bold leading-snug text-[var(--pn-red)] sm:text-lg md:text-xl"
                      : "text-lg font-bold text-[var(--pn-red)] sm:text-xl"
                  }
                >
                  {spot.name}
                </h2>
                <span
                  className={
                    twoUp
                      ? "text-xs font-extrabold text-[var(--pn-purple)] sm:text-sm"
                      : "text-sm font-extrabold text-[var(--pn-purple)]"
                  }
                >
                  {spot.price}
                </span>
              </div>
              {spot.nameLatin ? (
                <p className="mt-0.5 text-[0.65rem] font-medium text-zinc-500 sm:mt-1 sm:text-xs">
                  {spot.nameLatin}
                </p>
              ) : null}
              <p
                className={
                  twoUp
                    ? "mt-1.5 text-[0.7rem] leading-snug text-zinc-600 sm:mt-2 sm:text-sm"
                    : "mt-2 text-sm text-zinc-600"
                }
              >
                {spot.descriptionGu}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
