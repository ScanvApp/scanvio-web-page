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
    description: 'Scan barcodes or covers in a snap.',
  },
  {
    icon: 'search',
    title: 'Get Smart Insights',
    description: 'See ratings, reviews, prices & more.',
  },
  {
    icon: 'tag',
    title: 'Find the Best Deals',
    description: 'Compare prices across multiple stores.',
  },
  {
    icon: 'grid',
    title: 'Beyond Books',
    description: 'Starting with books. Every other category is on the way.',
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
    title: 'See Everything',
    description:
      'Instant prices from 3 stores free (50+ on Pro), aggregated reviews, ratings, and full product details.',
  },
  {
    number: 4,
    icon: 'check-circle',
    title: 'Decide with Confidence',
    description:
      'Compare options, save to your wishlist, or buy directly — all without leaving the app.',
  },
]

export const FEATURES: Feature[] = [
  {
    icon: 'scan-line',
    title: 'Instant Barcode Scanning',
    description:
      'Point your camera at any barcode or book cover and get results in under a second. No tapping, no waiting.',
    accent: '#4F8EF7',
    size: 'wide',
  },
  {
    icon: 'bar-chart-2',
    title: 'Price Comparison',
    description:
      'Compare live prices across 3 stores free — Amazon, eBay, and ThriftBooks. Unlock 50+ stores with Pro.',
    accent: '#10B981',
  },
  {
    icon: 'star',
    title: 'Reviews & Ratings',
    description:
      'Aggregated ratings from Goodreads, Amazon, and more — all in one place, instantly.',
    accent: '#F59E0B',
  },
  {
    icon: 'clock',
    title: 'Full Scan History',
    description:
      'Every product you\'ve scanned is saved automatically. Search, filter, and add notes anytime.',
    accent: '#A855F7',
  },
  {
    icon: 'zap',
    title: 'AI Recommendations',
    description:
      'The more you scan, the smarter it gets. Discover products you\'ll love based on your taste.',
    accent: '#06B6D4',
    size: 'wide',
  },
  {
    icon: 'wifi-off',
    title: 'Works Offline',
    description:
      'Save items and browse your library without an internet connection.',
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
