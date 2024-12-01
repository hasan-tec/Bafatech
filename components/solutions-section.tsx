import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    icon: '/images/Threat.png',
    title: 'AthenGuard Asset Discovery',
    description: 'Identifies assets across on-premises, cloud, and remote environments for a complete IT inventory.',
    href: '/services/athenguard-asset-discovery'
  },
  {
    icon: '/images/Threat.png',
    title: 'AthenGuard Enterprise Asset Management',
    description: 'Track and manage your assets with AthenGuardia EAM, reducing downtime and enhancing efficiency.',
    href: '/services/athenguard-eam'
  },
  {
    icon: '/images/Threat.png',
    title: 'AthenGuard AthenGuardia Scan',
    description: 'Scans assets on-premises, in the cloud, and through agent-based solutions for complete visibility.',
    href: '/services/athenguard-patch'
  },
  {
    icon: '/images/Threat.png',
    title: 'AthenGuard Risk-Based Vulnerability Management',
    description: 'AthenGuardia RBVM identifies, prioritizes, and addresses vulnerabilities based on risk.',
    href: '/services/athenguard-rbvm'
  },
  {
    icon: '/images/Threat.png',
    title: 'AthenGuard Threat Intelligence Platform',
    description: 'Collects threat intelligence and integrates it into AthenGuardia RBVM for proactive risk management.',
    href: '/services/athenguard-tip'
  },
]

export function SolutionsSection() {
  return (
    <section id='services' className="py-24 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden bg-gray-200/50">
        <Image
          src="/images/solution-bg.png"
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 bg-gray-100/10">
        <div className="text-center mb-16">
          <h3 className="font-rajdhani text-[#006CB0] text-[18px] font-[600] leading-[28px] tracking-wider uppercase mb-3">
            Our Solutions
          </h3>
          <h2 className="font-rajdhani text-[42px] leading-[53.59px] font-[700] text-[#041424]">
            AthenGuardia Line
          </h2>
        </div>

        <div className="max-w-[1240px] mx-auto">
          {/* Top 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {solutions.slice(0, 4).map((solution, index) => (
              <Link 
                key={index}
                href={solution.href}
                className="block bg-white rounded-[20px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] p-12 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="mx-auto w-[72px] h-[72px] bg-[#E6F0FF] rounded-full flex items-center justify-center mb-6">
                  <Image
                    src={solution.icon}
                    alt={`${solution.title} Icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                
                <h3 className="font-rajdhani text-[26px] leading-[32px] font-[700] text-[#041424] mb-3">
                  {solution.title}
                </h3>
                <p className="font-nunito text-[16px] leading-[24px] font-[400] text-[#686868] mb-6 max-w-[305px] mx-auto">
                  {solution.description}
                </p>
                <div className="mx-auto w-8 h-[2px] bg-[#006CB0]" />
              </Link>
            ))}
          </div>

          {/* Bottom centered card */}
          <div className="grid md:grid-cols-1 gap-6">
            <Link
              href={solutions[4].href}
              className="block bg-white rounded-[20px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] p-12 transition-all duration-300 text-center max-w-[1000px] mx-auto hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="mx-auto w-[72px] h-[72px] bg-[#E6F0FF] rounded-full flex items-center justify-center mb-6">
                <Image
                  src={solutions[4].icon}
                  alt={`${solutions[4].title} Icon`}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              
              <h3 className="font-rajdhani text-[26px] leading-[32px] font-[700] text-[#041424] mb-3">
                {solutions[4].title}
              </h3>
              <p className="font-nunito text-[16px] leading-[24px] font-[400] text-[#686868] mb-6 max-w-[305px] mx-auto">
                {solutions[4].description}
              </p>
              <div className="mx-auto w-8 h-[2px] bg-[#006CB0]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}