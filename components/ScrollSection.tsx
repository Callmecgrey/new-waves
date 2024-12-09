// components/ScrollSection.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSection({ children, className }: ScrollSectionProps) {
  return (
    <motion.div
      className={cn(
        'min-h-screen flex items-center justify-center bg-black', 
        className
      )}
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        {children}
      </div>
    </motion.div>
  );
}
