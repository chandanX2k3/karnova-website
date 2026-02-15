'use client'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

// Note: metadata is commented as we're using 'use client'. 
// For proper metadata, create a separate metadata export in a non-client component.
// export const metadata: Metadata = {
//   title: 'Karnova - Deep Tech Innovation',
//   description: 'Where deep tech meets human mindset. AI, Quantum Computing, and Healthcare Technology solutions.',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
