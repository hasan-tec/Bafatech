import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Enterprise Asset Management (EAM) | AthenGuard",
  description: "Comprehensive enterprise asset management solution for organizations of all sizes",
}

export default function EnterpriseAssetManagementPage() {
  const features = [
    {
      title: "Asset Tracking:",
      description: "Maintain a real-time inventory of all on-premises, cloud-based, and remote assets, powered by AthenGuard AssetDiscovery for seamless discovery."
    },
    {
      title: "AthenGuard AssetDiscovery Integration:",
      description: "Automatically identify assets across your organization with precise scanning capabilities for on-premises environments, cloud infrastructure, and agent-based systems."
    },
    {
      title: "Lifecycle Management:",
      description: "Track assets from acquisition to disposal, optimizing usage and planning replacements."
    },
    {
      title: "Asset Relationships:",
      description: "Map dependencies between assets to understand risks and potential cascading effects."
    },
    {
      title: "Maintenance Scheduling:",
      description: "Automate and manage routine maintenance to reduce downtime and extend asset lifespans."
    },
    {
      title: "IoT Integration:",
      description: "Monitor IoT-enabled devices, ensuring operational efficiency and security."
    },
    {
      title: "Compliance Monitoring:",
      description: "Track assets against regulatory requirements to stay audit-ready."
    },
    {
      title: "Data Insights:",
      description: "Access advanced analytics on asset performance, cost, and utilization to guide strategic decisions."
    },
    {
      title: "Mobile Access:",
      description: "Manage assets anywhere with mobile-friendly tools for updates and alerts."
    },
    {
      title: "Sustainability Tracking:",
      description: "Monitor energy consumption and environmental impact to align with sustainability goals."
    }
  ];

  const categories = [
    {
      title: "Small Businesses",
      items: [
        "Discover and manage assets with AthenGuard AssetDiscovery for real-time visibility.",
        "Prevent overspending by identifying underutilized resources.",
        "Automate maintenance to avoid unexpected downtime."
      ]
    },
    {
      title: "Mid-Sized Companies",
      items: [
        "Simplify asset discovery with AthenGuard AssetDiscovery, scaling as your organization grows.",
        "Reduce risks by mapping asset dependencies and monitoring performance.",
        "Meet regulatory requirements with built-in compliance tools."
      ]
    },
    {
      title: "Large Enterprises",
      items: [
        "Use AthenGuard AssetDiscovery to integrate and manage assets across multiple locations.",
        "Improve operational efficiency with centralized asset data and relationship mapping.",
        "Enhance security by identifying outdated or high-risk assets."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80')",
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
              Enterprise Asset Management (EAM)
            </h1>
          </div>
        </section>

        {/* What is EAM Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-[#041424] mb-6 md:mb-8">
              What is Enterprise Asset Management?
            </h2>
            <p className="font-nunito text-base md:text-lg leading-relaxed text-[#686868] mb-6 md:mb-8">
              Enterprise Asset Management (EAM) is a comprehensive solution for tracking, managing, and optimizing an organization&apos;s assets throughout their entire lifecycle. From acquisition to disposal, EAM ensures that your assets are utilized efficiently, maintained properly, and aligned with your business objectives.
            </p>
            <div className="relative h-[240px] md:h-[360px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Team collaborating on asset management"
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
              Features of AthenGuard Enterprise Asset Management
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
              How EAM Helps Organizations of All Sizes
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
              Why Choose AthenGuard EAM?
            </h2>
            <p className="font-nunito text-[22px] leading-[32px] text-white/90 max-w-6xl mx-auto">
              AthenGuard EAM works seamlessly with AthenGuard AssetDiscovery, creating a comprehensive asset discovery, tracking, and management solution. Whether you track IoT devices, manage cloud-based assets, or monitor physical infrastructure, our tools give you complete visibility and control.
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
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                      alt="Business professional managing assets"
                      width={500}
                      height={700}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px] md:h-[600px]"
                    />
                  </div>

                  {/* Overlaid small image */}
                  <div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-16 z-20 w-[200px] lg:w-[280px]">
                    <Image
                      src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&q=80"
                      alt="Asset management dashboard"
                      width={280}
                      height={210}
                      className="rounded-lg shadow-lg object-cover w-full h-[150px] lg:h-[210px]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-5/12">
                <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-[42px] leading-tight font-bold text-navy mb-4 md:mb-6">
                  Take control of your assets today with AthenGuard EAM and AssetDiscovery
                </h2>
                <p className="font-nunito text-sm md:text-base leading-relaxed text-[#686868] mb-4 md:mb-6">
                  With real-time data, advanced analytics, and automated workflows, AthenGuard EAM simplifies asset management, helping organizations of any size streamline operations and reduce risks. From small businesses to global enterprises, our solution adapts to meet your needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Build efficiency across your organization",
                    "Reduce risks associated with asset management",
                    "Stay ahead of maintenance and compliance issues"
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