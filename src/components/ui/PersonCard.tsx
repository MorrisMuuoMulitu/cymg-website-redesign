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
      className={cn('card-base overflow-hidden', className)}
    >
      <div
        className="aspect-square flex items-center justify-center relative overflow-hidden"
        style={{
          background: isVacant
            ? 'var(--line)'
            : 'linear-gradient(135deg, #0B1220 0%, #15257A 100%)',
        }}
      >
        {isVacant ? (
          <span className="text-mono-label" style={{ color: 'var(--ink-60)' }}>
            VACANT
          </span>
        ) : (
          <span
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: 'var(--paper)' }}
          >
            {initials || '?'}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-display text-lg font-medium" style={{ color: 'var(--ink)' }}>
          {name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
          {role}
        </p>
        <p className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
          {country}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-mono-sm px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'var(--line)',
                  color: 'var(--ink)',
                  fontSize: '0.65rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {!isVacant && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-sm mt-1 transition-opacity hover:opacity-70"
            style={{ color: 'var(--assembly-blue)' }}
          >
            <Mail size={14} />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
