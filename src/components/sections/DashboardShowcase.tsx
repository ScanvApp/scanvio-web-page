import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV = [
  { label: 'Dashboard',          src: '/screenshots/dashboard.png'           },
  { label: 'Scout Books',        src: '/screenshots/scout.png'               },
  { label: 'My Inventory',       src: '/screenshots/inventory.png'           },
  { label: 'Buy List',           src: '/screenshots/buylist.png'             },
  { label: 'Amazon Integration', src: '/screenshots/amazon-integration.png'  },
]

const PRICES = [
  { store: 'Amazon',      price: '$8.99', highlight: true  },
  { store: 'eBay',        price: '$9.50', highlight: false },
  { store: 'ThriftBooks', price: '$7.49', highlight: false },
]

// ─── Phone mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  const r = 38
  const circ = 2 * Math.PI * r
  const score = 84

  return (
    <div
      className="relative w-[200px] shrink-0 rounded-[2.6rem] overflow-hidden border-2 border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
      style={{ background: 'linear-gradient(160deg,#111827,#0a0f1a)', aspectRatio: '9/19.5' }}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-black z-10" />

      <div className="flex flex-col h-full px-4 pt-10 pb-5 gap-3">

        {/* EScore */}
        <div className="flex flex-col items-center gap-0.5 pt-2">
          <span className="text-[7.5px] font-bold tracking-[0.22em] text-white/25 uppercase">ScanvEscore™</span>
          <div className="relative w-[88px] h-[88px]">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r={r} fill="none"
                stroke="url(#scoreG)" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                whileInView={{ strokeDashoffset: circ - circ * (score / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.5, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="scoreG" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-[28px] font-extrabold text-white leading-none"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.9 }}
              >
                {score}
              </motion.span>
              <span className="text-[9px] text-white/30">/ 100</span>
            </div>
          </div>
        </div>

        {/* BUY IT */}
        <motion.div
          className="flex flex-col items-center gap-1"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 16 }}
        >
          <div
            className="w-full py-2.5 rounded-2xl flex items-center justify-center gap-2"
            style={{
              background: 'radial-gradient(circle at 40% 40%, #34D399, #059669)',
              boxShadow: '0 0 28px rgba(16,185,129,0.4), 0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white/80" />
            <span className="text-[13px] font-extrabold text-white tracking-wider">BUY IT</span>
          </div>
          <span className="text-[8px] text-emerald-400/60 text-center leading-tight">
            GoSignal · above your 60 threshold
          </span>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/6 mx-1" />

        {/* Prices */}
        <div className="flex flex-col gap-1.5">
          {PRICES.map((p, i) => (
            <motion.div
              key={p.store}
              className="flex items-center justify-between px-2.5 py-2 rounded-xl"
              style={{
                background: p.highlight ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${p.highlight ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}`,
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.05 + i * 0.08 }}
            >
              <span className="text-[10px] text-white/45 font-medium">{p.store}</span>
              <span className={`text-[11px] font-bold ${p.highlight ? 'text-emerald-400' : 'text-white/65'}`}>
                {p.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Dashboard frame ──────────────────────────────────────────────────────────

function DashboardFrame({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div
      className="flex-1 min-w-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
      style={{ background: '#0d1117' }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-5 py-3 border-b border-white/6 shrink-0"
        style={{ background: '#090d14' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/8"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
              <span className="text-[11px] text-white/30 font-mono">
                app.scanv.io/{NAV[active].label.toLowerCase().replace(/\s+/g, '-')}
              </span>
              {active === 4 && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  Secure
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white shrink-0">
          JS
        </div>
      </div>

      {/* Body: sidebar + screenshot */}
      <div className="flex" style={{ height: 560 }}>

        {/* Sidebar */}
        <div
          className="shrink-0 flex flex-col gap-1 p-3 border-r border-white/6"
          style={{ background: '#090d14', width: 185 }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 px-3 py-2.5 mb-1">
            <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
              <span className="text-[9px] font-black text-white">S</span>
            </div>
            <span className="text-sm font-bold text-white">Scanvio</span>
          </div>

          {NAV.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => setActive(i)}
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-colors duration-150"
              style={active === i
                ? { background: 'rgba(79,142,247,0.12)', color: '#4F8EF7', border: '1px solid rgba(79,142,247,0.22)' }
                : { color: 'rgba(255,255,255,0.38)', border: '1px solid transparent' }
              }
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: active === i ? '#4F8EF7' : 'rgba(255,255,255,0.15)' }}
                animate={{ scale: active === i ? 1.3 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              {item.label}
              {item.label === 'Amazon Integration' && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Screenshot area — crops the app's own sidebar via objectPosition */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={NAV[active].src}
              alt={NAV[active].label}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'right top' }}
            />
          </AnimatePresence>

          {/* Left fade — hides any sidebar edge bleed-through */}
          <div
            className="absolute inset-y-0 left-0 w-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #090d14, transparent)' }}
          />

          {/* Active tab glow on right edge */}
          <AnimatePresence>
            {active === 4 && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(16,185,129,0.04)' }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function DashboardShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-brand-blue/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/6 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Live Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Your entire scouting workflow.{' '}
            <span className="gradient-text">One screen.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-gray-400 text-base lg:text-lg leading-relaxed"
          >
            Click any menu item to explore the live Scanvio dashboard — connected to Amazon via SP-API, tracking every scan, decision, and sale.
          </motion.p>
        </div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end gap-0"
        >
          {/* Phone */}
          <div className="hidden lg:block shrink-0 relative z-10 mr-[-32px] mb-10 self-end">
            <div
              className="absolute -inset-4 rounded-full blur-2xl opacity-60 pointer-events-none"
              style={{ background: 'rgba(16,185,129,0.15)' }}
            />
            <PhoneMockup />
          </div>

          {/* Dashboard */}
          <DashboardFrame active={active} setActive={setActive} />
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-white/20 mt-5"
        >
          Click the sidebar items to explore each section of the dashboard.
        </motion.p>
      </div>
    </section>
  )
}
