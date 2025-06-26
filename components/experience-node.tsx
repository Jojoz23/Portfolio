"use client"

import { useState } from "react"
import Image from "next/image"
import type { Experience } from "@/types"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase, ChevronDown, ChevronUp, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type ExperienceNodeProps = {
  experiences: Experience[]
}

export default function ExperienceNode({ experiences }: ExperienceNodeProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>([])

  const toggleExpand = (id: string) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="w-full h-full min-h-screen p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-6xl font-bold gradient-text mb-4 sm:mb-6">
          Professional Experience
        </h1>
        <p className="text-lg sm:text-2xl text-muted-foreground">
          My Career Journey
        </p>
      </div>

      {/* No Data Fallback */}
      {experiences.length === 0 ? (
        <div className="flex-1 flex items-center justify-center py-20">
          <p className="text-lg sm:text-2xl text-muted-foreground">
            No experience data available. Add some experiences to your data!
          </p>
        </div>
      ) : (
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIds.includes(exp.id)

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-4 sm:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                {/* Summary Row */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-4 sm:mb-6">
                  {/* Left: Position & Company */}
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 flex items-center">
                      {exp.position}
                      <span className="ml-2 sm:ml-4 text-primary">
                        {isExpanded
                          ? <ChevronUp className="h-6 w-6 sm:h-8 sm:w-8" />
                          : <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
                        }
                      </span>
                    </h2>
                    <div className="flex items-center text-base sm:text-xl mb-2 sm:mb-3">
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-primary" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-sm sm:text-lg text-muted-foreground">
                      <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary/70" />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        {" – "}
                        {exp.endDate
                          ? new Date(exp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
                          : "Present"
                        }
                      </span>
                    </div>
                  </div>

                  {/* Right: Type Badge */}
                  <Badge
                    variant="secondary"
                    className="mt-3 sm:mt-0 ml-0 sm:ml-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    {exp.type}
                  </Badge>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid gap-8 lg:grid-cols-2 pt-6 border-t border-white/20">
                        <div>
                          <h3 className="text-xl font-bold mb-4 text-primary">Description</h3>
                          <p className="text-lg leading-relaxed mb-6">{exp.description}</p>

                          {exp.location && (
                            <div className="flex items-start">
                              <MapPin className="h-6 w-6 mr-3 mt-1 text-primary" />
                              <div>
                                <h4 className="text-lg font-bold mb-2 text-primary">Location</h4>
                                <p className="text-lg">{exp.location}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {exp.image && (
                          <div className="overflow-hidden rounded-xl shadow-lg">
                            <Image
                              src={exp.image || "/placeholder.svg"}
                              alt={`${exp.position} at ${exp.company}`}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
