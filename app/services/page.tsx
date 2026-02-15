import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ServiceHero } from '@/components/services/service-hero'
import { ServiceDetails } from '@/components/services/service-details'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <ServiceHero />
        <ServiceDetails />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
