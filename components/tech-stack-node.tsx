"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import type { TechCategory } from "@/types"
import { useTheme } from "next-themes"

type TechStackNodeProps = {
  techStack: TechCategory[]
}

export default function TechStackNode({ techStack }: TechStackNodeProps) {
  const [activeTab, setActiveTab] = useState<string>(techStack[0]?.name || "")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Get gradient class for each category
  const getCategoryGradient = (index: number) => {
    const gradients = isDark
      ? ["bg-forest-teal", "bg-teal-yellow", "bg-yellow-orange", "bg-orange-coral"]
      : ["bg-light-forest-teal", "bg-light-teal-yellow", "bg-light-yellow-orange", "bg-light-orange-coral"]

    return gradients[index % gradients.length]
  }

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Tech Stack</h1>
        <p className="text-xl text-muted-foreground">Skills & Technologies I Work With</p>
      </div>

      <div className="flex-1">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full h-full">
          <div className="flex justify-center mb-8">
            <TabsList
              className="grid bg-glass backdrop-blur-md border border-white/20 p-2 rounded-2xl"
              style={{ gridTemplateColumns: `repeat(${techStack.length}, 1fr)` }}
            >
              {techStack.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="px-6 py-3 text-base font-medium rounded-xl"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {techStack.map((category, categoryIndex) => (
            <TabsContent key={category.name} value={category.name} className="w-full">
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover-lift border-0 shadow-lg glass">
                      <div className={`h-2 ${getCategoryGradient(categoryIndex)}`}></div>
                      <CardContent className="pt-6 pb-6">
                        <div className="flex flex-col items-center text-center gap-4">
                          {skill.icon && (
                            <div className="p-4 rounded-full bg-primary/10 text-3xl">
                              <span>{skill.icon}</span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-xl mb-2">{skill.name}</h3>
                            {skill.description && (
                              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
