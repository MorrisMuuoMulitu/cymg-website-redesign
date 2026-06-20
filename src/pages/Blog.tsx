import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogTagFilters } from '@/data/blogPosts';
import { clusterColors } from '@/data/workingGroups';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Blog() {
  const [tagFilter, setTagFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      if (tagFilter !== 'all' && !post.tags.includes(tagFilter)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [tagFilter, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <div style={{ backgroundColor: 'var(--paper)' }}>
      <div className="pt-24 pb-16 px-6" style={{ backgroundColor: 'var(--ink)' }}>
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="text-h1 font-display font-bold mt-4" style={{ color: 'var(--paper)' }}>
            Policy Notes
          </h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24">
        {/* Featured Post */}
        <div className="mb-16">
          <span className="text-mono-label block mb-4" style={{ color: 'var(--ink-60)' }}>
            FEATURED
          </span>
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="block rounded-sm overflow-hidden group"
            style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--line)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Badge color={clusterColors.policy.color}>{featuredPost.tags[0]}</Badge>
                  <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                    {featuredPost.publishDate}
                  </span>
                </div>
                <h2 className="text-h2 font-display mb-4" style={{ color: 'var(--ink)' }}>
                  {featuredPost.title}
                </h2>
                <p className="text-body-lg mb-6" style={{ color: 'var(--ink-60)' }}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    {featuredPost.author.name}
                  </span>
                  <span style={{ color: 'var(--ink-60)' }}>·</span>
                  <span className="text-mono-sm" style={{ color: 'var(--ink-60)' }}>
                    {featuredPost.readTime} min read
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {blogTagFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setTagFilter(f.value)}
                className="text-mono-sm px-4 py-2 rounded-sm transition-all"
                style={{
                  backgroundColor: tagFilter === f.value ? 'var(--cymg-green)' : 'var(--surface)',
                  color: tagFilter === f.value ? 'var(--paper)' : 'var(--ink)',
                  border: tagFilter === f.value ? 'none' : '1px solid var(--line)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 max-w-sm px-4 py-2 rounded-sm text-sm outline-none"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--line)',
              color: 'var(--ink)',
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(1).map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.excerpt}
              image={post.featuredImage}
              href={`/blog/${post.slug}`}
              tag={post.tags[0]}
              tagColor={clusterColors.policy.color}
              date={`${post.readTime} min read · ${post.publishDate}`}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-body-lg" style={{ color: 'var(--ink-60)' }}>
              No posts match your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
