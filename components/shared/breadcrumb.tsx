'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
  const pathname = usePathname()
  
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: '/' + segment,
    }))

  if (segments.length === 0) return null

  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
        Home
      </Link>
      {segments.map((segment, idx) => (
        <div key={segment.path} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {idx === segments.length - 1 ? (
            <span className="text-foreground font-medium">{segment.name}</span>
          ) : (
            <Link href={segment.path} className="text-muted-foreground hover:text-foreground transition-colors">
              {segment.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
