'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

export function ContactHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#001B45] shadow-lg' : 'bg-[#001B45]'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/bafatech-logo-white.svg"
              alt="BafaTech Logo" 
              width={200} 
              height={45}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1.5 text-white/90 hover:text-white transition-colors">
                <span className="text-sm font-medium">Service</span>
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
            </div>
            {['Contact Us', 'About Us', 'News', 'Industries'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          <Link
            href="/quote"
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#0066CC] text-white rounded hover:bg-[#0052a3] transition-colors text-sm font-medium"
          >
            Get A Quote
          </Link>

          {/* Mobile Navigation Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

