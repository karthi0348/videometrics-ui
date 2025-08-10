import React from "react";
import HowItWorksHero from "@/app/howitworks/components/HowItWorksHero";
import StepsSection from "@/app/howitworks/components/StepsSection";
import FeaturesGrid from "@/app/howitworks/components/FeaturesGrid";
import QuickStartSection from "@/app/howitworks/components/QuickStartSection";
import CTASection from "@/app/howitworks/components/CTASection";

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-gray-900">
      <HowItWorksHero />
      <StepsSection />
      <FeaturesGrid />
      <QuickStartSection />
      <CTASection />
    </main>
  );
}
