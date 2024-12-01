import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1559523182-a284c3fb7cff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="max-w-3xl space-y-4 sm:space-y-6 lg:space-y-8 pt-16 sm:pt-20">
          <h2 className="font-rajdhani text-xl sm:text-2xl md:text-3xl text-white font-semibold">
            We Are Expert In This Field
          </h2>
          <h1 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            BafaTech Consulting
          </h1>
          <p className="font-nunito text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Technology Solutions Specializing in Enterprise Asset Management (EAM), Risk-Based Vulnerability Management (RBVM), and Patch Management
          </p>
          <Link
            href="#services"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-blue-900 text-white rounded-lg transition-colors font-rajdhani text-sm sm:text-base font-semibold group"
          >
            Our Services
            <span className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

