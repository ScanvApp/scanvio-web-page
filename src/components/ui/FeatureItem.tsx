import { motion } from 'framer-motion'
import {
  ScanLine,
  BarChart2,
  Star,
  Clock,
  Zap,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'
import type { Feature } from '../../types'

const iconMap: Record<string, LucideIcon> = {
  'scan-line':   ScanLine,
  'bar-chart-2': BarChart2,
  'star':        Star,
  'clock':       Clock,
  'zap':         Zap,
  'wifi-off':    WifiOff,
}

interface Props {
  feature: Feature
  index: number
}

export default function FeatureItem({ feature, index }: Props) {
  const Icon = iconMap[feature.icon] ?? Zap
  const isWide = feature.size === 'wide'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      className={`group relative glass-card rounded-2xl p-7 flex flex-col gap-5
                  hover:border-white/20 transition-all duration-300
                  ${isWide ? 'lg:col-span-2' : ''}`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at 30% 50%, ${feature.accent}0D, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${feature.accent}1A` }}
      >
        <Icon size={22} strokeWidth={1.8} style={{ color: feature.accent }} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-white">{feature.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.accent}60, transparent)` }}
      />
    </motion.div>
  )
}
