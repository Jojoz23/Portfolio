"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Heart } from "lucide-react"

type AboutMeNodeProps = {
  aboutMe: {
    bio: string
    interests: string[]
    goals: string
    image?: string
  }
}

export default function AboutMeNode({ aboutMe }: AboutMeNodeProps) {
  return (
    <div className="w-full h-full min-h-screen p-4 sm:p-8">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-4 sm:mb-6">About Me</h1>
        <p className="text-lg sm:text-2xl text-muted-foreground">Get to Know Me</p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
        {/* Profile Image + Resume Button */}
        <div className="lg:col-span-2 flex flex-col items-center lg:sticky lg:top-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-3xl overflow-hidden mb-6 sm:mb-8 shadow-2xl glass border border-white/20"
          >
            <Image
              src={aboutMe.image || "/placeholder.svg?height=400&width=400"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </motion.div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
              <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-3 space-y-8 sm:space-y-12">
          {/* Bio */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-primary">Hello, I'm Zuhayr Ahmed</h2>
            <p className="text-base sm:text-xl leading-relaxed">{aboutMe.bio}</p>
          </motion.div>

          {/* Interests & Passions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-secondary">Interests & Passions</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {aboutMe.interests.map((interest, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-secondary/20 to-accent/20 text-foreground hover:from-secondary/30 hover:to-accent/30 px-4 sm:px-6 py-1 sm:py-3 text-sm sm:text-lg"
                >
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-3 text-secondary" />
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Professional Goals */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-accent">Professional Goals</h3>
            <p className="text-base sm:text-xl leading-relaxed">{aboutMe.goals}</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
