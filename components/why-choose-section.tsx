import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    text: "Simplifies asset management with real-time data",
  },
  {
    text: "Prioritizes vulnerabilities based on risk",
  },
  {
    text: "Automates patching for consistent compliance",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001B45] font-display leading-tight">
                Why Choose BafaTech Consulting?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At BafaTech Consulting, we focus on delivering straightforward, effective cybersecurity solutions that solve real challenges. Our AthenGuardia product line is designed to support your security goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-[#0066CC]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex items-center space-x-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#0066CC] text-white rounded-md hover:bg-[#0052a3] transition-colors text-sm font-medium"
              >
                Contact Now
              </Link>
              <Image 
                src="/curved-arrow.svg" 
                alt="" 
                width={80} 
                height={40}
                className="hidden md:block opacity-60"
              />
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Decorative dots */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <div className="flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex gap-2">
                    {[...Array(2)].map((_, j) => (
                      <div
                        key={j}
                        className="w-1 h-1 rounded-full bg-[#0066CC]"
                        style={{ opacity: 0.3 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-12 gap-4">
              {/* Main Image */}
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Business professional"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover h-[300px]"
                />
              </div>
              {/* Bottom Left Image */}
              <div className="col-span-6 lg:col-span-5">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg object-cover h-[200px]"
                />
              </div>
              {/* Bottom Right Image */}
              <div className="col-span-6 lg:col-span-5 lg:col-start-8">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
                  alt="Office work"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg object-cover h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

