import { motion } from 'framer-motion'
import {
  Download,
  Camera,
  Layers,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import type { Step } from '../../types'

const iconMap: Record<string, LucideIcon> = {
  download:      Download,
  camera:        Camera,
  layers:        Layers,
  'check-circle': CheckCircle,
}

interface Props {
  step: Step
  index: number
  total: number
}

export default function StepCard({ step, index, total }: Props) {
  const Icon = iconMap[step.icon] ?? CheckCircle
  const isLast = index === total - 1

  return (
    <div className="relative flex flex-col items-center text-center flex-1">

      {/* Connector line — renders between cards, not after the last */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+44px)] right-0 h-px z-0">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-full bg-gradient-to-r from-brand-blue/50 via-brand-purple/40 to-transparent"
          />
          {/* Dashed overlay */}
          <div className="absolute inset-0 border-t border-dashed border-white/10" />
        </div>
      )}

      {/* Step circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-6"
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-md scale-125" />

        {/* Circle */}
        <div className="relative w-20 h-20 rounded-full gradient-btn flex items-center justify-center shadow-glow-blue">
          <Icon size={28} strokeWidth={1.8} className="text-white" />
        </div>

        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-dark-800 border border-brand-blue/50
                        flex items-center justify-center text-[10px] font-bold text-brand-blue">
          {step.number}
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
        className="flex flex-col gap-3"
      >
        <h3 className="text-lg font-bold text-white">{step.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">
          {step.description}
        </p>
      </motion.div>
    </div>
  )
}
