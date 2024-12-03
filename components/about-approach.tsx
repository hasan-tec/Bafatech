import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    text: "Track and manage your assets. Know what's in your environment and what needs attention.",
  },
  {
    text: "Find vulnerabilities, assess their impact, and prioritize fixing them.",
  },
  {
    text: "Patch quickly and easily. Stay up-to-date without downtime or headaches.",
  },
];

export function SecureApproachSection() {
  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-4">
            <p className="text-[#0077CC] font-bold uppercase text-sm tracking-widest">
              Our Approach
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              We take a direct and efficient approach to securing your business.
            </h2>
          </div>

          {/* Features List */}
          <div className="space-y-6  pt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group hover:text-[#0077CC] transition-all"
              >
                <div className="text-[#0077CC] mt-1.5 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <p className="font-nunito text-lg leading-relaxed text-gray-700">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="relative">
          {/* Decorative Dots */}
          <div className="absolute right-8 top-0 bottom-0 flex flex-col gap-1 z-0">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#0077CC] opacity-50 rounded-full" />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative z-10 max-w-[500px] ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
              alt="Business professional"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Overlapping Small Image */}
          <div className="absolute bottom-12 -left-12 z-20 w-[250px]">
            <Image
              src="/images/hero.png" // Ensure this image is available in the `public/images` folder
              alt="Team meeting"
              width={250}
              height={200}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecureApproachSection;
