'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function InternshipCTA() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/90 to-secondary/90">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/20 p-12 text-center bg-white/10 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            Ready to Jumpstart Your Career?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join Karnova Technologies' internship program. Work on real-world projects, gain expert mentorship, and build your future in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/internships/apply">
              <Button size="lg" variant="secondary" className="font-bold text-primary hover:bg-white/90 transform hover:scale-105 transition-all">
                Apply for Internship
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
