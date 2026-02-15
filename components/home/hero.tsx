'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, Lightbulb, Target } from 'lucide-react'
import { fadeInUp, fadeInDown } from '@/lib/animations'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary/10 pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 flex flex-col items-center text-center z-10">

        {/* Brand Name / Logo Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          className="mb-6 flex flex-col items-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-primary flex items-center gap-2">
            <span className="text-secondary text-4xl">✦</span> KARNOVA <span className="font-light">TECHNOLOGIES</span>
          </h2>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-primary max-w-4xl"
        >
          Unlock Your Future With Our <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            ONLINE INTERNSHIP
          </span> <br />
          OPPORTUNITIES!
        </motion.h1>

        {/* Feature Icons Row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 mb-12 w-full max-w-3xl"
        >
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Briefcase size={32} />
            </div>
            <h3 className="font-bold text-lg mb-1">Real-World</h3>
            <p className="text-sm text-muted-foreground">Experience</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform scale-105">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary">
              <Lightbulb size={32} />
            </div>
            <h3 className="font-bold text-lg mb-1">Learn & Grow</h3>
            <p className="text-sm text-muted-foreground">Expert Guidance</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
              <Target size={32} />
            </div>
            <h3 className="font-bold text-lg mb-1">Boost Your</h3>
            <p className="text-sm text-muted-foreground">Career</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/internships/apply">
            <Button size="xl" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-xl hover:shadow-2xl transition-all rounded-full px-8 py-6 text-lg font-bold">
              Apply Now & Join Our Team!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Company Description - Replacing standard hero subtext */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.7 }}
          className="mt-12 text-muted-foreground max-w-2xl text-lg leading-relaxed border-t border-border/50 pt-8"
        >
          Karnova Technologies is a growing startup software firm dedicated to building innovative digital solutions while nurturing the next generation of tech professionals through practical learning opportunities.
        </motion.p>

      </div>
    </section>
  )
}

