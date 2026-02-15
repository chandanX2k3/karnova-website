import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { InternshipHero } from '@/components/internships/internship-hero'
import { BenefitsGrid } from '@/components/internships/benefits-grid'
import { JobOpenings } from '@/components/internships/job-openings'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function InternshipsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <InternshipHero />
        <BenefitsGrid />
        <JobOpenings />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
