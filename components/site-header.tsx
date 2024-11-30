'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search } from 'lucide-react'
import { useState } from "react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/BafaTech Logo.png"
              alt="BafaTech Logo" 
              width={260}
              height={58}
              className="h-14 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-grow space-x-12">
            <Link 
              href="/"
              className="font-nunito text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-2 font-nunito text-base font-semibold text-navy hover:text-primary transition-colors">
                <span>Service</span>
                <ChevronDown className="h-4 w-4 opacity-80" />
              </button>
            </div>
            <Link 
              href="/contact"
              className="font-nunito text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            {['About Us', 'News', 'Industries'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="font-nunito text-base font-semibold text-navy hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <button 
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-navy" />
          </button>

          {/* Mobile Navigation Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="h-6 w-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

