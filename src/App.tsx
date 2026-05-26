import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import StickyCtaBar from './components/ui/StickyCtaBar'
import Hero from './components/sections/Hero'

const SocialProof      = lazy(() => import('./components/sections/SocialProof'))
const FeatureStrip     = lazy(() => import('./components/sections/FeatureStrip'))
const Categories       = lazy(() => import('./components/sections/Categories'))
const Features         = lazy(() => import('./components/sections/Features'))
const ComparisonTable  = lazy(() => import('./components/sections/ComparisonTable'))
const AppShowcase      = lazy(() => import('./components/sections/AppShowcase'))
const PlatformShowcase = lazy(() => import('./components/sections/PlatformShowcase'))
const HowItWorks       = lazy(() => import('./components/sections/HowItWorks'))
const Pricing          = lazy(() => import('./components/sections/Pricing'))
const ROICalculator    = lazy(() => import('./components/sections/ROICalculator'))
const About            = lazy(() => import('./components/sections/About'))
const Community        = lazy(() => import('./components/sections/Community'))
const FAQ              = lazy(() => import('./components/sections/FAQ'))
const Download         = lazy(() => import('./components/sections/Download'))

function App() {
  return (
    <>
      <ScrollProgress />
      <StickyCtaBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-screen bg-dark-900 text-white font-sans"
      >
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <SocialProof />
          <FeatureStrip />
          <Categories />
          <Features />
          <ComparisonTable />
          <AppShowcase />
          <PlatformShowcase />
          <HowItWorks />
          <Pricing />
          <ROICalculator />
          <About />
          <Community />
          <FAQ />
          <Download />
        </Suspense>
        <Footer />
      </motion.div>
    </>
  )
}

export default App
