import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={5}
          className={cn(
            'w-full rounded-xl border border-cream bg-warm-white px-4 py-3 text-forest transition-all duration-300 placeholder:text-dark-gray/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/10 resize-y',
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

Textarea.displayName = 'Textarea'
