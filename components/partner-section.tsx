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
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

