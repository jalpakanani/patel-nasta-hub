import Image from "next/image";
import Link from "next/link";
import { SHOP } from "@/lib/branding";

function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 0)",
        backgroundSize: "12px 12px",
      }}
    />
  );
}

export function HeroFlyerCard() {
  const addressLine = SHOP.addressLines.join(" · ");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] ring-2 ring-[var(--pn-gold)]/40">
      <div className="grid h-full min-h-[min(100vw-2rem,320px)] grid-cols-2 grid-rows-1 sm:min-h-[280px]">
        <div className="relative flex flex-col justify-between bg-gradient-to-br from-amber-50/95 via-white to-orange-50/40 p-2.5 sm:p-4">
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-gradient-to-br from-[var(--pn-gold)]/25 to-transparent sm:h-44 sm:w-44"
            aria-hidden
          />
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col items-center justify-center px-1 pt-1">
            <div className="relative h-[min(160px,38vw)] w-full max-w-[min(168px,42vw)] sm:h-[180px] sm:max-w-[190px]">
              <Image
                src="/images/delivery-scooter-cartoon.png"
                alt="ફ્રી ડિલિવરી — સ્કૂટર પર ઓર્ડર"
                fill
                className="object-contain object-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                sizes="(max-width: 640px) 42vw, 190px"
                unoptimized
              />
            </div>
          </div>
          <div className="relative z-[1] space-y-1 text-[11px] leading-snug text-zinc-600 sm:text-xs">
            <p className="font-medium text-zinc-700">માત્ર 2 કિલોમીટરના એરિયામાં ફ્રી ડિલિવરી.</p>
            <p className="font-semibold text-zinc-500">*T&amp;C Apply</p>
          </div>
        </div>

        <div className="relative flex flex-col bg-[var(--pn-flyer-panel)] p-2.5 text-white sm:p-4">
          <DotPattern className="pointer-events-none absolute inset-0 opacity-35" />
          <div className="relative z-[1] mb-2 flex justify-center">
            <div className="rounded-lg bg-zinc-950/40 px-2 py-1 ring-1 ring-[var(--pn-gold)]/40">
              <Image
                src={SHOP.logoSrc}
                alt={SHOP.nameLatin}
                width={160}
                height={52}
                className="h-9 w-auto object-contain sm:h-10"
              />
            </div>
          </div>
          <h2 className="relative z-[1] text-balance text-center text-[15px] font-extrabold leading-tight sm:text-lg">
            ફ્રી હોમ ડિલિવરી
          </h2>
          <p className="relative z-[1] mt-1.5 text-center text-xs font-medium text-white/95 sm:mt-2 sm:text-sm">
            ₹300 કે તેથી વધુના ઓર્ડર પર
          </p>
          <p className="relative z-[1] mt-1.5 text-center text-[11px] leading-snug text-white/85 sm:mt-2 sm:text-xs">
            Enjoy the ease of FREE delivery on all your favorite foods.
          </p>
          <div className="relative z-[1] mt-auto space-y-1.5 pt-2 sm:space-y-2 sm:pt-3">
            <Link
              href={`tel:${SHOP.phoneTel}`}
              className="flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--pn-gold)] px-3 py-2.5 text-center text-sm font-bold text-[var(--pn-purple-deep)] shadow-md transition hover:brightness-110 active:brightness-95"
            >
              Order Now
            </Link>
            <p className="text-center text-xs font-semibold text-white/95 sm:text-sm">{SHOP.phoneDisplay}</p>
            <p className="text-center text-[10px] font-bold uppercase tracking-wide text-[var(--pn-gold)] sm:text-xs">
              {SHOP.nameLatin}
            </p>
            <p className="text-balance break-words text-center text-[10px] leading-snug text-white/80 sm:text-xs">
              {addressLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
