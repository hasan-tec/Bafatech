import Image from "next/image"

export function AboutMission() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Left Image Grid */}
          <div className="relative order-2 lg:order-1">
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
              <div className="relative z-10 max-w-[600px] mx-auto lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Business professional"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
                />
              </div>

              {/* Overlaid small image */}
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 -left-4 sm:-left-8 md:-left-12 z-20 w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                  alt="Team meeting"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-[135px] sm:h-[180px] md:h-[210px] lg:h-[240px]"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <span className="text-[#0072BC] font-nunito text-base sm:text-lg font-medium">
              Our Mission
            </span>
            <h2 className="font-rajdhani text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-[#1B1B1B]">
              Securing Your Critical Assets with Tailored Solutions.
            </h2>
            <div className="space-y-4 sm:space-y-6 font-nunito text-[#58595B] text-base sm:text-lg">
              <p>
                Empower organizations to secure their most critical assets. We help you protect your infrastructure by managing assets, reducing vulnerabilities, and patching systems, keeping you ahead of threats.
              </p>
              <p>
                We provide the tools you need for informed decisions, offering visibility into your environment, insights into risks, and practical solutions. Our adaptable approach ensures flexibility and control at every step.
              </p>
              <p>
                We focus on collaboration and innovative solutions tailored to your unique challenges. Your security is our priority, and we are dedicated to supporting your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

