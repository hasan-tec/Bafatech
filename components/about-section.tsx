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
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <Image
                  src="/images/moneyback.png"
                  alt="Moneyback Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-medium mb-1">100% Money Back</h4>
                <p className="text-sm text-gray-600">Guarantee</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <Image
                  src="/images/expert.png"
                  alt="Expert Icon"
                  width={24}
                  height={24}
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
                <Image
                  src="/images/support.png"
                  alt="Support Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-medium mb-1">24/7 Free Technical</h4>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0066CC]/10 rounded-lg">
                <Image
                  src="/images/customersatisfaction.png"
                  alt="Customer Satisfaction Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-medium mb-1">Customer Satisfaction</h4>
                <p className="text-sm text-gray-600">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

