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
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50 relative"
      style={{
        backgroundImage: 'url("/images/choose-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8 max-w-xl">
              <h2 className="font-rajdhani text-6xl leading-tight font-bold text-[#041424]">
                Why Choose BafaTech Consulting?
              </h2>
              <p className="font-nunito text-lg leading-relaxed font-normal text-gray-600">
                At BafaTech Consulting, we focus on delivering straightforward, effective cybersecurity solutions that solve real challenges. Our AthenGuardia product line is designed to support your security goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-[#0066CC] mt-1.5">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <span className="font-montserrat text-lg leading-relaxed font-medium text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6 flex items-center space-x-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#0066CC] text-white rounded hover:bg-[#0052a3] transition-colors font-montserrat text-lg font-medium"
              >
                Contact Now
              </Link>
              <Image 
                src="/images/choose_pic_arrow.png"
                alt="Decorative arrow" 
                width={80} 
                height={40}
                className="hidden md:block opacity-60"
              />
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Images Grid */}
            <div className="relative">
              {/* Decorative lines */}
              <div className="absolute -right-8 top-0 bottom-0">
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
              <div className="relative z-10 max-w-[600px] ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                 
                  alt="Business professional"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg object-cover w-full h-[700px]"
                />
              </div>

              {/* Overlaid small image */}
              <div className="absolute bottom-12 -left-12 z-20 w-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-[240px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection;