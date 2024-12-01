import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/bafatech",
    label: "Follow us on Instagram"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/bafatech",
    label: "Connect with us on LinkedIn"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/bafatech",
    label: "Follow us on Twitter"
  }
]

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
  { href: "/privacy-terms", label: "Privacy & Terms" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#001B45] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom, rgba(0,27,69,0.95), rgba(0,27,69,0.98)),`,
          backgroundImage: `url('/images/footer.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/footer logo.png"
              alt="BafaTech Consulting"
              width={180}
              height={60}
              className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
            />
          </Link>

          {/* Description */}
          <p className="font-nunito text-sm sm:text-base md:text-[16px] leading-[1.5] sm:leading-[24px] text-white/90 max-w-[800px] mx-auto">
            We specialize in helping organizations manage cybersecurity risks by identifying, prioritizing, and mitigating vulnerabilities in their systems and applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-nunito text-sm sm:text-base md:text-[16px] text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>  
        </div>
      </div>
    </footer>
  )
}

