import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85
      const nearBottom =
        window.scrollY + window.innerHeight > document.body.scrollHeight - 320
      setVisible(pastHero && !nearBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          style={{ width: 'min(calc(100vw - 2rem), 26rem)' }}
        >
          <div
            className="pointer-events-auto flex items-center gap-2 pl-3 pr-2 py-2 rounded-full border border-white/15 shadow-2xl"
            style={{ background: '#0d0e17' }}
          >
            {/* dot indicator */}
            <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />

            {/* text — hidden on very small screens to save space */}
            <span className="text-sm font-semibold text-white leading-none truncate">
              Try Scanvio Free
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 leading-none shrink-0">
              · No card · iOS &amp; Android
            </span>

            {/* CTA */}
            <a
              href="#download"
              className="ml-1 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-white shrink-0 transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)' }}
            >
              Get the App <ArrowRight size={11} />
            </a>

            {/* dismiss */}
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="p-1 text-gray-500 hover:text-white transition-colors rounded-full shrink-0"
              aria-label="Dismiss"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
