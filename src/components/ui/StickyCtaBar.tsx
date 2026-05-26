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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2"
          style={{ background: 'linear-gradient(to top, #05060F 60%, transparent)' }}
        >
          <div
            className="max-w-md mx-auto flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-white/10 shadow-2xl"
            style={{ background: '#0d0e17' }}
          >
            {/* Left */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-white leading-tight">
                Try Scanvio Free
              </span>
              <span className="text-xs text-gray-400 leading-tight mt-0.5">
                No card · No expiry · iOS &amp; Android
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="#download"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)' }}
              >
                Get the App <ArrowRight size={12} />
              </a>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="p-1.5 text-gray-500 hover:text-white transition-colors rounded-lg"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
