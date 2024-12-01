import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Patch Management | AthenGuardia",
  description: "Professional patch management services for your organization",
}

export default function PatchManagementPage() {
  const features = [
    {
      title: "Risk-Based Patching:",
      description: "Integrates with AthenGuardia RBVM to prioritize patches based on asset criticality and vulnerability risk scores."
    },
    {
      title: "Cross-Platform Support:",
      description: "Applies patches across on-premises, cloud, and hybrid environments, ensuring comprehensive coverage."
    },
    {
      title: "Patch Rollback:",
      description: "Provides the ability to reverse updates if issues arise, minimizing operational disruptions."
    },
    {
      title: "Compliance Tracking:",
      description: "Maintains a complete history of applied patches, ensuring organizations stay audit-ready."
    },
    {
      title: "Real-Time Monitoring:",
      description: "Tracks patching progress and identifies gaps in coverage through intuitive dashboards."
    },
    {
      title: "Custom Scheduling:",
      description: "Allows patches deployed during off-peak hours to minimize business interruptions."
    },
    {
      title: "Integration with Threat Intelligence:",
      description: "Leverages TIP insights to prioritize patches that address actively exploited vulnerabilities."
    }
  ];

  const categories = [
    {
      title: "Small Businesses",
      items: [
        "Protects systems from known vulnerabilities with minimal manual effort.",
        "Automates updates to reduce reliance on limited IT resources.",
        "Ensures compliance with regulations, avoiding fines and penalties."
      ]
    },
    {
      title: "Mid-Sized Companies",
      items: [
        "Simplifies patching for a growing number of assets across diverse environments.",
        "Integrates with RBVM to focus on critical updates first, reducing risks effectively.",
        "Provides detailed reporting for compliance and audit purposes."
      ]
    },
    {
      title: "Large Enterprises",
      items: [
        "Manages patches across complex, distributed environments with centralized control.",
        "Aligns patching priorities with organizational risk strategies using RBVM and TIP.",
        "Automates the entire patch lifecycle, saving time and improving consistency."
      ]
    }
  ];

  const benefits = [
    {
      title: "Reduced Risk",
      description: "Ensures that vulnerabilities are addressed promptly, minimizing the risk of exploitation."
    },
    {
      title: "Increased Efficiency",
      description: "Automates repetitive tasks, saving time and resources for IT teams."
    },
    {
      title: "Improved Compliance",
      description: "Tracks and reports patching activities to meet regulatory and audit requirements."
    },
    {
      title: "Streamlined Operations",
      description: "Reduces downtime and ensures consistent performance by applying patches in a controlled manner."
    },
    {
      title: "Enhanced Security Posture",
      description: "Works seamlessly with EAM and RBVM to provide a comprehensive approach to vulnerability mitigation."
    }
  ];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[600px] flex items-center justify-start">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')",
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
              <Link href="/about-us" className="font-nunito text-sm hover:text-white transition-colors">
                About Us
              </Link>
            </nav>

            <h1 className="font-rajdhani text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Patch Management
            </h1>
          </div>
        </section>

        {/* What is Patch Management Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
              What is Patch Management?
            </h2>
            <p className="font-nunito text-base md:text-lg leading-relaxed text-[#686868] mb-6 md:mb-8">
              Patch Management is the process of applying updates to software, systems, and applications to fix vulnerabilities, improve functionality, and ensure compliance. These patches address security flaws, bugs, and performance issues, helping organizations maintain a secure and reliable IT environment.
            </p>
            <div className="relative h-[240px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team collaborating on patch management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
              Features of AthenGuardia Patch Management
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="font-nunito text-sm md:text-base leading-relaxed text-[#686868]">
                      <strong>{feature.title}</strong> {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Helps Organizations Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-[42px] leading-[52px] font-bold text-[#041424] mb-8">
              How Patch Management Helps Organizations
            </h2>
            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-rajdhani text-[28px] leading-[28.07px] font-bold text-[#041424] mb-4">
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
                      <span className="font-nunito text-[16px] leading-[24px] text-[#686868]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-[42px] leading-[52px] font-bold text-[#041424] mb-8">
              How Patch Management Works with AthenGuardia EAM and RBVM
            </h2>
          
            <div className="space-y-12">
              {[
                {
                  title: "Enterprise Asset Management",
                  description: "Provides the foundation for effective patching by ensuring a complete and accurate inventory of assets. With EAM, organizations can identify which systems require updates and focus on critical assets first."
                },
                {
                  title: "Risk-Based Vulnerability Management",
                  description: "Identifies and prioritizes asset vulnerabilities based on their risk score, importance, and active threat intelligence from TIP. This ensures that patching efforts are targeted where they matter most."
                },
                {
                  title: "Patch Management",
                  description: "Acts as the execution layer, applying updates based on RBVM insights and EAM data. It closes the loop by ensuring vulnerabilities are mitigated effectively."
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-rajdhani text-[28px] leading-[28.07px] font-bold text-[#041424] mb-4">
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
                    <p className="font-nunito text-[16px] leading-[24px] text-[#686868]">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-[42px] leading-[52px] font-bold text-[#041424] mb-8">
              Benefits of AthenGuardia Patch Management
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-rajdhani text-[28px] leading-[28.07px] font-bold text-[#041424] mb-3">
                    {benefit.title}
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="text-[#006CB0] mt-[6px]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-nunito text-[16px] leading-[24px] text-[#686868]">{benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-[#001B45] text-white text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-5xl leading-[52px] font-bold mb-6">
              Why Choose AthenGuardia Patch Management?
            </h2>
            <p className="font-nunito text-[22px] leading-[32px] text-white/90 max-w-6xl mx-auto">
              AthenGuardia Patch Management isn&apos;t just about applying updates—it&apos;s about building a secure, efficient, and resilient IT environment. Integrating seamlessly with AthenGuardia EAM and RBVM ensures that patching efforts are strategic, targeted, and impactful.
            </p>
          </div>
        </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
              {/* Left Image Grid */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative">
                  {/* Decorative lines */}
                  <div className="absolute -right-8 top-0 bottom-0 hidden lg:block">
                    <div className="flex gap-2 h-full">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          {[...Array(10)].map((_, j) => (
                            <div
                              key={j}
                              className="w-1 h-1 rounded-full bg-[#0066CC]"
                              style={{ opacity: 0.2 }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main large image */}
                  <div className="relative z-10 max-w-[500px] mx-auto lg:mx-0">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                      alt="Business professional"
                      width={500}
                      height={700}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px] md:h-[600px]"
                    />
                  </div>

                  {/* Overlaid small image */}
                  <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-16 z-20 w-[200px] lg:w-[280px]">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                      alt="Team meeting"
                      width={280}
                      height={210}
                      className="rounded-lg shadow-lg object-cover w-full h-[150px] lg:h-[210px]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12">
                <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-navy mb-4 md:mb-6">
                  Organizations of any size can rely on AthenGuardia to:
                </h2>
                <p className="font-nunito text-sm md:text-base leading-relaxed text-[#686868] mb-4 md:mb-6">
                  With AthenGuardia Patch Management, you&apos;re not just keeping systems up-to-date but building a stronger defense against evolving threats. Let patch management work for your organization, no matter the size or complexity.
                </p>
                <div className="space-y-4">
                  {[
                    "Automate and prioritize patching for critical vulnerabilities.",
                    "Align patch management with broader asset and risk strategies.",
                    "Provide real-time visibility and control over the patching process."
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="text-primary flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="font-nunito text-sm md:text-base leading-relaxed text-[#686868]">{item}</p>
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