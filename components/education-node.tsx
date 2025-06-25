"use client"

import { useState } from "react"
import Image from "next/image"
import type { Education } from "@/types"
import { CalendarDays, GraduationCap, ChevronDown, ChevronUp, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type EducationNodeProps = {
  education: Education[]
}

export default function EducationNode({ education }: EducationNodeProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>([])

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="w-full h-full min-h-screen p-8">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold gradient-text mb-6">Education</h1>
        <p className="text-2xl text-muted-foreground">Academic Background</p>
      </div>

      {education.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-2xl text-muted-foreground">
            No education data available. Add your education history to the data!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {education.map((edu, index) => {
            const isExpanded = expandedIds.includes(edu.id)
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => toggleExpand(edu.id)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-3 flex items-center">
                      {edu.degree}
                      <span className="ml-4 text-secondary">
                        {isExpanded ? <ChevronUp className="h-8 w-8" /> : <ChevronDown className="h-8 w-8" />}
                      </span>
                    </h2>
                    <div className="flex items-center text-xl mb-3">
                      <GraduationCap className="h-6 w-6 mr-3 text-secondary" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-lg text-muted-foreground">
                      <CalendarDays className="h-5 w-5 mr-3 text-secondary/70" />
                      <span>
                        {new Date(edu.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {edu.endDate
                          ? new Date(edu.endDate).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })
                          : "Present"}
                      </span>
                    </div>
                  </div>
                </div>

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
                          <h3 className="text-xl font-bold mb-4 text-secondary">Field of Study</h3>
                          <p className="text-lg mb-6">{edu.field}</p>

                          {edu.description && (
                            <div className="mb-6">
                              <h3 className="text-xl font-bold mb-4 text-secondary">Details</h3>
                              <p className="text-lg leading-relaxed">{edu.description}</p>
                            </div>
                          )}

                          {edu.location && (
                            <div className="flex items-start">
                              <MapPin className="h-6 w-6 mr-3 mt-1 text-secondary" />
                              <div>
                                <h4 className="text-lg font-bold mb-2 text-secondary">Location</h4>
                                <p className="text-lg">{edu.location}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        {edu.image && (
                          <div className="overflow-hidden rounded-xl shadow-lg">
                            <Image
                              src={edu.image || "/placeholder.svg"}
                              alt={`${edu.degree} at ${edu.institution}`}
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
