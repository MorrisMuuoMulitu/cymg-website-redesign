

import { motion, useReducedMotion } from 'framer-motion'
import RegionsMap from '@/components/cymg/RegionsMap'

export default function RegionsPage() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0 }}
      animate={reducedMotion ? {} : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* ── Page Hero ──────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-paper dark:bg-ink overflow-hidden">
        {/* Decorative green bar */}
        <div
          className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-cymg-green dark:bg-cymg-green-light"
          aria-hidden="true"
        />

        {/* Subtle globe dots pattern — decorative */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 sm:w-64 md:w-80 opacity-[0.04] dark:opacity-[0.03]" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" className="text-ink dark:text-paper" />
            <ellipse cx="100" cy="100" rx="50" ry="90" stroke="currentColor" strokeWidth="0.5" className="text-ink dark:text-paper" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-ink dark:text-paper" />
            <ellipse cx="100" cy="100" rx="75" ry="90" stroke="currentColor" strokeWidth="0.3" className="text-ink dark:text-paper" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.3" className="text-ink dark:text-paper" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              Regions
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Global Regions
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Connecting youth across 6+ world regions and special liaison seats — from Africa to
              West Asia, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Regions Map Content ────────────────────────────────────── */}
      <RegionsMap />
    </motion.div>
  )
}
