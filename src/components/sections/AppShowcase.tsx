import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCREENS = [
  {
    id: 'scan',
    label: 'Scan',
    description: 'Point your camera at any barcode or cover. Results in under a second.',
    screen: <ScanScreen />,
  },
  {
    id: 'results',
    label: 'Compare',
    description: '3 stores free. Unlock 50+ with Pro — side by side, so you always pay less.',
    screen: <ResultsScreen />,
  },
  {
    id: 'details',
    label: 'Decide',
    description: 'Aggregated reviews, ratings, and full details — all in one place.',
    screen: <DetailsScreen />,
  },
]

function ScanScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0a0f1a]">
      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-10 pb-2 text-[8px] text-white/40 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">SCANVIO</span>
        <div className="w-6 h-2 rounded-sm border border-white/30 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/50" />
        </div>
      </div>

      {/* Viewfinder */}
      <div className="flex-1 relative flex items-center justify-center mx-4 my-3 rounded-2xl overflow-hidden bg-[#060b12]">
        {/* Simulated camera feed */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 60%, #1a2540 0%, #060b12 70%)',
        }} />

        {/* Simulated book spine */}
        <div className="absolute w-20 h-32 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg flex flex-col items-center justify-end p-2 gap-0.5">
          <div className="w-full h-1.5 rounded-full bg-white/20" />
          <div className="w-3/4 h-1 rounded-full bg-white/15" />
          <div className="w-1/2 h-1 rounded-full bg-white/10" />
        </div>

        {/* Scan frame corners */}
        {[['top-[18%] left-[15%]','border-t-2 border-l-2'],
          ['top-[18%] right-[15%]','border-t-2 border-r-2'],
          ['bottom-[18%] left-[15%]','border-b-2 border-l-2'],
          ['bottom-[18%] right-[15%]','border-b-2 border-r-2']].map(([pos, border]) => (
          <div key={pos} className={`absolute ${pos} w-5 h-5 ${border} border-brand-blue rounded-sm`} />
        ))}

        {/* Scan line */}
        <motion.div
          className="absolute left-[18%] right-[18%] h-px bg-brand-blue/80 shadow-[0_0_6px_#4F8EF7]"
          animate={{ top: ['22%', '76%', '22%'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute' }}
        />

        {/* Bottom label */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-[9px] text-white/50">
          Align barcode or cover
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="flex justify-around px-4 py-3 border-t border-white/5">
        {['History', 'Scan', 'Wishlist'].map((tab, i) => (
          <div key={tab} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded-sm ${i === 1 ? 'bg-brand-blue' : 'bg-white/20'}`} />
            <span className={`text-[7px] ${i === 1 ? 'text-brand-blue' : 'text-white/30'}`}>{tab}</span>
          </div>
        ))}
      </div>
      <div className="h-4 flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

function ResultsScreen() {
  const stores = [
    { name: 'Amazon', price: '$8.99',  badge: 'Lowest', color: '#10B981' },
    { name: 'eBay',   price: '$9.50',  badge: null,     color: null },
    { name: 'Barnes & Noble', price: '$12.99', badge: null, color: null },
    { name: 'Half Price Books', price: '$4.99', badge: null, color: null },
  ]

  return (
    <div className="flex flex-col h-full bg-[#0a0f1a]">
      <div className="flex justify-between items-center px-4 pt-10 pb-2 text-[8px] text-white/40 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">PRICES</span>
        <div className="w-6 h-2 rounded-sm border border-white/30 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/50" />
        </div>
      </div>

      {/* Book info */}
      <div className="flex items-center gap-3 mx-4 mt-1 mb-3 p-3 rounded-xl bg-white/5 border border-white/8">
        <div className="w-10 h-14 rounded-md bg-gradient-to-br from-brand-blue/40 to-brand-purple/40 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="w-4/5 h-2.5 rounded-full bg-white/40 mb-1.5" />
          <div className="w-3/5 h-2 rounded-full bg-white/20 mb-2" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-sm bg-amber-400/70" />
            ))}
          </div>
        </div>
      </div>

      {/* Price label */}
      <div className="px-4 mb-2">
        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
          50+ Stores · Live Prices
        </span>
      </div>

      {/* Price list */}
      <div className="flex-1 flex flex-col gap-2 px-4 overflow-hidden">
        {stores.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 border border-white/8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: s.color ?? '#ffffff30' }} />
              <span className="text-[10px] text-white/80 font-medium">{s.name}</span>
              {s.badge && (
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                  {s.badge}
                </span>
              )}
            </div>
            <span className={`text-[11px] font-bold ${s.badge ? 'text-emerald-400' : 'text-white/60'}`}>
              {s.price}
            </span>
          </motion.div>
        ))}
        <div className="flex items-center justify-center py-1">
          <span className="text-[8px] text-white/25">+ 46 more stores</span>
        </div>
      </div>

      <div className="h-8 flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

function DetailsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#0a0f1a]">
      <div className="flex justify-between items-center px-4 pt-10 pb-2 text-[8px] text-white/40 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">DETAILS</span>
        <div className="w-6 h-2 rounded-sm border border-white/30 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/50" />
        </div>
      </div>

      {/* Hero */}
      <div className="flex gap-3 mx-4 mt-1 mb-4">
        <div className="w-16 h-22 rounded-lg bg-gradient-to-br from-brand-blue/50 to-brand-purple/50 shrink-0" style={{ height: 88 }} />
        <div className="flex-1">
          <div className="w-full h-3 rounded-full bg-white/40 mb-1.5" />
          <div className="w-3/4 h-2.5 rounded-full bg-white/25 mb-2" />
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-sm bg-amber-400/80" />
            ))}
          </div>
          <span className="text-[8px] text-white/40">4.8 · aggregated from Goodreads &amp; Amazon</span>
        </div>
      </div>

      {/* Rating sources */}
      <div className="mx-4 mb-3">
        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Ratings from</span>
        <div className="flex gap-2 mt-1.5">
          {[['GR', '#10B981'], ['AMZ', '#F97316'], ['BB', '#4F8EF7']].map(([label, color]) => (
            <div key={label} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/8">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-[8px] text-white/60 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini reviews */}
      <div className="flex-1 flex flex-col gap-2 px-4 overflow-hidden">
        {[
          'Absolutely gripping from start to finish.',
          'One of the best I\'ve read this year.',
        ].map((review, i) => (
          <div key={i} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/8">
            <div className="flex gap-0.5 mb-1.5">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-sm bg-amber-400/70" />
              ))}
            </div>
            <span className="text-[9px] text-white/60 leading-relaxed">{review}</span>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="mx-4 mb-4 mt-3">
        <div className="w-full py-2.5 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' }}>
          <span className="text-[10px] font-bold text-white">Add to Wishlist</span>
        </div>
      </div>

      <div className="h-4 flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

export default function AppShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy + tabs */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
            >
              See It In Action
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Three taps to{' '}
              <span className="gradient-text">smarter shopping.</span>
            </motion.h2>

            {/* Tab buttons */}
            <div className="flex gap-2 mb-8">
              {SCREENS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    active === i
                      ? 'text-white shadow-lg'
                      : 'text-gray-400 bg-white/5 hover:text-white hover:bg-white/10'
                  }`}
                  style={active === i ? { background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' } : {}}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-gray-400 text-base lg:text-lg leading-relaxed"
              >
                {SCREENS[active].description}
              </motion.p>
            </AnimatePresence>

            {/* Step dots */}
            <div className="flex gap-2 mt-8">
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? 'w-6 bg-brand-blue' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — phone frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-[220px] sm:w-[250px]">
              {/* Glow behind */}
              <div className="absolute -inset-8 rounded-full bg-brand-purple/15 blur-3xl pointer-events-none" />

              {/* Phone shell */}
              <div
                className="relative w-full rounded-[3rem] border-2 border-white/10 shadow-2xl overflow-hidden"
                style={{ aspectRatio: '9/19', background: '#0a0f1a' }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />

                {/* Screen content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {SCREENS[active].screen}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
