import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AboutHero } from '@/components/about/about-hero'
import { CompanyStory } from '@/components/about/company-story'
import { TeamSection } from '@/components/about/team-section'
import { MilestonesTimeline } from '@/components/about/milestones-timeline'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <AboutHero />
        <CompanyStory />
        <TeamSection />
        <MilestonesTimeline />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
