import HeroSection from './home/components/HeroSection';
import WhyChooseSection from './home/components/WhyChooseSection';
import ThreeStepsSection from './home/components/ThreeStepsSection';
import FeaturesSection from './home/components/FeaturesSection';
import SecuritySection from './home/components/SecuritySection';
import IndustriesSection from './home/components/IndustriesSection';
import CallToAction from './home/components/CallToAction';



export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <WhyChooseSection />
      <ThreeStepsSection />
      <FeaturesSection />
      <SecuritySection />
      <IndustriesSection />
      <CallToAction />
    </div>
  );
}
