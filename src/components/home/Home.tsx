import GetStartedSection from "./GetStartedSection";
import HeroSection from "./HeroSection";
import PriceSection from "./PriceSection";
import ServiceSection from "./ServiceSection";
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
    </>
  );
}

export default Home;
