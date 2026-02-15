'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { fadeInUp } from '@/lib/animations'
import { Mail, Phone, MapPin } from 'lucide-react'
import { companyInfo } from '@/lib/constants'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Have questions? Our team is here to help. Reach out to us using any of the methods below.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href={`tel:${companyInfo.phone}`} className="text-muted-foreground hover:text-secondary transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-border/50">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-secondary/10 text-secondary mb-6"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name *</label>
                    <Input
                      {...register('name')}
                      placeholder="Your name"
                      className="bg-background"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      {...register('email')}
                      placeholder="your@email.com"
                      type="email"
                      className="bg-background"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone (Optional)</label>
                    <Input
                      {...register('phone')}
                      placeholder="Your phone number"
                      type="tel"
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company (Optional)</label>
                    <Input
                      {...register('company')}
                      placeholder="Your company"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    {...register('message')}
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-40 resize-none bg-background"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
