import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <ContactHero />
        <ContactForm />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
