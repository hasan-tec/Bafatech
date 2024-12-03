import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-16 sm:pt-20 md:pt-24">
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
              <span className="font-nunito text-sm">News</span>
            </nav>

            <h1 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight">
              News
            </h1>
          </div>
        </section>

        {/* Welcome Text */}
        <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-rajdhani">News</h2>
          <p className="font-nunito text-sm sm:text-base leading-6 font-medium text-[#686868]">
            Welcome to the AthenGuard News page. Stay informed with the latest updates, product announcements, and industry insights. From groundbreaking features to thought leadership in cybersecurity, here&apos;s everything you need to know.
          </p>
        </section>

        {/* Product News */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-rajdhani">Product News</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <NewsCard
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                date="November 20, 2024"
                title="AthenGuard Scan Enhances Asset Discovery for IoT Devices"
                description="We&apos;re excited to announce an update to AthenGuard Scan that now includes enhanced discovery capabilities for IoT devices. This feature ensures that organizations can track connected devices seamlessly across their environments, improving security and asset visibility."
              />
              <NewsCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                date="November 20, 2024"
                title="RBVM Adds Historical Vulnerability Trend Analysis"
                description="Our AthenGuard RBVM now includes historical trend analysis, enabling organizations to track vulnerability patterns over time. This feature provides actionable insights to help teams address recurring risks and enhance their long-term security posture."
              />
              <NewsCard
                image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                date="November 20, 2024"
                title="AthenGuard TIP Now Supports Retail-Specific Threat Feeds"
                description="AthenGuard TIP has expanded its capabilities to include threat feeds tailored for the retail sector. This update addresses industry-specific risks, helping retail organizations stay ahead of evolving cyber threats."
              />
            </div>
          </div>
        </section>

        {/* Company Announcements */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-rajdhani">Company Announcements</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <NewsCard
                image="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                date="November 20, 2024"
                title="BafaTech Consulting Named Cybersecurity Innovator of the Year"
                description="We are honored to receive the &apos;Cybersecurity Innovator of the Year&apos; award for our work on the AthenGuard product line. This recognition reflects our dedication to providing advanced solutions for asset management, vulnerability prioritization, and patching."
              />
              <NewsCard
                image="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa"
                date="November 20, 2024"
                title="AthenGuard AssetDiscovery Launch Event"
                description="The official launch of AthenGuard AssetDiscovery was a resounding success. Attendees learned how our newest solution delivers unparalleled visibility across on-premises, cloud, and hybrid environments."
              />
              <NewsCard
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
                date="November 20, 2024"
                title="ISO 27001 Certification Achieved"
                description="BafaTech Consulting is now ISO 27001 certified, affirming our commitment to implementing rigorous security controls across our operations and solutions."
              />
            </div>
          </div>
        </section>

        {/* Industry Updates */}
        <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 font-rajdhani">Industry Updates</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <NewsCard
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                date="November 20, 2024"
                title="The Future of Patch Management: AthenGuard Leads the Way"
                description="With vulnerabilities increasing in complexity, patch management is more critical than ever. Discover how AthenGuard Patch Management is automating updates and ensuring compliance for organizations worldwide."
              />
              <NewsCard
                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                date="November 20, 2024"
                title="Adapting to AI in Cybersecurity"
                description="As AI reshapes the cybersecurity landscape, businesses are turning to tools like AthenGuard TIP for real-time, intelligent threat management. Learn how AI-driven solutions are transforming risk prioritization."
              />
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23202020' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px',
            }}
          />
          
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image with Blue Accent */}
              <div className="relative">
                {/* Blue accent */}
                <div className="absolute -top-3 -left-3 w-16 sm:w-24 h-16 sm:h-24 bg-[#006CB0]" />
                {/* Image container */}
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1560439514-4e9645039924"
                    alt="Business meeting"
                    width={600}
                    height={400}
                    className="w-full h-[300px] sm:h-[400px] object-cover border border-gray-100"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                  Why Choose AthenGuadia?
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <p className="font-nunito text-sm sm:text-base text-gray-600 leading-relaxed">
                    Our news highlights how AthenGuard is at the forefront of cybersecurity innovation. From feature updates to strategic milestones, we remain committed to delivering solutions that help.
                  </p>
                  <p className="font-nunito text-sm sm:text-base text-gray-600 leading-relaxed">
                    Check back regularly for the latest updates. Let us help you stay ahead in the ever-changing world of cybersecurity.
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#006CB0] text-white rounded-md font-nunito text-sm sm:text-base font-semibold hover:bg-[#005a91] transition-colors"
                  >
                    Contact Us
                    <span className="inline-block rotate-[-45deg]">→</span>
                  </Link>
                  <Image
                    src="/images/choose_pic_arrow.png"
                    alt=""
                    width={40}
                    height={40}
                    className="opacity-80 w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

interface NewsCardProps {
  image: string
  date: string
  title: string
  description: string
}

function NewsCard({ image, date, title, description }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-40 sm:h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-2 sm:mb-4">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
          <time className="font-nunito text-xs sm:text-sm">{date}</time>
        </div>
        <h3 className="font-nunito text-base sm:text-xl font-bold mb-2 sm:mb-3 text-navy">{title}</h3>
        <p className="font-nunito text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}