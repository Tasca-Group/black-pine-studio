export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  features: string[]
}

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  services: string[]
  image: string
  featured: boolean
}

export interface Testimonial {
  name: string
  company: string
  role: string
  text: string
  image?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Value {
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}
