import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Button from './Button'

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
          initial={{ y: 88, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 88, opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md pointer-events-none"
        >
          <div
            className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-white/15 shadow-2xl"
            style={{ background: '#0d0e17' }}
          >
            {/* Left */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-white leading-tight">
                Try Scanvio Free
              </span>
              <span className="text-[11px] text-gray-400 leading-tight mt-0.5">
                No card · No expiry · iOS &amp; Android
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 shrink-0">
              <Button href="#download" variant="primary" size="sm">
                Get the App <ArrowRight size={13} />
              </Button>
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
