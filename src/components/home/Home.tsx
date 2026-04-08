import CTCSection from "./CTCSection";
import FAQSection from "./FAQSection";
import GetStartedSection from "./GetStartedSection";
import HeroSection from "./HeroSection";
import PriceSection from "./PriceSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import ToolsSection from "./ToolsSection";
import TrustedBrandsSection from "./TrustedBrandsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBrandsSection />
      <ServiceSection />
      <PriceSection />
      <ToolsSection />
      <GetStartedSection />
      <CTCSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}

export default Home;
