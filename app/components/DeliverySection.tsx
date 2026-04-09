import Image from "next/image";
import { SHOP } from "@/lib/branding";

export function DeliverySection() {
  return (
    <section
      id="delivery"
      className="scroll-mt-24 border-t border-zinc-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:grid-cols-2 sm:px-6">
        <div className="relative aspect-square max-w-md overflow-hidden rounded-3xl border border-zinc-100 shadow-lg sm:mx-0">
          <Image
            src="/images/logo-chef.png"
            alt="પટેલ નાસ્તા હબ લોગો"
            fill
            className="object-contain bg-[#f4f4f5] p-6"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[var(--pn-purple-deep)] sm:text-4xl">
            હોમ ડિલિવરી કેવી રીતે?
          </h2>
          <ol className="mt-6 space-y-4 text-lg text-zinc-700">
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--pn-gold)] text-sm font-bold text-[var(--pn-purple-deep)]">
                1
              </span>
              <span>
                મેનુમાંથી વસ્તુઓ પસંદ કરો અને{" "}
                <a className="font-bold text-[var(--pn-purple)] underline" href={`tel:${SHOP.phoneTel}`}>
                  કૉલ
                </a>{" "}
                કરો.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--pn-gold)] text-sm font-bold text-[var(--pn-purple-deep)]">
                2
              </span>
              <span>અમે સમય અને એડ્રેસ કન્ફર્મ કરીશું.</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--pn-gold)] text-sm font-bold text-[var(--pn-purple-deep)]">
                3
              </span>
              <span>તાજું પેક કરીને ઝડપથી ડિલિવર કરીશું.</span>
            </li>
          </ol>
          <p className="mt-6 rounded-2xl bg-[var(--pn-purple)]/5 p-4 text-sm text-zinc-600">
            ₹300+ ઓર્ડર પર 2 કિ.મી. સુધી ફ્રી ડિલિવરી. બાકીના કિસ્સામાં કૉલ પર વિગત મળશે.
          </p>
        </div>
      </div>
    </section>
  );
}
