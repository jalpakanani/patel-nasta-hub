import { DeliverySection } from "./components/DeliverySection";
import { FeaturedStrip } from "./components/FeaturedStrip";
import { HomeSplashGate } from "./components/HomeSplashGate";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { MobileCallBar } from "./components/MobileCallBar";
import { PaymentSection } from "./components/PaymentSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <HomeSplashGate />
      <SiteHeader />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <FeaturedStrip />
        <MenuSection />
        <DeliverySection />
        <PaymentSection />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
