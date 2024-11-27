'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '../lib/utils'

export function ScrollSection({
  children,
  className,
  gradientFrom = 'from-purple-400',
  gradientTo = 'to-blue-500',
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'min-h-screen flex items-center justify-center transition-opacity duration-1000',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">{children}</div>
    </div>
  )
}
