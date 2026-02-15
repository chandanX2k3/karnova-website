'use client'

import { motion } from 'framer-motion'
import { benefits } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Star, Zap, Users, BookOpen, Clock, Heart } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Competitive Salary': Zap,
  'Equity Options': Star,
  'Mentorship': Users,
  'Learning Budget': BookOpen,
  'Flexible Schedule': Clock,
  'Health Benefits': Heart,
}

export function BenefitsGrid() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Intern at Karnova?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive benefits and opportunities for growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.title] || Star
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-all group bg-gradient-to-br from-background to-background/50"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
