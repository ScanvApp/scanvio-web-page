import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function AppStoreBadge() {
  return (
    <div className="relative flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 cursor-not-allowed select-none">
      <svg width="18" height="22" viewBox="0 0 18 22" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.95 11.6c-.02-2.35 1.92-3.48 2.01-3.54-1.1-1.6-2.8-1.82-3.4-1.84-1.45-.15-2.83.85-3.56.85-.73 0-1.86-.83-3.06-.8-1.57.02-3.02.91-3.83 2.31-1.63 2.82-.42 7.02 1.18 9.32.78 1.12 1.7 2.38 2.92 2.33 1.17-.05 1.62-.75 3.04-.75 1.42 0 1.82.75 3.05.73 1.26-.02 2.05-1.14 2.82-2.27.9-1.3 1.26-2.57 1.28-2.63-.02-.01-2.46-.94-2.47-3.71zM12.43 4.4c.65-.78 1.08-1.86.96-2.94-.93.04-2.05.62-2.72 1.39-.59.69-1.12 1.79-.98 2.85 1.04.07 2.09-.53 2.74-1.3z"/>
      </svg>
      <div>
        <div className="text-[10px] text-gray-400 leading-none">Download on the</div>
        <div className="text-sm font-semibold text-white leading-tight mt-0.5">App Store</div>
      </div>
      <span className="absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue">
        Soon
      </span>
    </div>
  )
}

