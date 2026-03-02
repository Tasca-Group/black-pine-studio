'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { mainNavItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-all duration-500 md:hidden',
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <div className="absolute inset-0 bg-forest/20 backdrop-blur-sm" onClick={onClose} />

      <div
        className={cn(
          'absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-warm-white/95 backdrop-blur-xl p-8 transition-transform duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-forest"
            aria-label="Menü schließen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-12 flex flex-col gap-8">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'text-lg transition-colors duration-300',
                pathname === item.href ? 'text-forest font-medium' : 'text-dark-gray hover:text-forest'
              )}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4">
            <Button href="/kontakt" className="w-full">
              Erstgespräch buchen
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}
