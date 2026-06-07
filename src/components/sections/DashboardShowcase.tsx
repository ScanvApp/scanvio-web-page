import { motion } from 'framer-motion'

const SCAN_ROWS = [
  { title: 'The Great Alone',  author: 'Kristin Hannah',    score: 84, price: '$8.99',  profit: '+$14.22', signal: 'Buy'    },
  { title: 'Atomic Habits',    author: 'James Clear',        score: 67, price: '$9.50',  profit: '+$8.40',  signal: 'Review' },
  { title: 'Sapiens',          author: 'Yuval Noah Harari',  score: 45, price: '$12.99', profit: '+$3.10',  signal: 'Skip'   },
  { title: 'The Power of Now', author: 'Eckhart Tolle',      score: 78, price: '$7.99',  profit: '+$11.50', signal: 'Buy'    },
]

const STATS = [
  { label: 'Total Scans',      value: '1,247' },
  { label: 'In Buy List',      value: '47'    },
  { label: 'Profit Potential', value: '$2.3k' },
  { label: 'Avg EScore',       value: '71'    },
]

const NAV = [
  { label: 'Dashboard',    active: true  },
  { label: 'Scan History', active: false },
  { label: 'Buy List',     active: false },
  { label: 'Wishlist',     active: false },
  { label: 'Analytics',    active: false },
  { label: 'Settings',     active: false },
]

const PRICES = [
  { store: 'Amazon',      price: '$8.99', low: true  },
  { store: 'eBay',        price: '$9.50', low: false },
  { store: 'ThriftBooks', price: '$7.49', low: false },
]

function scoreColor(s: number) {
  if (s >= 70) return '#10B981'
  if (s >= 50) return '#F59E0B'
  return '#EF4444'
}

function SignalBadge({ signal }: { signal: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    Buy:    { bg: 'rgba(16,185,129,0.15)',  color: '#10B981' },
    Review: { bg: 'rgba(245,158,11,0.15)', color: '#F59E0B' },
    Skip:   { bg: 'rgba(239,68,68,0.15)',  color: '#EF4444' },
  }
  const c = map[signal]
  return (
    <span
      className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide"
      style={{ background: c.bg, color: c.color }}
    >
      {signal}
    </span>
  )
}

function ScoreBar({ score, delay }: { score: number; delay: number }) {
  const color = scoreColor(score)
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: 'easeOut' }}
        />
      </div>
      <span className="text-xs font-bold tabular-nums" style={{ color }}>{score}</span>
    </div>
  )
}

