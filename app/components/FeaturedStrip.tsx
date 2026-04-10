import Image from "next/image";

export function FeaturedStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto max-w-md px-4 py-6 sm:px-5 sm:py-8">
        <article className="group overflow-hidden rounded-2xl border border-zinc-100 bg-[var(--pn-cream)] shadow-sm transition hover:shadow-md">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/featured-cheese-masala-pakwan.jpg"
              alt="ચીઝ મસાલા પકવાન — Patel Nasta Hub"
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 448px) 100vw, 448px"
            />
          </div>
          <div className="p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-[var(--pn-purple)]">
              Our shop&apos;s most famous item
            </p>
            <h2 className="mt-1.5 text-lg font-bold text-[var(--pn-red)] sm:text-xl">
              ચીઝ મસાલા પકવાન
            </h2>
            <p className="mt-1 text-xs font-medium text-zinc-500">Cheese Masala Pakwan</p>
            <p className="mt-2 text-sm text-zinc-600">
              અમારી દુકાનની સૌથી લોકપ્રિય અને ફેમસ આઇટમ — ચીઝ મસાલા પકવાન. ખાસ મસાલા અને ચીઝથી ભરપૂર,
              દરેક વાર એક જ લાજવાબ સ્વાદ.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
