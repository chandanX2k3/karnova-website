'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Breadcrumb } from '@/components/shared/breadcrumb'

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background to-background/50 pt-20 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            About Karnova
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collective of visionary technologists dedicated to bridging the gap between cutting-edge innovation and real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
