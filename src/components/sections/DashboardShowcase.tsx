import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV = [
  { label: 'Dashboard',    src: '/screenshots/dashboard.png'   },
  { label: 'My Inventory', src: '/screenshots/myInventory.png' },
  { label: 'Buy List',     src: '/screenshots/buyList.png'     },
  { label: 'Scout Books',  src: '/screenshots/scoutBooks.png'  },
]

// ─── Phone screens ────────────────────────────────────────────────────────────

function ResultScreen() {
  const r = 38; const circ = 2 * Math.PI * r; const score = 84
  return (
    <div className="flex flex-col h-full px-4 pt-10 pb-8 gap-3">
      <div className="flex flex-col items-center gap-0.5 pt-2">
        <span className="text-[7.5px] font-bold tracking-[0.22em] text-white/25 uppercase">ScanvEscore™</span>
        <div className="relative w-[88px] h-[88px]">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
            <motion.circle cx="50" cy="50" r={r} fill="none" stroke="url(#sg)" strokeWidth="8" strokeLinecap="round"
              strokeDasharray={circ} initial={{ strokeDashoffset: circ }}
              animate={{ strokeDashoffset: circ - circ * (score / 100) }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }} />
            <defs>
              <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[28px] font-extrabold text-white leading-none">{score}</span>
            <span className="text-[9px] text-white/30">/ 100</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-full py-2.5 rounded-2xl flex items-center justify-center gap-2"
          style={{ background: 'radial-gradient(circle at 40% 40%, #34D399, #059669)', boxShadow: '0 0 24px rgba(16,185,129,0.35)' }}>
          <div className="w-2 h-2 rounded-full bg-white/80" />
          <span className="text-[13px] font-extrabold text-white tracking-wider">BUY IT</span>
        </div>
        <span className="text-[8px] text-emerald-400/60 text-center">GoSignal · above your 60 threshold</span>
      </div>
      <div className="h-px bg-white/6" />
      <div className="flex flex-col gap-1.5">
        {[{ s: 'Amazon', p: '$8.99', h: true }, { s: 'eBay', p: '$9.50', h: false }, { s: 'ThriftBooks', p: '$7.49', h: false }].map(r => (
          <div key={r.s} className="flex items-center justify-between px-2.5 py-2 rounded-xl"
            style={{ background: r.h ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${r.h ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}` }}>
            <span className="text-[10px] text-white/45">{r.s}</span>
            <span className={`text-[11px] font-bold ${r.h ? 'text-emerald-400' : 'text-white/65'}`}>{r.p}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-10 pb-5 gap-2.5">
      <div className="pt-1 pb-0.5">
        <span className="text-[8px] text-white/30">Welcome back</span>
        <div className="text-[12px] font-bold text-white">RIVERMARKET</div>
      </div>
      <div className="rounded-2xl p-3" style={{ background: 'rgba(79,142,247,0.10)', border: '1px solid rgba(79,142,247,0.18)' }}>
        <span className="text-[7.5px] font-bold uppercase tracking-widest block mb-0.5" style={{ color: 'rgba(79,142,247,0.7)' }}>Revenue (30d)</span>
        <span className="text-[26px] font-extrabold text-white leading-none">$380.09</span>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[9px] text-emerald-400 font-bold">20 orders</span>
          <span className="text-[8px] text-white/25">this period</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[{ l: 'FBA Active', v: '8' }, { l: 'Inventory', v: '13' }].map(c => (
          <div key={c.l} className="rounded-xl p-2.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-[7.5px] text-white/30 block mb-0.5">{c.l}</span>
            <span className="text-[20px] font-extrabold text-white">{c.v}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.15)' }}>
        <span className="text-[7.5px] text-emerald-400/70 uppercase tracking-widest font-bold block mb-0.5">Est. Profit</span>
        <span className="text-[20px] font-extrabold text-emerald-400">+$3,421.03</span>
      </div>
    </div>
  )
}

function BuyListScreen() {
  return (
    <div className="flex flex-col h-full px-3 pt-10 pb-8 gap-2">
      <div className="flex items-center justify-between pt-1 px-1 mb-0.5">
        <span className="text-[12px] font-bold text-white">Buy List</span>
        <span className="text-[9px] font-bold" style={{ color: '#4F8EF7' }}>6 items</span>
      </div>
      {[
        { title: 'Secret War vs Hate', buy: '$0.90', sell: '$32.71', margin: '+66.9%' },
        { title: 'Man of Ideas', buy: '$5.00', sell: '$32.49', margin: '+54.2%' },
        { title: 'Eat to Beat Disease', buy: '$11.00', sell: '$21.01', margin: '+8.8%' },
      ].map((b, i) => (
        <div key={i} className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[9.5px] font-bold text-white mb-1">{b.title}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-white/35">{b.buy}</span>
              <span className="text-[8px] text-white/20">→</span>
              <span className="text-[8px] text-white/55">{b.sell}</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-400">{b.margin}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function ScoutScreen() {
  return (
    <div className="flex flex-col h-full px-4 pt-10 pb-5 gap-3">
      <div className="px-1 pt-1"><span className="text-[12px] font-bold text-white">Scout Books</span></div>
      <div className="flex items-center px-2.5 py-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <span className="text-[9.5px] text-white/25">ISBN / title / barcode…</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3 rounded-2xl" style={{ background: 'rgba(79,142,247,0.04)', border: '1px dashed rgba(79,142,247,0.22)' }}>
        <div className="relative w-16 h-16">
          {[['top-0 left-0','border-t-2 border-l-2 rounded-tl'],['top-0 right-0','border-t-2 border-r-2 rounded-tr'],['bottom-0 left-0','border-b-2 border-l-2 rounded-bl'],['bottom-0 right-0','border-b-2 border-r-2 rounded-br']].map(([pos, cls], i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4 ${cls}`} style={{ borderColor: '#4F8EF7' }} />
          ))}
          <motion.div className="absolute left-2 right-2 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #4F8EF7, transparent)' }}
            animate={{ top: ['12%', '80%', '12%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <span className="text-[9px] text-white/30 text-center leading-relaxed">Align barcode or ISBN<br />to scan</span>
      </div>
    </div>
  )
}

const SCREEN_COMPONENTS = [ResultScreen, DashboardScreen, BuyListScreen, ScoutScreen]

// ─── Phone ────────────────────────────────────────────────────────────────────

function PhoneMockup() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(i => (i + 1) % SCREEN_COMPONENTS.length) }, 3200)
    return () => clearInterval(t)
  }, [])

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }
  const Screen = SCREEN_COMPONENTS[idx]

  return (
    <div className="relative w-[220px] shrink-0 rounded-[2.8rem] overflow-hidden border-2 border-white/15 shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
      style={{ background: 'linear-gradient(160deg,#111827,#0a0f1a)', aspectRatio: '9/19.5' }}>
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-black z-20" />
      {/* Inner edge shine */}
      <div className="absolute inset-0 pointer-events-none z-30 rounded-[2.8rem]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)' }} />

      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div key={idx} custom={dir} variants={variants} initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }} className="absolute inset-0">
            <Screen />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-20">
        {SCREEN_COMPONENTS.map((_, i) => (
          <div key={i} className="rounded-full transition-all duration-300"
            style={{ width: i === idx ? 14 : 4, height: 4, background: i === idx ? '#4F8EF7' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
    </div>
  )
}

// ─── Dashboard content ────────────────────────────────────────────────────────

function DashboardContent({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div style={{ background: '#0d1117' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-white/6" style={{ background: '#090d14' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }} className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/8">
              <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
              <span className="text-[11px] text-white/30 font-mono">
                app.scanv.io/{NAV[active].label.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white shrink-0">RM</div>
      </div>

      {/* Body */}
      <div className="flex" style={{ height: 500 }}>
        {/* Sidebar */}
        <div className="shrink-0 flex flex-col gap-1 p-3 border-r border-white/6" style={{ background: '#090d14', width: 185 }}>
          <div className="flex items-center gap-2 px-3 py-2.5 mb-1">
            <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
              <span className="text-[9px] font-black text-white">S</span>
            </div>
            <span className="text-sm font-bold text-white">Scanvio</span>
          </div>
          {NAV.map((item, i) => (
            <motion.button key={item.label} onClick={() => setActive(i)} whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-colors duration-150"
              style={active === i
                ? { background: 'rgba(79,142,247,0.12)', color: '#4F8EF7', border: '1px solid rgba(79,142,247,0.22)' }
                : { color: 'rgba(255,255,255,0.38)', border: '1px solid transparent' }}>
              <motion.div className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: active === i ? '#4F8EF7' : 'rgba(255,255,255,0.15)' }}
                animate={{ scale: active === i ? 1.3 : 1 }} transition={{ type: 'spring', stiffness: 300 }} />
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Screenshot */}
        <div className="flex-1 overflow-hidden relative" style={{ background: '#edf0f2' }}>
          <AnimatePresence mode="wait">
            <motion.img key={active} src={NAV[active].src} alt={NAV[active].label}
              initial={{ opacity: 0, scale: 1.015 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.3, ease: 'easeOut' }} className="w-full h-full"
              style={{ objectFit: 'contain', objectPosition: 'top' }} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ─── MacBook frame ────────────────────────────────────────────────────────────

function MacBookFrame({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="w-full select-none">
      {/* Screen lid */}
      <div className="relative rounded-t-[22px] overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #28282a 0%, #1a1a1c 100%)',
          padding: '22px 18px 0',
          border: '1px solid rgba(255,255,255,0.12)',
          borderBottom: 'none',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.4), 0 -1px 0 rgba(255,255,255,0.06) inset',
        }}>
        {/* Top-edge highlight */}
        <div className="absolute top-0 left-20 right-20 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.20), transparent)' }} />

        {/* Camera */}
        <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center">
          <div className="w-[9px] h-[9px] rounded-full bg-[#2c2c2e] flex items-center justify-center"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5)' }}>
            <div className="w-[4px] h-[4px] rounded-full bg-[#1a1a1c]" />
          </div>
        </div>

        {/* Screen */}
        <div className="relative rounded-t-xl overflow-hidden"
          style={{ boxShadow: '0 0 0 1px rgba(0,0,0,0.5), inset 0 0 40px rgba(79,142,247,0.03)' }}>
          <DashboardContent active={active} setActive={setActive} />
        </div>
      </div>

      {/* Hinge */}
      <div style={{
        height: 7,
        background: 'linear-gradient(180deg, #090909 0%, #363638 45%, #1e1e20 100%)',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.9)',
      }} />

      {/* Base */}
      <div className="relative rounded-b-[18px]"
        style={{
          height: 38,
          background: 'linear-gradient(180deg, #3c3c3e 0%, #2a2a2c 25%, #1a1a1c 100%)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderTop: 'none',
          boxShadow: '0 1px 0 rgba(255,255,255,0.06) inset, 0 32px 70px rgba(0,0,0,0.75)',
        }}>
        {/* Side edge highlights */}
        <div className="absolute inset-y-0 left-px w-px" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.09), transparent)' }} />
        <div className="absolute inset-y-0 right-px w-px" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.09), transparent)' }} />
        {/* Trackpad */}
        <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 rounded-[5px]"
          style={{ width: '19%', height: 13, background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)' }} />
      </div>

      {/* Ground shadow */}
      <div className="mx-16 mt-1 rounded-full" style={{ height: 8, background: 'rgba(0,0,0,0.55)', filter: 'blur(12px)' }} />
    </div>
  )
}

