import FeatureSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/ServicesSection'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <Testimonial />
    </div>
  )
}
