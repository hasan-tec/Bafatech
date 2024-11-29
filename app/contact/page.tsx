import { ContactHeader } from "@/components/contact-header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

