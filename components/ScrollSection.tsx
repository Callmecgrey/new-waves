// components/ScrollSection.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react'; // Ensure this is the correct import as per Motion's documentation
import { cn } from '../lib/utils';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScrollSection({ children, className }: ScrollSectionProps) {
  return (
    <motion.div
      className={cn(
        'min-h-screen flex items-center justify-center bg-black', // Hardcoded black background
        className
      )}
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and shifted down by 50px
      whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y=0 when in view
      transition={{ duration: 0.8, ease: 'easeOut' }} // Transition settings
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the component is in view
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        {children}
      </div>
    </motion.div>
  );
}
