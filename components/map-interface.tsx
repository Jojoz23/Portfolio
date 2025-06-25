"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CircleNode from "@/components/circle-node"
import ExperienceNode from "@/components/experience-node"
import EducationNode from "@/components/education-node"
import ContactNode from "@/components/contact-node"
import TechStackNode from "@/components/tech-stack-node"
import ProjectsNode from "@/components/projects-node"
import AboutMeNode from "@/components/about-me-node"
import type { Experience, Education, Contact, Project, TechCategory } from "@/types"
import { useTheme } from "next-themes"
import { ArrowLeft } from "lucide-react"

type MapInterfaceProps = {
  experiences: Experience[]
  education: Education[]
  contactInfo: Contact[]
  projects: Project[]
  techStack: TechCategory[]
  aboutMe: {
    bio: string
    interests: string[]
    goals: string
    image?: string
  }
}

export default function MapInterface({
  experiences,
  education,
  contactInfo,
  projects,
  techStack,
  aboutMe,
}: MapInterfaceProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [detailView, setDetailView] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleMainClick = () => {
    if (!expanded) {
      setExpanded(true)
    } else if (activeSection === "about") {
      setActiveSection(null)
      setDetailView(false)
    } else {
      setActiveSection("about")
      setDetailView(true)
    }
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    setDetailView(true)
  }

  const handleBackToMap = () => {
    setActiveSection(null)
    setDetailView(false)
  }

  // Calculate positions for the circular nodes
  const getNodePositions = () => {
    return {
      about: { x: 0, y: -160 },
      experience: { x: -160, y: -80 },
      education: { x: -160, y: 80 },
      techStack: { x: 0, y: 160 },
      projects: { x: 160, y: 80 },
      contact: { x: 160, y: -80 },
    }
  }

  const positions = getNodePositions()

  // Get gradient class for each section
  const getSectionGradient = (section: string) => {
    const darkGradients = {
      about: "bg-forest-teal",
      experience: "bg-teal-yellow",
      education: "bg-yellow-orange",
      techStack: "bg-orange-coral",
      projects: "bg-forest-teal",
      contact: "bg-teal-yellow",
    }

    const lightGradients = {
      about: "bg-light-forest-teal",
      experience: "bg-light-teal-yellow",
      education: "bg-light-yellow-orange",
      techStack: "bg-light-orange-coral",
      projects: "bg-light-forest-teal",
      contact: "bg-light-teal-yellow",
    }

    const gradients = isDark ? darkGradients : lightGradients
    return gradients[section as keyof typeof gradients] || (isDark ? "bg-full-gradient" : "bg-light-forest-teal")
  }

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutMeNode aboutMe={aboutMe} />
      case "experience":
        return <ExperienceNode experiences={experiences} />
      case "education":
        return <EducationNode education={education} />
      case "techStack":
        return <TechStackNode techStack={techStack} />
      case "projects":
        return <ProjectsNode projects={projects} />
      case "contact":
        return <ContactNode contactInfo={contactInfo} />
      default:
        return null
    }
  }

  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!detailView ? (
          // Map View
          <motion.div
            key="map-view"
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Main profile circle */}
            <motion.div
              className="relative z-10 cursor-pointer"
              animate={{
                scale: expanded ? 0.7 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={handleMainClick}
            >
              <CircleNode
                size={200}
                image="/images/profile.jpeg?height=200&width=200"
                label="Zuhayr Ahmed"
                subLabel={expanded ? (activeSection === "about" ? "View less" : "About Me") : "Click to explore"}
                expanded={expanded}
                glow={!expanded}
                active={activeSection === "about"}
              />
            </motion.div>

            {/* Section nodes */}
            <AnimatePresence>
              {expanded && (
                <>
                  {Object.entries(positions).map(([section, position], index) => {
                    if (section === "about") return null // Skip about as it's handled by main circle

                    const sectionLabels = {
                      experience: "Experience",
                      education: "Education",
                      techStack: "Tech Stack",
                      projects: "Projects",
                      contact: "Contact",
                    }

                    const sectionIcons = {
                      experience: "briefcase",
                      education: "graduation-cap",
                      techStack: "code",
                      projects: "folder",
                      contact: "mail",
                    } as const

                    return (
                      <motion.div
                        key={section}
                        className="absolute cursor-pointer"
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                        animate={{
                          x: position.x,
                          y: position.y,
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: 0.1 + index * 0.05,
                        }}
                        onClick={() => handleSectionClick(section)}
                      >
                        <CircleNode
                          size={110}
                          label={sectionLabels[section as keyof typeof sectionLabels]}
                          active={activeSection === section}
                          icon={sectionIcons[section as keyof typeof sectionIcons]}
                        />
                      </motion.div>
                    )
                  })}
                </>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Detail View - Full Page Content
          <motion.div
            key="detail-view"
            className="relative w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Floating Back Button */}
            <motion.button
              className={`fixed top-8 left-8 z-50 w-16 h-16 ${getSectionGradient(
                activeSection!,
              )} rounded-full shadow-2xl flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-primary/30 hover:scale-110 hover-glow`}
              onClick={handleBackToMap}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-6 w-6" />
            </motion.button>

            {/* Full Page Content */}
            <motion.div
              className="w-full h-full overflow-y-auto custom-scrollbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}





















