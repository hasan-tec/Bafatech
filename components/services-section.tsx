import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: "01",
    title: "Enterprise Asset Management",
    description: "Real-time asset tracking with predictive insights",
    href: "/services/enterprise-asset-management",
    icon: "/images/Ensuring.png", // Custom icon path
  },
  {
    id: "02",
    title: "Risk-based management",
    description: "AI-powered risk prioritization and remediation.",
    href: "/services/risk-based-management",
    icon: "/images/Ensuring.png", // Custom icon path
  },
  {
    id: "03",
    title: "Patch Management",
    description: "Automated patching for compliance and threat protection.",
    href: "/services/patch-management",
    icon: "/images/Ensuring.png", // Custom icon path
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-[#001B45] py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#0066CC]/10 rounded-full"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-[#0066CC] font-medium">IT Support For Business</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display max-w-3xl mx-auto leading-tight">
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
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-[#0066CC]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-[#0066CC] bg-[#0066CC]/10 px-3 py-1 rounded-full text-sm font-medium">
                  {service.id}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <Link
                href={service.href}
                className="inline-flex text-[#0066CC] group-hover:gap-2 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

