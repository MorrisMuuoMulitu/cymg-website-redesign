import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { clusterColors } from '@/data/workingGroups';
import Badge from '@/components/ui/Badge';
import NewsletterCTA from '@/components/ui/NewsletterCTA';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = post.relatedSlugs
    ?.map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) || [];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = encodeURIComponent(post.title);
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      {/* Hero */}
      <div className="pt-24 pb-12 px-6" style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-[900px] mx-auto">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm mt-4 mb-6 transition-opacity hover:opacity-70"
            style={{ color: 'var(--ink-60)' }}
          >
            <ArrowLeft size={16} /> All posts
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <Badge color={clusterColors.policy.color}>{post.tags[0]}</Badge>
            <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
              {post.publishDate}
            </span>
          </div>
          <h1 className="text-h1 font-display mb-6" style={{ color: 'var(--ink)' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-display text-sm font-bold"
              style={{ background: 'linear-gradient(135deg, #0B1220, #15257A)', color: 'var(--paper)' }}
            >
              {post.author.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                {post.author.name}
              </p>
              <p className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                {post.readTime} min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-12 md:py-16">
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full rounded-[20px] mb-10"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}

        <article
          className="prose prose-lg max-w-none"
          style={{ color: 'var(--ink)' }}
        >
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={i}
                  className="text-h2 font-display mt-12 mb-4"
                  style={{ color: 'var(--ink)' }}
                >
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter((l) => l.trim());
              return (
                <ul key={i} className="flex flex-col gap-2 my-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: 'var(--assembly-blue)' }} />
                      {item.replace(/^[-\d.]+\s*/, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-body-lg leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Share */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
          <p className="text-mono-label mb-3" style={{ color: 'var(--ink-60)' }}>
            SHARE THIS POST
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleShare('twitter')}
              className="p-3 rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
              aria-label="Share on X/Twitter"
            >
              <Twitter size={16} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-3 rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-3 rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)', color: 'var(--ink)' }}
              aria-label="Copy link"
            >
              <LinkIcon size={16} />
            </button>
          </div>
        </div>

        {/* Author */}
        {post.author.bio && (
          <div
            className="mt-12 rounded-[20px] p-6 flex items-start gap-4"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center font-display text-lg font-bold"
              style={{ background: 'linear-gradient(135deg, #0B1220, #15257A)', color: 'var(--paper)' }}
            >
              {post.author.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <div>
              <p className="font-display font-medium mb-1" style={{ color: 'var(--ink)' }}>
                {post.author.name}
              </p>
              <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                {post.author.bio}
              </p>
            </div>
          </div>
        )}

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-h3 font-display mb-6" style={{ color: 'var(--ink)' }}>
              Related Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => rp && (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="rounded-[20px] p-5 transition-shadow hover:shadow-md"
                  style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
                >
                  <p className="font-display font-medium mb-2" style={{ color: 'var(--ink)' }}>
                    {rp.title}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--ink-60)' }}>
                    {rp.excerpt.slice(0, 80)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-[900px] mx-auto px-6 pb-16">
        <NewsletterCTA />
      </div>
    </div>
  );
}
