import type { Metadata, Viewport } from "next";
import { Mukta_Vaani } from "next/font/google";
import "./globals.css";
import { SHOP } from "@/lib/branding";

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
    <html lang="gu" className={`${mukta.variable} h-full`} style={{ colorScheme: "light" }}>
      {/* Browser extensions (e.g. ColorZilla) inject body attrs — avoids dev hydration noise */}
      <body
        className="min-h-full bg-[var(--pn-cream)] pb-20 font-sans text-zinc-900 antialiased md:pb-0"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
