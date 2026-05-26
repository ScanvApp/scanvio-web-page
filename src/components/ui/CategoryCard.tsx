import { motion } from 'framer-motion'
import {
  BookOpen,
  Smartphone,
  Shirt,
  ShoppingBasket,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react'
import type { Category } from '../../types'

const iconMap: Record<string, LucideIcon> = {
  'book-open':       BookOpen,
  'smartphone':      Smartphone,
  'shirt':           Shirt,
  'shopping-basket': ShoppingBasket,
  'more-horizontal': MoreHorizontal,
}

interface Props {
  category: Category
  index: number
}

export default function CategoryCard({ category, index }: Props) {
  const Icon = iconMap[category.icon] ?? MoreHorizontal
  const isAvailable = category.status === 'available'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5
                 border border-white/10 hover:border-white/20
                 cursor-default transition-all duration-300 min-w-[100px]"
    >
      {/* Icon circle */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: `${category.color}18` }}
      >
        <Icon
          size={26}
          strokeWidth={1.6}
          style={{ color: category.color }}
        />
      </div>

      {/* Label */}
      <span className="text-sm font-bold text-white text-center leading-tight">
        {category.label}
      </span>

      {/* Status badge */}
      <span
        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
          isAvailable
            ? 'text-brand-blue bg-brand-blue/10'
            : 'text-gray-400 bg-white/8'
        }`}
      >
        {category.subtitle}
      </span>
    </motion.div>
  )
}
