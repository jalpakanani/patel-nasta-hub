import Image from "next/image";
import { SHOP } from "@/lib/branding";
import { CopyUpiButton } from "./CopyUpiButton";

export function PaymentSection() {
  return (
    <section
      id="pay"
      className="scroll-mt-24 bg-gradient-to-b from-[var(--pn-purple)] to-[#2a0f3e] py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">સ્કેન કરીને ચૂકવણી</h2>
          <p className="mt-3 text-white/80">
            UPI થી ઝડપથી પેમેન્ટ કરો — PhonePe, Google Pay, Paytm, BHIM
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white p-4 shadow-2xl">
            <Image
              src="/images/paytm-qr.png"
              alt="Paytm UPI QR કોડ"
              width={900}
              height={1200}
              className="h-auto w-full rounded-2xl object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <div>
              <p className="text-sm font-semibold text-[var(--pn-gold)]">UPI ID</p>
              <p className="mt-1 break-all font-mono text-lg sm:text-xl">{SHOP.upiId}</p>
            </div>
            <CopyUpiButton upiId={SHOP.upiId} />
            <div className="border-t border-white/10 pt-6 text-sm text-white/85">
              <p>
                <span className="font-semibold text-white">નામ: </span>
                {SHOP.ownerGu}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-white">મોબાઈલ: </span>
                <a className="underline" href={`tel:${SHOP.phoneTel}`}>
                  {SHOP.phoneDisplay}
                </a>
              </p>
            </div>
            <p className="text-xs text-white/60">
              QR કોડ Paytm દ્વારા જનરેટ થયેલ છે; અન્ય UPI એપમાં પણ સ્કેન થઈ શકે છે.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
