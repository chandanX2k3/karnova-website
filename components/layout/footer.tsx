'use client'

import Link from 'next/link'
import { companyInfo, navLinks } from '@/lib/constants'
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: companyInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: companyInfo.twitter, label: 'Twitter' },
    { icon: Github, href: companyInfo.github, label: 'GitHub' },
  ]

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {companyInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {companyInfo.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Documentation', 'API Docs', 'Status'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{companyInfo.address}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
