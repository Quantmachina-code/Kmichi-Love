import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-kimchi-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-kimchi-red text-white hover:bg-kimchi-red-dark active:scale-95':
              variant === 'primary',
            'bg-kimchi-black text-white hover:bg-gray-800 active:scale-95':
              variant === 'secondary',
            'border-2 border-kimchi-red text-kimchi-red hover:bg-kimchi-red hover:text-white active:scale-95':
              variant === 'outline',
            'text-kimchi-black hover:text-kimchi-red hover:bg-kimchi-cream':
              variant === 'ghost',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-base px-6 py-3': size === 'md',
            'text-lg px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
