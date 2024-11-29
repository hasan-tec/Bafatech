import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PartnerSection } from "@/components/partner-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <PartnerSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </>
  )
}

