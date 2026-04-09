import { DeliverySection } from "./components/DeliverySection";
import { FeaturedStrip } from "./components/FeaturedStrip";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { MobileCallBar } from "./components/MobileCallBar";
import { PaymentSection } from "./components/PaymentSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
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
