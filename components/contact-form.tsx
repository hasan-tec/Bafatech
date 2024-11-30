export function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm max-w-[1170px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Form Section */}
            <div className="lg:col-span-8 p-8 lg:p-12">
              <h2 className="font-rajdhani text-[38px] font-bold text-[#1B1B1B] mb-8">
                Let's Work Together
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <input
                  type="text"
                  placeholder="State/Region"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B]"
                />
                <textarea
                  placeholder="How can we help you"
                  className="w-full px-4 py-2.5 border border-[#E5E5E5] rounded font-nunito text-[15px] focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary placeholder:text-[#6B6B6B] md:col-span-2 resize-none h-[120px]"
                />
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-[#0072BC] text-white font-nunito font-semibold text-[15px] px-8 py-2.5 rounded hover:bg-[#005a96] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="lg:col-span-4 bg-[#0072BC] p-8 lg:p-12">
              <h2 className="font-rajdhani text-[38px] font-bold text-white mb-8">
                Don't Forget to Contact Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-nunito text-white font-semibold text-[15px]">Call Us</h3>
                    <p className="font-nunito text-white/90 text-[15px]">+980 123 (4567) 890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-nunito text-white font-semibold text-[15px]">Send E-Mail</h3>
                    <p className="font-nunito text-white/90 text-[15px]">example@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-nunito text-white font-semibold text-[15px]">Office Hours</h3>
                    <p className="font-nunito text-white/90 text-[15px]">8.00 AM to 5.00 PM</p>
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

