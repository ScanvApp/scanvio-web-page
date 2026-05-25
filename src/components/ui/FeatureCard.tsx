import { motion } from 'framer-motion'
import {
  ScanLine,
  Search,
  Tag,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react'
import type { FeatureCard as FeatureCardType } from '../../types'

const iconMap: Record<string, LucideIcon> = {
  scan: ScanLine,
  search: Search,
  tag: Tag,
  grid: LayoutGrid,
}

interface Props {
  card: FeatureCardType
  index: number
}

export default function FeatureCard({ card, index }: Props) {
  const Icon = iconMap[card.icon] ?? ScanLine

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-start gap-4 px-6 py-7 flex-1 min-w-0
                 border-t border-white/8 lg:border-t-0 lg:border-l
                 first:border-t-0 first:border-l-0
                 hover:bg-white/[0.03] transition-colors duration-300"
    >
      {/* Icon box */}
      <div className="shrink-0 w-11 h-11 rounded-xl bg-dark-700 border border-white/10
                      flex items-center justify-center
                      group-hover:border-brand-blue/40 group-hover:bg-brand-blue/10
                      transition-all duration-300">
        <Icon
          size={20}
          className="text-brand-blue group-hover:text-brand-purple transition-colors duration-300"
          strokeWidth={1.8}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-sm font-semibold text-white leading-snug">
          {card.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}
