import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
} & (
  | { href: string; onClick?: never; type?: never; disabled?: never }
  | { href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>
)

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-forest text-warm-white hover:bg-pine',
  secondary: 'bg-brown text-warm-white hover:bg-sand',
  outline: 'border border-forest/20 text-forest hover:bg-forest hover:text-warm-white',
  ghost: 'text-forest hover:text-pine',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { href: _, ...buttonProps } = props as { href?: never } & React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
