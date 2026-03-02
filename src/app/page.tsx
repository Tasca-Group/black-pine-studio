import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyBlackPine } from '@/components/sections/WhyBlackPine'
import { PortfolioPreview } from '@/components/sections/PortfolioPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyBlackPine />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
