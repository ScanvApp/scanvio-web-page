import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }

  const variants = {
    primary:
      'gradient-btn text-white shadow-glow-blue hover:opacity-90 hover:shadow-glow-purple',
    outline:
      'border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileTap: { scale: 0.96 },
    whileHover: variant === 'primary' ? { scale: 1.03 } : { scale: 1.01 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  } as const

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  )
}
