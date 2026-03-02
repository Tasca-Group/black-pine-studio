import type { NavItem } from '@/types'

export const mainNavItems: NavItem[] = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const footerNavItems = {
  leistungen: [
    { label: 'Web Development & Design', href: '/leistungen#webentwicklung' },
    { label: 'Marketing', href: '/leistungen#marketing' },
    { label: 'Apps & Dashboards', href: '/leistungen#apps' },
    { label: 'Newsletter & Funnels', href: '/leistungen#funnels' },
    { label: 'Business Consulting', href: '/leistungen#consulting' },
  ],
  unternehmen: [
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
}
