// components/ScrollSection.tsx

'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string; // New prop for background color
}

export function ScrollSection({
  children,
  className,
  backgroundColor = 'bg-black', // Default to black background
}: ScrollSectionProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        `min-h-screen flex items-center justify-center transition-opacity duration-1000 ${backgroundColor}`,
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        {children}
      </div>
    </div>
  );
}
