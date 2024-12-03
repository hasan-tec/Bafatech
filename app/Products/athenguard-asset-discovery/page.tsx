import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';

const features = [
  {
    title: "Automated Discovery",
    description:
      "Automatically identifies assets across your entire IT infrastructure, including on-premises, cloud, and remote locations.",
  },
  {
    title: "Real-time Updates",
    description:
      "Provides continuous monitoring and real-time updates to your asset inventory, ensuring accuracy and completeness.",
  },
  {
    title: "Comprehensive Asset Inventory",
    description:
      "Creates a detailed inventory of all your IT assets, including hardware, software, and network devices.",
  },
  {
    title: "Customizable Reporting",
    description:
      "Generates customizable reports to meet your specific needs and provide insights into your IT environment.",
  },
  {
    title: "Seamless Integration",
    description:
      "Integrates seamlessly with other AthenGuard security solutions to provide a comprehensive security posture.",
  },
];

const ecosystemIntegration = [
  {
    title: "AthenGuard Vulnerability Management",
    items: [
      "Prioritize vulnerabilities based on asset criticality and risk.",
      "Automate vulnerability remediation workflows.",
      "Improve overall security posture by addressing critical vulnerabilities first.",
    ],
  },
  {
    title: "AthenGuard Patch Management",
    items: [
      "Identify and manage software updates for all discovered assets.",
      "Automate patching processes to reduce vulnerabilities.", 
      "Ensure compliance with industry best practices and regulations.",
    ],
  },
  {
    title: "Third-Party Integrations",
    items: [
      "Integrates with leading SIEM and SOAR platforms.",
      "Supports various APIs for custom integrations.",
      "Extensible architecture to adapt to evolving security needs.",
    ],
  },
];

const categories = [
  {
    title: "Improved Security Posture",
    items: [
      "Gain complete visibility into your IT environment.",
      "Identify and mitigate security risks more effectively.",
      "Reduce the attack surface by identifying and managing vulnerabilities.",
    ],
  },
  {
    title: "Enhanced Operational Efficiency",
    items: [
      "Streamline asset management processes.",
      "Automate repetitive tasks, freeing up IT staff for more strategic initiatives.",
      "Improve overall IT operational efficiency.",
    ],
  },
  {
    title: "Cost Savings",
    items: [
      "Reduce IT costs by optimizing asset utilization.",
      "Minimize downtime by proactively identifying and addressing vulnerabilities.",
      "Improve ROI on security investments.",
    ],
  },
];


export default function Home() {
  return (

    <>
      <SiteHeader />
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[600px] flex items-center justify-start">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
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

          <h1 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            AthenGuard AssetDiscovery
          </h1>
        </div>
      </section>

      {/* What is AssetDiscovery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
            What is AthenGuard AssetDiscovery?
          </h2>
          <p className="font-nunito text-base md:text-[16px] leading-relaxed text-[#686868] mb-6 md:mb-8">
            AthenGuard AssetDiscovery is the foundation of visibility in your cybersecurity framework. It actively scans and identifies assets across on-premises environments, cloud infrastructure, and remote locations, ensuring a complete and up-to-date inventory of your IT environment. With real-time updates, it eliminates blind spots, providing the critical data needed for effective asset management and security operations.
          </p>
          <div className="relative h-[240px] sm:h-[300px] md:h-[360px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
              alt="Network visualization representing asset discovery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
<section className="py-12 md:py-16 bg-gray-50">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
      Features of AthenGuard AssetDiscovery
    </h2>
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3 max-w-3xl">
          <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span className="font-nunito text-sm md:text-base leading-relaxed text-[#686868]">
              <strong className="block mb-1">{feature.title}</strong> 
              {feature.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* How it Fits into the Ecosystem Section */}
<section className="py-12 md:py-16 bg-white">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
      How AthenGuard AssetDiscovery Fits into the Ecosystem
    </h2>
    <div className="space-y-12">
      {ecosystemIntegration.map((integration, index) => (
        <div key={index} className="max-w-3xl">
          <h3 className="font-rajdhani text-2xl md:text-[28px] leading-tight font-bold text-[#041424] mb-4">
            {integration.title}
          </h3>
          <div className="space-y-3">
            {integration.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3">
                <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-nunito text-sm md:text-base leading-relaxed text-[#686868]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* How it Helps Organizations Section */}
<section className="py-12 md:py-16 bg-gray-50">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
      How AthenGuard AssetDiscovery Helps Organizations
    </h2>
    <div className="space-y-12">
      {categories.map((category, index) => (
        <div key={index} className="max-w-3xl">
          <h3 className="font-rajdhani text-2xl md:text-[28px] leading-tight font-bold text-[#041424] mb-4">
            {category.title}
          </h3>
          <div className="space-y-3">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-3">
                <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-nunito text-sm md:text-base leading-relaxed text-[#686868]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-16 bg-[#001B45] text-white text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-4 md:mb-6">
            Why Choose AthenGuard AssetDiscovery?
          </h2>
          <p className="font-nunito text-base sm:text-lg md:text-[22px] leading-relaxed text-white/90 max-w-4xl mx-auto">
            AthenGuard AssetDiscovery ensures that you always know what&apos;s in your environment and where risks lie. By integrating seamlessly with the broader AthenGuard suite, it provides the foundation for effective asset management, vulnerability prioritization, and patching.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
            {/* Left Image Grid */}
            <div className="lg:w-1/2 relative">
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                    alt="IT professional managing asset discovery"
                    width={500}
                    height={700}
                    className="rounded-lg shadow-lg object-cover w-full h-[400px] sm:h-[500px] md:h-[600px]"
                  />
                </div>

                {/* Overlaid small image */}
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-16 z-20 w-[180px] sm:w-[220px] md:w-[280px]">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                    alt="Asset discovery dashboard"
                    width={280}
                    height={210}
                    className="rounded-lg shadow-lg object-cover w-full h-[135px] sm:h-[165px] md:h-[210px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-5/12">
              <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-navy mb-4 md:mb-6">
                Gain Complete Visibility into Your IT Environment
              </h2>
              <p className="font-nunito text-sm md:text-base leading-relaxed text-[#686868] mb-4 md:mb-6">
                Whether you&apos;re a small business or a global enterprise, AthenGuard AssetDiscovery delivers the visibility you need to protect your organization and achieve your security goals.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Eliminate blind spots in your IT environment",
                  "Streamline asset management and security operations",
                  "Enhance risk management with comprehensive asset visibility"
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 md:gap-4">
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
  );
}