import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonCardProps {
  name: string;
  role: string;
  country: string;
  email: string;
  tags?: string[];
  isVacant?: boolean;
  className?: string;
}

export default function PersonCard({
  name,
  role,
  country,
  email,
  tags,
  isVacant,
  className,
}: PersonCardProps) {
  const initials = name
    .split(' ')
    .filter((w) => w.length > 1 && !w.startsWith('['))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <div
      className={cn('bg-paper border border-line overflow-hidden hover:border-[var(--cymg-green)] transition-colors', className)}
    >
      <div
        className="aspect-square flex items-center justify-center relative overflow-hidden"
        style={{
          background: isVacant
            ? 'var(--surface)'
            : 'linear-gradient(135deg, var(--cymg-green-dark) 0%, var(--cymg-green) 100%)',
        }}
      >
        {isVacant ? (
          <span className="text-xs uppercase tracking-[0.1em] text-[var(--ink-60)] font-medium">
            Vacant
          </span>
        ) : (
          <span className="font-display text-4xl md:text-5xl font-medium text-paper">
            {initials || '?'}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-display text-lg font-medium text-ink">
          {name}
        </h3>
        <p className="text-sm text-[var(--ink-60)] font-light">
          {role}
        </p>
        <p className="text-mono-sm text-[var(--ink-60)]">
          {country}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-mono-sm px-2 py-0.5 bg-surface text-ink"
                style={{ fontSize: '0.65rem' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {!isVacant && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-sm mt-1 text-[var(--cymg-green)] hover:text-[var(--cymg-green-deep)] transition-colors"
          >
            <Mail size={14} />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
