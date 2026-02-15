'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { Breadcrumb } from '@/components/shared/breadcrumb'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function InternshipHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-background/50 pt-20 pb-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8 max-w-3xl"
        >
          <Breadcrumb />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Shape Your Career at Karnova
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our internship program and work on cutting-edge projects in AI, quantum computing, and healthcare technology. Learn from experts, build your portfolio, and grow your career.
            </p>
          </div>
          
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="group">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
