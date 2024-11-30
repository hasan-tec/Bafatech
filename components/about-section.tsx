import Image from 'next/image'
import { ArrowRight, DollarSign, Users, Headphones, Award } from 'lucide-react'
import Link from 'next/link'


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
            </div>
          </div>

          
    {/* Right side content */}
    <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-primary font-rajdhani text-lg font-semibold tracking-wider uppercase mb-2">
                ABOUT OUR COMPANY
              </h3>
              <h2 className="text-navy font-rajdhani text-4xl md:text-5xl font-bold leading-tight mb-6">
                Cybersecurity & Consulting: Outsmart Threats, Improve Operations.
              </h2>
              <p className="text-gray-custom font-nunito text-lg leading-relaxed">
                We help organizations manage cybersecurity risks. We identify, prioritize, and
                mitigate vulnerabilities across systems and applications. Our goal is to protect
                your operations and enhance security without complexity.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <img
                    src="/images/moneyback.png"
                    alt="Moneyback Icon"
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-navy mb-1">100% Money Back</h4>
                  <p className="font-nunito text-gray-custom">Gaurentee</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-navy mb-1">Expert & Dedicated</h4>
                  <p className="font-nunito text-gray-custom">Team Members</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Headphones className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-navy mb-1">24/7 Free Technical</h4>
                  <p className="font-nunito text-gray-custom">Supports</p>
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-rajdhani text-lg font-bold text-navy mb-1">100% Customers</h4>
                  <p className="font-nunito text-gray-custom">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-blue-900 transition-colors font-rajdhani text-base font-semibold group"
            >
              Contact Us
              <span className="ml-3 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}