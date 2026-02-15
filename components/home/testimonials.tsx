'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders for exceptional results and partnership.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full border-border/50 p-8 flex flex-col hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
