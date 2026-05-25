import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import StepCard from '../ui/StepCard'
import Button from '../ui/Button'
import { STEPS } from '../../lib/constants'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-dark-800 py-24 lg:py-32 overflow-hidden">

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Simple by Design
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            From scan to decision{' '}
            <span className="gradient-text">in seconds.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-gray-400 text-base lg:text-lg max-w-xl mx-auto leading-relaxed"
          >
            No learning curve. No setup. Just open, point, and know everything
            you need before you buy.
          </motion.p>
        </div>

        {/* Steps row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-4">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center w-full lg:flex-1">
              <StepCard step={step} index={i} total={STEPS.length} />
              {i < STEPS.length - 1 && (
                <div className="lg:hidden w-px h-10 bg-gradient-to-b from-brand-blue/40 to-transparent my-4" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#download" variant="primary" size="lg">
            Get Early Access <ArrowRight size={18} />
          </Button>
          <Button href="#pricing" variant="outline" size="lg">
            See Pricing
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
