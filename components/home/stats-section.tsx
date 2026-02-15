'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/constants'
import { useEffect, useRef, useState } from 'react'
import { containerVariants, itemVariants } from '@/lib/animations'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true)
      }
    }, { threshold: 0.5 })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let current = 0
    const increment = value / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [hasStarted, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      <span className="text-secondary">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <div className="mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
