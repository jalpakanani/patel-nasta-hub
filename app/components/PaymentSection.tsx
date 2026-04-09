import Image from "next/image";
import { SHOP } from "@/lib/branding";
import { CopyUpiButton } from "./CopyUpiButton";

export function PaymentSection() {
  return (
    <section
      id="pay"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[var(--pn-purple)] via-[var(--pn-purple-deep)] to-[var(--pn-gradient-end)] py-14 text-white sm:py-20"
    >
      <div
        className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-[var(--pn-gold)]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[var(--pn-gold)]/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--pn-gold)] ring-1 ring-[var(--pn-gold)]/35">
            UPI
          </span>
          <h2 className="mt-4 text-3xl font-extrabold drop-shadow-sm sm:text-4xl">સ્કેન કરીને ચૂકવણી</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">
            PhonePe, Google Pay, Paytm, BHIM — કોઈ પણ UPI એપથી સ્કેન કરો
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-white/20 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md ring-1 ring-[var(--pn-gold)]/25 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:items-start lg:gap-10">
            <div className="flex flex-col items-center lg:items-stretch">
              <div className="w-full max-w-[min(220px,88vw)] lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border border-white/30 bg-white p-2 shadow-lg">
                  <Image
                    src="/images/paytm-qr.png"
                    alt="Paytm UPI QR કોડ"
                    width={900}
                    height={1200}
                    className="mx-auto h-auto max-h-[min(280px,48vh)] w-full rounded-lg object-contain sm:max-h-[280px]"
                    sizes="(max-width: 1024px) min(220px, 88vw), 176px"
                  />
                </div>
                <p className="mt-2 text-center text-[11px] text-white/55 lg:text-left">સ્કેન કરવા ફોન નજીક લાવો</p>
              </div>
            </div>

            <div className="min-w-0 space-y-5 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--pn-gold)]">UPI ID</p>
                <div className="mt-2 rounded-xl border border-white/15 bg-black/20 px-4 py-3">
                  <p className="select-all break-all font-mono text-base leading-snug text-white sm:text-lg">
                    {SHOP.upiId}
                  </p>
                </div>
              </div>
              <CopyUpiButton upiId={SHOP.upiId} className="w-full rounded-full bg-[var(--pn-gold)] px-5 py-3 text-sm font-semibold text-[var(--pn-purple-deep)] shadow-md transition hover:brightness-110 sm:w-auto sm:py-2.5" />
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/90">
                <p>
                  <span className="font-semibold text-white">નામ: </span>
                  {SHOP.ownerGu}
                </p>
                <p className="mt-2">
                  <span className="font-semibold text-white">મોબાઈલ: </span>
                  <a className="font-medium text-[var(--pn-gold)] underline-offset-2 hover:underline" href={`tel:${SHOP.phoneTel}`}>
                    {SHOP.phoneDisplay}
                  </a>
                </p>
              </div>
              <p className="text-[11px] leading-relaxed text-white/55">
                QR Paytm દ્વારા બનાવેલો છે; બીજી UPI એપમાં પણ ચાલશે.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
