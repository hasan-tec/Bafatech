import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-start">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Industries Background"
              fill
              className="object-cover"
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[rgba(0,27,69,0.85)] to-[rgba(0,27,69,0.75)]"
              aria-hidden="true"
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <nav className="flex items-center space-x-2 text-white/90 mb-2">
              <Link 
                href="/"
                className="font-nunito text-sm sm:text-base hover:text-white transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-white/60" />
              <span className="font-nunito text-sm sm:text-base">Industries</span>
            </nav>

            <h1 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight">
              Industries
            </h1>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4 lg:px-8">
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Industries We Serve</h2>
          <p className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868] mb-4 sm:mb-6">
            AthenGuard solutions are designed to adapt to the unique challenges of various industries. Whether you&apos;re managing digital assets, securing critical infrastructure, or ensuring compliance, our tools provide the flexibility and insight needed to protect your organization effectively.
          </p>

          {/* Financial Services Section */}
          <h3 className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-bold text-[#041424] mb-4">Financial Services</h3>
          <h4 className="font-rajdhani text-xl sm:text-2xl font-bold text-[#041424] mb-4">Challenges:</h4>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {financialChallenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-rajdhani text-xl sm:text-2xl font-bold text-[#041424] mb-4">How We Help:</h4>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {financialHelp.map((help, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
              </li>
            ))}
          </ul>

          <div className="mb-6 sm:mb-8">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Team collaborating"
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Healthcare Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Healthcare</h2>
            
            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">Challenges:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {healthcareChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">How We Help:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {healthcareHelp.map((help, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Government and Public Sector Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Government and Public Sector</h2>
            
            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">Challenges:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {governmentChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">How We Help:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {governmentHelp.map((help, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Retail and E-Commerce Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Retail and E-Commerce</h2>
            
            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">Challenges:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {retailChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">How We Help:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {retailHelp.map((help, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Energy and Utilities Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Energy and Utilities</h2>
            
            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">Challenges:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {energyChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">How We Help:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {energyHelp.map((help, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Education</h2>
            
            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">Challenges:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {educationChallenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-bold text-[#041424] mb-4">How We Help:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {educationHelp.map((help, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{help}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Choose AthenGuard Section */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-[#041424] mb-4 sm:mb-6">Why Choose AthenGuard?</h2>
            <p className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868] mb-4 sm:mb-6">
              No matter your industry, AthenGuard solutions provide the tools you need to:
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {whyChooseAthenGuard.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">
              Let us help you build a safer, more resilient organization. Explore how AthenGuard can support your industry today.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const financialChallenges = [
  "Protecting sensitive customer data.",
  "Managing compliance with stringent regulations.",
  "Prioritizing vulnerabilities in complex environments.",
]

const financialHelp = [
  "AthenGuard AssetDiscovery identifies financial IT assets for complete visibility.",
  "AthenGuard EAM ensures accurate tracking of financial IT assets.",
  "RBVM prioritizes vulnerabilities to protect critical systems.",
  "TIP provides insights into evolving financial sector threats.",
  "Patch Management ensures timely updates to prevent data breaches.",
]

const healthcareChallenges = [
  "Securing patient data and medical devices.",
  "Meeting regulatory requirements such as HIPAA.",
  "Reducing risks to connected IoT and cloud systems.",
]

const healthcareHelp = [
  "AthenGuard AssetDiscovery maps all assets, including medical devices and cloud-based systems.",
  "EAM tracks medical devices and ensures compliance.",
  "AthenGuard Scan identifies assets across on-premises and cloud-based systems.", 
  "TIP integrates real-time intelligence to address healthcare-specific threats.",
  "Patch Management protects critical systems without disrupting operations.",
]

const governmentChallenges = [
  "Securing critical infrastructure against advanced threats.",
  "Ensuring compliance with evolving regulations.",
  "Managing vulnerabilities in large-scale environments.",
]

const governmentHelp = [
  "AthenGuard AssetDiscovery identifies and monitors assets across physical and digital environments.",
  "RBVM focuses on high-priority vulnerabilities to secure critical systems.",
  "TIP delivers intelligence on nation-state and advanced persistent threats.",
  "Patch Management automates updates for better compliance and reduced risks.",
  "EAM provides visibility into infrastructure and dependencies.",
]

const retailChallenges = [
  "Securing customer payment data and sensitive information.",
  "Protecting assets across distributed networks.",
  "Staying ahead of cybercriminal tactics.",
]

const retailHelp = [
  "AthenGuard AssetDiscovery identifies in-store and online IT assets for seamless tracking.",
  "EAM centralizes inventory for in-store and online assets.",
  "RBVM prioritizes vulnerabilities that pose risks to customer data.",
  "TIP provides insights into retail-specific threat trends.",
  "Patch Management ensures secure, uninterrupted operations.",
]

const energyChallenges = [
  "Managing complex, distributed assets.",
  "Securing SCADA systems and operational technology (OT).",
  "Mitigating risks from growing cyber threats targeting critical infrastructure.",
]

const energyHelp = [
  "AthenGuard AssetDiscovery identifies and monitors OT and IT assets.",
  "RBVM aligns vulnerabilities with criticality to prioritize the protection of OT systems.",
  "TIP integrates global intelligence to address targeted threats.",
  "Patch Management secures legacy and modern systems with minimal disruption.",
]

const educationChallenges = [
  "Safeguarding student and institutional data.",
  "Managing diverse devices and systems across campuses.",
  "Addressing vulnerabilities in shared and public networks.",
]

const educationHelp = [
  "AthenGuard AssetDiscovery maps all campus IT assets for complete visibility.",
  "EAM tracks and manages devices, from servers to student systems.",
  "RBVM helps prioritize risks in complex, dynamic environments.",
  "TIP provides intelligence on threats targeting educational institutions.",
  "Patch Management automates updates to protect sensitive data.",
]

const whyChooseAthenGuard = [
  "Gain visibility into your assets with AthenGuard AssetDiscovery.",
  "Reduce risks through prioritized vulnerability management with RBVM.",
  "Streamline patching with Patch Management to ensure compliance and security.",
  "Centralize asset tracking and lifecycle management with EAM.",
  "Stay ahead of threats with actionable insights from TIP.",
]



