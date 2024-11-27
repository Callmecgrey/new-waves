'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Products', href: '#' },
  { name: 'Technologies', href: '#' },
  { name: 'People', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Jobs', href: '#' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-bold">LINCONWAVES INNOVATION</a>
        </Link>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <a className="text-white hover:text-gray-300 transition-colors">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
