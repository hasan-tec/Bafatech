import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/images/hero.png)`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative container mx-auto px-4 lg:px-8 h-screen flex flex-col justify-center">
        <div className="max-w-3xl space-y-8 pt-20">
          <h2 className="font-rajdhani text-2xl md:text-3xl text-white font-semibold">
            We Are Expert In This Field
          </h2>
          <h1 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
            BafaTech Consulting
          </h1>
          <p className="font-nunito text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Technology Solutions Specializing in Enterprise Asset Management (EAM), Risk-Based Vulnerability Management (RBVM), and Patch Management
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg transition-colors font-rajdhani text-base font-semibold group"
          >
            Our Services
            <span className="ml-3 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

