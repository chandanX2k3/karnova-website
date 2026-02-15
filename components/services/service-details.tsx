'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Brain, Zap, Heart, CheckCircle2 } from 'lucide-react'

const iconMap = {
  Brain: Brain,
  Zap: Zap,
  Heart: Heart,
}

export function ServiceDetails() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl space-y-20">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap]
          const isEven = idx % 2 === 0

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:grid-cols-2'
              }`}
            >
              {/* Content */}
              <div className={isEven ? 'lg:col-span-1' : 'lg:col-span-1 lg:order-2'}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="font-semibold">Key Features:</h4>
                    {service.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        variants={itemVariants}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-3">
                    <h4 className="font-semibold">Use Cases:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enterprise transformation</li>
                      <li>• Product innovation</li>
                      <li>• Operational efficiency</li>
                      <li>• Competitive advantage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative w-full aspect-square rounded-2xl border border-secondary/20 overflow-hidden ${
                  isEven ? 'lg:col-span-1 lg:order-2' : 'lg:col-span-1'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon className="w-24 h-24 text-secondary/30 mx-auto" />
                    <p className="text-muted-foreground text-sm">Service Visualization</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
