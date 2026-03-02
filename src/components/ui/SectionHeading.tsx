import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 lg:mb-20', centered && 'text-center', className)}>
      <h2 className="text-3xl font-bold text-forest sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg text-dark-gray" style={centered ? { margin: '1.25rem auto 0' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
