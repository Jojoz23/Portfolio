"use client"

import type { Contact } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type ContactNodeProps = {
  contactInfo: Contact[]
}

export default function ContactNode({ contactInfo }: ContactNodeProps) {
  const contact = contactInfo[0] || {
    id: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
  }

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-6xl font-bold gradient-text mb-4 sm:mb-6">Contact Me</h1>
        <p className="text-lg sm:text-2xl text-muted-foreground">Let's Connect</p>
      </div>

      <div className="w-full max-w-full sm:max-w-2xl">
        <Card className="glass border-0 shadow-2xl">
          <CardContent className="pt-6 pb-6 px-4 sm:pt-12 sm:pb-12 sm:px-12">
            {contactInfo.length === 0 ? (
              <p className="text-center text-base sm:text-xl text-muted-foreground">
                No contact information available. Add your contact details to the data!
              </p>
            ) : (
              <div className="space-y-8">
                {contact.email && (
                  <motion.div
                    className="flex items-center flex-wrap text-base sm:text-lg overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="p-4 rounded-full bg-primary/10 mr-4 sm:mr-6 flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:underline hover:text-primary transition-colors truncate"
                      title={contact.email}
                    >
                      {contact.email}
                    </a>
                  </motion.div>
                )}

                {contact.phone && (
                  <motion.div
                    className="flex items-center flex-wrap text-base sm:text-lg overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="p-4 rounded-full bg-secondary/10 mr-4 sm:mr-6 flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:underline hover:text-secondary transition-colors truncate"
                      title={contact.phone}
                    >
                      {contact.phone}
                    </a>
                  </motion.div>
                )}

                {contact.location && (
                  <motion.div
                    className="flex items-center flex-wrap text-base sm:text-lg overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="p-4 rounded-full bg-accent/10 mr-4 sm:mr-6 flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <span className="truncate" title={contact.location}>
                      {contact.location}
                    </span>
                  </motion.div>
                )}

                <motion.div
                  className="flex flex-wrap gap-4 mt-8 sm:mt-12 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {contact.website && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/20"
                    >
                      <a href={contact.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-primary" />
                        Website
                      </a>
                    </Button>
                  )}

                  {contact.github && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 border-secondary/20"
                    >
                      <a href={contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-secondary" />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {contact.linkedin && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border-accent/20"
                    >
                      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-accent" />
                        LinkedIn
                      </a>
                    </Button>
                  )}

                  {contact.twitter && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border-primary/20"
                    >
                      <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-primary" />
                        Twitter
                      </a>
                    </Button>
                  )}
                </motion.div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}