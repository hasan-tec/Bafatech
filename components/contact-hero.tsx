import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative min-h-[400px] bg-[#001B45] overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Left Curved Accent */}
      <div className="absolute left-0 bottom-0 w-[40%] h-full">
        <div 
          className="absolute inset-0 bg-[#0066CC]"
          style={{
            clipPath: 'path("M 0 400 C 0 400, 400 400, 400 0 C 400 0, 0 0, 0 0 Z")',
            opacity: 0.15
          }}
        />
      </div>

      {/* Glowing Effect */}
      <div 
        className="absolute bottom-0 right-0 w-2/3 h-1/2"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(0, 102, 204, 0.3), transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="pt-40 pb-24 md:pt-48 md:pb-32">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-3 mb-6">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white text-sm">Contact Us</span>
          </nav>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-display font-bold tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(0,27,69,1), rgba(0,27,69,0))'
        }}
      />
    </section>
  )
}

