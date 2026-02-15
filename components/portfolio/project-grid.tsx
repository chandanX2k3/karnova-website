'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { containerVariants, itemVariants } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = ['All', 'AI', 'Quantum', 'Healthcare', 'Web', 'Mobile']

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-secondary/10 text-foreground hover:bg-secondary/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layoutId={`project-${project.id}`}
            >
              <Card className="h-full border-border/50 overflow-hidden hover:border-secondary/50 transition-all group">
                <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                    {project.category} Project
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center text-secondary hover:text-secondary-foreground font-medium text-sm gap-2 group/link pt-2"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
