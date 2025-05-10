import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AdvancedFeaturesSection from '@/components/home/AdvancedFeaturesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AdvancedFeaturesSection />
      <WhyChooseUsSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
