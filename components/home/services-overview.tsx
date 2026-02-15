'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Brain, Zap, Heart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const iconMap = {
  Brain: Brain,
  Zap: Zap,
  Heart: Heart,
}

export function ServicesOverview() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your business with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative rounded-2xl border border-border p-8 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 bg-gradient-to-br from-background to-background/50"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="pt-4">
                    <Link href="/services" className="inline-flex items-center text-secondary hover:text-secondary-foreground font-medium text-sm gap-2 group/link">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <Button size="lg">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