/* ── Phone mockup ─────────────────────────────────────────────────── */
function PhoneMockup() {
  const r = 38
  const circ = 2 * Math.PI * r
  const score = 84

  return (
    <div
      className="relative w-[210px] rounded-[2.4rem] border-2 border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#0f1520,#0a0f1a)', aspectRatio: '9/19' }}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-10" />

      <div className="flex flex-col h-full px-4 pt-10 pb-5 gap-3">

        {/* EScore ring */}
        <div className="flex flex-col items-center gap-1 pt-1">
          <span className="text-[8px] font-bold tracking-[0.2em] text-white/30 uppercase">ScanvEscore™</span>
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
              <motion.circle
                cx="50" cy="50" r={r} fill="none"
                stroke="url(#pg)" strokeWidth="7" strokeLinecap="round"
                strokeDasharray={circ}
                initial={{ strokeDashoffset: circ }}
                whileInView={{ strokeDashoffset: circ - circ * (score / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-3xl font-extrabold text-white leading-none"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.8 }}
              >
                {score}
              </motion.span>
              <span className="text-[9px] text-white/35 mt-0.5">/ 100</span>
            </div>
          </div>
        </div>

        {/* BUY IT signal */}
        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 16 }}
        >
          <div
            className="w-full py-2.5 rounded-2xl flex items-center justify-center gap-2"
            style={{ background: 'radial-gradient(circle at 40% 40%, #34D399, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.35)' }}
          >
            <div className="w-2 h-2 rounded-full bg-white/70" />
            <span className="text-sm font-extrabold text-white tracking-wide">BUY IT</span>
          </div>
          <span className="text-[9px] text-emerald-400/70">GoSignal · above your 60 threshold</span>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/6" />

        {/* Price list */}
        <div className="flex flex-col gap-1.5">
          {PRICES.map((p, i) => (
            <motion.div
              key={p.store}
              className="flex items-center justify-between px-3 py-2 rounded-xl"
              style={{ background: p.low ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${p.low ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}` }}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.07 }}
            >
              <span className="text-[10px] text-white/50 font-medium">{p.store}</span>
              <span className={`text-[11px] font-bold ${p.low ? 'text-emerald-400' : 'text-white/70'}`}>{p.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Dashboard mockup ─────────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      style={{ background: '#0d1117' }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/6" style={{ background: '#090d14' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/8">
            <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
            <span className="text-[11px] text-white/30 font-mono">app.scanv.io/dashboard</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-blue text-white text-[10px] font-bold">JS</div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ minHeight: 400 }}>

        {/* Sidebar */}
        <div className="w-44 shrink-0 border-r border-white/6 flex flex-col gap-1 p-3" style={{ background: '#090d14' }}>
          {/* Logo */}
          <div className="flex items-center gap-2 px-3 py-2.5 mb-2">
            <div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center">
              <span className="text-[9px] font-black text-white">S</span>
            </div>
            <span className="text-sm font-bold text-white">Scanvio</span>
          </div>

          {NAV.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
              style={item.active
                ? { background: 'rgba(79,142,247,0.12)', color: '#4F8EF7', border: '1px solid rgba(79,142,247,0.2)' }
                : { color: 'rgba(255,255,255,0.35)' }
              }
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.active ? '#4F8EF7' : 'rgba(255,255,255,0.15)' }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 flex flex-col gap-4">

          {/* Page header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Scan Dashboard</h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
              <div className="w-3 h-3 rounded-full bg-white/15" />
              <span className="text-[10px] text-white/30">Search by title, ISBN…</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col gap-1 p-3 rounded-xl border border-white/6"
                style={{ background: 'rgba(255,255,255,0.025)' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <span className="text-[9px] text-white/30 uppercase tracking-widest font-bold">{stat.label}</span>
                <span className="text-xl font-extrabold text-white tabular-nums">{stat.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Table */}
          <div className="flex flex-col flex-1">
            <div className="grid grid-cols-[1fr_80px_70px_80px_70px] gap-2 px-3 pb-2 border-b border-white/6">
              {['Title', 'EScore', 'Best Price', 'Profit', 'Signal'].map((h) => (
                <span key={h} className="text-[9px] font-bold uppercase tracking-widest text-white/25">{h}</span>
              ))}
            </div>

            {SCAN_ROWS.map((row, i) => (
              <motion.div
                key={row.title}
                className="grid grid-cols-[1fr_80px_70px_80px_70px] gap-2 items-center px-3 py-2.5 border-b border-white/4 last:border-0 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <div>
                  <p className="text-xs font-semibold text-white leading-tight">{row.title}</p>
                  <p className="text-[9px] text-white/35 mt-0.5">{row.author}</p>
                </div>
                <ScoreBar score={row.score} delay={0.3 + i * 0.08} />
                <span className="text-xs font-semibold text-white/70">{row.price}</span>
                <span className="text-xs font-bold text-emerald-400">{row.profit}</span>
                <SignalBadge signal={row.signal} />
              </motion.div>
            ))}

            <div className="flex items-center justify-between px-3 pt-3 mt-auto">
              <span className="text-[9px] text-white/20">Showing 4 of 1,247 scans</span>
              <span className="text-[9px] text-brand-blue font-semibold cursor-pointer hover:underline">View all →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Section ──────────────────────────────────────────────────────── */
export default function DashboardShowcase() {
  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-blue/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
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
            Phone scans, dashboard tracks. Real profit data pulled live from Amazon SP-API — every scan, every decision, in one place.
          </motion.p>
        </div>

        {/* Visual — phone + dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-end"
        >
          {/* Phone — overlaps the dashboard from the left */}
          <div className="hidden lg:block shrink-0 relative z-10 mr-[-40px] mb-6 drop-shadow-2xl">
            <PhoneMockup />
          </div>

          {/* Dashboard — takes remaining width */}
          <div className="flex-1 min-w-0">
            <DashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
