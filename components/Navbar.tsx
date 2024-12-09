// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'People', href: '/people' },
  { name: 'Events', href: '/events' },
  { name: 'Jobs', href: '/jobs' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect screen size for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint is 768px
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
        }`}
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold" aria-label="Home">
            LINCONWAVES INNOVATION
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      isActive
                        ? 'text-blue-500 font-semibold'
                        : 'text-white hover:text-gray-300'
                    } transition-colors`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Hamburger Icon as Mobile Menu Toggle */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="w-12 h-12 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Open Menu"
        >
          {/* Hamburger Icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col justify-center items-center space-y-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Menu"
          >
            {/* Simple Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="text-center">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href;

              return (
                <li key={item.name} className="mb-6">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      isActive
                        ? 'text-blue-500 font-semibold'
                        : 'text-white hover:text-gray-300'
                    } text-3xl font-semibold transition-colors`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
