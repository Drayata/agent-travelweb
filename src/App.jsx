import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import FeaturedPackages from './components/FeaturedPackages'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <FeaturedPackages />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
