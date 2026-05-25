import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import Button from '../ui/Button'

type CellVal = true | false | 'partial' | 'pro' | string

const ROWS: { feature: string; scanvio: CellVal; scoutiq: CellVal; scoutly: CellVal; bookzpro: CellVal }[] = [
  { feature: 'Free forever plan',        scanvio: true,       scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'Starting price',           scanvio: 'Free',     scoutiq: '$14/mo',   scoutly: '$9.99/mo',  bookzpro: '$29/mo' },
  { feature: 'iOS & Android',            scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: 'Instant barcode scan',     scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: '50+ store comparison',     scanvio: 'pro',      scoutiq: false,      scoutly: 'partial',   bookzpro: false },
  { feature: 'Reviews & ratings',        scanvio: true,       scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'Profit score',             scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: 'GoSignal / buy triggers',  scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: 'Offline mode',             scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: 'Wishlist',                 scanvio: true,       scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'Buy List',                 scanvio: true,       scoutiq: true,       scoutly: true,        bookzpro: true },
  { feature: 'Sorter Mode',              scanvio: true,       scoutiq: false,      scoutly: 'partial',   bookzpro: true },
  { feature: 'AI recommendations',       scanvio: 'pro',      scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'Price drop alerts',        scanvio: 'pro',      scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'No credit card to start',  scanvio: true,       scoutiq: false,      scoutly: false,       bookzpro: false },
  { feature: 'Modern UI / design',       scanvio: true,       scoutiq: 'partial',  scoutly: false,       bookzpro: 'partial' },
]

const COLS = [
  { key: 'scanvio',  label: 'Scanvio',  highlight: true },
  { key: 'scoutiq',  label: 'ScoutIQ',  highlight: false },
  { key: 'scoutly',  label: 'Scoutly',  highlight: false },
  { key: 'bookzpro', label: 'BookzPro', highlight: false },
] as const

function Cell({ value, highlight }: { value: CellVal; highlight: boolean }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${highlight ? 'bg-emerald-500/15' : 'bg-white/5'}`}>
          <Check size={12} className={highlight ? 'text-emerald-400' : 'text-white/40'} strokeWidth={2.5} />
        </div>
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X size={14} className="text-white/18" />
      </div>
    )
  }
  if (value === 'partial') {
    return (
      <div className="flex justify-center">
        <Minus size={14} className="text-amber-400/70" />
      </div>
    )
  }
  if (value === 'pro') {
    return (
      <div className="flex justify-center">
        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${highlight ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/8 text-white/40'}`}>
          Pro
        </span>
      </div>
    )
  }
  return (
    <span className={`text-xs font-semibold ${highlight ? 'text-white' : 'text-white/45'}`}>
      {value}
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Honest Comparison
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            How Scanvio{' '}
            <span className="gradient-text">stacks up.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-gray-400 text-base leading-relaxed"
          >
            We checked what the others offer so you don't have to.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto rounded-2xl border border-white/8"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <table className="w-full min-w-[580px] border-collapse">
            <thead>
              <tr>
                {/* Feature label column */}
                <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/30 w-[38%] border-b border-white/8">
                  Feature
                </th>
                {COLS.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-4 text-center border-b border-white/8"
                    style={col.highlight ? {
                      background: 'linear-gradient(180deg, rgba(79,142,247,0.08) 0%, rgba(79,142,247,0.03) 100%)',
                      borderTop: '2px solid rgba(79,142,247,0.5)',
                    } : {}}
                  >
                    <span className={`text-sm font-bold ${col.highlight ? 'gradient-text' : 'text-white/50'}`}>
                      {col.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.015] transition-colors duration-150"
                >
                  <td className="px-6 py-3.5 text-sm text-gray-400 font-medium">
                    {row.feature}
                  </td>
                  {COLS.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-3.5 text-center"
                      style={col.highlight ? {
                        background: i % 2 === 0
                          ? 'rgba(79,142,247,0.04)'
                          : 'rgba(79,142,247,0.02)',
                      } : {}}
                    >
                      <Cell value={row[col.key]} highlight={col.highlight} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-5 mt-5 px-1"
        >
          <span className="text-[10px] text-white/25 uppercase tracking-widest font-bold">Legend:</span>
          <span className="flex items-center gap-1.5 text-xs text-white/35">
            <Check size={12} className="text-emerald-400" /> Available
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/35">
            <Minus size={12} className="text-amber-400/70" /> Partial
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/35">
            <X size={12} className="text-white/25" /> Not available
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/35">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue">Pro</span> Pro plan only
          </span>
          <span className="ml-auto text-[10px] text-white/40">
            Based on publicly available information, May 2026. Accuracy not guaranteed.
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href="#download" variant="primary" size="md">
            Start Free — No Credit Card
          </Button>
          <p className="text-sm text-gray-500">Free forever. Upgrade anytime.</p>
        </motion.div>
      </div>
    </section>
  )
}
