import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
       {/* Hero Section */}
       <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-start">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="News Background"
              fill
              className="object-cover"
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[rgba(0,27,69,0.85)] to-[rgba(0,27,69,0.75)]"
              aria-hidden="true"
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <nav className="flex items-center space-x-2 text-white/90 mb-2 sm:mb-4">
              <Link 
                href="/"
                className="font-nunito text-sm hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-white/60">/</span>
              <span className="font-nunito text-sm">Privacy Policy</span>
            </nav>

            <h1 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight">
              Privacy Policy
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

