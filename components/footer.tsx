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
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
  { href: "/privacy-terms", label: "Privacy & Terms" },
]

export function Footer() {
  return (
    <footer className="bg-[#001B45] py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/footer logo.png"
              alt="BafaTech Consulting"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Description */}
          <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
            We specialize in helping organizations manage cybersecurity risks by identifying, prioritizing, and mitigating vulnerabilities in their systems and applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors text-sm md:text-base"
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

