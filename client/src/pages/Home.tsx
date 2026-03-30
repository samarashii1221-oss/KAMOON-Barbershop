/* =============================================================
   KAMOON HOME PAGE — Assembles all sections
   Design: Dark Forge / Industrial Luxury
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import QuoteSection from "@/components/QuoteSection";
import HoursLocationSection from "@/components/HoursLocationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <QuoteSection />
      <HoursLocationSection />
      <ContactSection />
    </div>
  );
}
