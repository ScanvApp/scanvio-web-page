import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const STATS = [
  { value: 50,  suffix: '+',  label: 'Stores compared',    prefix: '' },
  { value: 1,   suffix: 's',  label: 'Average scan speed', prefix: '<' },
  { value: 100, suffix: '%',  label: 'Free to start',      prefix: '' },
]

function Counter({
  value,
  prefix = '',
  suffix = '',
  inView,
}: {
  value: number
  prefix?: string
  suffix?: string
  inView: boolean
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [inView, count, value])

  return <motion.span>{rounded}</motion.span>
}

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: typeof STATS[number]
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-6 py-6 lg:py-8"
    >
      <span className="text-3xl lg:text-4xl font-extrabold gradient-text leading-none tracking-tight tabular-nums">
        <Counter
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          inView={inView}
        />
      </span>
      <span className="mt-2 text-xs lg:text-sm text-gray-500 font-medium tracking-wide">
        {stat.label}
      </span>
    </motion.div>
  )
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-dark-900">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/6 bg-white/[0.02] overflow-hidden"
        >
          <div className="grid grid-cols-3 divide-x divide-white/6">
            {STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-4" />
    </section>
  )
}
