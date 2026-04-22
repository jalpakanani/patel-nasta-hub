import type { Metadata } from "next";
import Link from "next/link";
import { HelpOrderVideo } from "@/app/components/HelpOrderVideo";
import { MobileCallBar } from "@/app/components/MobileCallBar";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { GatedShopWhatsApp } from "@/app/components/GatedShopWhatsApp";
import { SHOP } from "@/lib/branding";

export const metadata: Metadata = {
  title: `વેબ ઓર્ડર મદદ | ${SHOP.nameLatin}`,
  description: `${SHOP.name} — મેનુ, કાર્ટ, સરનામું અને WhatsApp થી ઓર્ડર મોકલવાનું પગલું પગલું માર્ગદર્શન.`,
};

const steps = [
  {
    title: "મેનુમાંથી વસ્તુ ઉમેરો",
    body: "મેનુમાં જે ખાવું હોય તેની પાસે + દબાવો. એકથી વધુ આઇટમ ઉમેરી શકાય.",
  },
  {
    title: "કાર્ટ ખોલો",
    body: "સ્ક્રીન નીચે “કાર્ટ · … વસ્તુ · કુલ ₹…” જેવી પટ્ટી દેખાશે. તે પર ટૅપ કરો — “તમારો ઓર્ડર” પેનલ ખુલશે. ઉપર X થી બંધ પણ થાય.",
  },
  {
    title: "રકમ અને ડિલિવરી જુઓ",
    body: "આઇટમોનો ભાવ, ડિલિવરી ચાર્જ (ઓછા ઓર્ડર પર) અને કુલ રૂપિયા ચેક કરો. જરૂર હોય તો “કાર્ટ ખાલી કરો” થી ફેરફાર કરો.",
  },
  {
    title: "સરનામું ફરજિયાત ભરો",
    body: "“સરનામું (WhatsApp) * ફરજિયાત” નીચેનું બોક્સ ખાલી ન રાખો — એરિયા, લેન્ડમાર્ક, ફ્લેટ વગેરે સ્પષ્ટ લખો. આ વગર લીલું “WhatsApp પર ઓર્ડર” બટન ઓર્ડર મોકલશે નહીં, “ઓર્ડર માટે સરનામું લખવું ફરજિયાત છે — નીચે ભરો.”. પછીની વાર એ જ સરનામું આપમેળે આવશે — બીજું હોય તો એડિટ કરો.",
  },
  {
    title: "મેપ લિંક (વૈકલ્પિક)",
    body: "જોઈએ તો “મેપ લિંક (વૈકલ્પિક)” ખોલીને GPS લિંક અથવા Google Maps share લિંક ઉમેરો — તે WhatsApp મેસેજમાં સાથે જશે.",
  },
  {
    title: "WhatsApp પર ઓર્ડર",
    body: "લીલા “WhatsApp પર ઓર્ડર” બટન પર ટૅપ કરો. WhatsApp ખુલશે અને ઓર્ડરનો લખાણવાળો મેસેજ તૈયાર થશે — મોકલો (Send) દબાવો.",
  },
  {
    title: "ફોન કરીને કન્ફર્મ",
    body: "મેસેજ મોકલ્યા પછી ફરજિયાત ફોન કરવો — વગર કૉલ ઓર્ડર કન્ફર્મ નહીં થાય. આ જ સંદેશ સાઇટના કાર્ટમાં પણ દેખાય છે.",
  },
];

export default function HelpPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-10 pb-32 sm:px-6 sm:py-14 md:pb-16">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-[var(--pn-purple)]">
          એક પેજ પર માર્ગદર્શન
        </p>
        <h1 className="mt-2 text-center text-2xl font-extrabold leading-tight text-[var(--pn-red)] sm:text-3xl">
          વેબથી ઓર્ડર કેવી રીતે કરવો
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-base leading-relaxed text-zinc-700">
          પહેલા મેનુમાં વસ્તુ ઉમેરો, પછી નીચેની કાર્ટ પટ્ટી ખોલો. સરનામું ભર્યા પછી જ WhatsApp પર ઓર્ડર મોકલાશે. કંઈ સમજાય નહીં તો કૉલ કરો — સાઇટ પર WhatsApp
          ખાલી કાર્ટ સાથે ખુલશે નહીં; પહેલા + થી વસ્તુ ઉમેરો.
        </p>

        <p className="mx-auto mt-4 max-w-xl rounded-xl border border-orange-200/90 bg-orange-50/95 px-4 py-3 text-center text-sm font-semibold leading-snug text-zinc-900">
          {SHOP.whatsappOrderMustCallGu}
        </p>

        <section className="mx-auto mt-10 max-w-xl" aria-labelledby="help-video-heading">
          <h2
            id="help-video-heading"
            className="text-center text-base font-extrabold text-[var(--pn-purple-deep)]"
          >
            ટૂંકો વિડિયો
          </h2>
          <p className="mt-1 text-center text-xs text-zinc-600">કાર્ટ, સરનામું અને WhatsApp ઓર્ડર — નિહાળો</p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#4a1f13]/10 shadow-lg ring-1 ring-black/[0.04]">
            <HelpOrderVideo />
          </div>
        </section>

        <ol className="mt-10 space-y-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-[#4a1f13]/10 bg-white/90 p-4 shadow-sm sm:p-5"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--pn-purple)] text-base font-bold text-white"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <h2 className="text-lg font-bold text-[var(--pn-purple-deep)]">{step.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-700 sm:text-base">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-5 text-sm leading-relaxed text-zinc-800">
          <p className="font-bold text-[var(--pn-purple-deep)]">સલામતી</p>
          <p className="mt-2">
            ફક્ત અમારી ઓફિશિયલ સાઇટ અને નંબર વાપરો. કોઈ અજાણ્યા લિંક પર OTP અથવા પાસવર્ડ ન આપો.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--pn-purple)] px-6 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[var(--pn-purple)]/25 transition hover:brightness-110"
          >
            મેનુ પર જાઓ
          </Link>
          <GatedShopWhatsApp className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-6 py-3 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/15 sm:w-auto disabled:hover:bg-[#25D366]/10">
            WhatsApp થી મદદ
          </GatedShopWhatsApp>
        </div>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
