import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CategoryCard from '../ui/CategoryCard'
import { CATEGORIES } from '../../lib/constants'

export default function Categories() {
  return (
    <section id="categories" className="relative bg-dark-900 py-20 lg:py-28 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Decorative background blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-blue/5 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-purple/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          {/* Left — heading */}
          <div className="flex-shrink-0 lg:max-w-xs">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
            >
              Built for Today, Ready for Tomorrow
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Start with{' '}
              <span className="text-white">Books.</span>
              <br />
              Expand to{' '}
              <span className="gradient-text">Everything.</span>
            </motion.h2>
          </div>

          {/* Right — category cards */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {CATEGORIES.map((cat, i) => (
                <CategoryCard key={cat.label} category={cat} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl px-8 py-6 bg-gray-900 border border-white/8"
        >
          <div>
            <p className="text-white font-bold text-lg">Be first when new categories launch.</p>
            <p className="text-gray-400 text-sm mt-1">Join the waitlist and get notified as each category goes live.</p>
          </div>
          <a
            href="#download"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shrink-0 transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)' }}
          >
            Join Waitlist <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
