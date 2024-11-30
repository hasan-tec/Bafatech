import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { Footer } from "@/components/footer"
import AboutApproach from "@/components/about-approach"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutApproach />
      <Footer />
    </main>
  )
}

