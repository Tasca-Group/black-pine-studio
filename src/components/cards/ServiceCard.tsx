import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/leistungen#${service.slug}`}
      className="group block rounded-2xl border border-cream bg-warm-white p-8 transition-all duration-500 hover:border-sage/30 hover:bg-beige/50"
    >
      <h3 className="text-xl font-bold text-forest transition-colors duration-300 group-hover:text-pine">
        {service.shortTitle}
      </h3>
      <p className="mt-3 text-dark-gray leading-relaxed">
        {service.description}
      </p>
      <div className="mt-6 inline-flex items-center text-sm font-medium text-sage transition-colors duration-300 group-hover:text-pine">
        Mehr erfahren
        <svg className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
