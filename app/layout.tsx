import type { Metadata } from "next";
import { Mukta_Vaani } from "next/font/google";
import "./globals.css";
import { SHOP } from "@/lib/branding";

const mukta = Mukta_Vaani({
  subsets: ["gujarati", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  title: `${SHOP.name} | ${SHOP.nameLatin}`,
  description: `${SHOP.tagline} — મેનુ, ભાવ, હોમ ડિલિવરી અને UPI ચૂકવણી.`,
  openGraph: {
    title: `${SHOP.name} | ${SHOP.nameLatin}`,
    description: SHOP.tagline,
    locale: "gu_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className={`${mukta.variable} h-full`}>
      <body className="min-h-full bg-[var(--pn-cream)] pb-20 font-sans text-zinc-900 antialiased md:pb-0">
        {children}
      </body>
    </html>
  );
}
