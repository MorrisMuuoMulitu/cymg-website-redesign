import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({ children, color = 'var(--cymg-green)', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-mono-sm inline-block px-2.5 py-0.5',
        className
      )}
      style={{
        backgroundColor: color + '15',
        color,
      }}
    >
      {children}
    </span>
  );
}
