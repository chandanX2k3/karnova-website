'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export function CompanyStory() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Karnova was founded with a singular vision: to bridge the gap between deep technological innovation and real-world impact. We saw an opportunity to bring together the brightest minds in AI, quantum computing, and healthcare technology to solve problems that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-secondary">Our Mission</h3>
              <p className="text-muted-foreground">
                To create transformative technology solutions that empower enterprises and improve lives through innovation, integrity, and collaboration.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-secondary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the trusted partner for enterprises seeking to harness the power of AI, quantum computing, and emerging technologies for competitive advantage.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="space-y-3 p-6 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-secondary">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence in execution, relentless innovation, human-centered design, and unwavering commitment to our clients' success.
              </p>
            </motion.div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Today, we're proud to have worked with over 85 clients, completed 150+ projects, and built a team of 45+ exceptional technologists. But our journey is just beginning. We're excited about the future and the opportunities ahead.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
