import type { Value } from '@/types'

interface ValueCardProps {
  value: Value
}

export function ValueCard({ value }: ValueCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-5 h-px w-8 bg-sage/40" />
      <h3 className="text-lg font-bold text-forest">{value.title}</h3>
      <p className="mt-3 text-dark-gray leading-relaxed">{value.description}</p>
    </div>
  )
}
