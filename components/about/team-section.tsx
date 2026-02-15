'use client'

import { motion } from 'framer-motion'
import { teamMembers } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Linkedin, Twitter } from 'lucide-react'

export function TeamSection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders and innovators passionate about building the future.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-secondary/10 to-accent/10 border border-border/50 group-hover:border-secondary/50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  {member.name}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-secondary font-medium text-sm mb-2">{member.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              
              {/* Social Links */}
              <div className="flex gap-2">
                <a
                  href={member.social.linkedin}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
