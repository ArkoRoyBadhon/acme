import BannerSection from "@/components/Banner";
import Footersection from "@/components/Footer";
import PricingSection from "@/components/Pricing";
import ServicesSection from "@/components/Services";
import Offer from "@/components/offer";

export default function Home() {
  return (
    <main>
      <div className="custom-container custom_spacing">
        <Offer />
        <BannerSection />
        <ServicesSection />
        <PricingSection />
        <Footersection />
      </div>
    </main>
  );
}
