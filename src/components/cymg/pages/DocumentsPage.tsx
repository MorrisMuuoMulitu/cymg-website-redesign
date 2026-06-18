

import { motion, useReducedMotion } from 'framer-motion'
import { FileText } from 'lucide-react'
import DocumentsSection from '@/components/cymg/DocumentsSection'

export default function DocumentsPage() {
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

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cymg-green/10 dark:bg-cymg-green/20">
                <FileText className="w-4 h-4 text-cymg-green dark:text-cymg-green-light" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light">
                Resources
              </p>
            </div>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              Documents &amp; Resources
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Policy papers, resolutions, reports, and declarations from CYMG and UNEA processes.
              Browse and filter to find what you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Documents Section Content ──────────────────────────────── */}
      <DocumentsSection />
    </motion.div>
  )
}
