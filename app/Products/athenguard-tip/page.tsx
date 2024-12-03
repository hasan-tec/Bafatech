import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Threat Intelligence Platform (TIP) | AthenGuard",
  description: "Enhance your security with actionable intelligence through AthenGuard&apos;s Threat Intelligence Platform (TIP)",
}

export default function ThreatIntelligencePlatformPage() {
  const features = [
    {
      title: "Threat Data Aggregation:",
      description: "Collects intelligence from industry-leading sources, open databases, and proprietary feeds."
    },
    {
      title: "Exploit Tracking:",
      description: "Monitors vulnerabilities actively exploited in the wild, helping prioritize the most critical risks."
    },
    {
      title: "Risk Contextualization:",
      description: "Matches vulnerabilities with real-world attack patterns, making risk assessment more accurate."
    },
    {
      title: "Integration with RBVM:",
      description: "Feeds actionable threat intelligence directly into AthenGuard RBVM for better prioritization."
    },
    {
      title: "Threat Trends Analysis:",
      description: "Tracks emerging threats and attack vectors to help organizations prepare proactively."
    },
    {
      title: "Real-Time Alerts:",
      description: "Notifies teams of high-risk vulnerabilities and threats that require immediate attention."
    },
    {
      title: "Custom Intelligence Feeds:",
      description: "Allows organizations to add tailored intelligence sources relevant to their industry."
    },
    {
      title: "Global Coverage:",
      description: "Scans threats across regions and industries, ensuring comprehensive protection."
    }
  ];

  const categories = [
    {
      title: "Small Businesses",
      items: [
        "Provides critical threat insights without the need for a dedicated cybersecurity team.",
        "Prioritizes vulnerabilities most likely to impact the business based on active threats.",
        "Offers simple, actionable intelligence to guide decision-making."
      ]
    },
    {
      title: "Mid-Sized Companies",
      items: [
        "Enriches vulnerability data with real-world threat intelligence, improving risk assessment.",
        "Helps align patching efforts with actual threat activity for maximum efficiency.",
        "Reduces complexity by consolidating intelligence into a single, actionable platform."
      ]
    },
    {
      title: "Large Enterprises",
      items: [
        "Enhances security operations with a global view of threat activity.",
        "Supports proactive defense strategies by identifying and mitigating risks before exploitation.",
        "Provides intelligence tailored to enterprise-scale environments and unique industry threats."
      ]
    }
  ];

  const benefits = [
    {
      title: "Proactive Risk Management",
      description: "Identify and mitigate risks before they are exploited."
    },
    {
      title: "Enhanced Prioritization",
      description: "Focus on vulnerabilities that matter most, reducing noise."
    },
    {
      title: "Streamlined Operations",
      description: "Deliver actionable intelligence directly to RBVM and Patch Management workflows."
    },
    {
      title: "Improved Compliance",
      description: "Map threats to regulatory requirements for better audit readiness."
    },
    {
      title: "Scalability",
      description: "Adapt to organizations of any size, from small businesses to global enterprises."
    }
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-start">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#021533]/80" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <nav className="mb-4 flex items-center gap-2 text-white/80">
              <Link href="/" className="font-nunito text-sm hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-sm">›</span>
              <Link href="/products" className="font-nunito text-sm hover:text-white transition-colors">
              Products
              </Link>
            </nav>

            <h1 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Threat Intelligence Platform (TIP)
            </h1>
          </div>
        </section>

        {/* What is TIP Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 sm:mb-8">
              What is TIP?
            </h2>
            <p className="font-nunito text-base sm:text-lg leading-relaxed text-[#686868] mb-8">
              TIP (Threat Intelligence Platform) is a critical component of the AthenGuard ecosystem. It collects, aggregates, and analyzes data from diverse threat intelligence sources to provide real-time insights into emerging threats. TIP empowers organizations to stay ahead of potential risks by delivering actionable intelligence that drives more intelligent decision-making in vulnerability management and patching processes.
            </p>
            <div className="relative h-[240px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="Threat Intelligence Platform visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 sm:mb-8">
              Features of AthenGuard TIP
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-[#006CB0] mt-[6px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868]">
                      <strong>{feature.title}</strong> {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How TIP Helps Organizations Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 sm:mb-8">
              How TIP Helps Organizations
            </h2>
            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-rajdhani text-2xl sm:text-3xl leading-tight font-bold text-[#041424] mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="text-[#006CB0] mt-[6px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How TIP Fits into the AthenGuard Ecosystem Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 sm:mb-8">
              How TIP Fits into the AthenGuard Ecosystem
            </h2>
            
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "AthenGuard RBVM",
                  description: "TIP feeds real-time intelligence into RBVM to contextualize vulnerabilities based on active exploits and attack patterns. Enables organizations to prioritize risks not just by severity but also by current threat activity."
                },
                {
                  title: "AthenGuard Scan",
                  description: "Threat intelligence from TIP enhances scanned asset data, identifying those exposed to active threats. Provides guidance on which assets are at the greatest risk, streamlining mitigation efforts."
                },
                {
                  title: "AthenGuard Patch Management",
                  description: "Helps prioritize patches for vulnerabilities linked to active exploits or significant threats. Ensures patches are applied strategically, focusing on the most urgent risks."
                },
                {
                  title: "AthenGuard EAM",
                  description: "TIP informs asset criticality assessments by identifying high-value targets based on threat data. Provides insights into how threats impact asset relationships and dependencies."
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-rajdhani text-2xl sm:text-3xl leading-tight font-bold text-[#041424] mb-4">
                    {section.title}
                  </h3>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1.5">
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#006CB0]"
                      >
                        <path 
                          d="M6 12L10 8L6 4" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868] ml-2">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 sm:mb-8">
              Benefits of AthenGuard TIP
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-rajdhani text-2xl sm:text-3xl leading-tight font-bold text-[#041424] mb-3">
                    {benefit.title}
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="text-[#006CB0] mt-[6px]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868]">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 bg-[#001B45] text-white text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-6">
              Why Choose AthenGuard TIP?
            </h2>
            <p className="font-nunito text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 max-w-6xl mx-auto">
              AthenGuard TIP isn&apos;t just about collecting threat data—it&apos;s about transforming that data into actionable intelligence that enhances your entire security ecosystem. By seamlessly integrating with AthenGuard RBVM, EAM, and Patch Management, TIP ensures that your organization stays ahead of emerging threats and focuses its resources where they matter most.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                  alt="Cybersecurity team analyzing threat intelligence"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-navy mb-6">
                  Organizations of any size can rely on AthenGuard TIP to:
                </h2>
                <p className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868] mb-6">
                  With AthenGuard TIP, you&apos;re not just collecting threat data—you&apos;re building a stronger, more proactive defense against evolving cyber threats. Let our Threat Intelligence Platform work for your organization, no matter the size or complexity of your IT environment.
                </p>
                <div className="space-y-4">
                  {[
                    "Provide real-time, actionable threat intelligence.",
                    "Enhance risk prioritization and vulnerability management.",
                    "Improve overall security posture through integrated threat data."
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="font-nunito text-sm sm:text-base leading-relaxed text-[#686868]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}