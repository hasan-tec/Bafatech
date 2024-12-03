// services-section.tsx
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: "01",
    title: "Enterprise Asset Management",
    description: "Real-time asset tracking with predictive insights",
    href: "/Products/enterprise-asset-management",
    icon: "/images/Ensuring.png"
  },
  {
    id: "02",
    title: "Risk-based management",
    description: "AI-powered risk prioritization and remediation.",
    href: "/Products/risk-based-management",
    icon: "/images/Ensuring.png"
  },
  {
    id: "03",
    title: "Patch Management",
    description: "Automated patching for compliance and threat protection.",
    href: "/Products/patch-management",
    icon: "/images/Ensuring.png"
  }
]

export function ServicesSection() {
  return (
    <section className="relative bg-[#001B45] py-24">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/ensuring-bg.png"
          alt="Background pattern"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-nunito text-[#0066CC] text-base font-semibold tracking-wider uppercase mb-2">
            IT Support For Business
          </h3>
          <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display max-w-3xl mx-auto leading-tight">
            Ensuring Your Success Trusted
            <br className="hidden sm:block" />
            IT Services Source
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 relative group hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-[#0066CC]/5 rounded-xl flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <span className="text-[#0066CC] bg-[#0066CC]/5 px-4 py-1.5 rounded-full text-sm font-medium">
                  {service.id}
                </span>
              </div>

              <h3 className="font-rajdhani text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="font-nunito text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <Link 
                href={service.href}
                className="inline-flex text-[#0066CC] group-hover:gap-2 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}