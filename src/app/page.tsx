import { Hero } from '@/components/sections/Hero'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyBlackPine } from '@/components/sections/WhyBlackPine'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyBlackPine />
      <Testimonials />
      <CTASection />
    </>
  )
}
