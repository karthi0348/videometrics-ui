// app/features/page.tsx
import FeaturesHeroSection from './components/FeaturesHeroSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection';
import FlexibleIntegrationSection from './components/FlexibleIntegrationSection';
import AdvancedCapabilitiesSection from './components/AdvancedCapabilitiesSection';
import SecurityPrivacySection from './components/SecurityPrivacySection';
import IndustriesSection from './components/IndustriesSection';
import FeaturesCTASection from './components/CTASection';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <FeaturesHeroSection />
      <CoreCapabilitiesSection />
      <FlexibleIntegrationSection />
      <AdvancedCapabilitiesSection />
      <SecurityPrivacySection />
      <IndustriesSection />
      <FeaturesCTASection />
    </div>
  );
}