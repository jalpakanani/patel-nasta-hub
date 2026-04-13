import Image from "next/image";
import { SHOP, shopWhatsAppHref } from "@/lib/branding";
import { IconWhatsApp } from "@/app/components/BrandIcons";

export function DeliverySection() {
  return (
    <section
      id="delivery"
      className="scroll-mt-24 border-t border-zinc-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:grid-cols-2 sm:px-6">
        <div className="relative mx-auto flex aspect-[5/4] max-w-md items-center justify-center overflow-hidden rounded-3xl border border-[var(--pn-gold)]/35 bg-zinc-950 p-8 shadow-lg ring-1 ring-black/20 sm:mx-0">
          <Image
            src={SHOP.logoSrc}
            alt={SHOP.nameLatin}
            width={480}
            height={200}
            className="h-auto w-full max-w-sm object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-[var(--pn-purple-deep)] sm:text-4xl">
            હોમ ડિલિવરી કેવી રીતે?
          </h2>
          <ol className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--pn-gold)] text-sm font-bold text-[var(--pn-purple-deep)]">
                1
              </span>
              <span>
                મેનુમાંથી વસ્તુઓ પસંદ કરો અને{" "}
                <a className="font-bold text-[var(--pn-purple)] underline" href={`tel:${SHOP.phoneTel}`}>
                  કૉલ
                </a>{" "}
                કરો અથવા{" "}
                <a
                  className="inline-flex items-center gap-1 font-bold text-[#25D366] underline"
                  href={shopWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp className="h-4 w-4 shrink-0" />
                  WhatsApp
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
            દુકાન {SHOP.openingHoursGu} ખુલ્લી રહે છે. ₹300+ ઓર્ડર પર 2 કિ.મી. સુધી ફ્રી ડિલિવરી.
            બાકીના કિસ્સામાં કૉલ પર વિગત મળશે.
          </p>
        </div>
      </div>
    </section>
  );
}
