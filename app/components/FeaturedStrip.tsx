import Image from "next/image";

export function FeaturedStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:gap-10">
        <article className="group overflow-hidden rounded-3xl border border-zinc-100 bg-[var(--pn-cream)] shadow-sm transition hover:shadow-md">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/dabeli-promo.png"
              alt="દાબેલી"
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-[var(--pn-purple-deep)]">
              અમારી બેસ્ટ દાબેલી ગોતી લીધી!
            </h2>
            <p className="mt-2 text-zinc-600">
              દરેક બાઈટમાં એ જ ખાસ મસાલો — ફ્રેશ અને ગરમ.
            </p>
          </div>
        </article>
        <article className="group overflow-hidden rounded-3xl border border-zinc-100 bg-[var(--pn-cream)] shadow-sm transition hover:shadow-md">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/kutchhi-dabeli.png"
              alt="કચ્છી દાબેલી"
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-[var(--pn-red)]">
              કચ્છી દાબેલીનો અનુભવ
            </h2>
            <p className="mt-2 text-zinc-600">
              દરેક ક્ષણ સમાન સ્વાદ સાથે અમારી દાબેલીનો લ્હાવો લો.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
