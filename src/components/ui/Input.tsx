import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-xl border border-cream bg-warm-white px-4 py-3 text-forest transition-all duration-300 placeholder:text-dark-gray/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/10',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/10',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
