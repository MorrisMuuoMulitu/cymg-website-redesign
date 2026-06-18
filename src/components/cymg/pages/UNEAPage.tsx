

import { motion, useReducedMotion } from 'framer-motion'
import UNEASection from '@/components/cymg/UNEASection'
import MEAsSection from '@/components/cymg/MEAsSection'

export default function UNEAPage() {
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
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cymg-green dark:text-cymg-green-light mb-3">
              UNEA
            </p>
            <h1
              className="font-serif text-ink dark:text-paper leading-[1.1]"
              style={{
                fontSize: 'var(--text-h1)',
                fontVariationSettings: "'wght' 500, 'SOFT' 50, 'WONK' 1",
              }}
            >
              UNEA Hub
            </h1>
            <p className="mt-4 sm:mt-5 text-ink-60 dark:text-paper/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              Tracking youth participation across UNEA cycles and UNEP-administered Multilateral
              Environmental Agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── YEA 2025 Featured Image Card ───────────────────────────── */}
      <section className="bg-paper dark:bg-ink py-0">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-2 mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-[20px] overflow-hidden border border-line dark:border-white/10 shadow-lg"
          >
            <img
              src="/brand-yea2025.jpg"
              alt="Youth Environment Assembly 2025 — global youth convening ahead of UNEA-7"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-[360px] object-cover"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <span className="inline-block rounded-full bg-signal-lime text-ink px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  Upcoming
                </span>
                <h2
                  className="font-serif text-paper leading-tight text-xl sm:text-2xl md:text-3xl"
                  style={{
                    fontVariationSettings: "'wght' 600, 'SOFT' 50, 'WONK' 1",
                  }}
                >
                  Youth Environment Assembly 2025
                </h2>
                <p className="mt-1 sm:mt-2 text-paper/70 text-sm sm:text-base max-w-lg leading-relaxed">
                  The global youth convening ahead of UNEA-7 — shaping declarations, building
                  coalitions, and amplifying youth voices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── UNEA Content ───────────────────────────────────────────── */}
      <UNEASection />

      {/* ── MEAs Content ───────────────────────────────────────────── */}
      <MEAsSection />
    </motion.div>
  )
}
