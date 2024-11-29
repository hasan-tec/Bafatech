import { Shield, Scan, Database, AlertTriangle } from 'lucide-react'

const solutions = [
  {
    icon: Shield,
    title: 'Threat Intelligence Platform',
    description: 'Collects threat intelligence and integrates it into AthenGuardia RBVM for proactive risk management.'
  },
  {
    icon: Scan,
    title: 'AthenGuardia Scan',
    description: 'Scans assets on-premises, in the cloud, and through agent-based solutions for complete visibility.'
  },
  {
    icon: Database,
    title: 'Enterprise Asset Management',
    description: 'Track and manage your assets with AthenGuardia EAM, reducing downtime and enhancing efficiency.'
  },
  {
    icon: AlertTriangle,
    title: 'Risk-Based Vulnerability Management',
    description: 'AthenGuardia RBVM identifies, prioritizes, and addresses vulnerabilities based on risk.'
  }
]

export function SolutionsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-100 transform -skew-x-12" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 transform skew-x-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-[#0066CC] font-medium mb-4">Our Solutions</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001B45]">AthenGuardia Line</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-[#0066CC]" />
              </div>
              <h3 className="text-xl font-bold text-[#001B45] mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              <div className="w-12 h-1 bg-[#0066CC]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

