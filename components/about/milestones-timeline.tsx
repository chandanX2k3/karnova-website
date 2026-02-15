'use client'

import { motion } from 'framer-motion'
import { milestones } from '@/lib/constants'
import { itemVariants } from '@/lib/animations'

export function MilestonesTimeline() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key milestones in our path to innovation and growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex gap-8"
            >
              {/* Timeline line and dot */}
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background ring-2 ring-secondary" />
                {idx < milestones.length - 1 && (
                  <div className="absolute top-8 w-1 h-24 bg-gradient-to-b from-secondary to-secondary/20" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1 flex-1">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-secondary">{milestone.year}</p>
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
