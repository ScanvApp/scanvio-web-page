import { motion } from 'framer-motion'
import { Users, Target, Zap } from 'lucide-react'
import Button from '../ui/Button'

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      "Nobody should have to guess if they're getting a good deal. We built Scanvio so you always know — before you buy.",
  },
  {
    icon: Zap,
    title: 'What We Build',
    description:
      'Point your phone at anything and instantly see live prices, real reviews, and whether it\'s actually worth buying — all in under a second.',
  },
  {
    icon: Users,
    title: 'Who We Are',
    description:
      "We're a small team who got tired of overpaying for things. Scanvio is the tool we always wished existed.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-purple/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — heading + CTA */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
            >
              About Scanvio
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Built for smarter{' '}
              <span className="gradient-text">shoppers.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-gray-400 text-base lg:text-lg leading-relaxed"
            >
              Scanvio started with a simple frustration: standing in a store,
              not knowing if you're getting ripped off or if the book is even any good.
              We fixed that — and we're not stopping at books.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button href="#download" variant="primary" size="md">
                Download Free
              </Button>
            </motion.div>
          </div>

          {/* Right — pillar cards */}
          <div className="flex flex-col gap-5">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
                  className="glass-card rounded-2xl p-6 flex gap-5 items-start group hover:border-white/10 transition-colors duration-300"
                >
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(79,142,247,0.12)' }}
                  >
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {[
            { value: '50+', label: 'Stores compared' },
            { value: '<1s', label: 'Scan speed' },
            { value: '2026', label: 'Launch year' },
            { value: 'Free', label: 'Always free to start' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-900 px-8 py-8 flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl font-extrabold gradient-text">{stat.value}</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
