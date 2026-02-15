import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero'
import { ServicesOverview } from '@/components/home/services-overview'
import { StatsSection } from '@/components/home/stats-section'
import { HowWeWork } from '@/components/home/how-we-work'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { TestimonialsSection } from '@/components/home/testimonials'
import { InternshipCTA } from '@/components/home/internship-cta'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <HowWeWork />
        <FeaturedProjects />
        <TestimonialsSection />
        <InternshipCTA />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
