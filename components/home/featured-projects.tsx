'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our latest and greatest innovations.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="flex justify-center">
          <Carousel className="w-full max-w-4xl">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.map((project, idx) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full border-border/50 overflow-hidden hover:border-secondary/50 transition-all group">
                      <div className="relative aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 overflow-hidden">
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                          Project Image
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors">
                            {project.title}
                          </h3>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Link
                          href="/portfolio"
                          className="inline-flex items-center text-secondary hover:text-secondary-foreground font-medium text-sm gap-1 group/link"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <Button size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
