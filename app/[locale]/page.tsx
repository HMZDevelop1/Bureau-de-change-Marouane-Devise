import { HeroSection } from "@/components/sections/hero";
import { RatesSection } from "@/components/sections/rates";
import { CalculatorSection } from "@/components/sections/calculator";
import { ServicesSection } from "@/components/sections/services";
import { WhyUsSection } from "@/components/sections/why-us";
import { Gallery } from "@/components/sections/gallery";
import { ReservationSection } from "@/components/sections/reservation";
import { ReviewsSection } from "@/components/sections/reviews";
import { AboutSection } from "@/components/sections/about";
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
      <Gallery />
      <ReservationSection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
