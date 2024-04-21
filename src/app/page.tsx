import Hero from "./components/sections/Hero";
import AyurvedaInformation from "./components/sections/AyurvedaInformation";
import AyurvedicBenefitsGrid from "./components/sections/AyurvedicBenefitsGrid";
import CTA from "./components/sections/CTA";
import AyurvedicApproach from "./components/sections/AyurvedicApproach";
import Reviews from "./components/sections/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AyurvedaInformation />
      <AyurvedicBenefitsGrid />
      <CTA />
      <AyurvedicApproach />
      <Reviews/>
    </main>
  );
}
