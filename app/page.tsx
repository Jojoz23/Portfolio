import MapInterface from "@/components/map-interface"
import { experienceData, educationData, contactData, techStackData, projectsData, aboutMeData } from "@/data/data"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-br from-background via-background to-muted overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-4xl relative z-10 py-20">
        <MapInterface
          experiences={experienceData}
          education={educationData}
          contactInfo={contactData}
          techStack={techStackData}
          projects={projectsData}
          aboutMe={aboutMeData}
        />
      </div>
    </main>
  )
}
