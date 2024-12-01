import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-white/80">
            <Link 
              href="/" 
              className="font-nunito text-sm hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="text-sm">/</span>
            <span className="font-nunito text-sm text-white">About Us</span>
          </nav>
          
          {/* Page Title */}
          <h1 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl text-white font-bold tracking-tight">
            About Us
          </h1>
        </div>
      </div>
    </section>
  )
}