// ─── Per-tab stats ────────────────────────────────────────────────────────────

const TAB_STATS = [
  // Dashboard
  [
    { label: 'Revenue (30d)',    value: '$380.09', sub: '20 orders this period',       accent: '#4F8EF7' },
    { label: 'FBA Fulfillable',  value: '8',       sub: 'units in warehouse',          accent: '#A855F7' },
    { label: 'Inventory',        value: '13',      sub: 'total active listings',       accent: '#ffffff' },
  ],
  // My Inventory
  [
    { label: 'In Stock',         value: '11',       sub: 'FBA fulfillable units',      accent: '#4F8EF7' },
    { label: 'Est. Profit',      value: '+$3,421',  sub: 'across active inventory',    accent: '#10B981' },
    { label: 'Avg. Cost',        value: '$0.07',    sub: 'total cost basis',           accent: '#ffffff' },
  ],
  // Buy List
  [
    { label: 'Books Listed',     value: '6',        sub: 'ready to source',            accent: '#4F8EF7' },
    { label: 'Top Margin',       value: '+66.9%',   sub: 'Secret War Against Hate',    accent: '#10B981' },
    { label: 'Max Buy Price',    value: '$0.90',    sub: 'sell at $32.71',             accent: '#F59E0B' },
  ],
  // Scout Books
  [
    { label: 'Scan Mode',        value: 'ISBN',     sub: 'Single or Batch lookup',     accent: '#4F8EF7' },
    { label: 'Speed',            value: '<1s',      sub: 'live SP-API data',           accent: '#10B981' },
    { label: 'Stores',           value: '50+',      sub: 'prices compared on scan',    accent: '#A855F7' },
  ],
]

