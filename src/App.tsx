import { motion } from 'framer-motion'
import './index.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import StickyCtaBar from './components/ui/StickyCtaBar'
import Hero from './components/sections/Hero'
import FeatureStrip from './components/sections/FeatureStrip'
import Categories from './components/sections/Categories'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import About from './components/sections/About'
import Community from './components/sections/Community'
import Download from './components/sections/Download'
import SocialProof from './components/sections/SocialProof'
import AppShowcase from './components/sections/AppShowcase'
import PlatformShowcase from './components/sections/PlatformShowcase'
import Pricing from './components/sections/Pricing'
import ComparisonTable from './components/sections/ComparisonTable'
import ROICalculator from './components/sections/ROICalculator'
import FAQ from './components/sections/FAQ'

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
        <Footer />
      </motion.div>
    </>
  )
}

export default App
