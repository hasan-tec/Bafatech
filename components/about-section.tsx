import Image from 'next/image'
import { ArrowRight, Users, Headphones, Award } from 'lucide-react'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side with images and counter */}
          <div className="relative">
            {/* Experience Counter */}
            <div className="absolute top-0 left-0 z-20 bg-[#0099FF] text-white p-6 sm:p-8 md:p-12 rounded-2xl text-center w-36 sm:w-40 md:w-48 shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2">22+</div>
              <div className="text-xs sm:text-sm font-medium leading-snug">
                Years Of
                <br />
                Experiences
              </div>
            </div>
            
            {/* Images Grid */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              {/* Main (Tall) Image */}
              <div className="absolute right-0 top-0 w-2/3 h-full">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-md"
                />
              </div>
              
              {/* Overlapping Image */}
              <div className="absolute left-0 bottom-0 w-3/5 h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80"
                  alt="Office meeting"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-md"
                />
              </div>
              {/* Decorative Dots */}
              <div className="absolute bottom-4 right-4 grid grid-cols-8 gap-1 sm:gap-2 z-10">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/20" />
                ))}
              </div>
            </div>
          </div>
        

          {/* Right side content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-primary font-rajdhani text-base sm:text-lg font-semibold tracking-wider uppercase mb-2">
                ABOUT OUR COMPANY
              </h3>
              <h2 className="text-navy font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Cybersecurity & Consulting: Outsmart Threats, Improve Operations.
              </h2>
              <p className="text-gray-custom font-nunito text-base sm:text-lg leading-relaxed">
                We help organizations manage cybersecurity risks. We identify, prioritize, and
                mitigate vulnerabilities across systems and applications. Our goal is to protect
                your operations and enhance security without complexity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                  <Image
                    src="/images/moneyback.png"
                    alt="Moneyback Icon"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <div>
                  <h4 className="font-rajdhani text-base sm:text-lg font-bold text-navy mb-1">100% Money Back</h4>
                  <p className="font-nunito text-sm sm:text-base text-gray-custom">Guarantee</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-base sm:text-lg font-bold text-navy mb-1">Expert & Dedicated</h4>
                  <p className="font-nunito text-sm sm:text-base text-gray-custom">Team Members</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                  <Headphones className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-base sm:text-lg font-bold text-navy mb-1">24/7 Free Technical</h4>
                  <p className="font-nunito text-sm sm:text-base text-gray-custom">Supports</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 sm:space-x-5">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-base sm:text-lg font-bold text-navy mb-1">100% Customers</h4>
                  <p className="font-nunito text-sm sm:text-base text-gray-custom">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg hover:bg-blue-900 transition-colors font-rajdhani text-sm sm:text-base font-semibold group"
            >
              Contact Us
              <span className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

