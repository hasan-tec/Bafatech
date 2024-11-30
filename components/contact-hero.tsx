import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/hero.png)`,
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
            <span className="font-nunito text-sm text-white">Contact Us</span>
          </nav>
          
          {/* Page Title */}
          <h1 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl text-white font-bold tracking-tight">
            Contact Us
          </h1>
        </div>
      </div>
    </section>
  )
}

