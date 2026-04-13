import { DeliverySection } from "./components/DeliverySection";
import { FeaturedStrip } from "./components/FeaturedStrip";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { MobileCallBar } from "./components/MobileCallBar";
import { OrderCartBar } from "./components/OrderCartBar";
import { OrderCartProvider } from "./components/OrderCartProvider";
import { PaymentSection } from "./components/PaymentSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <OrderCartProvider>
      <SiteHeader />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <FeaturedStrip />
        <MenuSection />
        <DeliverySection />
        <PaymentSection />
      </main>
      <SiteFooter />
      <OrderCartBar />
      <MobileCallBar />
    </OrderCartProvider>
  );
}
