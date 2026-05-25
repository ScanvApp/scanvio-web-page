import { motion } from 'framer-motion'
import FeatureCard from '../ui/FeatureCard'
import { FEATURE_CARDS } from '../../lib/constants'

export default function FeatureStrip() {
  return (
    <section className="relative bg-dark-900">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto"
      >
        {/* Glass container */}
        <div className="mx-6 lg:mx-8 rounded-2xl glass-card overflow-hidden">
          <div className="flex flex-col lg:flex-row divide-y divide-white/8 lg:divide-y-0">
            {FEATURE_CARDS.map((card, i) => (
              <FeatureCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom padding for section spacing */}
      <div className="h-10" />
    </section>
  )
}
