import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Button from '../ui/Button'

const FAQS = [
  {
    q: 'Do I need an Amazon seller account to use Scanvio?',
    a: 'No. Scanvio works for anyone — whether you\'re buying books for personal use, comparing prices before a purchase, or running a book reselling business on Amazon. A seller account is only needed if you want to list and sell on Amazon itself.',
  },
  {
    q: 'Is the Free plan really free forever?',
    a: 'Yes, genuinely. No credit card required, no trial period, no expiry date. The Free plan includes unlimited barcode scanning, price comparison across 3 stores (Amazon, eBay, and ThriftBooks), and aggregated reviews — forever. Upgrading to Pro ($9.99/month) unlocks 50+ store comparisons, AI recommendations, price drop alerts, and CSV export.',
  },
  {
    q: 'Does Scanvio work without an internet connection?',
    a: 'Your scan history and saved wishlist items are always available offline. Live price lookups need a connection — that part won\'t work without signal.',
  },
  {
    q: 'How is the ScanvEscore™ calculated?',
    a: 'ScanvEscore is our proprietary 0–100 profit score. It factors in your return on investment (ROI), the book\'s current Amazon sales rank, and active seller competition, weighted on a logarithmic scale so rank depth is accounted for accurately. A score above 70 is generally a strong buy signal; below 40, pass.',
  },
  {
    q: 'Which countries and stores are supported?',
    a: 'Scanvio currently compares prices across 50+ US retailers including Amazon, eBay, ThriftBooks, AbeBooks, Half Price Books, and more. International support is coming — sign up and we\'ll let you know when your region goes live.',
  },
  {
    q: 'What categories does Scanvio support at launch?',
    a: 'Books are fully supported at launch — including barcode scanning, cover recognition, ISBN lookup, and all price comparison features. Electronics, fashion, and groceries are planned for future updates. Join the waitlist to be first when new categories launch.',
  },
  {
    q: 'How accurate are the prices shown?',
    a: 'Prices are fetched live from each retailer at the time of your scan, so they reflect current availability and pricing. Amazon prices are pulled directly via the SP-API — not cached, not approximated.',
  },
  {
    q: 'Can I cancel my Pro plan anytime?',
    a: 'Yes. Pro is billed month-to-month with no long-term commitment. Cancel anytime from within the app settings and you won\'t be charged again. You keep Pro access until the end of your current billing period.',
  },
  {
    q: 'When is the app launching on iOS and Android?',
    a: 'We\'re in pre-launch right now. Join the waitlist and you\'ll be first in line — early members also lock in a lower Pro rate at launch.',
  },
  {
    q: 'How is Scanvio different from ScoutIQ or Scoutly?',
    a: 'The biggest difference: Scanvio is free to start — no trial, no credit card. Competitors start at $10–$30/month with no free tier. Scanvio also aggregates reviews from multiple sources (Amazon, Goodreads, and more) which no competitor currently does, and our Pro plan adds AI-powered recommendations that learn from your scanning history.',
  },
]

function FAQItem({ item, index }: { item: typeof FAQS[number]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="border border-white/8 rounded-2xl overflow-hidden"
      style={{ background: open ? 'rgba(79,142,247,0.04)' : 'rgba(255,255,255,0.02)' }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors duration-200 ${open ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          {item.q}
        </span>
        <div
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: open ? 'rgba(79,142,247,0.2)' : 'rgba(255,255,255,0.06)' }}
        >
          {open
            ? <Minus size={12} className="text-brand-blue" />
            : <Plus size={12} className="text-white/50" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
            >
              Got Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              Frequently asked.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-gray-400 text-base leading-relaxed mb-8"
            >
              Everything you need to know before you join. Can't find your answer?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="#download" variant="outline" size="md">
                Join the Waitlist
              </Button>
            </motion.div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
