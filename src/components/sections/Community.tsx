import { motion } from 'framer-motion'
import { Zap, Lock, MessageSquare, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

const PERKS = [
  {
    icon: Zap,
    title: 'Priority Access',
    description: 'First in line for beta testing, new features, and early updates.',
    color: '#F59E0B',
  },
  {
    icon: Lock,
    title: 'Locked-In Pro Price',
    description: 'Early members lock in a lower Pro rate forever. Price goes up at launch.',
    color: '#4F8EF7',
  },
  {
    icon: MessageSquare,
    title: 'Shape the Product',
    description: 'Direct line to the team. Early members vote on what gets built next.',
    color: '#A855F7',
  },
]

export default function Community() {
  return (
    <section className="relative bg-dark-800 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/6 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
            >
              Early Access
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              Join before{' '}
              <span className="gradient-text">everyone else.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-gray-400 text-base leading-relaxed mb-8 max-w-md"
            >
              We're still pre-launch. Getting in now means actual perks — not just a spot in an email queue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button href="#download" variant="primary" size="md">
                Reserve Your Spot <ArrowRight size={16} />
              </Button>
              <p className="self-center text-sm text-gray-500">Free. Always will be.</p>
            </motion.div>
          </div>

          {/* Right — perks */}
          <div className="flex flex-col gap-4">
            {PERKS.map((perk, i) => {
              const Icon = perk.icon
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${perk.color}18` }}
                  >
                    <Icon size={18} style={{ color: perk.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{perk.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{perk.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
