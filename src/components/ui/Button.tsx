import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'outline' | 'amber';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl';

    const variants = {
      primary: 'bg-[var(--assembly-blue)] text-white hover:bg-[var(--assembly-blue-deep)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      secondary: 'bg-[#0A1128] text-white hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      amber: 'bg-[var(--signal-lime)] text-[#0A1128] hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      ghost: 'bg-transparent text-[var(--assembly-blue)] hover:bg-blue-50 dark:hover:bg-blue-900/20',
      outline: 'bg-transparent border-2 border-line dark:border-white/10 text-ink dark:text-paper hover:border-[var(--assembly-blue)] hover:text-[var(--assembly-blue)]',
      text: 'bg-transparent text-[var(--assembly-blue)] underline-offset-8 hover:underline px-0 py-0',
    };

    const sizes = {
      sm: 'text-[10px] px-4 py-2',
      md: 'text-xs px-6 py-3.5',
      lg: 'text-sm px-10 py-4.5',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
