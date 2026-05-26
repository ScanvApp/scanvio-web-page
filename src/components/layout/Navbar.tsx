import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../lib/constants'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_LINKS.forEach(({ href }) => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(href) },
        { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900 lg:bg-dark-900/90 lg:backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={isHome ? link.href : `/${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                  activeLink === link.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href={isHome ? '#download' : '/#download'} variant="primary" size="md">
            Get the App
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-dark-800 border-b border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={() => handleNavClick(link.href)}
                    className={`block py-3 text-sm font-medium border-b border-white/5 transition-colors duration-200 ${
                      activeLink === link.href
                        ? 'text-brand-blue'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4 pb-2">
                <Button href={isHome ? '#download' : '/#download'} variant="primary" size="md" className="w-full justify-center">
                  Get the App
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
