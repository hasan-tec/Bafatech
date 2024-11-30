import { SiteHeader } from "@/components/site-header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}

