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
            AthenGuardia solutions are designed to adapt to the unique challenges of various industries. Whether you&apos;re managing digital assets, securing critical infrastructure, or ensuring compliance, our tools provide the flexibility and insight needed to protect your organization effectively.
          </p>

          <h3 className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-bold text-[#041424] mb-4">Challenges:</h3>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{challenge}</span>
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

          <h2 className="font-rajdhani text-2xl sm:text-3xl md:text-4xl font-bold text-[#041424] mb-4">How We Help:</h2>
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {helpMethods.map((method, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-[#006CB0] mr-3 mt-1 flex-shrink-0" />
                <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{method}</span>
              </li>
            ))}
          </ul>
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
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

const challenges = [
  "Protecting sensitive customer data.",
  "Managing compliance with stringent regulations.",
  "Prioritizing vulnerabilities in complex environments.",
]

const helpMethods = [
  "AthenGuardia AssetDiscovery identifies financial IT assets for complete visibility.",
  "AthenGuardia EAM ensures accurate tracking of financial IT assets.",
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
  "AthenGuardia AssetDiscovery maps all assets, including medical devices and cloud-based systems.",
  "EAM tracks medical devices and ensures compliance.",
  "AthenGuardia Scan identifies assets across on-premises and cloud-based systems.", 
  "TIP integrates real-time intelligence to address healthcare-specific threats.",
  "Patch Management protects critical systems without disrupting operations.",
]

const governmentChallenges = [
  "Securing critical infrastructure against advanced threats.",
  "Ensuring compliance with evolving regulations.",
  "Managing vulnerabilities in large-scale environments.",
]