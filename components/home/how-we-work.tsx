'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'

export function HowWeWork() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process delivers results every single time.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, idx) => (
            <motion.div key={step.number} variants={itemVariants}>
              <div className="relative">
                {/* Number badge */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl"
                    >
                      {step.number}
                    </motion.div>
                    {/* Connecting line (hidden on last item) */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-secondary to-accent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
