import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SCREENS = [
  {
    id: 'scan',
    label: 'Scan',
    description: 'Point your camera at any barcode or book cover. GoSignal fires in under a second — buy or pass before you even set the book down.',
    screen: <ScanScreen />,
  },
  {
    id: 'results',
    label: 'Compare',
    description: 'See live FBA and FBM prices from 3 stores free, 50+ on Pro — spot the cheapest source and know your margin before you commit.',
    screen: <ResultsScreen />,
  },
  {
    id: 'details',
    label: 'Decide',
    description: 'ScanvEscore, sales rank trend, active FBA competition, and restriction flags all in one view — everything you need to decide fast.',
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
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 60%, #1a2540 0%, #060b12 70%)',
        }} />

        {/* Book spine */}
        <div className="absolute w-20 h-32 rounded-md bg-gradient-to-br from-slate-600 to-slate-800 shadow-lg flex flex-col items-center justify-end p-2 gap-0.5">
          <div className="w-full h-1.5 rounded-full bg-white/20" />
          <div className="w-3/4 h-1 rounded-full bg-white/15" />
          <div className="w-1/2 h-1 rounded-full bg-white/10" />
        </div>

        {/* Scan corners */}
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

        <div className="absolute bottom-4 left-0 right-0 text-center text-[9px] text-white/50">
          Align barcode or ISBN
        </div>
      </div>

      {/* Nav bar matching real app */}
      <div className="flex justify-around px-4 py-3 border-t border-white/5">
        {['History', 'Scan', 'Buy List'].map((tab, i) => (
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
  // Real data from the actual app (Man of Ideas — from buylist screenshot)
  const stores = [
    { name: 'Amazon FBA', price: '$32.49', badge: 'Best',  color: '#10B981' },
    { name: 'eBay',       price: '$28.99', badge: null,    color: null },
    { name: 'ThriftBooks', price: '$18.50', badge: null,   color: null },
  ]

  return (
    <div className="flex flex-col h-full bg-[#0a0f1a]">
      <div className="flex justify-between items-center px-4 pt-10 pb-2 text-[8px] text-white/40 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">SCOUT</span>
        <div className="w-6 h-2 rounded-sm border border-white/30 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/50" />
        </div>
      </div>

      {/* Book info — real title from screenshot */}
      <div className="flex items-center gap-3 mx-4 mt-1 mb-3 p-3 rounded-xl bg-white/5 border border-white/8">
        <div className="w-10 h-14 rounded-md bg-gradient-to-br from-slate-700 to-slate-900 shrink-0 flex items-end justify-center pb-1">
          <div className="w-6 h-1 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-bold text-white/80 leading-tight mb-0.5">Man of Ideas</p>
          <p className="text-[8px] text-white/35 mb-1.5">James Rosen</p>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">Good</span>
            <span className="text-[8px] text-white/30">Rank #4,201</span>
          </div>
        </div>
      </div>

      {/* Profit summary — real data */}
      <div className="mx-4 mb-2 px-3 py-2 rounded-xl bg-emerald-500/8 border border-emerald-500/15 flex items-center justify-between">
        <span className="text-[9px] text-white/50">Max buy</span>
        <span className="text-[10px] font-bold text-white">$5.00</span>
        <span className="text-[9px] text-white/50">Est. profit</span>
        <span className="text-[10px] font-bold text-emerald-400">+54.2%</span>
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

      {/* ScanvEscore + GoSignal row — matching real app layout */}
      <div className="flex gap-2 mx-4 mt-2 mb-3">
        <div className="flex-1 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8">
          <span className="text-[7px] font-bold uppercase tracking-widest text-brand-blue block mb-0.5">ScanvEscore™</span>
          <span className="text-[22px] font-extrabold text-white leading-none">83</span>
        </div>
        <div className="flex-1 px-3 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
          <span className="text-[7px] font-bold uppercase tracking-widest text-emerald-400 block">GoSignal</span>
          <span className="text-[18px] font-extrabold text-emerald-400 leading-none">BUY</span>
        </div>
      </div>

      {/* Profit breakdown — real data from inventory ($104.53 est. profit) */}
      <div className="mx-4 mb-3 px-3 py-2.5 rounded-xl bg-white/4 border border-white/8">
        <div className="flex justify-between mb-1.5">
          <span className="text-[9px] text-white/40">Est. sell price</span>
          <span className="text-[10px] font-bold text-white">$32.49</span>
        </div>
        <div className="flex justify-between mb-1.5">
          <span className="text-[9px] text-white/40">Buy cost</span>
          <span className="text-[10px] font-bold text-white">$5.00</span>
        </div>
        <div className="h-px bg-white/8 my-1.5" />
        <div className="flex justify-between">
          <span className="text-[9px] font-bold text-emerald-400">Net profit</span>
          <span className="text-[10px] font-bold text-emerald-400">+$27.49</span>
        </div>
      </div>

      {/* Seller data rows */}
      <div className="flex flex-col gap-1.5 px-4 flex-1 overflow-hidden">
        {[
          { label: 'Sales Rank',   value: '#4,201',   color: '#4F8EF7' },
          { label: 'FBA Sellers',  value: '8 active', color: '#F59E0B' },
          { label: 'Restriction',  value: 'None',     color: '#10B981' },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/8">
            <span className="text-[9px] text-white/40 font-medium">{row.label}</span>
            <span className="text-[10px] font-bold" style={{ color: row.color }}>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Add to Buy List */}
      <div className="mx-4 mb-4 mt-3">
        <div className="w-full py-2.5 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' }}>
          <span className="text-[10px] font-bold text-white">Add to Buy List</span>
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
              Scan. Score.{' '}
              <span className="gradient-text">Source smarter.</span>
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