// ─── Floating metric card ─────────────────────────────────────────────────────

function MetricCard({ label, value, sub, accent, delay = 0 }: {
  label: string; value: string; sub: string; accent: string; delay?: number
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      className="px-4 py-3.5 rounded-2xl w-44"
      style={{
        background: 'rgba(8,11,22,0.88)',
        border: `1px solid ${accent}33`,
        backdropFilter: 'blur(16px)',
        boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}
    >
      <span className="text-[9px] text-white/35 font-bold uppercase tracking-widest block mb-1">{label}</span>
      <span className="text-[22px] font-extrabold leading-none block" style={{ color: accent }}>{value}</span>
      <span className="text-[10px] text-white/30 mt-1 block">{sub}</span>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function DashboardShowcase() {
  const [active, setActive] = useState(2)

  return (
    <section className="relative bg-dark-900 py-24 lg:py-36 overflow-hidden">

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Spotlight radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -5%, rgba(79,142,247,0.13) 0%, transparent 65%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/7 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-96 h-96 rounded-full bg-brand-purple/7 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.28)' }}
          >
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block"
              animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
            <span className="text-[11px] font-semibold text-emerald-400">Live · Amazon SP-API Connected</span>
          </motion.div>

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
            Click any tab to explore the live dashboard. Every scan, decision, and sale tracked in real time.
          </motion.p>
        </div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Dynamic tab stats — right side (xl only) */}
          <div className="hidden xl:flex flex-col gap-3 absolute -right-5 z-30" style={{ top: 40 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="flex flex-col gap-3"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: 12, transition: { duration: 0.18 } }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
                }}
              >
                {TAB_STATS[active].map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: 'easeOut' } },
                    }}
                  >
                    <MetricCard {...stat} delay={i * 0.5} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MacBook */}
          <div className="relative xl:mr-48">
            <MacBookFrame active={active} setActive={setActive} />
          </div>
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-white/20 mt-6"
        >
          Click the sidebar items to explore each section of the dashboard.
        </motion.p>
      </div>
    </section>
  )
}
