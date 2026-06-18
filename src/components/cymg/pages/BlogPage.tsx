

import { motion, useReducedMotion } from 'framer-motion'
import BlogPreview from '@/components/cymg/BlogPreview'

export default function BlogPage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-ink dark:bg-[#0a0f1a] overflow-hidden">
        {/* Decorative green dot */}
        <div
          className="absolute bottom-8 left-8 sm:bottom-12 sm:left-16 w-2.5 h-2.5 rounded-full bg-cymg-green dark:bg-cymg-green-light"
          aria-hidden="true"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              Blog
            </p>
            <h1
              className="font-serif text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Stories &amp; Insights
            </h1>
            <p className="mt-4 sm:mt-5 text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Reports, analysis, and perspectives from CYMG — policy deep-dives, event recaps, and
              youth voices in environmental governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Blog Preview Content ───────────────────────────────────── */}
      <BlogPreview />
    </motion.div>
  )
}
