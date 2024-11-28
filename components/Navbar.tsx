// components/Navbar.tsx

'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiMonkey } from 'react-icons/gi'; // Import the monkey icon
import { XMarkIcon } from '@heroicons/react/24/outline'; // Close icon
import dynamic from 'next/dynamic';
import { ReactourStep } from 'reactour'; // Import the type

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'People', href: '/people' },
  { name: 'Events', href: '/events' },
  { name: 'Jobs', href: '/jobs' },
];

// Dynamically import 'reactour' with SSR disabled
const Tour = dynamic(() => import('reactour'), { ssr: false });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  // Control tour visibility based on screen size
  useEffect(() => {
    if (isMobile) {
      setIsTourOpen(true);
    } else {
      setIsTourOpen(false);
    }
  }, [isMobile]);

  // Disable scrolling when the menu or tour is open
  useEffect(() => {
    if (isMenuOpen || isTourOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen, isTourOpen]);

  // Define the tour steps with explicit typing
  const tourSteps: ReactourStep[] = [
    {
      selector: '.monkey-icon',
      content: 'Click here to open the menu!',
      position: 'top', // Must match one of the allowed positions
    },
  ];

  return (
    <>
      {/* React Tour Component */}
      {isMobile && (
        <Tour
          isOpen={isTourOpen}
          steps={tourSteps}
          onRequestClose={() => setIsTourOpen(false)}
          accentColor="#8a2be2"
          className="font-yourfont"
          styles={{
            mask: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            },
            tooltip: {
              backgroundColor: '#000000',
              color: '#000000', 
              border: 'none', 
              boxShadow: 'none', 
            },
            button: {
              backgroundColor: '#ffffff', 
              color: '#000000', 
              border: 'none',
            },
            close: {
              color: '#ffffff', 
              backgroundColor: 'transparent',
              border: 'none',
            },
            highlighted: {
              boxShadow: 'none', 
              border: 'none',
            },
          }}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            LINCONWAVES INNOVATION
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Floating Monkey Icon for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-3 bg-black bg-opacity-70 rounded-full text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white monkey-icon"
          aria-label="Open Menu"
        >
          <GiMonkey className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col justify-center items-center space-y-8 font-yourfont">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className="text-center">
            {navItems.map((item) => (
              <li key={item.name} className="mb-6">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-3xl font-semibold hover:text-gray-300 transition-colors"
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
