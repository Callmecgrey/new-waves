import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
