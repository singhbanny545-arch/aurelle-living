import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HeroSection from "./components/home/HeroSection";
import CollectionShowcase from "./components/CollectionShowcase";
import FeaturedProducts from "./components/home/FeaturedProducts";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#252720]">
      <SiteHeader />

      <main>
        <HeroSection />

        <CollectionShowcase
          heading="Designed for Living"
          subtitle="Explore thoughtfully curated spaces for contemporary living."
        />

        <FeaturedProducts
          heading="Featured Collection"
          subtitle="Discover the furniture collection."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
