import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export type LinkItem = {
  label: string
  href: string
  icon?: LucideIcon
}

export type Project = {
  title: string
  category: string
  description: string
  bullets: string[]
  tech: string[]
  image: string
  imageAlt: string
  github: string
  live?: string
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type JourneyItem = {
  title: string
  organization: string
  date: string
  role?: string
  description: string[]
}
