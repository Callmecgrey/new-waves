// components/ScrollSection.tsx

'use client';

import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSection({ children, className }: ScrollSectionProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex items-center justify-center bg-black', // Hardcoded black background
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        {children}
      </div>
    </div>
  );
}
