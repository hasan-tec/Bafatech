import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function PartnerSection() {
  return (
    <section className="relative bg-[#001B45] py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001B45]/50 to-[#001B45] pointer-events-none" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-display">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Whether you&apos;re a small business managing assets or an enterprise needing help to prioritize vulnerabilities for patching, we&apos;re here to guide you every step of the way.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0066CC] hover:bg-[#0052a3] text-white rounded-md transition-colors text-sm font-medium group"
            > 
              Become A Partner
              <span className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

