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
        'group cursor-pointer flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-line dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500',
        imagePosition === 'background' && image && 'relative min-h-[320px] justify-end',
        className
      )}
    >
      {image && imagePosition === 'top' && (
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        </div>
      )}
      
      {image && imagePosition === 'background' && (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(10,17,40,0.9) 100%)',
            }}
          />
        </>
      )}

      <div
        className={cn(
          'p-8 flex flex-col gap-3 flex-1',
          imagePosition === 'background' && 'relative z-10'
        )}
      >
        {(tag || date) && (
          <div className="flex items-center gap-3 flex-wrap">
            {tag && <Badge color={tagColor} className="border-none font-black text-[10px] tracking-widest uppercase">{tag}</Badge>}
            {date && (
              <span className={cn(
                "text-[10px] font-black uppercase tracking-widest",
                imagePosition === 'background' ? 'text-slate-400' : 'text-slate-500'
              )}>
                {date}
              </span>
            )}
          </div>
        )}
        <h3
          className={cn(
            "text-xl font-black leading-tight tracking-tight group-hover:text-[var(--assembly-blue)] transition-colors",
            imagePosition === 'background' ? 'text-white' : 'text-ink dark:text-paper'
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              "text-sm leading-relaxed line-clamp-3 font-medium",
              imagePosition === 'background' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
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
