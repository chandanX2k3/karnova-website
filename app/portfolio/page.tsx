import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PortfolioHero } from '@/components/portfolio/portfolio-hero'
import { ProjectGrid } from '@/components/portfolio/project-grid'
import { ScrollToTop } from '@/components/shared/scroll-to-top'

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <PortfolioHero />
        <ProjectGrid />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
