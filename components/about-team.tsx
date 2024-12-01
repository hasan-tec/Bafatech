import Image from "next/image";
import { Share2 } from "lucide-react";

const teamMembers = [
  {
    name: "Connie Diaz",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James E. Huey",
    position: "Co-Founder",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jone D. Alexon",
    position: "IT Expert",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "June D. Vargas",
    position: "HR Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function AboutTeam() {
  return (
    <section className="relative py-24 bg-[#001B45] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, #0072BC 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #0072BC 0%, transparent 70%),
            radial-gradient(circle at 50% 50%, #0072BC 0%, transparent 90%)
          `,
        }}
      />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#0072BC] font-nunito text-lg font-medium mb-4">
            Our Team
          </h2>
          <p className="text-white/90 font-nunito text-lg leading-relaxed">
            Our team consists of professionals in enterprise management and
            cybersecurity. Each person—from solution architects to security
            specialists—brings valuable skills to create secure and reliable
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative">
              {/* Card with curved bottom */}
              <div
                className="bg-white rounded-t-lg overflow-hidden relative"
                style={{ paddingBottom: "1.5rem" }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-rajdhani text-xl font-bold text-[#1B1B1B] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-nunito text-[#58595B]">
                    {member.position}
                  </p>
                </div>
              </div>
              {/* Triangular bottom */}
              <div
                className="absolute bottom-[-1px] left-0 right-0 h-6 bg-[#001B45]"
                style={{
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                }}
              />
              {/* Share button positioned at the triangle's vertex */}
              <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2">
                <button
                  className="w-12 h-12 rounded-full bg-[#0072BC] flex items-center justify-center text-white hover:bg-[#005a96] transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
