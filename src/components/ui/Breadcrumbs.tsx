import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1320px] mx-auto px-6 py-4">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link
            to="/"
            className="text-mono-sm transition-opacity hover:opacity-70"
            style={{ color: 'var(--ink-60)' }}
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span style={{ color: 'var(--ink-60)' }}>/</span>
            {item.href ? (
              <Link
                to={item.href}
                className="text-mono-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--ink-60)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-mono-sm font-medium"
                style={{ color: 'var(--ink)' }}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
