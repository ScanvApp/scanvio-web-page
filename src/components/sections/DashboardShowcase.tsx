import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCREENS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    src: '/screenshots/dashboard.png',
    description: 'Live Amazon sales data, inventory overview, Buy Box report, and age analysis — all in one place.',
  },
  {
    id: 'scout',
    label: 'Scout Books',
    src: '/screenshots/scout.png',
    description: 'Enter any ISBN-10 or ISBN-13 and instantly pull pricing and profit analysis directly from Amazon.',
  },
  {
    id: 'inventory',
    label: 'My Inventory',
    src: '/screenshots/inventory.png',
    description: 'Track every book you own — buy cost, estimated sell price, profit margin, and BSR rank in one view.',
  },
  {
    id: 'buylist',
    label: 'Buy List',
    src: '/screenshots/buylist.png',
    description: 'Pre-load your sourcing targets before a sale. Max buy price and margin calculated for each title.',
  },
  {
    id: 'amazon',
    label: 'Amazon Integration',
    src: '/screenshots/amazon-integration.png',
    description: 'Connect your Amazon seller account via Login with Amazon. Inventory and orders sync automatically.',
  },
]

export default function DashboardShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-dark-800 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/6 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Web Dashboard
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            The full seller toolkit —{' '}
            <span className="gradient-text">built and working.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-gray-400 text-base lg:text-lg max-w-2xl leading-relaxed"
          >
            Real screenshots from the live Scanvio dashboard — connected to Amazon via SP-API, tracking inventory, orders, and profit in real time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left — tab list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0"
          >
            {SCREENS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  active === i
                    ? 'text-white border-brand-blue/40 bg-brand-blue/10'
                    : 'text-gray-400 border-white/6 bg-white/[0.02] hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`block text-xs font-bold uppercase tracking-widest mb-0.5 ${active === i ? 'text-brand-blue' : 'text-white/25'}`}>
                  0{i + 1}
                </span>
                {s.label}
              </button>
            ))}
          </motion.div>

          {/* Right — screenshot + description */}
          <div className="flex flex-col gap-5">
            {/* Browser chrome frame */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Browser top bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1f2e] border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/8 text-xs text-white/30 font-mono">
                  app.scanv.io/{SCREENS[active].id === 'amazon' ? 'account' : SCREENS[active].id}
                </div>
              </div>

              {/* Screenshot */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={SCREENS[active].src}
                  alt={SCREENS[active].label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="w-full block"
                  style={{ maxHeight: 520, objectFit: 'cover', objectPosition: 'top' }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 text-sm leading-relaxed px-1"
              >
                {SCREENS[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
