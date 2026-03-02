'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { mainNavItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-warm-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-cream'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-bold font-[family-name:var(--font-heading)] text-forest tracking-tight">
              Black Pine
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors duration-300',
                    pathname === item.href ? 'text-forest font-medium' : 'text-dark-gray hover:text-forest'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/kontakt" size="sm">
                Erstgespräch
              </Button>
            </div>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Menü öffnen"
            >
              <span className="block h-px w-5 bg-forest" />
              <span className="block h-px w-5 bg-forest" />
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  )
}
