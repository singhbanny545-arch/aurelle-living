
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HeroSection from "./components/home/HeroSection";
import CollectionShowcase from "./components/CollectionShowcase";
import FeaturedProducts from "./components/home/FeaturedProducts";
import NewArrivals from "./components/home/NewArrivals";
import BrandStory from "./components/home/BrandStory";
import PromoBanner from "./components/home/PromoBanner";
import Newsletter from "./components/home/Newsletter";
import { CartProvider } from "./components/cart/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f8f7f4] text-[#252720]">
        <SiteHeader />

        <main>
          <HeroSection />

          <CollectionShowcase
            heading="Designed for Living"
            subtitle="Explore thoughtfully curated spaces for contemporary living."
          />

          <FeaturedProducts />

          <NewArrivals />

          <BrandStory />

          <PromoBanner />

          <Newsletter />
        </main>

        <SiteFooter />
      </div>
    </CartProvider>
  );
}
