'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const Products = [
    'AthenGuard Asset Discovery',  
    'AthenGuard EAM',
    'AthenGuard Patch',
    'AthenGuard RBVM',
    'AthenGuard TIP'
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
     <div className="container mx-auto px-4 lg:px-8">
      <div className="flex h-22 sm:h-22 md:h-22 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png"
            alt="BafaTech Logo" 
            width={360}
            height={81}
            className="h-32 sm:h-32 md:h-32 lg:h-32 w-auto -mt-4 -mb-4 transition-all duration-300"
            priority
          />
        </Link>

          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end flex-grow space-x-4 xl:space-x-8">
            <Link 
              href="/"
              className="font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center space-x-1 font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 opacity-80 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Desktop Dropdown */}
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-1 w-[180px] xl:w-[200px] border border-gray-100"
                >
                  {Products.map((service) => (
                    <Link
                      key={service}
                      href={`/Products/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-xs xl:text-sm text-navy hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              href="/contact"
              className="font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/about"
              className="font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              About Us
            </Link>
            {['News', 'Industries'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden">
                  <Menu className="h-7 w-7 sm:h-10 sm:w-10 text-navy" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] md:w-[480px] p-0">
                <nav className="flex flex-col space-y-6 p-6 pt-12">
                  <Link 
                    href="/"
                    className="font-nunito text-base sm:text-lg md:text-xl font-semibold text-navy hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <div className="space-y-3">
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="flex items-center justify-between w-full font-nunito text-lg sm:text-xl font-semibold text-navy hover:text-primary transition-colors"
                    >
                      Service
                      <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 space-y-4 ${isMobileProductsOpen ? 'block' : 'hidden'}`}>
                      {Products.map((service) => (
                        <Link
                          key={service}
                          href={`/Products/${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block font-nunito text-base sm:text-lg text-navy hover:text-primary transition-colors"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="font-nunito text-lg sm:text-xl font-semibold text-navy hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/about"
                    className="font-nunito text-lg sm:text-xl font-semibold text-navy hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                  {['News', 'Industries'].map((item) => (
                    <Link 
                      key={item}
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="font-nunito text-lg sm:text-xl font-semibold text-navy hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                 
                </nav>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  )
}