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
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative"
      style={{
        backgroundImage: 'url("/images/choose-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 max-w-xl">
              <h2 className="font-rajdhani text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-[#041424]">
                Why Choose BafaTech Consulting?
              </h2>
              <p className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">
                At BafaTech Consulting, we focus on delivering straightforward, effective cybersecurity solutions that solve real challenges. Our AthenGuardia product line is designed to support your security goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-[#0066CC] mt-1">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg hover:bg-blue-900 transition-colors font-rajdhani text-sm sm:text-base font-semibold group"
            >
              Contact Us
              <span className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
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
          <div className="relative mt-8 lg:mt-0">
            {/* Images Grid */}
            <div className="relative">
              {/* Decorative lines */}
              <div className="absolute -right-4 sm:-right-8 top-0 bottom-0">
                <div className="flex gap-1 sm:gap-2 h-full">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-1 sm:gap-2">
                      {[...Array(10)].map((_, j) => (
                        <div
                          key={j}
                          className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-[#0066CC]"
                          style={{ opacity: 0.2 }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main large image */}
              <div className="relative z-10 max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] mx-auto lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Business professional"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px] sm:h-[500px] lg:h-[700px]"
                />
              </div>

              {/* Overlaid small image */}
              <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 -left-4 sm:-left-8 lg:-left-12 z-20 w-[200px] sm:w-[280px] lg:w-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-[150px] sm:h-[210px] lg:h-[240px]"
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

