import Image from "next/image";
import Link from "next/link";
import { SHOP } from "@/lib/branding";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--pn-purple)] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:items-center sm:gap-10 sm:px-6 sm:py-16">
        <div className="order-2 sm:order-1">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--pn-gold)]">
            {SHOP.nameLatin}
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            ફ્રી હોમ ડિલિવરી
          </h1>
          <p className="mt-4 text-lg text-white/90">
            ₹300 કે તેથી વધુના ઓર્ડર પર — માત્ર 2 કિ.મી. સુધીના એરિયામાં.
          </p>
          <p className="mt-2 text-sm text-white/70">* નિયમો લાગુ</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-[var(--pn-purple-deep)] shadow-xl transition hover:bg-[var(--pn-cream)]"
            >
              મેનુ જુઓ
            </Link>
            <a
              href={`tel:${SHOP.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-6 py-3 text-base font-bold text-white transition hover:bg-white/10"
            >
              ઓર્ડર માટે કૉલ
            </a>
          </div>
        </div>
        <div className="order-1 sm:order-2">
          <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:aspect-square">
            <Image
              src="/images/delivery-flyer.png"
              alt="હોમ ડિલિવરી"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
