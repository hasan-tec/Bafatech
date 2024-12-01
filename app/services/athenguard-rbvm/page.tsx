import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Risk-Based Vulnerability Management (RBVM) | AthenGuardia",
  description: "Comprehensive risk-based vulnerability management solution for organizations of all sizes",
}

export default function RBVMPage() {
  const features = [
    {
      title: "AthenGuardia AssetDiscovery:",
      description: "Discovers and inventories assets across on-premises, cloud, and agent-based environments. This ensures the RBVM system has a complete view of all assets, enabling precise vulnerability mapping."
    },
    {
      title: "Data Integration with Leading VM Solutions:",
      description: "Imports vulnerability data from industry-leading tools such as Rapid7, Tenable, and Qualys. This integration ensures that the RBVM system is continuously updated with accurate and actionable vulnerability information."
    },
    {
      title: "TIP (Threat Intelligence Platform):",
      description: "Enhances imported data by adding real-time insights into active exploits and emerging threats. TIP ensures vulnerabilities are prioritized not only based on severity but also on real-world risk."
    },
    {
      title: "Risk Scoring:",
      description: "Combines asset criticality, imported vulnerability data, and TIP-driven threat intelligence to assign risk scores. This provides a clear, data-driven framework for prioritizing vulnerabilities."
    },
    {
      title: "Automated Prioritization:",
      description: "Dynamically ranks vulnerabilities based on risk to your organization, enabling organizations to focus on what matters most."
    },
    {
      title: "Remediation Guidance:",
      description: "Offers actionable steps tailored to the vulnerabilities identified, streamlining the patching and mitigation process."
    },
    {
      title: "Compliance Integration:",
      description: "Maps vulnerabilities to compliance frameworks like GDPR, HIPAA, and ISO standards, simplifying audit preparation."
    },
    {
      title: "Advanced Analytics:",
      description: "Tracks trends over time, monitors remediation progress and identifies recurring issues to improve security strategies."
    },
    {
      title: "Actionable Dashboards:",
      description: "Provides a real-time overview of risk levels, remediation efforts, and compliance metrics, empowering decision-making."
    }
  ];

  const integrationSteps = [
    {
      title: "Asset Discovery",
      description: "AthenGuardia AssetDiscovery identifies and inventories assets. This forms the foundation for effective vulnerability mapping. Without knowing what assets exist, you cannot effectively address vulnerabilities."
    },
    {
      title: "Vulnerability Data Integration",
      description: "AthenGuardia RBVM ingests data from industry-leading solutions like Rapid7, Tenable, and Qualys. These tools excel at identifying vulnerabilities through scans. AthenGuardia takes this data and integrates it into its RBVM system, ensuring no critical information is overlooked."
    },
    {
      title: "Threat Intelligence Analysis",
      description: "TIP (Threat Intelligence Platform) analyzes the imported vulnerability data alongside global threat trends. It identifies which vulnerabilities are actively exploited and which are more likely to impact your organization."
    },
    {
      title: "Holistic Risk Assessment",
      description: "With data from AthenGuardia AssetDiscovery, vulnerability management tools, and TIP, the RBVM system provides a holistic, prioritized view of your vulnerabilities, enabling targeted and effective risk mitigation."
    }
  ];

  const categories = [
    {
      title: "Small Businesses",
      items: [
        "Simplifies vulnerability management by leveraging data from trusted tools like Rapid7, Tenable, and Qualys.",
        "Focuses limited resources on vulnerabilities that pose the greatest risk.",
        "Provides clear, actionable remediation guidance to strengthen defenses."
      ]
    },
    {
      title: "Mid-Sized Companies",
      items: [
        "Combines vulnerability data from leading tools with TIP intelligence for deeper insights.",
        "Enhances efficiency by automating prioritization and remediation workflows.",
        "Meets compliance requirements with integrated mapping to regulatory standards."
      ]
    },
    {
      title: "Large Enterprises",
      items: [
        "Handles vast amounts of vulnerability data with seamless integrations.",
        "Prioritizes threats based on global intelligence and real-time risk scoring.",
        "Tracks remediation progress across multiple teams and locations."
      ]
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
              Services
              </Link>
            </nav>

            <h1 className="font-rajdhani text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Risk-Based Vulnerability Management (RBVM)
            </h1>
          </div>
        </section>

        {/* What is RBVM Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
              What is Risk-Based Vulnerability Management?
            </h2>
            <p className="font-nunito text-base md:text-lg leading-relaxed text-[#686868] mb-6 md:mb-8">
              Risk-Based Vulnerability Management (RBVM) is an advanced approach to identifying, prioritizing, and mitigating security vulnerabilities based on their potential impact and likelihood of exploitation. AthenGuardia RBVM combines asset discovery, vulnerability data integration, and threat intelligence to provide a comprehensive view of your organization&apos;s security posture.
            </p>
            <div className="relative h-[240px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
                alt="Team analyzing vulnerability data"
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
              Features of AthenGuardia RBVM
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

        {/* How It Fits Together Section */}
        <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-rajdhani text-[42px] leading-[52px] font-bold text-[#041424] mb-8">
          How It Fits Together
        </h2>
        <div className="space-y-4">
          {integrationSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-[#006CB0] mt-[6px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <span className="font-nunito text-[16px] leading-[24px] text-[#686868]">
                  <strong>{step.title}</strong> - {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* How it Helps Organizations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-[42px] leading-[52px] font-bold text-[#041424] mb-8">
              How It Helps Organizations
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

        {/* Why Choose Section */}
        <section className="py-16 bg-[#001B45] text-white text-center">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-5xl leading-[52px] font-bold mb-6">
              Why Choose AthenGuardia RBVM?
            </h2>
            <p className= "font-nunito text-[22px] leading-[32px] text-white/90 max-w-6xl mx-auto">
            AthenGuardia RBVM goes beyond traditional vulnerability management. Integrating with leading solutions like Rapid7, Tenable, and Qualys ensures your vulnerability data is accurate and up-to-date. Combined with AthenGuardia Scan for asset discovery and TIP for threat intelligence, it provides a comprehensive solution for managing and reducing risks.
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
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                      alt="Cybersecurity professional analyzing data"
                      width={500}
                      height={700}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px] md:h-[600px]"
                    />
                  </div>

                  {/* Overlaid small image */}
                  <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-16 z-20 w-[200px] lg:w-[280px]">
                    <Image
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                      alt="Risk assessment dashboard"
                      width={280}
                      height={210}
                      className="rounded-lg shadow-lg object-cover w-full h-[150px] lg:h-[210px]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12">
                <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-navy mb-4 md:mb-6">
                  Empower Your Organization with AthenGuardia RBVM
                </h2>
                <p className="font-nunito text-sm md:text-base leading-relaxed text-[#686868] mb-4 md:mb-6">
                  Instead of being overwhelmed by data, AthenGuardia RBVM helps you focus on the vulnerabilities that matter most. Whether you&apos;re a small business or a large enterprise, it empowers your team to take proactive steps to secure your organization.
                </p>
                <div className="space-y-4">
                  {[
                    "Prioritize vulnerabilities based on real-world risk",
                    "Streamline remediation efforts with actionable insights",
                    "Improve your overall security posture with comprehensive risk management"
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