import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/cymg-data'
import type { BlogPost } from '@/lib/cymg-data'
import { Link } from 'react-router-dom'

/* ------------------------------------------------------------------ */
/*  Tag pill                                                          */
/* ------------------------------------------------------------------ */

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
      <Tag size={12} />
      {tag}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Frontline Card                                                    */
/* ------------------------------------------------------------------ */

function FrontlineCard({
  post,
  index,
  reducedMotion,
}: {
  post: BlogPost
  index: number
  reducedMotion: boolean
}) {
  return (
    <motion.article
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-line dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Optional: Add image if available in data, else use a placeholder gradient */}
      <div className="aspect-video w-full bg-gradient-to-br from-blue-600 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
        <div className="absolute top-4 left-4 z-10">
          <TagPill tag={post.tags[0]} />
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 group-hover:text-[var(--assembly-blue)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="pt-6 border-t border-line dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <User size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-sm font-bold text-ink dark:text-paper">{post.author}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-sm font-bold text-[var(--assembly-blue)] hover:gap-2.5 transition-all"
          >
            Read Story
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/*  From the Frontlines Section                                       */
/* ------------------------------------------------------------------ */

export default function BlogPreview() {
  const reducedMotion = useReducedMotion()
  const latestPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="frontlines" className="py-24 bg-paper dark:bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-ink dark:text-paper tracking-tight mb-4">
              From the <span className="text-[var(--assembly-blue)]">Frontlines</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Discover the latest updates, field reports, and youth perspectives on global environmental governance.
            </p>
          </div>
          <Link
            to="/blog"
            className="btn-pill bg-[var(--assembly-blue)] text-white px-6 py-3 font-bold hover:bg-[var(--assembly-blue-deep)] shrink-0"
          >
            View All Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <FrontlineCard
              key={post.slug}
              post={post}
              index={i}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
