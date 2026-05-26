import { motion } from 'framer-motion'
import { BarChart2, Clock, ShoppingCart, Heart, TrendingUp, Settings, Search, Zap } from 'lucide-react'

const SCAN_ROWS = [
  { title: 'The Great Alone',    author: 'Kristin Hannah',      score: 84, price: '$8.99',  profit: '+$14.22', action: 'Buy',    color: '#10B981' },
  { title: 'Atomic Habits',      author: 'James Clear',         score: 67, price: '$9.50',  profit: '+$8.40',  action: 'Review', color: '#F59E0B' },
  { title: 'Sapiens',            author: 'Yuval Noah Harari',   score: 45, price: '$12.99', profit: '+$3.10',  action: 'Skip',   color: '#EF4444' },
  { title: 'The Power of Now',   author: 'Eckhart Tolle',       score: 78, price: '$7.99',  profit: '+$11.50', action: 'Buy',    color: '#10B981' },
]

const NAV = [
  { icon: BarChart2,    label: 'Dashboard',    active: true  },
  { icon: Clock,        label: 'Scan History', active: false },
  { icon: ShoppingCart, label: 'Buy List',     active: false },
  { icon: Heart,        label: 'Wishlist',     active: false },
  { icon: TrendingUp,   label: 'Analytics',   active: false },
  { icon: Settings,     label: 'Settings',     active: false },
]

const STATS = [
  { label: 'Total Scans',      value: '1,247' },
  { label: 'In Buy List',      value: '47'    },
  { label: 'Profit Potential', value: '$2.3k' },
  { label: 'Avg eScore',       value: '71'    },
]

function ScorePill({ score }: { score: number }) {
  const color = score >= 70 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444'
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-10 h-1 rounded-full bg-white/8 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
      </div>
      <span className="text-[9px] font-bold tabular-nums" style={{ color }}>{score}</span>
    </div>
  )
}

