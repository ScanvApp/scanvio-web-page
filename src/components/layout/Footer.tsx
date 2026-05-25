import Logo from '../ui/Logo'

const LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Categories', href: '#categories' },
    { label: 'Download', href: '#download' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Cookie Policy', href: '/privacy#cookies' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-dark-800 border-t border-white/[0.06]">

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <Logo />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Scan any barcode or book cover and instantly see prices, reviews,
              and everything you need to decide with confidence.
            </p>
            <p className="text-xs text-gray-600">
              Follow us on social media — coming soon.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">{group}</p>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-white transition-colors duration-200 link-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Scanvio. All rights reserved.</span>
          <span>Made with care for smarter shoppers everywhere.</span>
        </div>
      </div>
    </footer>
  )
}
