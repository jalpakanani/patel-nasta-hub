import type { Metadata, Viewport } from "next";
import { Mukta_Vaani } from "next/font/google";
import "./globals.css";
import { SHOP } from "@/lib/branding";
import { localBusinessJsonLd } from "@/lib/localBusinessJsonLd";

const mukta = Mukta_Vaani({
  subsets: ["gujarati", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mukta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Site visit stats — `.env.local`: NEXT_PUBLIC_PLAUSIBLE_DOMAIN=patelnastahub.com OR NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX */
const plausibleRaw = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim()
const plausibleDomain =
  plausibleRaw && /^[\w.-]+$/.test(plausibleRaw) ? plausibleRaw : undefined
const gaRaw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
const gaMeasurementId = gaRaw && /^G-[A-Z0-9]+$/i.test(gaRaw) ? gaRaw : undefined

export const metadata: Metadata = {
  metadataBase: new URL(SHOP.website),
  title: `${SHOP.name} | ${SHOP.nameLatin}`,
  description: `${SHOP.tagline} — મેનુ, ભાવ, હોમ ડિલિવરી અને UPI ચૂકવણી.`,
  /** Favicon: `app/favicon.ico` (ICO) + `app/icon.png` / `apple-icon.png` */
  openGraph: {
    title: `${SHOP.name} | ${SHOP.nameLatin}`,
    description: SHOP.tagline,
    locale: "gu_IN",
    images: [{ url: SHOP.logoSrc, alt: SHOP.nameLatin }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className={`${mukta.variable} h-full scroll-smooth`} style={{ colorScheme: "light" }}>
      {/* Browser extensions (e.g. ColorZilla) inject body attrs — avoids dev hydration noise */}
      <body
        className="min-h-full bg-[var(--pn-cream)] pb-20 font-sans text-zinc-900 antialiased md:pb-0"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        {plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {gaMeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`,
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
