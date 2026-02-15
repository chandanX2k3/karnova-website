'use client'

import { motion } from 'framer-motion'
import { jobOpenings } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Briefcase, ArrowRight } from 'lucide-react'

export function JobOpenings() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our team and work on exciting projects.
          </p>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {jobOpenings.map((job) => (
            <motion.div key={job.id} variants={itemVariants}>
              <Card className="p-8 border-border/50 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{job.level}</Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>

                    <p className="text-muted-foreground">{job.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="md:self-start" size="lg">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
