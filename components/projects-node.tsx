"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import type { Project } from "@/types"

type ProjectsNodeProps = {
  projects: Project[]
}

export default function ProjectsNode({ projects }: ProjectsNodeProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openDetails = (project: Project) => {
    setSelectedProject(project)
  }

  const closeDetails = () => {
    setSelectedProject(null)
  }

  return (
    <div className="w-full h-full overflow-y-auto p-8 relative">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-6xl font-bold gradient-text mb-4 sm:mb-6">Projects</h1>
        <p className="text-lg sm:text-2xl text-muted-foreground">Things I've Helped Built</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2 items-start">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all flex flex-col"
          >
            {project.image && (
              <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}

            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-10 w-10"
                onClick={() => openDetails(project)}
              >
                <ExternalLink className="h-6 w-6" />
              </Button>
            </div>

            <p className="text-lg mb-4">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {project.liveUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/20 flex-1"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 border-secondary/20 flex-1"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered Modal for Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            onClick={closeDetails}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl max-h-[80vh] p-6 overflow-y-auto relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={closeDetails}
              >
                <X className="h-5 w-5" />
              </button>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              {selectedProject.image && (
                <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="text-base mb-4 leading-relaxed">{selectedProject.fullDescription}</p>
              {selectedProject.features && (
                <div className="mb-4">
                  <h4 className="text-lg font-bold mb-3">Features:</h4>
                  <ul className="list-disc list-inside text-base space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedProject.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/20 flex-1"
                    asChild
                  >
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 border-secondary/20 flex-1"
                    asChild
                  >
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
