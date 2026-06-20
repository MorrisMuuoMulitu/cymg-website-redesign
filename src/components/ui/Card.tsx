import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Badge from './Badge';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tag?: string;
  tagColor?: string;
  date?: string;
  className?: string;
  imagePosition?: 'top' | 'background';
}

export default function Card({
  title,
  description,
  image,
  href,
  tag,
  tagColor,
  date,
  className,
  imagePosition = 'top',
}: CardProps) {
  const content = (
    <div
      className={cn(
        'group cursor-pointer flex flex-col h-full bg-paper border border-line overflow-hidden hover:border-[var(--cymg-green)] transition-colors',
        imagePosition === 'background' && image && 'relative min-h-[320px] justify-end',
        className
      )}
    >
      {image && imagePosition === 'top' && (
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      {image && imagePosition === 'background' && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(18, 46, 30, 0.92) 100%)',
            }}
          />
        </>
      )}

      <div
        className={cn(
          'p-6 flex flex-col gap-3 flex-1',
          imagePosition === 'background' && 'relative z-10'
        )}
      >
        {(tag || date) && (
          <div className="flex items-center gap-3 flex-wrap">
            {tag && <Badge color={tagColor} className="border-none font-medium text-[10px] tracking-widest uppercase">{tag}</Badge>}
            {date && (
              <span className={cn(
                "text-[10px] font-medium uppercase tracking-widest",
                imagePosition === 'background' ? 'text-white/70' : 'text-[var(--ink-60)]'
              )}>
                {date}
              </span>
            )}
          </div>
        )}
        <h3
          className={cn(
            "text-lg font-medium leading-tight tracking-tight group-hover:text-[var(--cymg-green)] transition-colors",
            imagePosition === 'background' ? 'text-white' : 'text-ink'
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "text-sm leading-relaxed line-clamp-3 font-light",
              imagePosition === 'background' ? 'text-white/80' : 'text-[var(--ink-60)]'
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link to={href} className="block h-full">{content}</Link>;
  }
  return content;
}
