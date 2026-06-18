import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({ children, color = 'var(--assembly-blue)', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-mono-sm inline-block px-3 py-1 rounded-full',
        className
      )}
      style={{
        backgroundColor: color + '18',
        color,
      }}
    >
      {children}
    </span>
  );
}
