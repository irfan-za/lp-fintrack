import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { Stats } from './components/stats'
import { Features } from './components/features'
import { HowItWorks } from './components/how-it-works'
import { Dashboard } from './components/dashboard'
import { Comparison } from './components/comparison'
import { Testimonials } from './components/testimonials'
import { CTA } from './components/cta'
import { Footer } from './components/footer'

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
