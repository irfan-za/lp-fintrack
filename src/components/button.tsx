import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-8 rounded-full font-sans font-medium text-[16px] leading-none transition-all duration-200'

  const variants = {
    primary: 'bg-ember px-24 py-14 text-obsidian hover:bg-[#e64800] hover:-translate-y-0.5',
    secondary:
      'border-[1.5px] border-obsidian px-24 py-16 text-obsidian hover:bg-limestone',
    ghost: 'px-12 py-0 text-obsidian/70 hover:text-obsidian',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
