import { ArrowRight, DollarSign, Users, Headphones, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side with images and counter */}
          <div className="relative">
            {/* Experience Counter */}
            <div className="absolute top-0 left-0 z-10 bg-[#0066CC] text-white p-8 rounded-2xl text-center w-[200px] shadow-lg">
              <div className="text-5xl font-bold mb-2">22+</div>
              <div className="text-sm font-medium leading-snug">
                Years Of
                <br />
                Experiences
              </div>
            </div>
            
            {/* Images Grid */}
            <div className="relative pl-12 pt-24">
              {/* Top Image */}
              <div className="relative z-20 ml-auto w-[80%]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-[280px] object-cover"
                />
              </div>
              
              {/* Bottom Image */}
              <div className="relative z-20 -mt-12 w-[75%]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
                  alt="Office meeting"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-[280px] object-cover"
                />
              </div>

              {/* Dot Pattern */}
              <div className="absolute bottom-0 right-0 z-10">
                <div className="grid grid-cols-8 gap-2">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#0066CC]"
                      style={{ opacity: (i % 8 + Math.floor(i / 8)) % 2 === 0 ? 0.2 : 0 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-[#0066CC] font-medium tracking-wide uppercase">
                ABOUT OUR COMPANY
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold font-display leading-tight">
                Cybersecurity & Consulting: Outsmart Threats, Improve Operations.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations manage cybersecurity risks. We identify, prioritize, and
                mitigate vulnerabilities across systems and applications. Our goal is to protect
                your operations and enhance security without complexity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <img
                  src="/images/moneyback.png" // Path from the public folder
                  alt="Moneyback Icon"
                  className="w-6 h-6"
                />
                </div>
                <div>
                  <h4 className="font-medium mb-1">100% Money Back</h4>
                  <p className="text-sm text-gray-600">Gaurentee</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <img
                  src="/images/expert.png" // Path from the public folder
                  alt="expert Icon"
                  className="w-6 h-6"
                />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Expert & Dedicated</h4>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <img
                  src="/images/support.png" // Path from the public folder
                  alt="support Icon"
                  className="w-6 h-6"
                />
                </div>
                <div>
                  <h4 className="font-medium mb-1">24/7 Free Technical</h4>
                  <p className="text-sm text-gray-600">Supports</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <img
                  src="/images/customersatisfaction.png" // Path from the public folder
                  alt="customersatisfaction Icon"
                  className="w-6 h-6"
                />
                </div>
                <div>
                  <h4 className="font-medium mb-1">100% Customers</h4>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0066CC] text-white rounded-md hover:bg-[#0052a3] transition-colors text-sm font-medium group"
            >
              Contact Us
              <span className="ml-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

