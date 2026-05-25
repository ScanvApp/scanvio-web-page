import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  format: (v: number) => string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-bold text-white tabular-nums">{format(value)}</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-white/8">
        {/* Filled track */}
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #4F8EF7, #A855F7)',
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ zIndex: 1 }}
        />
        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-md border-2 border-brand-blue pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-white/20">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  highlight,
  delay,
}: {
  label: string
  value: string
  highlight?: boolean
  delay?: number
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay ?? 0 }}
      className={`flex flex-col gap-1 p-4 rounded-xl ${highlight
        ? 'border border-brand-blue/30'
        : 'border border-white/8'
      }`}
      style={{
        background: highlight
          ? 'linear-gradient(135deg, rgba(79,142,247,0.1), rgba(168,85,247,0.06))'
          : 'rgba(255,255,255,0.03)',
      }}
    >
      <span className={`text-[10px] font-bold uppercase tracking-widest ${highlight ? 'text-brand-blue' : 'text-white/30'}`}>
        {label}
      </span>
      <span className={`text-2xl font-extrabold tabular-nums ${highlight ? 'gradient-text' : 'text-white'}`}>
        {value}
      </span>
    </motion.div>
  )
}

export default function ROICalculator() {
  const [scansPerWeek, setScansPerWeek] = useState(150)
  const [buyRate, setBuyRate] = useState(20)
  const [buyCost, setBuyCost] = useState(2.5)
  const [profitPerSale, setProfitPerSale] = useState(8)

  const booksPerWeek = Math.round(scansPerWeek * (buyRate / 100))
  const weeklyProfit = booksPerWeek * profitPerSale - buyCost * booksPerWeek
  const monthlyProfit = weeklyProfit * 4.33
  const annualProfit = weeklyProfit * 52
  const daysToPayPro = weeklyProfit > 0 ? (9.99 / (weeklyProfit / 7)).toFixed(1) : '—'

  const fmt$ = useCallback((n: number) =>
    n >= 1000
      ? `$${(n / 1000).toFixed(1)}k`
      : `$${n.toFixed(0)}`,
  [])

  return (
    <section className="relative bg-dark-800 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/6 blur-[130px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            ROI Calculator
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            See your{' '}
            <span className="gradient-text">potential profit.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-gray-400 text-base leading-relaxed"
          >
            Drag the sliders to match your sourcing habits and see what Scanvio could return.
          </motion.p>
        </div>

        {/* Calculator card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-6"
        >
          {/* Inputs */}
          <div
            className="rounded-2xl p-7 border border-white/8 flex flex-col gap-7"
            style={{ background: 'rgba(255,255,255,0.025)' }}
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={16} className="text-brand-blue" />
              <span className="text-sm font-bold text-white">Your sourcing numbers</span>
            </div>

            <Slider
              label="Books scanned per week"
              value={scansPerWeek}
              min={25}
              max={500}
              step={25}
              format={(v) => `${v} books`}
              onChange={setScansPerWeek}
            />
            <Slider
              label="Books you decide to buy"
              value={buyRate}
              min={5}
              max={60}
              step={5}
              format={(v) => `${v}%`}
              onChange={setBuyRate}
            />
            <Slider
              label="Average buy cost"
              value={buyCost}
              min={0.5}
              max={10}
              step={0.5}
              format={(v) => `$${v.toFixed(2)}`}
              onChange={setBuyCost}
            />
            <Slider
              label="Average profit per sale (after fees)"
              value={profitPerSale}
              min={2}
              max={40}
              step={1}
              format={(v) => `$${v}`}
              onChange={setProfitPerSale}
            />

            <div className="pt-2 border-t border-white/6 text-xs text-white/25 leading-relaxed">
              Profit per sale = sell price minus Amazon FBA fees, shipping, and buy cost.
              Assumes all bought books sell within the period.
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                label="Books bought / week"
                value={`${booksPerWeek}`}
                delay={0}
              />
              <StatCard
                label="Weekly profit"
                value={fmt$(weeklyProfit)}
                delay={0.04}
              />
              <StatCard
                label="Annual profit"
                value={fmt$(annualProfit)}
                delay={0.08}
              />
              <StatCard
                label="Monthly profit"
                value={fmt$(monthlyProfit)}
                highlight
                delay={0.12}
              />
            </div>

            {/* Pro payoff */}
            <div
              className="rounded-2xl p-5 border border-brand-blue/20 flex flex-col gap-2"
              style={{ background: 'rgba(79,142,247,0.06)' }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                Scanvio Pro pays for itself in
              </span>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white tabular-nums">
                  {daysToPayPro}
                </span>
                <span className="text-gray-400 text-sm mb-1.5">days of scanning</span>
              </div>
              <p className="text-xs text-white/35 leading-relaxed">
                At $9.99/mo, Pro pays for itself fast. Most sellers cover it in the first run.
              </p>
            </div>

            <Button href="#download" variant="primary" size="md" className="w-full justify-center">
              Start Free — No Card Needed <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
