'use client'

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
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
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const services = [
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
        <div className="flex h-16 sm:h-20 md:h-24 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/BafaTech Logo.png"
              alt="BafaTech Logo" 
              width={260}
              height={58}
              className="h-8 sm:h-10 md:h-14 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-grow space-x-4 xl:space-x-8">
            <Link 
              href="/"
              className="font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
            >
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center space-x-1 font-nunito text-sm xl:text-base font-semibold text-navy hover:text-primary transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Service</span>
                <ChevronDown className={`h-3 w-3 xl:h-4 xl:w-4 opacity-80 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Desktop Dropdown */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-1 w-[180px] xl:w-[200px] border border-gray-100"
                >
                  {services.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
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
            <Link 
              href="/get-quote"
              className="hidden lg:inline-flex bg-[#006CB0] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-md font-nunito text-sm xl:text-base font-semibold hover:bg-[#005a91] transition-colors"
            >
              Get A Quote
            </Link>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-navy" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[400px] p-0">
                <nav className="flex flex-col space-y-4 p-6">
                  <Link 
                    href="/"
                    className="font-nunito text-base sm:text-lg font-semibold text-navy hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full font-nunito text-base sm:text-lg font-semibold text-navy hover:text-primary transition-colors"
                    >
                      Service
                      <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`pl-4 space-y-3 ${isMobileServicesOpen ? 'block' : 'hidden'}`}>
                      {services.map((service) => (
                        <Link
                          key={service}
                          href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block font-nunito text-sm sm:text-base text-navy hover:text-primary transition-colors py-1"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link 
                    href="/contact"
                    className="font-nunito text-base sm:text-lg font-semibold text-navy hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/about"
                    className="font-nunito text-base sm:text-lg font-semibold text-navy hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                  {['News', 'Industries'].map((item) => (
                    <Link 
                      key={item}
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="font-nunito text-base sm:text-lg font-semibold text-navy hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link 
                    href="/get-quote"
                    className="inline-flex bg-[#006CB0] text-white px-6 py-2.5 rounded-md font-nunito text-base font-semibold hover:bg-[#005a91] transition-colors justify-center mt-4"
                  >
                    Get A Quote
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}