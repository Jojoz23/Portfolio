export type Experience = {
  id: string
  position: string
  company: string
  type: string
  location?: string
  startDate: Date | string
  endDate?: Date | string | null
  description: string
  image?: string
}

export type Education = {
  id: string
  institution: string
  degree: string
  field: string
  location?: string
  startDate: Date | string
  endDate?: Date | string | null
  description?: string
  image?: string
}

export type Contact = {
  id: string
  email?: string
  phone?: string
  location?: string
  website?: string
  github?: string
  linkedin?: string
  twitter?: string
}

export type Skill = {
  name: string
  description?: string
  icon?: string
}

export type TechCategory = {
  name: string
  skills: Skill[]
}

export type Project = {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  image?: string
  features?: string[]
  liveUrl?: string
  githubUrl?: string
}
