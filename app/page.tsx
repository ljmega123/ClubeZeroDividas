import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AffiliatesSection } from "@/components/sections/affiliates"
import { CtaSection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AffiliatesSection />
      <CtaSection />
    </>
  )
}
