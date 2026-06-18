

import { motion, useReducedMotion } from 'framer-motion'
import WorkingGroups from '@/components/cymg/WorkingGroups'

export default function WorkingGroupsPage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-paper dark:bg-ink overflow-hidden">
        {/* Decorative dot cluster */}
        <div
          className="absolute top-8 right-8 sm:top-12 sm:right-16 w-3 h-3 rounded-full bg-clay/30 dark:bg-clay/20"
          aria-hidden="true"
        />
        <div
          className="absolute top-14 right-14 sm:top-20 sm:right-24 w-2 h-2 rounded-full bg-canopy-green/30 dark:bg-canopy-green/20"
          aria-hidden="true"
        />
        <div
          className="absolute top-10 right-20 sm:top-16 sm:right-32 w-1.5 h-1.5 rounded-full bg-assembly-blue/30 dark:bg-assembly-blue/20"
          aria-hidden="true"
        />

        {/* Left accent bar */}
        <div
          className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-cymg-green dark:bg-cymg-green-light"
          aria-hidden="true"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              Thematic Areas
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Working Groups
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              13 thematic areas across three clusters — pollution, nature, and policy — each led by
              youth focal points shaping global environmental governance.
            </p>

            {/* Cluster color key */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-60 dark:text-paper/50">
                <span className="w-2.5 h-2.5 rounded-full bg-clay shrink-0" aria-hidden="true" />
                Pollution
              </span>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-60 dark:text-paper/50">
                <span className="w-2.5 h-2.5 rounded-full bg-canopy-green shrink-0" aria-hidden="true" />
                Nature
              </span>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-60 dark:text-paper/50">
                <span className="w-2.5 h-2.5 rounded-full bg-assembly-blue shrink-0" aria-hidden="true" />
                Policy
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Working Groups Content ─────────────────────────────────── */}
      <WorkingGroups />
    </motion.div>
  )
}
