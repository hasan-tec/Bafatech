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
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
              alt="AthensGuardia Logo" 
              width={200} 
              height={45}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-grow space-x-10">
            <div className="relative group">
              <button className="flex items-center space-x-1.5 text-gray-800 hover:text-gray-900">
                <span className="text-[15px] font-medium">Service</span>
                <ChevronDown className="h-3.5 w-3.5 mt-0.5 opacity-70" />
              </button>
            </div>
            <Link 
              href="/contact"
              className="text-[15px] font-medium text-gray-800 hover:text-gray-900"
            >
              Contact Us
            </Link>
            {['About Us', 'News', 'Industries'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-[15px] font-medium text-gray-800 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
          </nav>
          <button 
            className="p-2.5 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="h-6 w-6 text-gray-800" />
          </button>

          {/* Mobile Navigation Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

