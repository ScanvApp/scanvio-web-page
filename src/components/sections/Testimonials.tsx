import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Book collector, Chicago',
    avatar: 'SM',
    color: '#4F8EF7',
    rating: 5,
    quote:
      'Scanned 30 books at a library sale in under 2 minutes. Saved me from buying 3 I already owned and found 2 gems at prices I never would have known were that good.',
    featured: true,
  },
  {
    name: 'James T.',
    role: 'Student, Austin',
    avatar: 'JT',
    color: '#A855F7',
    rating: 5,
    quote:
      'Found the same textbook $40 cheaper on eBay — directly from the scan result. Paid for the app in literally the first use.',
  },
  {
    name: 'Priya K.',
    role: 'Avid reader, Seattle',
    avatar: 'PK',
    color: '#06B6D4',
    rating: 5,
    quote:
      'I use it every weekend at charity shops. The scan speed is wild — results show up before I can even put the book back on the shelf.',
  },
  {
    name: 'Marcus L.',
    role: 'Secondhand seller, Denver',
    avatar: 'ML',
    color: '#10B981',
    rating: 5,
    quote:
      'Finally an app that doesn\'t make me type titles in manually. Point, scan, done. Having reviews pulled from multiple sources in one place saves me so much time.',
  },
  {
    name: 'Emma R.',
    role: 'Beta tester, Portland',
    avatar: 'ER',
    color: '#F97316',
    rating: 5,
    quote:
      'Was skeptical about the AI recs. Three great reads in a row now in a genre I\'d never have picked on my own. Genuinely surprised.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.54 3.12L12 4.63l-2.5 2.44.59 3.43L7 8.77l-3.09 1.73.59-3.43L2 4.63l3.46-.51L7 1z" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({
  t,
  index,
  featured = false,
}: {
  t: typeof TESTIMONIALS[number]
  index: number
  featured?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4 ${featured ? 'lg:flex-row lg:items-start lg:p-8 lg:gap-8' : ''}`}
    >
      {/* Quote mark */}
      <div
        className={`text-5xl font-serif leading-none select-none shrink-0 ${featured ? 'lg:text-7xl' : ''}`}
        style={{ color: t.color, opacity: 0.4 }}
      >
        &ldquo;
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <Stars count={t.rating} />

        <p className={`text-gray-300 leading-relaxed ${featured ? 'lg:text-lg' : 'text-sm'}`}>
          {t.quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/6">
          <Avatar initials={t.avatar} color={t.color} />
          <div>
            <p className="text-white font-semibold text-sm">{t.name}</p>
            <p className="text-gray-500 text-xs">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const featured = TESTIMONIALS[0]
  const rest = TESTIMONIALS.slice(1)

  return (
    <section id="testimonials" className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-purple/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-4"
          >
            Early Users Love It
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Real people.{' '}
            <span className="gradient-text">Real scans.</span>
          </motion.h2>
        </div>

        {/* Featured testimonial */}
        <div className="mb-5">
          <TestimonialCard t={featured} index={0} featured />
        </div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rest.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i + 1} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-gray-600 mt-10"
        >
          From beta testers and early access members. Names used with permission.
        </motion.p>
      </div>
    </section>
  )
}
