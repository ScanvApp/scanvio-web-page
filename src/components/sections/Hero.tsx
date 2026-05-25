import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button'
import HeroPhone from '../ui/HeroPhone'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function HeroEmailForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    try {
      const url = import.meta.env.VITE_SUPABASE_URL
      const key = import.meta.env.VITE_SUPABASE_ANON_KEY

      const res = await fetch(`${url}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source: 'hero' }),
      })

      if (res.status === 409 || res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('failed')
      }
    } catch {
      setError('Something went wrong — please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 max-w-md"
      >
        <CheckCircle2 className="text-emerald-400 shrink-0" size={22} />
        <div>
          <p className="text-white font-semibold text-sm">You're on the list!</p>
          <p className="text-gray-400 text-xs mt-0.5">We'll email you the moment Scanvio launches.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-2 max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-70 shrink-0"
          style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)' }}
        >
          {loading
            ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            : <><span>Join Waitlist</span> <ArrowRight size={15} /></>
          }
        </button>
      </form>
      {error && <p className="text-xs text-red-400 px-1">{error}</p>}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Strong purple blob behind eye */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-brand-purple/20 blur-[100px]" />
        {/* Blue accent closer to centre */}
        <div className="absolute top-1/2 right-[28%] -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-brand-blue/18 blur-[80px]" />
        {/* Cyan tint at bottom-right */}
        <div className="absolute bottom-[5%] right-[5%] w-[320px] h-[320px] rounded-full bg-brand-cyan/10 blur-[90px]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-28">

          {/* Left — copy */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 bg-white/5 border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
                </span>
                Scan. Discover. Decide.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                Scan Anything.
                <br />
                See{' '}
                <span className="gradient-text">Everything.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-md"
            >
              Scan any barcode or book cover and instantly know if the price is fair,
              what real readers think, and where to get it cheaper. Starting with books.
            </motion.p>

            {/* Email form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="pt-2"
            >
              <HeroEmailForm />
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.36}
            >
              <Button href="#how-it-works" variant="outline" size="lg">
                See How It Works <ArrowRight size={18} />
              </Button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.42}
              className="flex flex-wrap items-center gap-x-5 gap-y-1.5"
            >
              {['Free forever', 'No credit card', 'iOS & Android'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/70 shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — animated phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  )
}
