'use client'

import { Phone, Mail, Clock } from 'lucide-react'

export function ContactForm() {
  return (
    <section className="py-20 bg-[#001B45]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-[#001B45]">
                Let&apos;s Work Together
              </h2>
              <form className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="State/Region"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="How can we help you"
                  rows={6}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none transition-colors resize-none"
                />
                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#0066CC] text-white rounded hover:bg-[#0052a3] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-[#0066CC] text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8">
                <p>Don&apos;t hesitate to reach out</p>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-white/80">+980 123 (4567) 890</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Send E-Mail</div>
                    <div className="text-white/80">example@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-white/80">8.00 AM to 5.00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

