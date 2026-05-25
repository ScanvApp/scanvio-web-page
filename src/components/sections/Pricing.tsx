import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import Button from '../ui/Button'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to start scanning smarter. No credit card required.',
    cta: 'Join Waitlist',
    ctaHref: '#download',
    variant: 'outline' as const,
    features: [
      'Unlimited barcode scans',
      'Price comparison — Amazon, eBay & ThriftBooks',
      'Aggregated reviews & ratings',
      'Scan history (last 30 items)',
      'Wishlist (up to 20 items)',
      'iOS & Android app',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: 'per month',
    description: 'For power users who scan seriously. AI-powered, unlimited everything.',
    cta: 'Get Early Access',
    ctaHref: '#download',
    variant: 'primary' as const,
    badge: 'Most Popular',
    features: [
      'Everything in Free',
      'Price comparison across 50+ stores',
      'Unlimited scan history',
      'Unlimited wishlist',
      'AI-powered recommendations',
      'Price drop alerts',
      'Export scan history (CSV)',
      'Priority support',
      'Early access to new categories',
    ],
    highlighted: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glows */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-purple/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-80 h-80 rounded-full bg-brand-blue/6 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 lg:mb-18">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Simple Pricing
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Start free.{' '}
            <span className="gradient-text">Upgrade anytime.</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-base lg:text-lg leading-relaxed"
          >
            No hidden fees. No credit card. The free plan is genuinely free — forever.
          </motion.p>
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? 'border border-brand-blue/30 bg-gradient-to-b from-brand-blue/8 to-brand-purple/5'
                  : 'glass-card'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' }}>
                    <Zap size={10} />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest ${plan.highlighted ? 'text-brand-blue' : 'text-gray-500'}`}>
                  {plan.name}
                </span>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 text-sm mb-1.5">/ {plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mt-3">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/6" />

              {/* Feature list */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      plan.highlighted ? 'bg-brand-blue/20' : 'bg-white/8'
                    }`}>
                      <Check size={10} className={plan.highlighted ? 'text-brand-blue' : 'text-gray-400'} />
                    </div>
                    <span className="text-sm text-gray-300 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button href={plan.ctaHref} variant={plan.variant} size="md" className="w-full justify-center">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-gray-600 mt-10"
        >
          Pro pricing is indicative — early access members get a launch discount.
        </motion.p>
      </div>
    </section>
  )
}