function DashboardUI() {
  return (
    <div className="flex h-full overflow-hidden rounded-[inherit] text-white" style={{ background: '#0A0F18' }}>

      {/* Sidebar */}
      <div className="w-36 shrink-0 flex flex-col py-3 border-r border-white/[0.06]" style={{ background: '#07090F' }}>
        <div className="flex items-center gap-1.5 px-3 mb-5">
          <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: 'rgba(79,142,247,0.2)' }}>
            <div className="w-2 h-2 rounded-sm bg-brand-blue" />
          </div>
          <span className="text-[11px] font-extrabold text-white tracking-tight">Scanvio</span>
        </div>

        <div className="flex flex-col gap-0.5 px-2">
          {NAV.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors"
              style={{ background: active ? 'rgba(79,142,247,0.12)' : 'transparent' }}
            >
              <Icon size={10} style={{ color: active ? '#4F8EF7' : 'rgba(255,255,255,0.25)' }} />
              <span className="text-[10px] font-medium" style={{ color: active ? '#4F8EF7' : 'rgba(255,255,255,0.3)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto mx-2 p-2 rounded-xl border border-brand-purple/20" style={{ background: 'rgba(168,85,247,0.07)' }}>
          <div className="flex items-center gap-1 mb-0.5">
            <Zap size={8} className="text-brand-purple" />
            <span className="text-[8px] font-bold text-brand-purple">Pro Active</span>
          </div>
          <span className="text-[7px] text-white/25">50+ stores unlocked</span>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
          <div>
            <span className="text-[12px] font-extrabold text-white">Scan Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/8 bg-white/[0.03]">
              <Search size={8} className="text-white/25" />
              <span className="text-[9px] text-white/20">Search by title, ISBN...</span>
            </div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-brand-blue"
              style={{ background: 'rgba(79,142,247,0.15)' }}>
              JS
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 px-4 py-3">
          {STATS.map((s) => (
            <div key={s.label} className="p-2.5 rounded-xl border border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.025)' }}>
              <span className="text-[7px] text-white/25 uppercase tracking-wider block mb-0.5">{s.label}</span>
              <span className="text-[14px] font-extrabold text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 px-4 overflow-hidden">
          <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-2">Recent Scans</div>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <div className="grid gap-2 px-3 py-2 border-b border-white/[0.05]"
              style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.02)' }}>
              {['Title', 'eScore', 'Best Price', 'Profit', 'Signal'].map((h) => (
                <span key={h} className="text-[7px] font-bold text-white/20 uppercase tracking-wider">{h}</span>
              ))}
            </div>
            {SCAN_ROWS.map((row, i) => (
              <motion.div
                key={row.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="grid gap-2 px-3 py-2.5 border-b border-white/[0.04] last:border-0"
                style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
              >
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold text-white/80 truncate leading-tight">{row.title}</div>
                  <div className="text-[8px] text-white/25 truncate">{row.author}</div>
                </div>
                <div className="self-center"><ScorePill score={row.score} /></div>
                <span className="text-[10px] text-white/50 self-center">{row.price}</span>
                <span className="text-[10px] font-bold text-emerald-400 self-center">{row.profit}</span>
                <div className="self-center">
                  <span className="text-[8px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${row.color}18`, color: row.color }}>
                    {row.action}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-4 py-2.5 border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-[8px] text-white/20">Showing 4 of 1,247 scans</span>
          <span className="text-[8px] text-brand-blue cursor-pointer">View all →</span>
        </div>
      </div>
    </div>
  )
}

function PhonePreview() {
  return (
    <div
      className="w-28 rounded-[28px] overflow-hidden shadow-2xl border border-white/12 flex flex-col"
      style={{ background: '#08111e', aspectRatio: '9/19.5', minHeight: 0 }}
    >
      {/* Dynamic island */}
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-10 h-2 rounded-full bg-black" />
      </div>

      <div className="flex-1 flex flex-col px-2 pb-2 gap-1.5 overflow-hidden">
        {/* eScore card */}
        <div className="p-2 rounded-2xl border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="text-[6px] text-white/30 uppercase tracking-widest mb-1">ScanvEscore™</div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-extrabold text-white leading-none">84</span>
            <span className="text-[6px] text-white/30 mb-0.5">/ 100</span>
          </div>
          <div className="w-full h-1 rounded-full bg-white/8 mt-1.5">
            <div className="h-full rounded-full" style={{ width: '84%', background: 'linear-gradient(90deg, #4F8EF7, #10B981)' }} />
          </div>
        </div>

        {/* GoSignal */}
        <div className="p-2 rounded-2xl flex items-center gap-1.5"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'rgba(16,185,129,0.2)' }}>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div>
            <div className="text-[8px] font-extrabold text-emerald-400 leading-tight">BUY IT</div>
            <div className="text-[6px] text-emerald-400/50">GoSignal ✓</div>
          </div>
        </div>

        {/* Price rows */}
        <div className="flex flex-col gap-1 flex-1">
          {[
            { store: 'Amazon', price: '$8.99', best: true },
            { store: 'eBay', price: '$9.50', best: false },
            { store: 'ThriftBooks', price: '$7.49', best: false },
          ].map((s) => (
            <div key={s.store} className="flex items-center justify-between px-2 py-1 rounded-xl"
              style={{ background: s.best ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${s.best ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.06)'}` }}>
              <span className="text-[7px] text-white/60">{s.store}</span>
              <span className={`text-[8px] font-bold ${s.best ? 'text-emerald-400' : 'text-white/45'}`}>{s.price}</span>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around pt-1 border-t border-white/6">
          {['History', 'Scan', 'Wishlist'].map((t) => (
            <div key={t} className="flex flex-col items-center gap-0.5">
              <div className={`w-4 h-4 rounded-md ${t === 'Scan' ? 'bg-brand-blue' : 'bg-white/8'}`} />
              <span className="text-[5px] text-white/25">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LaptopMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Screen */}
      <div
        className="relative rounded-t-2xl rounded-b-lg overflow-hidden border border-white/10 shadow-2xl"
        style={{ paddingBottom: '62%', background: '#0A0F18' }}
      >
        <div className="absolute inset-0">
          {/* Camera dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/15" />
          {/* Dashboard content */}
          <div className="absolute inset-0 pt-6">
            <DashboardUI />
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div className="h-1.5 rounded-b-sm mx-0" style={{ background: 'rgba(255,255,255,0.06)' }} />

      {/* Base */}
      <div
        className="h-3 rounded-b-2xl mx-[-8px]"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)' }}
      />

      {/* Phone floating bottom-left */}
      <div
        className="absolute -left-10 -bottom-4 z-10"
        style={{ transform: 'rotate(-8deg)', transformOrigin: 'bottom center' }}
      >
        <div
          className="shadow-2xl"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(79,142,247,0.25))',
            transform: 'rotate(-8deg)',
          }}
        >
          <PhonePreview />
        </div>
      </div>

      {/* Glow under phone */}
      <div
        className="absolute -left-8 -bottom-6 w-24 h-8 rounded-full pointer-events-none"
        style={{ background: 'rgba(79,142,247,0.15)', filter: 'blur(16px)' }}
      />
    </div>
  )
}

export default function PlatformShowcase() {
  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Full Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Scan on the go.{' '}
            <span className="gradient-text">Manage anywhere.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-gray-400 text-base leading-relaxed"
          >
            Your phone does the scouting. The dashboard tracks your profit, buy list, and scan history — all in one place.
          </motion.p>
        </div>

        {/* Device mockups */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-8 lg:pl-12"
        >
          <LaptopMockup />
        </motion.div>

        {/* Feature pills below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >
          {[
            'Scan history searchable by title or ISBN',
            'eScore + GoSignal on every result',
            'Buy List & Wishlist synced across devices',
            'Pro unlocks 50+ store comparisons',
          ].map((pill) => (
            <span key={pill} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 text-xs text-gray-400"
              style={{ background: 'rgba(255,255,255,0.025)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/70 shrink-0" />
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
