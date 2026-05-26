import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

// ─── Screen: Scan ─────────────────────────────────────────────────────────────

function ScanScreen() {
  const corners = [
    ['top-[22%] left-[13%]', 'border-t-2 border-l-2'],
    ['top-[22%] right-[13%]', 'border-t-2 border-r-2'],
    ['bottom-[22%] left-[13%]', 'border-b-2 border-l-2'],
    ['bottom-[22%] right-[13%]', 'border-b-2 border-r-2'],
  ] as const

  return (
    <div className="flex flex-col h-full bg-[#08111e]">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-11 pb-2 text-[8px] text-white/35 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">SCANVIO</span>
        <div className="w-6 h-2.5 rounded-sm border border-white/25 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/45" />
        </div>
      </div>

      {/* Viewfinder */}
      <div className="flex-1 relative mx-3 mb-2 rounded-2xl overflow-hidden">
        {/* Camera gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 55%, #182038 0%, #060d18 70%)' }}
        />

        {/* Simulated bookshelf in background */}
        <div className="absolute inset-0 flex items-end justify-center pb-[22%] opacity-55">
          <div className="flex items-end gap-0.5">
            {[
              { w: 15, h: 66, c: '#374151' },
              { w: 19, h: 84, c: '#1e3a5f' },
              { w: 13, h: 54, c: '#4a3060' },
              { w: 17, h: 78, c: '#1f3650' },
              { w: 11, h: 50, c: '#374151' },
              { w: 20, h: 90, c: '#2d1f4a' },
              { w: 14, h: 62, c: '#1e3a5f' },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-t-sm"
                style={{ width: b.w, height: b.h, background: b.c }}
              />
            ))}
          </div>
        </div>

        {/* Corner brackets */}
        {corners.map(([pos, border]) => (
          <div
            key={pos}
            className={`absolute ${pos} w-5 h-5 ${border} border-brand-blue rounded-sm`}
          />
        ))}

        {/* Animated scan line */}
        <motion.div
          className="absolute left-[16%] right-[16%] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, #4F8EF7, transparent)',
            boxShadow: '0 0 6px #4F8EF7, 0 0 16px rgba(79,142,247,0.35)',
          }}
          animate={{ top: ['25%', '73%', '25%'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Scanning label */}
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <motion.span
            className="text-[9px] text-white/40"
            animate={{ opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            Scanning…
          </motion.span>
        </div>
      </div>

      {/* Tab bar */}
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

// ─── Screen: Results ──────────────────────────────────────────────────────────

function ResultsScreen() {
  const stores = [
    { name: 'Amazon',      price: '$8.99',  badge: 'Lowest', color: '#10B981', pro: false },
    { name: 'eBay',        price: '$9.50',  badge: null,     color: null,      pro: false },
    { name: 'ThriftBooks', price: '$7.49',  badge: null,     color: null,      pro: false },
    { name: '47+ more stores', price: null, badge: 'Pro',    color: '#4F8EF7', pro: true },
  ]

  return (
    <div className="flex flex-col h-full bg-[#08111e]">
      <div className="flex justify-between items-center px-5 pt-11 pb-2 text-[8px] text-white/35 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">PRICES</span>
        <div className="w-6 h-2.5 rounded-sm border border-white/25 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/45" />
        </div>
      </div>

      {/* Book card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2.5 mx-3 mt-1 mb-3 p-2.5 rounded-xl bg-white/5 border border-white/8"
      >
        <div className="w-10 h-14 rounded-md bg-gradient-to-br from-brand-blue/50 to-brand-purple/50 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="w-4/5 h-2.5 rounded-full bg-white/40 mb-1.5" />
          <div className="w-3/5 h-2 rounded-full bg-white/20 mb-2" />
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-sm bg-amber-400/70" />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="px-3 mb-2">
        <span className="text-[9px] font-bold text-white/25 uppercase tracking-widest">
          Live Prices · 3 Free / 50+ Pro
        </span>
      </div>

      {/* Price list */}
      <div className="flex-1 flex flex-col gap-1.5 px-3 overflow-hidden">
        {stores.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.1, duration: 0.35 }}
            className={`flex items-center justify-between px-2.5 py-2 rounded-xl border ${
              s.pro
                ? 'bg-brand-blue/5 border-brand-blue/20'
                : 'bg-white/5 border-white/8'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: s.color ?? 'rgba(255,255,255,0.2)' }}
              />
              <span className={`text-[10px] font-medium ${s.pro ? 'text-brand-blue/60' : 'text-white/70'}`}>
                {s.name}
              </span>
              {s.badge && !s.pro && (
                <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                  {s.badge}
                </span>
              )}
              {s.pro && (
                <span className="text-[7px] font-bold px-1.5 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue">
                  Pro
                </span>
              )}
            </div>
            <span className={`text-[11px] font-bold ${s.badge && !s.pro ? 'text-emerald-400' : s.pro ? 'text-brand-blue/40' : 'text-white/45'}`}>
              {s.price ?? '🔒 Unlock'}
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

// ─── Screen: Details ──────────────────────────────────────────────────────────

function DetailsScreen() {
  return (
    <div className="flex flex-col h-full bg-[#08111e]">
      <div className="flex justify-between items-center px-5 pt-11 pb-2 text-[8px] text-white/35 font-medium">
        <span>9:41</span>
        <span className="tracking-widest">DETAILS</span>
        <div className="w-6 h-2.5 rounded-sm border border-white/25 relative">
          <div className="absolute inset-0.5 right-1 rounded-sm bg-white/45" />
        </div>
      </div>

      {/* Book hero */}
      <div className="flex gap-2.5 mx-3 mt-1 mb-3">
        <div
          className="w-14 rounded-lg bg-gradient-to-br from-brand-blue/50 to-brand-purple/50 shrink-0"
          style={{ height: 84 }}
        />
        <div className="flex-1">
          <div className="w-full h-2.5 rounded-full bg-white/40 mb-1.5" />
          <div className="w-2/3 h-2 rounded-full bg-white/25 mb-2" />
          <div className="flex gap-0.5 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-sm bg-amber-400/80" />
            ))}
          </div>
          <span className="text-[8px] text-white/35">4.8 · aggregated from Goodreads &amp; Amazon</span>
        </div>
      </div>

      {/* eScore + GoSignal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.4 }}
        className="mx-3 mb-3 px-4 py-3 rounded-xl border flex items-center justify-between"
        style={{
          background: 'rgba(79,142,247,0.07)',
          borderColor: 'rgba(79,142,247,0.2)',
        }}
      >
        <div>
          <span className="text-[8px] text-brand-blue font-bold uppercase tracking-widest">
            ScanvEscore™
          </span>
          <p className="text-2xl font-extrabold text-white leading-tight">83</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-right">
          <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-widest">
            GoSignal
          </span>
          <p className="text-xl font-extrabold text-emerald-400 leading-tight">BUY</p>
        </div>
      </motion.div>

      {/* Mini reviews */}
      <div className="flex-1 flex flex-col gap-2 px-3 overflow-hidden">
        {['Gripping from start to finish.', "One of the best I've read this year."].map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/8"
          >
            <div className="flex gap-0.5 mb-1.5">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-2 h-2 rounded-sm bg-amber-400/70" />
              ))}
            </div>
            <span className="text-[9px] text-white/50 leading-relaxed">{review}</span>
          </motion.div>
        ))}
      </div>

      {/* Wishlist CTA */}
      <div className="mx-3 mb-3 mt-2">
        <div
          className="w-full py-2.5 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #4F8EF7, #A855F7)' }}
        >
          <span className="text-[10px] font-bold text-white">Add to Wishlist</span>
        </div>
      </div>

      <div className="h-4 flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

// ─── Floating badge ───────────────────────────────────────────────────────────

function FloatingBadge({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className: string
  delay?: number
}) {
  return (
    <motion.div
      className={`absolute ${className} z-20`}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex items-center gap-2 px-3 py-2.5 rounded-xl shadow-xl"
        style={{
          background: 'rgba(15,20,35,0.85)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.6,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

const SCREENS = [ScanScreen, ResultsScreen, DetailsScreen]
const DURATIONS = [2800, 3500, 3000]

export default function HeroPhone() {
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    const t = setTimeout(
      () => setScreen((s) => (s + 1) % SCREENS.length),
      DURATIONS[screen],
    )
    return () => clearTimeout(t)
  }, [screen])

  const Screen = SCREENS[screen]

  return (
    <div className="relative w-full flex items-center justify-center py-10">

      {/* ── Floating badges ── */}

      {/* Top-left: stores */}
      <FloatingBadge className="hidden sm:block top-0 left-[2%] sm:left-[6%]" delay={0.7}>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'rgba(79,142,247,0.2)' }}
        >
          <span className="text-brand-blue text-[10px] font-extrabold">50+</span>
        </div>
        <div>
          <p className="text-[9px] font-bold text-white leading-none">Stores Compared</p>
          <p className="text-[8px] text-white/35 leading-none mt-0.5">Live pricing</p>
        </div>
      </FloatingBadge>

      {/* Right-middle: saving */}
      <FloatingBadge className="hidden sm:block top-[36%] right-[1%] sm:right-[5%]" delay={1.0}>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'rgba(16,185,129,0.2)' }}
        >
          <span className="text-emerald-400 text-[11px] font-extrabold">$</span>
        </div>
        <div>
          <p className="text-[9px] font-bold text-white leading-none">Saved $14.22</p>
          <p className="text-[8px] text-white/35 leading-none mt-0.5">vs. retail</p>
        </div>
      </FloatingBadge>

      {/* Bottom-left: speed */}
      <FloatingBadge className="hidden sm:block bottom-0 left-[2%] sm:left-[6%]" delay={1.25}>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'rgba(245,158,11,0.2)' }}
        >
          <span className="text-amber-400 text-[11px] font-extrabold">⚡</span>
        </div>
        <div>
          <p className="text-[9px] font-bold text-white leading-none">Sub-1s Results</p>
          <p className="text-[8px] text-white/35 leading-none mt-0.5">Instant scan</p>
        </div>
      </FloatingBadge>

      {/* ── Phone ── */}
      <div className="relative w-[205px] sm:w-[230px]">

        {/* Ambient glow layers */}
        <div className="absolute -inset-10 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -inset-6 rounded-full bg-brand-purple/8 blur-2xl pointer-events-none" />

        {/* Phone shell */}
        <div
          className="relative w-full rounded-[2.8rem] overflow-hidden shadow-2xl"
          style={{
            aspectRatio: '9/19',
            background: '#08111e',
            border: '1.5px solid rgba(255,255,255,0.1)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[68px] h-[18px] rounded-full bg-black z-10" />

          {/* Screen content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Glass reflection highlight */}
        <div
          className="absolute inset-x-4 top-0 h-1/3 rounded-t-[2.8rem] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Progress dots ── */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SCREENS.map((_, i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full"
            animate={{
              width: i === screen ? 20 : 6,
              backgroundColor: i === screen ? '#4F8EF7' : 'rgba(255,255,255,0.2)',
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}
