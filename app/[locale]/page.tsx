import { HeroSection } from "@/components/sections/hero";
import { RatesSection } from "@/components/sections/rates";
import { CalculatorSection } from "@/components/sections/calculator";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { ReviewsSection } from "@/components/sections/reviews";
import { AboutSection } from "@/components/sections/about";
import { ReservationSection } from "@/components/sections/reservation";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RatesSection />
      <CalculatorSection />
      <ServicesSection />
      <WhyUsSection />
      <ReviewsSection />
      <AboutSection />
      <ReservationSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
