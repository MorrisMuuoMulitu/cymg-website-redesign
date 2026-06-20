import { ArrowRight, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/cymg-data';
import type { BlogPost } from '@/lib/cymg-data';
import { Link } from 'react-router-dom';

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.05em] text-[var(--cymg-green)] font-medium">
      <Tag size={10} />
      {tag}
    </span>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-paper border border-line hover:border-[var(--cymg-green)] transition-colors overflow-hidden">
      <div className="aspect-video w-full bg-surface overflow-hidden">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-surface" />
        )}
      </div>

      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-[var(--ink-60)] mb-3">
          <TagPill tag={post.tags[0]} />
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime} min
          </span>
        </div>

        <time dateTime={post.date} className="text-[11px] text-[var(--ink-60)] mb-1">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>

        <h3 className="text-lg font-medium text-ink mb-2 group-hover:text-[var(--cymg-green)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--ink-60)] leading-relaxed font-light mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--cymg-green)] hover:text-[var(--cymg-green-deep)] transition-colors"
        >
          Read more
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPreview() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-paper border-b border-line">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[var(--cymg-green)]" />
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--cymg-green)] font-medium">Latest</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-ink leading-[1.2]">
              News, stories and perspectives
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-ink border border-line hover:border-[var(--cymg-green)] hover:text-[var(--cymg-green)] transition-colors shrink-0"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