function PlayStoreBadge() {
  return (
    <div className="relative flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 cursor-not-allowed select-none">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 1.5L9.5 10L0.5 18.5V1.5Z" fill="#4ADE80"/>
        <path d="M0.5 1.5L9.5 10L14 5.5L4.5 0.5L0.5 1.5Z" fill="#60A5FA"/>
        <path d="M0.5 18.5L9.5 10L14 14.5L4.5 19.5L0.5 18.5Z" fill="#F87171"/>
        <path d="M9.5 10L14 5.5L17 7.5V12.5L14 14.5L9.5 10Z" fill="#FBBF24"/>
      </svg>
      <div>
        <div className="text-[10px] text-gray-400 leading-none">Get it on</div>
        <div className="text-sm font-semibold text-white leading-tight mt-0.5">Google Play</div>
      </div>
      <span className="absolute -top-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue">
        Soon
      </span>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[220px]">
      {/* Glow behind phone */}
      <div className="absolute -inset-6 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none" />

      {/* Phone shell */}
      <div
        className="relative w-full rounded-[2.8rem] border border-white/10 shadow-2xl overflow-hidden"
        style={{ aspectRatio: '9/19', background: '#0d1117' }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-10" />

        {/* Screen */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
          style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e0b3a 55%, #0c1a2e 100%)' }}
        >
          {/* Status bar */}
          <div className="absolute top-8 left-4 right-4 flex justify-between items-center">
            <span className="text-[8px] text-white/40 font-medium">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-1.5 rounded-sm border border-white/30 relative">
                <div className="absolute inset-0.5 right-1 rounded-sm bg-white/50" />
              </div>
            </div>
          </div>

          {/* App icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 65%, #06B6D4 100%)' }}
          >
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M5 13 L5 6 L12 6"   stroke="white" strokeWidth="2"   strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
              <path d="M35 13 L35 6 L28 6"  stroke="white" strokeWidth="2"   strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
              <path d="M5 27 L5 34 L12 34"  stroke="white" strokeWidth="2"   strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
              <path d="M35 27 L35 34 L28 34" stroke="white" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.95" />
              <path d="M10 22 C13 17,17 15,20 15 C23 15,27 17,30 22 C27 27,23 29,20 29 C17 29,13 27,10 22 Z" fill="none" stroke="white" strokeWidth="1.6" strokeOpacity="0.95" />
              <circle cx="20" cy="22" r="4.5" fill="white" fillOpacity="0.15" />
              <circle cx="20" cy="22" r="4.5" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="20" cy="22" r="2.5" fill="white" fillOpacity="0.9" />
              <circle cx="18.5" cy="20.5" r="1" fill="white" fillOpacity="0.95" />
            </svg>
          </div>

          <p className="text-white font-bold text-xs tracking-tight">Scanvio</p>
          <p className="text-gray-500 text-[9px] mt-0.5 mb-4">Coming Soon</p>

          {/* Simulated scan UI card */}
          <div className="w-full rounded-xl bg-white/5 border border-white/8 p-3">
            {/* Scan area */}
            <div className="w-full h-16 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center mb-2 relative overflow-hidden">
              {/* Scanner line animation */}
              <div className="absolute inset-x-0 h-px bg-brand-blue/60" style={{ top: '40%' }} />
              {/* Corners */}
              {[['top-1 left-1','border-t border-l'],['top-1 right-1','border-t border-r'],['bottom-1 left-1','border-b border-l'],['bottom-1 right-1','border-b border-r']].map(([pos, border]) => (
                <div key={pos} className={`absolute ${pos} w-3 h-3 ${border} border-brand-blue/70`} />
              ))}
            </div>
            {/* Fake result rows */}
            {[80, 60, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-2 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-blue/40 shrink-0" />
                <div className={`h-1.5 rounded-full bg-white/10`} style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

function QRPlaceholder() {
  const cells = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0],
    [0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1],
    [1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1],
  ]

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
        <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(19, 1fr)`, width: 76 }}>
          {cells.flat().map((cell, i) => (
            <div
              key={i}
              className="rounded-[1px]"
              style={{ width: 4, height: 4, background: cell ? 'rgba(255,255,255,0.55)' : 'transparent' }}
            />
          ))}
        </div>
      </div>
      <p className="text-[10px] text-gray-500">Scan to join — link coming soon</p>
    </div>
  )
}

export default function Download() {
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
      const url  = import.meta.env.VITE_SUPABASE_URL
      const key  = import.meta.env.VITE_SUPABASE_ANON_KEY

      const res = await fetch(`${url}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key,
          'Authorization': `Bearer ${key}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source: 'website' }),
      })

      // 409 = duplicate email — treat as success so we don't leak who's signed up
      if (res.status === 409 || res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('failed')
      }
    } catch {
      setError('Something went wrong — please try again or email us at info@scanv.io')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="download" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-purple/10 blur-[130px]" />
        <div className="absolute top-1/3 left-[15%] w-[350px] h-[350px] rounded-full bg-brand-blue/8 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Early Access
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Be First to{' '}
            <span className="gradient-text">Scan.</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-base lg:text-lg leading-relaxed"
          >
            Scanvio is launching soon on iOS and Android. Join the waitlist and be
            the first to know — plus get early access perks.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — form + badges */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            {/* Email form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20"
              >
                <CheckCircle2 className="text-emerald-400 shrink-0" size={28} />
                <div>
                  <p className="text-white font-semibold">You're on the list!</p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    We'll email you the moment Scanvio launches.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-70 shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)' }}
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Join Waitlist <ArrowRight size={16} /></>
                  )}
                </button>
              </form>
            )}

            {/* Error message */}
            {error && (
              <p className="text-sm text-red-400 -mt-4">{error}</p>
            )}

            {/* Honest launch note */}
            <p className="text-sm text-gray-500">
              Be among the first to try Scanvio —{' '}
              <span className="text-white font-medium">launching soon on iOS & Android.</span>
            </p>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Store badges */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
                Available soon on
              </p>
              <div className="flex flex-wrap gap-3">
                <AppStoreBadge />
                <PlayStoreBadge />
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Already have early access?{' '}
                <span className="text-brand-blue cursor-pointer hover:underline">Sign in</span>
              </p>
            </div>
          </motion.div>

          {/* Right — phone mockup + QR */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 order-1 lg:order-2"
          >
            <PhoneMockup />
            <QRPlaceholder />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
