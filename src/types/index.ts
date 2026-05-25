export interface NavLink {
  label: string
  href: string
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  accent: string
  size?: 'normal' | 'wide' | 'tall'
}

export interface Step {
  number: number
  icon: string
  title: string
  description: string
}

export interface Category {
  icon: string
  label: string
  status: 'available' | 'coming-soon'
  subtitle: string
  color: string
}
