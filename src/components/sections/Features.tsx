import { motion } from 'framer-motion'
import {
  ArrowRight, ScanLine, BarChart2, Star, Clock, Zap, WifiOff,
  TrendingUp, Bell, FileDown, Users, Target, Layers, DollarSign,
  Filter, CheckCircle, ShoppingCart, BookOpen,
} from 'lucide-react'
import type { ComponentType, ElementType } from 'react'
import Button from '../ui/Button'

// ─── Spotlight visuals ────────────────────────────────────────────────────────

function ScoreVisual() {
  const r = 42
  const circumference = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 px-6">
      <div className="relative w-44 h-44">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50" cy="50" r={r} fill="none"
            stroke="rgba(255,255,255,0.05)" strokeWidth="7"
          />
          <motion.circle
            cx="50" cy="50" r={r} fill="none"
            stroke="url(#scoreGrad)" strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - circumference * 0.83 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F8EF7" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-5xl font-extrabold text-white leading-none"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 15 }}
          >
            83
          </motion.span>
          <span className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mt-1">
            eScore
          </span>
        </div>
      </div>
      <div className="flex gap-3 w-full max-w-xs">
        {[
          ['ROI', '+142%', '#10B981'],
          ['Rank', '#4,201', '#4F8EF7'],
          ['Supply', 'Low', '#A855F7'],
        ].map(([label, val, color]) => (
          <div
            key={label}
            className="flex-1 flex flex-col items-center px-3 py-3 rounded-xl bg-white/5 border border-white/8"
          >
            <span className="text-[9px] text-white/35 uppercase tracking-wide mb-0.5">{label}</span>
            <span className="text-sm font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function GoSignalVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 px-6">
      <motion.div
        className="w-36 h-36 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #34D399, #059669)',
          boxShadow: '0 0 80px rgba(16,185,129,0.3)',
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
      >
        <CheckCircle size={60} className="text-white" strokeWidth={1.8} />
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-3xl font-extrabold text-white tracking-tight">BUY IT</p>
        <p className="text-xs text-emerald-400 mt-2">eScore 83 · above your 60 threshold</p>
      </motion.div>
      <div className="flex gap-3 w-full max-w-xs">
        <div className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-sm text-emerald-400 font-bold">Profit $14.22</span>
        </div>
        <div className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-white/5 border border-white/8">
          <span className="text-sm text-white/40">Buy cost $3.00</span>
        </div>
      </div>
    </div>
  )
}

function UsedPricesVisual() {
  const bars = [2, 5, 12, 18, 14, 9, 6, 3, 2, 1]
  const maxH = Math.max(...bars)
  const maxPx = 80
  const getColor = (i: number) =>
    i < 3 ? '#4F8EF7' : i < 7 ? '#A855F7' : 'rgba(255,255,255,0.10)'

  return (
    <div className="flex flex-col gap-4 px-6 py-8">
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">
        Used Price Distribution — 72 active listings
      </p>
      <div className="flex items-end gap-1.5" style={{ height: maxPx }}>
        {bars.map((b, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ background: getColor(i) }}
            initial={{ height: 0 }}
            whileInView={{ height: Math.round((b / maxH) * maxPx) }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-white/20">
        <span>$2</span>
        <span>$6</span>
        <span>$10</span>
        <span>$14</span>
        <span>$18+</span>
      </div>
      <div className="flex gap-5 mt-1">
        {[
          ['Low ($2–$5)', '#4F8EF7'],
          ['Mid ($6–$12)', '#A855F7'],
          ['High ($13+)', 'rgba(255,255,255,0.12)'],
        ].map(([name, color]) => (
          <div key={name} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
            <span className="text-[9px] text-white/40">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

type Spotlight = {
  pill: string
  title: string
  body: string
  bullets: string[]
  accent: string
  Visual: ComponentType
  flip: boolean
}

const SPOTLIGHTS: Spotlight[] = [
  {
    pill: 'ScanvEscore™',
    title: 'One number that tells you everything.',
    body: 'Our 0–100 profit score looks at ROI, Amazon sales rank, and how many sellers you\'re competing with. High score means buy it. Low score means leave it. No math required.',
    bullets: [
      'Rank is weighted properly — a #5,000 book is very different from a #500,000 book',
      'Pulls fresh data from Amazon on every scan, never cached',
      'Built specifically for Amazon FBA book sellers',
    ],
    accent: '#4F8EF7',
    Visual: ScoreVisual,
    flip: false,
  },
  {
    pill: 'GoSignal',
    title: 'Green light. Go. Red light. Pass.',
    body: 'Set your minimum eScore once and GoSignal does the rest. Clear green or red on every scan — no second-guessing at a busy library sale.',
    bullets: [
      'Customizable eScore, minimum profit, and rank cutoff',
      'Works without internet — great for library sales and thrift stores',
      'Built for sorting through hundreds of books fast',
    ],
    accent: '#10B981',
    Visual: GoSignalVisual,
    flip: true,
  },
  {
    pill: 'Used Prices Bar',
    title: 'See the whole market in one glance.',
    body: 'Every active used listing, laid out visually. Spot the price ceiling, see how much competition there is, and know exactly where your copy fits.',
    bullets: [
      'Color-coded by price range — low, mid, and high',
      'Filter to FBA sellers only or see every offer',
      'Your buy cost sits right alongside so margin is always front and center',
    ],
    accent: '#A855F7',
    Visual: UsedPricesVisual,
    flip: false,
  },
]

type GridFeature = {
  icon: ElementType
  title: string
  body: string
  accent: string
  pro?: boolean
}

const GRID_FEATURES: GridFeature[] = [
  { icon: ScanLine,     title: 'Instant Scanning',       body: 'Sub-second barcode and cover recognition on any book.',         accent: '#4F8EF7' },
  { icon: DollarSign,   title: 'Net Profit Calculator',  body: 'True profit after Amazon fees, prep cost, and shipping.',       accent: '#10B981' },
  { icon: TrendingUp,   title: 'Sales Rank / BSR',       body: 'Current rank and trend — know if demand is rising or fading.',  accent: '#F59E0B' },
  { icon: Users,        title: 'Competition Analysis',   body: 'FBA seller count, Buy Box holder, and how many copies are out there.',  accent: '#06B6D4' },
  { icon: Target,       title: 'Buy List',               body: 'Pre-load ISBNs before a sale. Hunt with a plan.',              accent: '#EC4899' },
  { icon: Layers,       title: 'Sorter Mode',            body: 'Bin A / B / C rapid scanning — hundreds of books per hour.',   accent: '#8B5CF6' },
  { icon: ShoppingCart, title: 'Price Comparison',       body: '3 stores free. 50+ stores on Pro — always find the cheapest source.',   accent: '#10B981' },
  { icon: Star,         title: 'Aggregated Reviews',     body: 'Goodreads + Amazon ratings combined in one instant view.',     accent: '#F59E0B' },
  { icon: Clock,        title: 'Scan History',           body: 'Full searchable history by title, ISBN, or author.',           accent: '#A855F7' },
  { icon: WifiOff,      title: 'Works Offline',          body: 'Cached data functions with no signal — critical at sales.',    accent: '#6B7280' },
  { icon: Filter,       title: 'Custom Triggers',        body: 'Fine-tune GoSignal with rank, profit, and eScore floors.',     accent: '#4F8EF7' },
  { icon: BookOpen,     title: 'Live Amazon Pricing',    body: 'Real prices from SP-API — never cached, never stale.',         accent: '#10B981' },
  { icon: Bell,         title: 'Price Drop Alerts',      body: 'Notified the moment a watched item hits your target price.',   accent: '#F97316', pro: true },
  { icon: Zap,          title: 'AI Recommendations',     body: 'Discover books in your niche that flip consistently.',         accent: '#06B6D4', pro: true },
  { icon: FileDown,     title: 'CSV Export',             body: 'Export your full scan history for spreadsheet analysis.',      accent: '#6B7280', pro: true },
  { icon: BarChart2,    title: 'Price History',          body: "See how a book's Amazon price has moved over 90 days.",        accent: '#A855F7', pro: true },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SpotlightFeature({ feature }: { feature: Spotlight }) {
  const textBlock = (
    <div>
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        style={{ background: `${feature.accent}1a`, color: feature.accent }}
      >
        {feature.pill}
      </span>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
        {feature.title}
      </h3>
      <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-7">
        {feature.body}
      </p>
      <ul className="flex flex-col gap-4">
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle
              size={16}
              className="mt-0.5 shrink-0"
              style={{ color: feature.accent }}
            />
            <span className="text-sm text-gray-300 leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  const visualBlock = (
    <div
      className="rounded-3xl border border-white/8 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.02)',
        boxShadow: `0 0 80px ${feature.accent}12`,
      }}
    >
      <feature.Visual />
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
    >
      {feature.flip ? (
        <>{visualBlock}{textBlock}</>
      ) : (
        <>{textBlock}{visualBlock}</>
      )}
    </motion.div>
  )
}

function GridFeatureCard({ feature, index }: { feature: GridFeature; index: number }) {
  const Icon = feature.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="relative group p-5 rounded-2xl border border-white/8 hover:border-white/16 transition-colors duration-200"
      style={{ background: 'rgba(255,255,255,0.025)' }}
    >
      {feature.pro && (
        <span className="absolute top-3.5 right-3.5 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-blue/15 text-brand-blue">
          Pro
        </span>
      )}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${feature.accent}18` }}
      >
        <Icon size={18} style={{ color: feature.accent }} />
      </div>
      <p className="text-sm font-semibold text-white mb-2">{feature.title}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{feature.body}</p>
    </motion.div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Features() {
  return (
    <section id="features" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Full Feature Set
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Every tool a book scout{' '}
            <span className="gradient-text">actually needs.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From your first scan to your thousandth — Scanvio gives you real data,
            clear signals, and the speed to process more books than anyone else on the floor.
          </motion.p>
        </div>

        {/* Spotlight features */}
        <div className="flex flex-col gap-24 mb-28">
          {SPOTLIGHTS.map((feature) => (
            <SpotlightFeature key={feature.pill} feature={feature} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-white/6" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 whitespace-nowrap">
            Plus everything else you need
          </span>
          <div className="flex-1 h-px bg-white/6" />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {GRID_FEATURES.map((f, i) => (
            <GridFeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#download" variant="primary" size="lg">
            Join the Waitlist <ArrowRight size={18} />
          </Button>
          <p className="text-sm text-gray-500">Free forever. No credit card needed.</p>
        </motion.div>
      </div>
    </section>
  )
}
