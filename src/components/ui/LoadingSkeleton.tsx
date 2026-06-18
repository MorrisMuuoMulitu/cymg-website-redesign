import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'page';
  count?: number;
  className?: string;
}

export default function LoadingSkeleton({ type = 'text', count = 1, className }: LoadingSkeletonProps) {
  if (type === 'page') {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full shimmer" />
          <div className="w-32 h-4 rounded shimmer" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'rounded-lg shimmer',
            type === 'card' ? 'h-48 w-full' : 'h-4',
            type === 'text' && i === 0 && 'w-3/4',
            type === 'text' && i === 1 && 'w-full',
            type === 'text' && i === 2 && 'w-5/6'
          )}
        />
      ))}
    </div>
  );
}
