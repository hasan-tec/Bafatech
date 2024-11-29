import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 lg:px-8 h-screen flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 pt-20">
          <h2 className="text-xl md:text-2xl text-white font-medium">
            We Are Expert In This Field
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight font-display">
            BafaTech Consulting
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Technology Solutions Specializing in Enterprise Asset Management (EAM), Risk-Based Vulnerability Management (RBVM), and Patch Management
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-[#0066CC] hover:bg-[#0052a3] text-white rounded-md transition-colors text-sm font-medium group"
          >
            Our Services
            <span className="ml-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

