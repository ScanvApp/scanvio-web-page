import type { NavLink, FeatureCard, Feature, Step, Category } from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Categories', href: '#categories' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About Us', href: '#about' },
]

export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: 'scan',
    title: 'Scan Instantly',
    description: 'Sub-second barcode and ISBN recognition — no button press needed.',
  },
  {
    icon: 'search',
    title: 'ScanvEscore™',
    description: 'A 0–100 profit score built on ROI, sales rank, and FBA competition — on every scan.',
  },
  {
    icon: 'tag',
    title: 'Source at the Right Price',
    description: 'Compare live FBA prices and net margins across 50+ stores at the point of sourcing.',
  },
  {
    icon: 'grid',
    title: 'Beyond Books',
    description: 'Books at launch. Electronics, fashion, and groceries are next.',
  },
]

export const STEPS: Step[] = [
  {
    number: 1,
    icon: 'download',
    title: 'Download the App',
    description:
      'Get Scanvio free on iOS or Android. No account required to start scanning right away.',
  },
  {
    number: 2,
    icon: 'camera',
    title: 'Point & Scan',
    description:
      'Aim your camera at any barcode or book cover. Scanvio recognises it in under a second.',
  },
  {
    number: 3,
    icon: 'layers',
    title: 'Get Your Signal',
    description:
      'ScanvEscore, sales rank, live FBA competition, and net profit — all on one screen, in under a second.',
  },
  {
    number: 4,
    icon: 'check-circle',
    title: 'Buy or Pass — Fast',
    description:
      'GoSignal gives you a clear BUY IT or PASS based on your own thresholds. Process hundreds of books per hour with no second-guessing.',
  },
]

export const FEATURES: Feature[] = [
  {
    icon: 'scan-line',
    title: 'Instant Barcode Scanning',
    description:
      'Point your camera at any barcode or book cover and get a full profit signal in under a second.',
    accent: '#4F8EF7',
    size: 'wide',
  },
  {
    icon: 'bar-chart-2',
    title: 'Price Comparison',
    description:
      'Live prices across 3 stores free — Amazon, eBay, and ThriftBooks. Unlock 50+ stores with Pro.',
    accent: '#10B981',
  },
  {
    icon: 'star',
    title: 'Reviews & Ratings',
    description:
      'Aggregated ratings from Goodreads and Amazon — useful context when rank alone doesn\'t tell the full story.',
    accent: '#F59E0B',
  },
  {
    icon: 'clock',
    title: 'Full Scan History',
    description:
      'Every scan saved with ASIN, score, BSR, and price. Search or filter by title, ISBN, or author.',
    accent: '#A855F7',
  },
  {
    icon: 'zap',
    title: 'AI Recommendations',
    description:
      'Surfaces books that flip consistently in your price range, based on your actual scan and buy history.',
    accent: '#06B6D4',
    size: 'wide',
  },
  {
    icon: 'wifi-off',
    title: 'Works Offline',
    description:
      'Cached BSR and pricing data works with no signal — critical at library sales and estate sales.',
    accent: '#6B7280',
  },
]

export const CATEGORIES: Category[] = [
  { icon: 'book-open',        label: 'Books',       status: 'available',   subtitle: 'Available Now', color: '#4F8EF7' },
  { icon: 'smartphone',       label: 'Electronics', status: 'coming-soon', subtitle: 'Coming Soon',   color: '#10B981' },
  { icon: 'shirt',            label: 'Fashion',     status: 'coming-soon', subtitle: 'Coming Soon',   color: '#A855F7' },
  { icon: 'shopping-basket',  label: 'Groceries',   status: 'coming-soon', subtitle: 'Coming Soon',   color: '#F97316' },
  { icon: 'more-horizontal',  label: '& More',      status: 'coming-soon', subtitle: 'Stay Tuned',    color: '#6B7280' },
]
