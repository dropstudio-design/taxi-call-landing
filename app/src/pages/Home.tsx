import HeroSection from "@/sections/HeroSection";
import BenefitsSection from "@/sections/BenefitsSection";
import DownloadSection from "@/sections/DownloadSection";
import QRCodeSection from "@/sections/QRCodeSection";
import StepsSection from "@/sections/StepsSection";
import TipsSection from "@/sections/TipsSection";
import FAQSection from "@/sections/FAQSection";
import FooterCTA from "@/sections/FooterCTA";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <DownloadSection />
      <QRCodeSection />
      <StepsSection />
      <TipsSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}
